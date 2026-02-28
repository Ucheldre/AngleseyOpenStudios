function onResizeProc() {
    // Go to same page but not cached
    window.location.href = window.location.href.split('?')[0] + "?time=" + Date.now();
    window.history.pushState(null, null, window.location.href.split('?')[0]);
    window.location.reload(true);

}

// Get all the elements on the page
const allElements = document.querySelectorAll('*');

// Loop through all the elements and add the contextmenu event listener
allElements.forEach(element => {
  element.addEventListener('contextmenu', event => {
    event.preventDefault();
  });
});

// Disable all pointer events other than click/touch/drag. 
// This prevents accidental zooming on mobile devices.
document.addEventListener('wheel', function(event) {
  if (event.ctrlKey || event.metaKey) {
    event.preventDefault();
  }
}, { passive: false });

document.addEventListener('touchstart', function(event) {
    if (event.touches.length > 1) {
        event.preventDefault();
    }
    }
, { passive: false });

document.addEventListener('touchmove', function(event) {
    if (event.touches.length > 1) {
        event.preventDefault();
    }
    }
, { passive: false });

document.addEventListener('touchend', function(event) {
    if (event.touches.length > 1) {
        event.preventDefault();
    }
    }
, { passive: false });

document.addEventListener('touchcancel', function(event) {
    if (event.touches.length > 1) {
        event.preventDefault();
    }
    }
, { passive: false });


// Also listen for keydown events to catch ctrl+ and ctrl- zoom attempts
document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && (event.key === '+' || event.key === '-' || event.key === '=')) {
    // Allow only if focus is within the map
    if (!document.activeElement.closest('#map')) {
      event.preventDefault();
    }
  }
});

var interactions = new ol.interaction.defaults({
    altShiftDragRotate: true,
    pinchRotate: true,
});

var map = new ol.Map({
    target: 'map',
    controls: ol.control.defaults({
        attributionOptions: ({ collapsible: false })
    }).extend([
        new ol.control.ZoomSlider(),
        new ol.control.Zoom(),
        new ol.control.Rotate({
            autoHide: true,
            tipLabel: 'Reset rotation',
        }),
        new ol.control.ScaleLine()
    ]),
    interactions: interactions,
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM({
                attributions: [
                    'Maps © OpenStreetMap | Project © Canolfan Ucheldre Centre - Anglesey Arts Forum',
                ],
            })
        })
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([-4.3808, 53.2845]),
        zoom: 11,
        maxZoom: 18
    })
});

var myExtent = map.getView().calculateExtent(map.getSize());
map.setView(
    new ol.View({
        center: ol.proj.fromLonLat([-4.3808, 53.2845]),
        extent: myExtent,
        zoom: 11,
        maxZoom: 18
    })
);

// Add the info button
var mapinfoButton = new ol.layer.Vector({
    source: new ol.source.Vector(),
    style: new ol.style.Style({
        image: new ol.style.Icon({
            src: './assets/img/help.png?time=' + Date.now(),
        })
    })
});
map.addLayer(mapinfoButton);

var mapinfo = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.1865175, 53.3731612]))
});
mapinfoButton.getSource().addFeature(mapinfo);
// Create vector layer for markers
var markers = new ol.layer.Vector({
    source: new ol.source.Vector(),
    style: new ol.style.Style({
        image: new ol.style.Icon({
            anchor: [0.5, 0.9],
            src: './assets/img/markers/marker.png?time=' + Date.now(),
        })
    })
});
map.addLayer(markers);

// Store marker features for click handling
var markerFeatures = {};
var markersDataCache = [];

