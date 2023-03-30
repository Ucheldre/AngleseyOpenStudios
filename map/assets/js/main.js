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
var label1 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.162571, 53.2266292]),
    element: document.createElement('div'),
    offset: [-6, 5],
    positioning: 'center-left'
});
label1.getElement().innerHTML = '1';
map.addOverlay(label1);

// Jane Evans
var marker2 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.16402, 53.23034]))
});
markers.getSource().addFeature(marker2);
var label2 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.16402, 53.23034]),
    element: document.createElement('div'),
    offset: [-6, 5],
    positioning: 'center-left'
});
label2.getElement().innerHTML = '2';
map.addOverlay(label2);

// Retallick + Aston
var marker3 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.168563, 53.231059]))
});
markers.getSource().addFeature(marker3);
var label3 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.168563, 53.231059]),
    element: document.createElement('div'),
    offset: [-6, 5],
    positioning: 'center-left'
});
label3.getElement().innerHTML = '3';
map.addOverlay(label3);

// Gwenllian Vaughan
var marker4 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.140323, 53.249487]))
});
markers.getSource().addFeature(marker4);
var label4 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.140323, 53.249487]),
    element: document.createElement('div'),
    offset: [-6, 5],
    positioning: 'center-left'
});
label4.getElement().innerHTML = '4';
map.addOverlay(label4);

// Gorgina Rambton
var marker5 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.095228, 53.264392]))
});
markers.getSource().addFeature(marker5);
var label5 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.095228, 53.264392]),
    element: document.createElement('div'),
    offset: [-6, 5],
    positioning: 'center-left'
});
label5.getElement().innerHTML = '5';
map.addOverlay(label5);

// Beaumaris Jewellery
var marker6 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.091698, 53.263416]))
});
markers.getSource().addFeature(marker6);
var label6 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.091698, 53.263416]),
    element: document.createElement('div'),
    offset: [-6, 5],
    positioning: 'center-left'
});
label6.getElement().innerHTML = '6';
map.addOverlay(label6);

// David Jones
var marker7 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.093181, 53.264629]))
});
markers.getSource().addFeature(marker7);
var label7 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.093181, 53.264629]),
    element: document.createElement('div'),
    offset: [-6, 5],
    positioning: 'center-left'
});
label7.getElement().innerHTML = '7';
map.addOverlay(label7);

// Canolfan David Hughes
var marker8 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.091464, 53.264482]))
});
markers.getSource().addFeature(marker8);
var label8 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.091464, 53.264482]),
    element: document.createElement('div'),
    offset: [-6, 5],
    positioning: 'center-left'
});
label8.getElement().innerHTML = '8';
map.addOverlay(label8);

// Jon Fairbairn
var marker9 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.09254, 53.26335]))
});
markers.getSource().addFeature(marker9);
var label9 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.09254, 53.26335]),
    element: document.createElement('div'),
    offset: [-6, 5],
    positioning: 'center-left'
});
label9.getElement().innerHTML = '9';
map.addOverlay(label9);

// Mary Jane Flower
var marker10 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.093042, 53.2637819]))
});
markers.getSource().addFeature(marker10);
var label10 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.093042, 53.2637819]),
    element: document.createElement('div'),
    offset: [-8, 5],
    positioning: 'center-left'
});
label10.getElement().innerHTML = '10';
map.addOverlay(label10);

// Sally Fairclough
var marker11 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.093965, 53.263105]))
});
markers.getSource().addFeature(marker11);
var label11 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.093965, 53.263105]),
    element: document.createElement('div'),
    offset: [-8, 5],
    positioning: 'center-left'
});
label11.getElement().innerHTML = '11';
map.addOverlay(label11);

// Ian Walton
var marker12 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.09155, 53.26338]))
});
markers.getSource().addFeature(marker12);
var label12 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.09155, 53.26338]),
    element: document.createElement('div'),
    offset: [-8, 5],
    positioning: 'center-left'
});
label12.getElement().innerHTML = '12';
map.addOverlay(label12);

// The Bulkeley Gallery
// H’artworks (Anne Snaith)
var marker13and14 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.09795, 53.29374]))
});
markers.getSource().addFeature(marker13and14);
var label13and14 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.09795, 53.29374]),
    element: document.createElement('div'),
    offset: [-8, 5],
    positioning: 'center-left'
});
label13and14.getElement().innerHTML = '13 & 14';
map.addOverlay(label13and14);

