document.addEventListener('contextmenu', event => event.preventDefault());

var interactions = new ol.interaction.defaults({
    altShiftDragRotate: false,
    pinchRotate: false
});
var map = new ol.Map({
    target: 'map',
    controls: ol.control.defaults({
        attributionOptions: ({ collapsible: false })
    }).extend([
        new ol.control.ZoomSlider(),
        new ol.control.ScaleLine()
    ]),
    interactions: interactions,
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM({
                attributions: [
                    'Maps © OpenStreetMap | Project © Damian Hall-Beal for Canolfan Ucheldre Centre',
                ],
            })
        })
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([-4.3808, 53.2845]),
        zoom: 11,
        maxZoom: 17
    })

});
var myExtent = map.getView().calculateExtent(map.getSize());
map.setView(
    new ol.View({
        center: ol.proj.fromLonLat([-4.3808, 53.2845]),
        extent: myExtent,
        zoom: 11,
        maxZoom: 17
    })
);

var mapinfoButton = new ol.layer.Vector({
    source: new ol.source.Vector(),
    style: new ol.style.Style({
        image: new ol.style.Icon({
            // anchor: [0.5, 1],
            src: 'help.png?time=' + Date.now()
        })
    })
});
map.addLayer(mapinfoButton);

var mapinfo = new ol.Feature({
    // 53.37316124330884, -4.186517540192782
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.1865175, 53.3731612]))
});
mapinfoButton.getSource().addFeature(mapinfo);

var markers = new ol.layer.Vector({
    source: new ol.source.Vector(),
    style: new ol.style.Style({
        image: new ol.style.Icon({
            anchor: [0.5, 1],
            src: 'marker.webp?time=' + Date.now()
        })
    })
});
map.addLayer(markers);

// Siw Thomas
var marker1 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.162571, 53.2266292]))
});
markers.getSource().addFeature(marker1);

// Jane Evans
var marker2 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.16402, 53.23034]))
});
markers.getSource().addFeature(marker2);

// Retallick + Aston
var marker3 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.168563, 53.231059]))
});
markers.getSource().addFeature(marker3);

// Gwenllian Vaughan
var marker4 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.140323, 53.249487]))
});
markers.getSource().addFeature(marker4);

// Gorgina Rambton
var marker5 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.095228, 53.264392]))
});
markers.getSource().addFeature(marker5);

// Beaumaris Jewellery
var marker6 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.091698, 53.263416]))
});
markers.getSource().addFeature(marker6);

// David Jones
var marker7 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.093181, 53.264629]))
});
markers.getSource().addFeature(marker7);

// Canolfan David Hughes
var marker8 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.091464, 53.264482]))
});
markers.getSource().addFeature(marker8);

// Jon Fairbairn
var marker9 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.09254, 53.26335]))
});
markers.getSource().addFeature(marker9);

// Mary Jane Flower
var marker10 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.093042, 53.2637819]))
});
markers.getSource().addFeature(marker10);

// Sally Fairclough
var marker11 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.093965, 53.263105]))
});
markers.getSource().addFeature(marker11);

// Ian Walton
var marker12 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.09155, 53.26338]))
});
markers.getSource().addFeature(marker12);

// The Bulkeley Gallery
// H’artworks (Anne Snaith)
var marker13and14 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.09795, 53.29374]))
});
markers.getSource().addFeature(marker13and14);

// Janet Bell
var marker15 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.092880, 53.264136]))
});
markers.getSource().addFeature(marker15);

// Peter Read
var marker16 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.094942, 53.305352]))
});
markers.getSource().addFeature(marker16);

// Aberlleiniog Sculpture
var marker17 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.086370, 53.295598]))
});
markers.getSource().addFeature(marker17);

// Plas Bodfa Projects
var marker18 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.06670, 53.30234]))
});
markers.getSource().addFeature(marker18);

// Vel Gem Hughes
var marker19 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.080688, 53.295872]))
});
markers.getSource().addFeature(marker19);

// Jane Bunce
var marker20 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.07033, 53.30595]))
});
markers.getSource().addFeature(marker20);

// Callahan Creative
var marker21 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.070312, 53.305774]))
});
markers.getSource().addFeature(marker21);

// Red Studio
var marker22 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.175577, 53.228296]))
});
markers.getSource().addFeature(marker22);

// Rhiannon + Paul Gash
var marker23 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.149926, 53.301122]))
});

// Jenet Peers
var marker24 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.24034, 53.29958]))
});
markers.getSource().addFeature(marker24);

// Judith + William Moss
var marker25 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.239689, 53.3035958]))
});
markers.getSource().addFeature(marker25);

// Kathy Wedge
var marker26 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.2162385, 53.302642]))
});
markers.getSource().addFeature(marker26);

// Jenny Armour
var marker27 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.246493, 53.324557]))
});
markers.getSource().addFeature(marker27);

// Faye Trevelyan
var marker28 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.434276, 53.307543]))
});
markers.getSource().addFeature(marker28);

