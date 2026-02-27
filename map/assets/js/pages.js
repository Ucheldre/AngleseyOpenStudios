// Disable right-click context menu
document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
}, { passive: false });

/* ─── Scroll-down button ─── */
function initScrollDownButton() {
    const btn = document.getElementById('scroll-down-btn');
    if (!btn) return;

    const THRESHOLD = 60;

    function getScrollTop() {
        return (document.scrollingElement || document.documentElement).scrollTop || window.pageYOffset || 0;
    }

    btn.addEventListener('click', function () {
        var el = document.scrollingElement || document.documentElement;
        el.scrollBy
            ? el.scrollBy({ top: window.innerHeight * 0.75, behavior: 'smooth' })
            : (el.scrollTop += window.innerHeight * 0.75);
    });

    function onScroll() {
        if (getScrollTop() > THRESHOLD) {
            btn.classList.add('hidden');
        } else {
            btn.classList.remove('hidden');
        }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('scroll', onScroll, { passive: true });
    
    // Initial check
    onScroll();
}

initScrollDownButton();

// SVG icons for info rows
const ICONS = {
    contact: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
    location: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
    directions: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>`
};

document.addEventListener('DOMContentLoaded', async function () {

    // Get the id from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    if (!id) {
        document.getElementById('artist-data').innerHTML = '<div class="alert">No artist ID specified</div>';
        return;
    }

    try {
        // Fetch the markers data
        const response = await fetch('./markers.jsonc');
        const text = await response.text();
        // Remove comments from the JSONC file
        const jsonText = text.replace(/\/\/.*$/gm, '');
        const data = JSON.parse(jsonText);

        // Find the marker with the matching ID
        const marker = data.find(marker => marker.id === id || marker.id === `${id}`);

        if (!marker) {
            document.getElementById('artist-data').innerHTML = `<div class="alert">Artist with ID ${id} not found</div>`;
            return;
        }

        // Get the document title from the first artist
        if (marker.artist && marker.artist.length > 0) {
            document.title = `${marker.id} | ${marker.artist[0].name}`;
            if (marker.artist.length > 1) {
                document.title = `${marker.id} | Multiple Artists`;
            }
        }

        let artistsHtml = '';

        // Loop through all artists in this marker
        marker.artist.forEach((artist, index) => {
            // Build notice banner if enabled for this artist
            let noticeHtml = '';
            if (artist.notice && artist.notice.enabled && (artist.notice.welshMessage || artist.notice.englishMessage)) {
                noticeHtml = `
                    <div class="notice-banner">
                        <span class="notice-icon">&#9888;</span>
                        <div class="notice-messages">
                            ${artist.notice.welshMessage ? `<p class="welsh-notice">${artist.notice.welshMessage}</p>` : ''}
                            ${artist.notice.englishMessage ? `<p class="english-notice">${artist.notice.englishMessage}</p>` : ''}
                        </div>
                    </div>`;
            }

            artistsHtml += `
                <article class="artist-card" style="animation-delay: ${index * 0.15}s">
                    <div class="artist-hero">
                        <img src="./assets/img/artists/${artist.id}.webp" alt="${artist.name}">
                    </div>
                    <div class="artist-body">
                        <h1 class="artist-name" ${index === 0 ? 'id="artistName"' : ''}>${artist.name}</h1>

                        ${noticeHtml}

                        <div class="description-section">
                            <span class="desc-label">Cymraeg</span>
                            <p class="desc-text desc-text-welsh">${artist.welshDescription}</p>
                        </div>

                        <div class="description-section">
                            <span class="desc-label">English</span>
                            <p class="desc-text">${artist.englishDescription}</p>
                        </div>

                        <hr class="section-divider">

                        <div class="info-section">
                            <div class="info-row">
                                <div class="info-icon contact">${ICONS.contact}</div>
                                <div class="info-content">
                                    <div class="info-label">Contact / Cysylltu</div>
                                    <div class="info-text">${artist.contactInfo}</div>
                                </div>
                            </div>

                            <div class="info-row">
                                <div class="info-icon location">${ICONS.location}</div>
                                <div class="info-content">
                                    <div class="info-label">Location / Lleoliad</div>
                                    <div class="info-text">${artist.venueLocation}</div>
                                </div>
                            </div>

                            <div class="info-row">
                                <div class="info-icon directions">${ICONS.directions}</div>
                                <div class="info-content">
                                    <div class="info-label">How to find me / Sut i ddod o hyd i mi</div>
                                    <div class="info-text">${artist.englishLocationInstructions}</div>
                                    <div class="info-text-welsh">${artist.welshLocationInstructions}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>`;
        });

        document.getElementById('artist-data').innerHTML = artistsHtml;
        
        // Trigger scroll check after content is loaded and rendered
        setTimeout(() => {
            window.dispatchEvent(new Event('scroll'));
        }, 100);

    } catch (error) {
        console.error('Error loading artist data:', error);
        document.getElementById('artist-data').innerHTML = `
            <div class="alert">
                Error loading artist data: ${error.message}
            </div>`;
    }
});

// Disable Zooming
document.addEventListener('wheel', function (event) {
    if (event.ctrlKey || event.metaKey) {
        event.preventDefault();
    }
}, { passive: false });

document.addEventListener('touchstart', function (event) {
    if (event.touches.length > 1) {
        event.preventDefault();
    }
}, { passive: false });

document.addEventListener('touchmove', function (event) {
    if (event.touches.length > 1) {
        event.preventDefault();
    }
}, { passive: false });

document.addEventListener('gesturestart', function (event) {
    event.preventDefault();
}, { passive: false });
document.addEventListener('gesturechange', function (event) {
    event.preventDefault();
}, { passive: false });
document.addEventListener('gestureend', function (event) {
    event.preventDefault();
}, { passive: false });

function smoothScroll(targetSelector, speed) {
    const targetElement = document.querySelector(targetSelector);
    if (targetElement) {
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / speed, 1);
            const easing = progress * (2 - progress);
            window.scrollTo(0, startPosition + distance * easing);
            if (progress < 1) {
                requestAnimationFrame(animation);
            }
        }
        requestAnimationFrame(animation);
    }
}
