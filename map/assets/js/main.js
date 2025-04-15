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

// Fetch and process markers from JSON
async function fetchMarkers() {
    try {
        const response = await fetch('./markers.min.jsonc');
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
        // urlencode the ID for the URL
        const encodedId = encodeURIComponent(markerData.id);
        // Store the feature with its metadata for click handling
        markerFeatures[feature.ol_uid] = {
            feature: feature,
            name: markerData.name,
            page: "./pages.html?id=" + encodedId,
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
        infoPageContent("Map Info", "./help.html");
    } else if (feature && markerFeatures[feature.ol_uid]) {
        const markerInfo = markerFeatures[feature.ol_uid];
        infoPageContent(markerInfo.name, markerInfo.page);
    }
});

function infoPageContent(name, url) {
    document.getElementById("infoPage").style.display = "block";
    document.getElementById("hideMap").style.display = "block";
    document.getElementById("infoPageContent").data = url;
    document.getElementById("infoPageContent").src = url;
    document.querySelector('#infoPageContent *').addEventListener("contextmenu", function(event) {
        event.preventDefault();
    });
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
    // if (navigator.onLine) {
    //     window.location = "https://hbidamian.github.io/AngleseyArtWeek/";
    // }
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