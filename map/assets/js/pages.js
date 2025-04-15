// Disable right-click context menu
document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
}, { passive: false });

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
        const response = await fetch('./markers.min.jsonc');
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
            artistsHtml += `
                    <div class="artist-container">
                        <h1 id="artistName">${artist.name}</h1>
                        <img src="./assets/img/artists/${artist.id}.webp" class="artist-image" alt="${artist.name}">
                        <p class="welsh-description">${artist.welshDescription}</p>
                        <p>${artist.englishDescription}</p>
                        <h3>${artist.contactInfo}</h3>
                        <h4>${artist.venueLocation}</h4>
                        <h5><b>${artist.welshLocationInstructions}</b>
                        <br>${artist.englishLocationInstructions}</h5>
                    </div>
                    `;
            // If there are multiple artists, add a separator between them except for the last one
            if (index < marker.artist.length - 1) {
                artistsHtml += '<hr>';
            }
        });

        document.getElementById('artist-data').innerHTML = artistsHtml;

        // Smooth scroll to h1
        smoothScroll("#artistName", 600);

    } catch (error) {
        console.error('Error loading artist data:', error);
        document.getElementById('artist-data').innerHTML = `
                    <div class="alert">
                        Error loading artist data: ${error.message}
                    </div>`;
    }
});

// Disable Zooming (touch and mouse wheel, but I want the user to be able to scroll the page)
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
            } else {
                window.location.hash = targetSelector;
            }
        }
        requestAnimationFrame(animation);
    }
}