// Janet Bell
var marker15 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.092880, 53.264136]))
});
markers.getSource().addFeature(marker15);
var label15 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.092880, 53.264136]),
    element: document.createElement('div'),
    offset: [-8, 5],
    positioning: 'center-left'
});
label15.getElement().innerHTML = '15';
map.addOverlay(label15);

// Peter Read
var marker16 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.094942, 53.305352]))
});
markers.getSource().addFeature(marker16);
var label16 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.094942, 53.305352]),
    element: document.createElement('div'),
    offset: [-8, 5],
    positioning: 'center-left'
});
label16.getElement().innerHTML = '16';
map.addOverlay(label16);

// Aberlleiniog Sculpture
var marker17 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.086370, 53.295598]))
});
markers.getSource().addFeature(marker17);
var label17 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.086370, 53.295598]),
    element: document.createElement('div'),
    offset: [-8, 5],
    positioning: 'center-left'
});
label17.getElement().innerHTML = '17';
map.addOverlay(label17);

// Plas Bodfa Projects
var marker18 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.06670, 53.30234]))
});
markers.getSource().addFeature(marker18);
var label18 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.06670, 53.30234]),
    element: document.createElement('div'),
    offset: [-8, 5],
    positioning: 'center-left'
});
label18.getElement().innerHTML = '18';
map.addOverlay(label18);

// Vel Gem Hughes
var marker19 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.080688, 53.295872]))
});
markers.getSource().addFeature(marker19);
var label19 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.080688, 53.295872]),
    element: document.createElement('div'),
    offset: [-8, 5],
    positioning: 'center-left'
});
label19.getElement().innerHTML = '19';
map.addOverlay(label19);

// Jane Bunce
var marker20 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.07033, 53.30595]))
});
markers.getSource().addFeature(marker20);
var label20 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.07033, 53.30595]),
    element: document.createElement('div'),
    offset: [-8, 5],
    positioning: 'center-left'
});
label20.getElement().innerHTML = '20';
map.addOverlay(label20);

// Callahan Creative
var marker21 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.070312, 53.305774]))
});
markers.getSource().addFeature(marker21);
var label21 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.070312, 53.305774]),
    element: document.createElement('div'),
    offset: [-8, 5],
    positioning: 'center-left'
});
label21.getElement().innerHTML = '21';
map.addOverlay(label21);

// Red Studio
var marker22 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.175577, 53.228296]))
});
markers.getSource().addFeature(marker22);
var label22 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.175577, 53.228296]),
    element: document.createElement('div'),
    offset: [-8, 5],
    positioning: 'center-left'
});
label22.getElement().innerHTML = '22';
map.addOverlay(label22);


// Rhiannon + Paul Gash
var marker23 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.149926, 53.301122]))
});
markers.getSource().addFeature(marker23);
var label23 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.149926, 53.301122]),
    element: document.createElement('div'),
    offset: [-8, 5],
    positioning: 'center-left'
});
label23.getElement().innerHTML = '23';
map.addOverlay(label23);

// Jenet Peers
var marker24 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.24034, 53.29958]))
});
markers.getSource().addFeature(marker24);
var label24 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.24034, 53.29958]),
    element: document.createElement('div'),
    offset: [-8, 5],
    positioning: 'center-left'
});
label24.getElement().innerHTML = '24';
map.addOverlay(label24);

// Judith + William Moss
var marker25 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.239689, 53.3035958]))
});
markers.getSource().addFeature(marker25);
var label25 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.239689, 53.3035958]),
    element: document.createElement('div'),
    offset: [-8, 5],
    positioning: 'center-left'
});
label25.getElement().innerHTML = '25';
map.addOverlay(label25);

// Kathy Wedge
var marker26 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.2162385, 53.302642]))
});
markers.getSource().addFeature(marker26);
var label26 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.2162385, 53.302642]),
    element: document.createElement('div'),
    offset: [-8, 5],
    positioning: 'center-left'
});
label26.getElement().innerHTML = '26';
map.addOverlay(label26);