// Beth Owen Williams
var marker29 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.317657, 53.386667]))
});
markers.getSource().addFeature(marker29);

// Oriel Amlwch
var marker30 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.344416, 53.409602]))
});
markers.getSource().addFeature(marker30);

// Artisan Studio
var marker31 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.3458, 53.4103]))
});
markers.getSource().addFeature(marker31);

// David Weaver
var marker32 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.47081, 53.40776]))
});
markers.getSource().addFeature(marker32);

// Caffi Siop Mechell
var marker33 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.45384, 53.39248]))
});
markers.getSource().addFeature(marker33);

// Wendy Vidler
var marker34 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.50562, 53.40279]))
});
markers.getSource().addFeature(marker34);

// Bay Tree Gallery
var marker35 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.56224, 53.28164]))
});
markers.getSource().addFeature(marker35);

// Bryn Humphreys
var marker36 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.64391, 53.31576]))
});
markers.getSource().addFeature(marker36);

// Wispy Willow Creations
var marker37 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.65885, 53.31043]))
});
markers.getSource().addFeature(marker37);

// Ucheldre Centre
// Peter Alexander Lane
var marker38and39 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.63856, 53.30944]))
});
markers.getSource().addFeature(marker38and39);

// Janey Masters
var marker40 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.63549, 53.30447]))
});
markers.getSource().addFeature(marker40);

// Trearddur Bay Art
var marker41 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.623130, 53.285876]))
});
markers.getSource().addFeature(marker41);

// Anwen Roberts
var marker42 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.59922, 53.27128]))
});
markers.getSource().addFeature(marker42);

// Huw Gareth Jones
var marker43 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.58591, 53.24295]))
});
markers.getSource().addFeature(marker43);

// Jayne Huskisson
var marker44 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.441701, 53.242515]))
});
markers.getSource().addFeature(marker44);

// Judith Donaghy
var marker45 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.49433, 53.22884]))
});
markers.getSource().addFeature(marker45);

// Jane Samuel
// (approx location)
var marker46 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.52227, 53.22654]))
});
markers.getSource().addFeature(marker46);

// Liz Toole
var marker47 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.404962, 53.195954]))
});
markers.getSource().addFeature(marker47);

// Tal Y Sarn Farm
var marker48 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.334261, 53.165656]))
});
markers.getSource().addFeature(marker48);

// Craig Taylor
var marker49 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.329565, 53.190609]))
});
markers.getSource().addFeature(marker49);

// Wanda & David Garner
// (approx location)
var marker50 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.28032, 53.17999]))
});
markers.getSource().addFeature(marker50);

// Carole Randall
// (approx location)
var marker51 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.202341, 53.216938]))
});
markers.getSource().addFeature(marker51);

// Oriel Mon
var marker52 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.31203, 53.26343]))
});
markers.getSource().addFeature(marker52);