// SVG icons for info rows
const ICONS = {
    contact: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
    location: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
    directions: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>`
};

// Fetch and process markers from JSON
async function fetchMarkers() {
    try {
        const response = await fetch('./markers.jsonc');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const text = await response.text();
        const jsonString = text.replace(/\/\/.*$/gm, '').replace(/\/\*[\s\S]*?\*\//g, '').trim();
        return JSON.parse(jsonString);
    } catch (error) {
        console.error('Error loading markers data:', error);
        toastr.error('Failed to load markers data: ' + error.message);
        return [];
    }
}

fetchMarkers().then(markersData => {
    markersDataCache = markersData;

    markersData.forEach(markerData => {
        // Create feature
        const feature = new ol.Feature({
            geometry: new ol.geom.Point(ol.proj.fromLonLat([markerData.longitude, markerData.latitude]))
        });
        
        // Add feature to source
        markers.getSource().addFeature(feature);
        
        // Create and add label overlay
        const labelElement = document.createElement('div');
        labelElement.style.position = 'absolute';
        labelElement.style.transform = 'translate(-50%, 0)'; // Center horizontally
        labelElement.style.whiteSpace = 'nowrap'; // Prevent wrapping
        labelElement.innerHTML = markerData.id.replace(/&/g, ' & ').replace(/to/g, ' to ');
        
        const labelOverlay = new ol.Overlay({
            position: ol.proj.fromLonLat([markerData.longitude, markerData.latitude]),
            element: labelElement,
            offset: [0, 5], // Adjust vertical offset if needed
            positioning: 'bottom-center'
        });
        
        map.addOverlay(labelOverlay);
        // Store the feature with its metadata for click handling
        markerFeatures[feature.ol_uid] = {
            feature: feature,
            name: markerData.name,
            id: markerData.id,
        };
    });
});

// Handle clicks on the map
map.on('click', function(evt) {
    const feature = map.forEachFeatureAtPixel(evt.pixel,
        function(feature) {
            return feature;
        });
    
    if (feature === mapinfo) {
        showHelpPage();
    } else if (feature && markerFeatures[feature.ol_uid]) {
        const markerInfo = markerFeatures[feature.ol_uid];
        showArtistPage(markerInfo.id);
    }
});

/* ─── Scroll-down button logic for infoPageContent ─── */
function initScrollButton() {
    const container = document.getElementById('infoPageContent');
    const btn = container.querySelector('#scroll-down-btn');
    if (!btn || !container) return;

    const THRESHOLD = 60;

    btn.addEventListener('click', function () {
        container.scrollBy({ top: container.clientHeight * 0.75, behavior: 'smooth' });
    });

    function onScroll() {
        if (container.scrollTop > THRESHOLD) {
            btn.classList.add('hidden');
        } else {
            btn.classList.remove('hidden');
        }
    }

    container.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
}

/* ─── Render Artist Page ─── */
function showArtistPage(id) {
    const marker = markersDataCache.find(m => m.id === id || m.id === `${id}`);
    if (!marker) {
        openInfoPage('<div class="alert">Artist with ID ' + id + ' not found</div>');
        return;
    }

    let artistsHtml = '';
    marker.artist.forEach((artist, index) => {
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

    const html = `
        <div id="artist-data">${artistsHtml}</div>
        <button id="scroll-down-btn" aria-label="Scroll down">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
            Scroll down
        </button>`;

    openInfoPage(html);
}

/* ─── Render Help Page ─── */
function showHelpPage() {
    const html = `
        <div id="help-map-full">
            <div id="help-map-heading">
                <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                <div class="help-heading-text">
                    <h1 class="help-title">How to use the map</h1>
                    <p class="help-subtitle">Sut i ddefnyddio'r map</p>
                </div>
            </div>
            <img src="./assets/img/infoMap1.png" alt="Map marker guide">
        </div>

        <div id="help-page">
            <div class="help-cards">
                <div class="help-card">
                    <div class="help-card-header">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6M9 12h6M9 15h4"/></svg>
                        <span>Artist Pages / Tudalennau Artist</span>
                    </div>
                    <p class="help-card-caption">Tap a numbered marker on the map to open the artist's information page.</p>
                    <p class="help-card-caption help-card-caption-welsh">Tapiwch farcwr rhifol ar y map i agor tudalen gwybodaeth yr artist.</p>
                </div>
            </div>

            <div class="help-tips">
                <div class="help-tip">
                    <span class="help-tip-icon">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg>
                    </span>
                    <div>
                        <strong>Pinch to zoom</strong> the map to explore different areas of Anglesey.
                        <span class="tip-welsh">Pinsiwch i chwyddo'r map i archwilio ardaloedd gwahanol o F&#244;n.</span>
                    </div>
                </div>
                <div class="help-tip">
                    <span class="help-tip-icon">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>
                    </span>
                    <div>
                        <strong>Close any panel</strong> using the &#x2715; button in the top-right corner.
                        <span class="tip-welsh">Caewch unrhyw banel gan ddefnyddio'r botwm &#x2715; yn y gornel dde uchaf.</span>
                    </div>
                </div>
            </div>
        </div>

        <button id="scroll-down-btn" aria-label="Scroll down">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
            Scroll down
        </button>`;

    openInfoPage(html);
}

/* ─── Open / Close info panel ─── */
function openInfoPage(html) {
    const content = document.getElementById("infoPageContent");
    content.innerHTML = html;
    content.scrollTop = 0;
    document.getElementById("infoPage").style.display = "block";
    document.getElementById("hideMap").style.display = "block";
    initScrollButton();
}

function infoPageContent(name, url) {
    // Legacy compat — not used anymore but kept in case
    openInfoPage('<div class="loading"><p>Loading...</p></div>');
}

let idleTimer; // global variable to store the idle timer
// add event listeners for mouse and keyboard events
document.addEventListener("mousemove", resetIdleTimer);
document.addEventListener("keypress", resetIdleTimer);
document.addEventListener("touchstart", resetIdleTimer);
document.addEventListener("touchmove", resetIdleTimer);
document.addEventListener("touchend", resetIdleTimer);
document.addEventListener("touchcancel", resetIdleTimer);
document.addEventListener("wheel", resetIdleTimer);
document.addEventListener("scroll", resetIdleTimer);
document.addEventListener("mousedown", resetIdleTimer);
document.addEventListener("click", resetIdleTimer);

// start the idle timer when the page loads
resetIdleTimer();

function resetIdleTimer() {
    // reset the idle timer
    clearTimeout(idleTimer);
    idleTimer = setTimeout(function() {
        window.location.href = "../index.html?time=" + Date.now();
    }, 180000); // 3 minutes in milliseconds
}

var hideMap = document.getElementById("hideMap");
document.addEventListener("click", function(event) {
    if (hideMap == event.target && hideMap.contains(event.target)) {
        closeInfoPage();
    }
});

closeInfoPage = function() {
    document.getElementById("infoPage").style.display = "none";
    document.getElementById("hideMap").style.display = "none";
    document.getElementById("infoPageContent").innerHTML = "";
}

toastr.options = {
    "closeButton": false,
    "debug": false,
    "newestOnTop": true,
    "progressBar": true,
    "positionClass": "toast-top-right",
    "preventDuplicates": true,
    "onclick": null,
    "showDuration": "10000",
    "hideDuration": "10000",
    "timeOut": "10000",
    "extendedTimeOut": "5000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
}

var offlineInterval;
window.addEventListener('offline', () => {
    toastr.error('You are offline!');
    if (!offlineInterval) {
        offlineInterval = setInterval(() => {
            toastr.error('You are offline!');
        }, 5000);
    }
});

window.addEventListener('online', () => {
    clearInterval(offlineInterval);
    offlineInterval = null;
    toastr.success('You are back online!');
});