// Jenny Armour
var marker27 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.246493, 53.324557]))
});
markers.getSource().addFeature(marker27);
var label27 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.246493, 53.324557]),
    element: document.createElement('div'),
    offset: [-8, 5],
    positioning: 'center-left'
});
label27.getElement().innerHTML = '27';
map.addOverlay(label27);

// Faye Trevelyan
var marker28 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.434276, 53.307543]))
});
markers.getSource().addFeature(marker28);
var label28 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.434276, 53.307543]),
    element: document.createElement('div'),
    offset: [-8, 5],
    positioning: 'center-left'
});
label28.getElement().innerHTML = '28';
map.addOverlay(label28);

// Beth Owen Williams
var marker29 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.317657, 53.386667]))
});
markers.getSource().addFeature(marker29);
var label29 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.317657, 53.386667]),
    element: document.createElement('div'),
    offset: [-8, 5],
    positioning: 'center-left'
});
label29.getElement().innerHTML = '29';
map.addOverlay(label29);

// Oriel Amlwch
var marker30 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.344416, 53.409602]))
});
markers.getSource().addFeature(marker30);
var label30 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.344416, 53.409602]),
    element: document.createElement('div'),
    offset: [-8, 5],
    positioning: 'center-left'
});
label30.getElement().innerHTML = '30';
map.addOverlay(label30);

// Artisan Studio
var marker31 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.3458, 53.4103]))
});
markers.getSource().addFeature(marker31);
var label31 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.3458, 53.4103]),
    element: document.createElement('div'),
    offset: [-8, 5],
    positioning: 'center-left'
});
label31.getElement().innerHTML = '31';
map.addOverlay(label31);

// David Weaver
var marker32 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.47081, 53.40776]))
});
markers.getSource().addFeature(marker32);
var label32 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.47081, 53.40776]),
    element: document.createElement('div'),
    offset: [-8, 5],
    positioning: 'center-left'
});
label32.getElement().innerHTML = '32';
map.addOverlay(label32);

// Caffi Siop Mechell
var marker33 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.45384, 53.39248]))
});
markers.getSource().addFeature(marker33);
var label33 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.45384, 53.39248]),
    element: document.createElement('div'),
    offset: [-8, 5],
    positioning: 'center-left'
});
label33.getElement().innerHTML = '33';
map.addOverlay(label33);

// Wendy Vidler
var marker34 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.50562, 53.40279]))
});
markers.getSource().addFeature(marker34);
var label34 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.50562, 53.40279]),
    element: document.createElement('div'),
    offset: [-8, 5],
    positioning: 'center-left'
});
label34.getElement().innerHTML = '34';
map.addOverlay(label34);

// Bay Tree Gallery
var marker35 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.56224, 53.28164]))
});
markers.getSource().addFeature(marker35);
var label35 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.56224, 53.28164]),
    element: document.createElement('div'),
    offset: [-8, 5],
    positioning: 'center-left'
});
label35.getElement().innerHTML = '35';
map.addOverlay(label35);

// Bryn Humphreys
var marker36 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.64391, 53.31576]))
});
markers.getSource().addFeature(marker36);
var label36 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.64391, 53.31576]),
    element: document.createElement('div'),
    offset: [-8, 5],
    positioning: 'center-left'
});
label36.getElement().innerHTML = '36';
map.addOverlay(label36);

// Wispy Willow Creations
var marker37 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.65885, 53.31043]))
});
markers.getSource().addFeature(marker37);
var label37 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.65885, 53.31043]),
    element: document.createElement('div'),
    offset: [-8, 5],
    positioning: 'center-left'
});
label37.getElement().innerHTML = '37';
map.addOverlay(label37);

// Ucheldre Centre
// Peter Alexander Lane
var marker38and39 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.63856, 53.30944]))
});
markers.getSource().addFeature(marker38and39);
var label38and39 = new ol.Overlay({
    position: ol.proj.fromLonLat([4.63856, 53.30944]),
    element: document.createElement('div'),
    offset: [-8, 5],
    positioning: 'center-left'
});
label38and39.getElement().innerHTML = '38 & 39';
map.addOverlay(label38and39);

// Janey Masters
var marker40 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.63549, 53.30447]))
});
markers.getSource().addFeature(marker40);
var label40 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.63549, 53.30447]),
    element: document.createElement('div'),
    offset: [-8, 5],
    positioning: 'center-left'
});
label40.getElement().innerHTML = '40';
map.addOverlay(label40);