map.on('click', function(evt) {
    var feature = map.forEachFeatureAtPixel(evt.pixel,
        function(feature) {
            return feature;
        });
    if (feature == mapinfo) {
        infoPageContent("Map Info", "./pages/help.html");
    } else if (feature == marker1) {
        infoPageContent("Siw Thomas", "./pages/1.html");
    } else if (feature == marker2) {
        infoPageContent("Jane Evans", "./pages/2.html");
    } else if (feature == marker3) {
        infoPageContent("etallick + Aston", "./pages/3.html");
    } else if (feature == marker4) {
        infoPageContent("Gwenllian Vaughan", "./pages/4.html");
    } else if (feature == marker5) {
        infoPageContent("Gorgina Rambton", "./pages/5.html");
    } else if (feature == marker6) {
        infoPageContent("Beaumaris Jewellery", "./pages/6.html");
    } else if (feature == marker7) {
        infoPageContent("David Jones", "./pages/7.html");
    } else if (feature == marker8) {
        infoPageContent("Canolfan David Hughes", "./pages/8.html");
    } else if (feature == marker9) {
        infoPageContent("Jon Fairbairn", "./pages/9.html");
    } else if (feature == marker10) {
        infoPageContent("Mary Jane Flower", "./pages/10.html");
    } else if (feature == marker11) {
        infoPageContent("Sally Fairclough", "./pages/11.html");
    } else if (feature == marker12) {
        infoPageContent("Ian Walton", "./pages/12.html");
    } else if (feature == marker13and14) {
        infoPageContent("The Bulkeley Gallery & Hartworks (Anne Smith)", "./pages/13and14.html");
    } else if (feature == marker15) {
        infoPageContent("Janet Bell", "./pages/15.html");
    } else if (feature == marker16) {
        infoPageContent("Peter Reed", "./pages/16.html");
    } else if (feature == marker17) {
        infoPageContent("Aberlleiniog Sculpture", "./pages/17.html");
    } else if (feature == marker18) {
        infoPageContent("Plas Bodfa Projects", "./pages/18.html");
    } else if (feature == marker19) {
        infoPageContent("Val Gem Hughes", "./pages/19.html");
    } else if (feature == marker20) {
        infoPageContent("Jane Bunce", "./pages/20.html");
    } else if (feature == marker21) {
        infoPageContent("Callaghan Creative", "./pages/21.html");
    } else if (feature == marker22) {
        infoPageContent("Red Studio", "./pages/22.html");
    } else if (feature == marker23) {
        infoPageContent("Rhiannon + Paul Gash", "./pages/23.html");
    } else if (feature == marker24) {
        infoPageContent("Jenet Peers", "./pages/24.html");
    } else if (feature == marker25) {
        infoPageContent("Judith + William Moss", "./pages/25.html");
    } else if (feature == marker26) {
        infoPageContent("Kathy Wedge", "./pages/26.html");
    } else if (feature == marker27) {
        infoPageContent("Jenny Armour", "./pages/27.html");
    } else if (feature == marker28) {
        infoPageContent("Faye Trevelyan", "./pages/28.html");
    } else if (feature == marker29) {
        infoPageContent("Beth Owen Williams", "./pages/29.html");
    } else if (feature == marker30) {
        infoPageContent("Oriel Amlwch", "./pages/30.html");
    } else if (feature == marker31) {
        infoPageContent("Artisan Studio", "./pages/31.html");
    } else if (feature == marker32) {
        infoPageContent("David Weaver", "./pages/32.html");
    } else if (feature == marker33) {
        infoPageContent("Caffi Siop Mechell", "./pages/33.html");
    } else if (feature == marker34) {
        infoPageContent("Wendy Vidler", "./pages/34.html");
    } else if (feature == marker35) {
        infoPageContent("Bay Tree Gallery", "./pages/35.html");
    } else if (feature == marker36) {
        infoPageContent("Bryn Humphreys", "./pages/36.html");
    } else if (feature == marker37) {
        infoPageContent("Wispy Willow Creations", "./pages/37.html");
    } else if (feature == marker38and39) {
        infoPageContent("Canolfan Ucheldre", "./pages/38and39.html");
    } else if (feature == marker40) {
        infoPageContent("Janey Masters", "./pages/40.html");
    } else if (feature == marker41) {
        infoPageContent("Trearddur Bay Art", "./pages/41.html");
    } else if (feature == marker42) {
        infoPageContent("Anwen Roberts", "./pages/42.html");
    } else if (feature == marker43) {
        infoPageContent("Huw Gareth Jones", "./pages/43.html");
    } else if (feature == marker44) {
        infoPageContent("Jayne Huskisson", "./pages/44.html");
    } else if (feature == marker45) {
        infoPageContent("Judith Donaghy", "./pages/45.html");
    } else if (feature == marker46) {
        infoPageContent("Jane Samuel", "./pages/46.html");
    } else if (feature == marker47) {
        infoPageContent("Liz Toole", "./pages/47.html");
    } else if (feature == marker48) {
        infoPageContent("Tal Y Sarn Farm", "./pages/48.html");
    } else if (feature == marker49) {
        infoPageContent("Craig Taylor", "./pages/49.html");
    } else if (feature == marker50) {
        infoPageContent("Wanda & David Garner", "./pages/50.html");
    } else if (feature == marker51) {
        infoPageContent("Carole Randall", "./pages/51.html");
    } else if (feature == marker52) {
        infoPageContent("Oriel Mon", "./pages/52.html");
    }
});


function infoPageContent(name, url) {

    // document.getElementById("infoPageHeading").innerHTML = name;

    document.getElementById("infoPage").style.display = "block";
    document.getElementById("hideMap").style.display = "block";
    document.getElementById("infoPageContent").data = url;
    document.getElementById("infoPageContent").src = url;
    document.querySelector('#infoPageContent *').addEventListener("contextmenu", function(event) {
        event.preventDefault();
    });

}

var idleTime = 0;
$(document).ready(function() {
    // Increment the idle time counter every minute.
    var idleInterval = setInterval(timerIncrement, 60000); // 1 minute

    // Zero the idle timer on mouse movement.
    $(this).mousemove(function(e) {
        idleTime = 0;
    });
    $(this).keypress(function(e) {
        idleTime = 0;
    });
    map.on('moveend', function(evt) {
        idleTime = 0;
    });
});

function timerIncrement() {
    idleTime = idleTime + 1;
    // if (document.getElementById("infoPage").style.display == "block") {
    if (idleTime > 0) { // if idle for more than one minute, then close the info page
        closeInfoPage();
        idleTime = 0;
    }
    // }
}
var hideMap = document.getElementById("hideMap");
document.addEventListener("click", function(event) {
    if (hideMap == event.target && hideMap.contains(event.target)) {
        closeInfoPage();
    }
});

closeInfoPage = function() {
    if (navigator.onLine) {
        window.location = "https://hbidamian.github.io/AngleseyArtWeek/";
    }
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