// Trearddur Bay Art
var marker41 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.623130, 53.285876]))
});
markers.getSource().addFeature(marker41);
var label41 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.623130, 53.285876]),
    element: document.createElement('div'),
    offset: [-8, 5],
    positioning: 'center-left'
});
label41.getElement().innerHTML = '41';
map.addOverlay(label41);

// Anwen Roberts
var marker42 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.59922, 53.27128]))
});
markers.getSource().addFeature(marker42);
var label42 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.59922, 53.27128]),
    element: document.createElement('div'),
    offset: [-8, 5],
    positioning: 'center-left'
});
label42.getElement().innerHTML = '42';
map.addOverlay(label42);

// Huw Gareth Jones
var marker43 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.58591, 53.24295]))
});
markers.getSource().addFeature(marker43);
var label43 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.58591, 53.24295]),
    element: document.createElement('div'),
    offset: [-8, 5],
    positioning: 'center-left'
});
label43.getElement().innerHTML = '43';
map.addOverlay(label43);

// Jayne Huskisson
var marker44 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.441701, 53.242515]))
});
markers.getSource().addFeature(marker44);
var label44 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.441701, 53.242515]),
    element: document.createElement('div'),
    offset: [-8, 5],
    positioning: 'center-left'
});
label44.getElement().innerHTML = '44';
map.addOverlay(label44);

// Judith Donaghy
var marker45 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.49433, 53.22884]))
});
markers.getSource().addFeature(marker45);
var label45 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.49433, 53.22884]),
    element: document.createElement('div'),
    offset: [-8, 5],
    positioning: 'center-left'
});
label45.getElement().innerHTML = '45';
map.addOverlay(label45);

// Jane Samuel
// (approx location)
var marker46 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.52227, 53.22654]))
});
markers.getSource().addFeature(marker46);
var label46 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.52227, 53.22654]),
    element: document.createElement('div'),
    offset: [-8, 5],
    positioning: 'center-left'
});
label46.getElement().innerHTML = '46';
map.addOverlay(label46);

// Liz Toole
var marker47 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.404962, 53.195954]))
});
markers.getSource().addFeature(marker47);
var label47 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.404962, 53.195954]),
    element: document.createElement('div'),
    offset: [-8, 5],
    positioning: 'center-left'
});
label47.getElement().innerHTML = '47';
map.addOverlay(label47);

// Tal Y Sarn Farm
var marker48 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.334261, 53.165656]))
});
markers.getSource().addFeature(marker48);
var label48 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.334261, 53.165656]),
    element: document.createElement('div'),
    offset: [-8, 5],
    positioning: 'center-left'
});
label48.getElement().innerHTML = '48';
map.addOverlay(label48);

// Craig Taylor
var marker49 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.329565, 53.190609]))
});
markers.getSource().addFeature(marker49);
var label49 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.329565, 53.190609]),
    element: document.createElement('div'),
    offset: [-8, 5],
    positioning: 'center-left'
});
label49.getElement().innerHTML = '49';
map.addOverlay(label49);

// Wanda & David Garner
// (approx location)
var marker50 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.28032, 53.17999]))
});
markers.getSource().addFeature(marker50);
var label50 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.28032, 53.17999]),
    element: document.createElement('div'),
    offset: [-8, 5],
    positioning: 'center-left'
});
label50.getElement().innerHTML = '50';
map.addOverlay(label50);

// Carole Randall
// (approx location)
var marker51 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.202341, 53.216938]))
});
markers.getSource().addFeature(marker51);
var label51 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.202341, 53.216938]),
    element: document.createElement('div'),
    offset: [-8, 5],
    positioning: 'center-left'
});
label51.getElement().innerHTML = '51';
map.addOverlay(label51);

// Oriel Mon
var marker52 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.31203, 53.26343]))
});
markers.getSource().addFeature(marker52);
var label52 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.31203, 53.26343]),
    element: document.createElement('div'),
    offset: [-8, 5],
    positioning: 'center-left'
});
label52.getElement().innerHTML = '52';
map.addOverlay(label52);

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
        window.location.href = "../index.html?time=" + Date.now(); // redirect to google.com
    }, 300000); // 5 minutes in milliseconds
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