// Get all the elements on the page
const allElements = document.querySelectorAll('*');

// Loop through all the elements and add the contextmenu event listener
allElements.forEach(element => {
  element.addEventListener('contextmenu', event => {
    event.preventDefault();
  });
});

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

// Maggie Evans
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

// 3. georgina rambton
var marker3 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.095197999230881, 53.264283546551034]))
});
markers.getSource().addFeature(marker3);
var label3 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.095197999230881, 53.264283546551034]),
    element: document.createElement('div'),
    offset: [-6, 5],
    positioning: 'center-left'
});
label3.getElement().innerHTML = '3';
map.addOverlay(label3);

// 4. h’art works  (ANNE SNAITH)
var marker4 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.102169875232632, 53.263594576415294]))
});
markers.getSource().addFeature(marker4);
var label4 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.102169875232632, 53.263594576415294]),
    element: document.createElement('div'),
    offset: [-6, 5],
    positioning: 'center-left'
});
label4.getElement().innerHTML = '4';
map.addOverlay(label4);

//5. beaumaris jewellery
var marker5 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.091720612271446, 53.26354079525375]))
});
markers.getSource().addFeature(marker5);
var label5 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.091720612271446, 53.26354079525375]),
    element: document.createElement('div'),
    offset: [-6, 5],
    positioning: 'center-left'
});
label5.getElement().innerHTML = '5';
map.addOverlay(label5);

//6. canolfan david hughes
//53.26432021301193, -4.091396871545265
var marker6 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.091396871545265, 53.26432021301193]))
});
markers.getSource().addFeature(marker6);
var label6 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.091396871545265, 53.26432021301193]),
    element: document.createElement('div'),
    offset: [-6, 5],
    positioning: 'center-left'
});
label6.getElement().innerHTML = '6';
map.addOverlay(label6);

// 7. jon fairbairn
// 53.263365429964274, -4.092526755799979
var marker7 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.092526755799979, 53.263365429964274]))
});
markers.getSource().addFeature(marker7);
var label7 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.092526755799979, 53.263365429964274]),
    element: document.createElement('div'),
    offset: [-6, 5],
    positioning: 'center-left'
});
label7.getElement().innerHTML = '7';
map.addOverlay(label7);

//8. mary jane flower
// 53.263666397743876, -4.093045171606013
var marker8 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.093045171606013, 53.263666397743876]))
});
markers.getSource().addFeature(marker8);
var label8 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.093045171606013, 53.263666397743876]),
    element: document.createElement('div'),
    offset: [-6, 5],
    positioning: 'center-left'
});
label8.getElement().innerHTML = '8';
map.addOverlay(label8);

//9. stiwdio biwmares
// 53.26296814005809, -4.093867475771913
var marker9 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.093867475771913, 53.26296814005809]))
});
markers.getSource().addFeature(marker9);
var label9 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.093867475771913, 53.26296814005809]),
    element: document.createElement('div'),
    offset: [-6, 5],
    positioning: 'center-left'
});
label9.getElement().innerHTML = '9';
map.addOverlay(label9);

//10. the bulkeley gallery
// 53.263101445599695, -4.092245567880776
var marker10 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.092245567880776, 53.263101445599695]))
});
markers.getSource().addFeature(marker10);
var label10 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.092245567880776, 53.263101445599695]),
    element: document.createElement('div'),
    offset: [-8, 5],
    positioning: 'center-left'
});
label10.getElement().innerHTML = '10';
map.addOverlay(label10);

//11. janet bell
//53.263625468257544, -4.093220007681805
var marker11 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.093220007681805, 53.263625468257544]))
});
markers.getSource().addFeature(marker11);
var label11 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.093220007681805, 53.263625468257544]),
    element: document.createElement('div'),
    offset: [-8, 5],
    positioning: 'center-left'
});
label11.getElement().innerHTML = '11';
map.addOverlay(label11);

//12. aberlleiniog sculpture
//53.29545391204047, -4.086402669220552
var marker12 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.086402669220552, 53.29545391204047]))
});
markers.getSource().addFeature(marker12);
var label12 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.086402669220552, 53.29545391204047]),
    element: document.createElement('div'),
    offset: [-8, 5],
    positioning: 'center-left'
});
label12.getElement().innerHTML = '12';
map.addOverlay(label12);

//13. val gem hughes
// 53.29589575958451, -4.0806564478707985
var marker13 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.0806564478707985, 53.29589575958451]))
});
markers.getSource().addFeature(marker13);
var label13 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.0806564478707985, 53.29589575958451]),
    element: document.createElement('div'),
    offset: [-8, 5],
    positioning: 'center-left'
});
label13.getElement().innerHTML = '13';
map.addOverlay(label13);

//14. lynne stuart
//53.29605839884497, -4.089823796278659
var marker14 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.089823796278659, 53.29605839884497]))
});
markers.getSource().addFeature(marker14);
var label14 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.089823796278659, 53.29605839884497]),
    element: document.createElement('div'),
    offset: [-8, 5],
    positioning: 'center-left'
});
label14.getElement().innerHTML = '14';
map.addOverlay(label14);

// 15. marion rose
//53.307817517343516, -4.083836438086244
var marker15 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.083836438086244, 53.307817517343516]))
});
markers.getSource().addFeature(marker15);
var label15 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.083836438086244, 53.307817517343516]),
    element: document.createElement('div'),
    offset: [-8, 5],
    positioning: 'center-left'
});
label15.getElement().innerHTML = '15';
map.addOverlay(label15);

//16. geraldine hedderick
//53.30161524325583, -4.066889952404974
var marker16 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.066889952404974, 53.30161524325583]))
});
markers.getSource().addFeature(marker16);
var label16 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.066889952404974, 53.30161524325583]),
    element: document.createElement('div'),
    offset: [-8, 5],
    positioning: 'center-left'
});
label16.getElement().innerHTML = '16';
map.addOverlay(label16);

//17. jane bunce
//53.303033383825856, -4.066398571028699
var marker17 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.066398571028699, 53.303033383825856]))
});
markers.getSource().addFeature(marker17);
var label17 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.066398571028699, 53.303033383825856]),
    element: document.createElement('div'),
    offset: [-8, 5],
    positioning: 'center-left'
});
label17.getElement().innerHTML = '17';
map.addOverlay(label17);

//18. michael linford
//53.30506592084159, -4.069225021763629
var marker18 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.069225021763629, 53.30506592084159]))
});
markers.getSource().addFeature(marker18);
var label18 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.069225021763629, 53.30506592084159]),
    element: document.createElement('div'),
    offset: [-8, 5],
    positioning: 'center-left'
});
label18.getElement().innerHTML = '18';
map.addOverlay(label18);

//19. callaghan creative
//53.305710565422146, -4.070271884984645
var marker19 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.070271884984645, 53.305710565422146]))
});
markers.getSource().addFeature(marker19);
var label19 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.070271884984645, 53.305710565422146]),
    element: document.createElement('div'),
    offset: [-8, 5],
    positioning: 'center-left'
});
label19.getElement().innerHTML = '19';
map.addOverlay(label19);

//20. The Crafty Guillemot
//53.30727508448055, -4.065865196317965
var marker20 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.065865196317965, 53.30727508448055]))
});
markers.getSource().addFeature(marker20);
var label20 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.065865196317965, 53.30727508448055]),
    element: document.createElement('div'),
    offset: [-8, 5],
    positioning: 'center-left'
});
label20.getElement().innerHTML = '20';
map.addOverlay(label20);

//21.  lydia latham
//53.30711308085644, -4.06695926403848
var marker21 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.06695926403848, 53.30711308085644]))
});
markers.getSource().addFeature(marker21);
var label21 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.06695926403848, 53.30711308085644]),
    element: document.createElement('div'),
    offset: [-8, 5],
    positioning: 'center-left'
});
label21.getElement().innerHTML = '21';
map.addOverlay(label21);

//22. rhiannon & paul gash
//53.30125156538118, -4.152046195092633
var marker22 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.152046195092633, 53.30125156538118]))
});
markers.getSource().addFeature(marker22);
var label22 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.152046195092633, 53.30125156538118]),
    element: document.createElement('div'),
    offset: [-8, 5],
    positioning: 'center-left'
});
label22.getElement().innerHTML = '22';
map.addOverlay(label22);


// sarah holyfield
//53.27414217947436, -4.161155328749885
var marker23and24 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.161155328749885, 53.27414217947436]))
});
markers.getSource().addFeature(marker23and24);
var label23and24 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.161155328749885, 53.27414217947436]),
    element: document.createElement('div'),
    offset: [-8, 5],
    positioning: 'center-left'
});
label23and24.getElement().innerHTML = '23';
map.addOverlay(label23and24);


//25. janet & john
//53.299406864724894, -4.241438795230586
var marker25 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.241438795230586, 53.299406864724894]))
});
markers.getSource().addFeature(marker25);
var label25 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.241438795230586, 53.299406864724894]),
    element: document.createElement('div'),
    offset: [-8, 5],
    positioning: 'center-left'
});
label25.getElement().innerHTML = '25';
map.addOverlay(label25);

//26. crys pearce
//53.30685525164823, -4.219128608875881
var marker26 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.219128608875881, 53.30685525164823]))
});
markers.getSource().addFeature(marker26);
var label26 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.219128608875881, 53.30685525164823]),
    element: document.createElement('div'),
    offset: [-8, 5],
    positioning: 'center-left'
});
label26.getElement().innerHTML = '26';
map.addOverlay(label26);

//27. jenny armour
//53.327526271550596, -4.250658139049423

var marker27 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.250658139049423, 53.327526271550596]))
});
markers.getSource().addFeature(marker27);
var label27 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.250658139049423, 53.327526271550596]),
    element: document.createElement('div'),
    offset: [-8, 5],
    positioning: 'center-left'
});
label27.getElement().innerHTML = '27';
map.addOverlay(label27);

//28. artisan studio
//53.41040961604543, -4.345470036198081
var marker28 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.345470036198081, 53.41040961604543]))
});
markers.getSource().addFeature(marker28);
var label28 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.345470036198081, 53.41040961604543]),
    element: document.createElement('div'),
    offset: [-8, 5],
    positioning: 'center-left'
});
label28.getElement().innerHTML = '28';
map.addOverlay(label28);

//29. martin schwaller
//53.40728121776052, -4.359924281693106
var marker29 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.359924281693106, 53.40728121776052]))
});
markers.getSource().addFeature(marker29);
var label29 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.359924281693106, 53.40728121776052]),
    element: document.createElement('div'),
    offset: [-8, 5],
    positioning: 'center-left'
});
label29.getElement().innerHTML = '29';
map.addOverlay(label29);

//30. david weaver
//53.40891054910379, -4.464373360711978
var marker30 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.464373360711978, 53.40891054910379]))
});
markers.getSource().addFeature(marker30);
var label30 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.464373360711978, 53.40891054910379]),
    element: document.createElement('div'),
    offset: [-8, 5],
    positioning: 'center-left'
});
label30.getElement().innerHTML = '30';
map.addOverlay(label30);

//31. caffi siop mechell
//53.39247438193686, -4.453844235981904
var marker31 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.453844235981904, 53.39247438193686]))
});
markers.getSource().addFeature(marker31);
var label31 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.453844235981904, 53.39247438193686]),
    element: document.createElement('div'),
    offset: [-8, 5],
    positioning: 'center-left'
});
label31.getElement().innerHTML = '31';
map.addOverlay(label31);

//32. helen grove-white
//53.39198274395414, -4.447906444757398
var marker32 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.447906444757398, 53.39198274395414]))
});
markers.getSource().addFeature(marker32);
var label32 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.447906444757398, 53.39198274395414]),
    element: document.createElement('div'),
    offset: [-8, 5],
    positioning: 'center-left'
});
label32.getElement().innerHTML = '32';
map.addOverlay(label32);

//33. wendy vidler
//53.40155546646468, -4.5067793353765095

var marker33 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.5067793353765095, 53.40155546646468]))
});
markers.getSource().addFeature(marker33);
var label33 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.5067793353765095, 53.40155546646468]),
    element: document.createElement('div'),
    offset: [-8, 5],
    positioning: 'center-left'
});
label33.getElement().innerHTML = '33';
map.addOverlay(label33);

//34. lynda howard
//53.28927992606068, -4.472100943832334
var marker34 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.472100943832334, 53.28927992606068]))
});
markers.getSource().addFeature(marker34);
var label34 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.472100943832334, 53.28927992606068]),
    element: document.createElement('div'),
    offset: [-8, 5],
    positioning: 'center-left'
});
label34.getElement().innerHTML = '34';
map.addOverlay(label34);

//35. bay tree gallery
//53.28183884389287, -4.560656439414306
var marker35 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.560656439414306, 53.28183884389287]))
});
markers.getSource().addFeature(marker35);
var label35 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.560656439414306, 53.28183884389287]),
    element: document.createElement('div'),
    offset: [-8, 5],
    positioning: 'center-left'
});
label35.getElement().innerHTML = '35';
map.addOverlay(label35);

//36. bryn humphreys
//53.315740270509224, -4.64367528140878

var marker36 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.64367528140878, 53.315740270509224]))
});
markers.getSource().addFeature(marker36);
var label36 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.64367528140878, 53.315740270509224]),
    element: document.createElement('div'),
    offset: [-8, 5],
    positioning: 'center-left'
});
label36.getElement().innerHTML = '36';
map.addOverlay(label36);

//37. Wispy Willow Creations
//53.31040725423181, -4.65883471054359

var marker37 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.65883471054359, 53.31040725423181]))
});
markers.getSource().addFeature(marker37);
var label37 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.65883471054359, 53.31040725423181]),
    element: document.createElement('div'),
    offset: [-8, 5],
    positioning: 'center-left'
});
label37.getElement().innerHTML = '37';
map.addOverlay(label37);

// Ucheldre Centre
// Peter Alexander Lane
//53.30919951656056, -4.638791691291257
var marker38and39 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.638791691291257, 53.30919951656056]))
});
markers.getSource().addFeature(marker38and39);
var label38and39 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.638791691291257, 53.30919951656056]),
    element: document.createElement('div'),
    offset: [-8, 5],
    positioning: 'center-left'
});
label38and39.getElement().innerHTML = '38 & 39';
map.addOverlay(label38and39);

//40. Janey Masters
//53.30446819547979, -4.635494029078341
var marker40 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.635494029078341, 53.30446819547979]))
});
markers.getSource().addFeature(marker40);
var label40 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.635494029078341, 53.30446819547979]),
    element: document.createElement('div'),
    offset: [-8, 5],
    positioning: 'center-left'
});
label40.getElement().innerHTML = '40';
map.addOverlay(label40);

//41 & 42. trearddur bay art
//53.27855527742533, -4.613245269065406
var marker41and42 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.613245269065406, 53.27855527742533]))
});
markers.getSource().addFeature(marker41and42);
var label41and42 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.613245269065406, 53.27855527742533]),
    element: document.createElement('div'),
    offset: [-8, 5],
    positioning: 'center-left'
});
label41and42.getElement().innerHTML = '41 & 42';
map.addOverlay(label41and42);


//43. anwen roberts
//53.27114532880306, -4.596380940185474
var marker43 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.596380940185474, 53.27114532880306]))
});
markers.getSource().addFeature(marker43);
var label43 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.596380940185474, 53.27114532880306]),
    element: document.createElement('div'),
    offset: [-8, 5],
    positioning: 'center-left'
});
label43.getElement().innerHTML = '43';
map.addOverlay(label43);

// 44. pat kaye
//53.27414345406869, -4.583450993640762
var marker44 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.583450993640762, 53.27414345406869]))
});
markers.getSource().addFeature(marker44);
var label44 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.583450993640762, 53.27414345406869]),
    element: document.createElement('div'),
    offset: [-8, 5],
    positioning: 'center-left'
});
label44.getElement().innerHTML = '44';
map.addOverlay(label44);

//45. huw gareth jones
//53.24434561733337, -4.586882565252956
var marker45 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.586882565252956, 53.24434561733337]))
});
markers.getSource().addFeature(marker45);
var label45 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.586882565252956, 53.24434561733337]),
    element: document.createElement('div'),
    offset: [-8, 5],
    positioning: 'center-left'
});
label45.getElement().innerHTML = '45';
map.addOverlay(label45);

//46. seapig (cara white)
//53.24786925572262, -4.463901662763055
var marker46 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.463901662763055, 53.24786925572262]))
});
markers.getSource().addFeature(marker46);
var label46 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.463901662763055, 53.24786925572262]),
    element: document.createElement('div'),
    offset: [-8, 5],
    positioning: 'center-left'
});
label46.getElement().innerHTML = '46';
map.addOverlay(label46);

//47. judith donaghy
//53.23091998276401, -4.497563108121308
var marker47 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.497563108121308, 53.23091998276401]))
});
markers.getSource().addFeature(marker47);
var label47 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.497563108121308, 53.23091998276401]),
    element: document.createElement('div'),
    offset: [-8, 5],
    positioning: 'center-left'
});
label47.getElement().innerHTML = '47';
map.addOverlay(label47);

//48. gareth brindle jones
//53.32455133357347, -4.552046518637555
var marker48 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.552046518637555, 53.32455133357347]))
});
markers.getSource().addFeature(marker48);
var label48 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.552046518637555, 53.32455133357347]),
    element: document.createElement('div'),
    offset: [-8, 5],
    positioning: 'center-left'
});
label48.getElement().innerHTML = '48';
map.addOverlay(label48);

//49 - 51  Gill Jones
//53.22743613194441, -4.520981899107119
var marker49to51 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.520981899107119, 53.22743613194441]))
});
markers.getSource().addFeature(marker49to51);
var label49to51 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.520981899107119, 53.22743613194441]),
    element: document.createElement('div'),
    offset: [-8, 5],
    positioning: 'center-left'
});
label49to51.getElement().innerHTML = '49';
map.addOverlay(label49to51);


//52. jane samuel
//53.22615270212322, -4.52245649442836
var marker52 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.52245649442836, 53.22615270212322]))
});
markers.getSource().addFeature(marker52);
var label52 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.52245649442836, 53.22615270212322]),
    element: document.createElement('div'),
    offset: [-8, 5],
    positioning: 'center-left'
});
label52.getElement().innerHTML = '52';
map.addOverlay(label52);

//53. liz toole
//53.19557488349565, -4.405087377283684
var marker53 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.405087377283684, 53.19557488349565]))
});
markers.getSource().addFeature(marker53);
var label53 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.405087377283684, 53.19557488349565]),
    element: document.createElement('div'),
    offset: [-8, 5],
    positioning: 'center-left'
});
label53.getElement().innerHTML = '53';
map.addOverlay(label53);

//54. craig taylor
//53.22730419653446, -4.521467326493859
var marker54 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.521467326493859, 53.22730419653446]))
});
markers.getSource().addFeature(marker54);
var label54 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.521467326493859, 53.22730419653446]),
    element: document.createElement('div'),
    offset: [-8, 5],
    positioning: 'center-left'
});
label54.getElement().innerHTML = '54';
map.addOverlay(label54);

//55 & 56. Oriel Ger Y Fenai
// 53.22185628248675, -4.2100813268734125
var marker55and56 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.2100813268734125, 53.22185628248675]))
});
markers.getSource().addFeature(marker55and56);
var label55and56 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.2100813268734125, 53.22185628248675]),
    element: document.createElement('div'),
    offset: [-8, 5],
    positioning: 'center-left'
});
label55and56.getElement().innerHTML = '55 & 56';
map.addOverlay(label55and56);

// 57. oriel môn
// 53.26340732912462, -4.3122442944903385
var marker57 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.3122442944903385, 53.26340732912462]))
});
markers.getSource().addFeature(marker57);
var label57 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.3122442944903385, 53.26340732912462]),
    element: document.createElement('div'),
    offset: [-8, 5],
    positioning: 'center-left'
});
label57.getElement().innerHTML = '57';
map.addOverlay(label57);

// 58. Stan Brookfield
//53.254888502087894, -4.395000481089075
var marker58 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.395000481089075, 53.254888502087894]))
});
markers.getSource().addFeature(marker58);
var label58 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.395000481089075, 53.254888502087894]),
    element: document.createElement('div'),
    offset: [-8, 5],
    positioning: 'center-left'
});
label58.getElement().innerHTML = '58';
map.addOverlay(label58);

map.on('click', function(evt) {
    var feature = map.forEachFeatureAtPixel(evt.pixel,
        function(feature) {
            return feature;
        });
    if (feature == mapinfo) {
        infoPageContent("Map Info", "./pages/help.html");
    } else if (feature == marker1) {
        infoPageContent("Maggie Evans", "./pages/1.html");
    } else if (feature == marker2) {
        infoPageContent("Jane Evans", "./pages/2.html");
    } else if (feature == marker3) {
        infoPageContent("Georgina Rambton", "./pages/3.html");
    } else if (feature == marker4) {
        infoPageContent("H'Artworks Anne Snaith", "./pages/4.html");
    } else if (feature == marker5) {
        infoPageContent("Beaumaris Jewellery", "./pages/5.html");
    } else if (feature == marker6) {
        infoPageContent("Canolfan David Hughes", "./pages/6.html");
    } else if (feature == marker7) {
        infoPageContent("Jon Fairbarn", "./pages/7.html");
    } else if (feature == marker8) {
        infoPageContent("Mary Jane Flower", "./pages/8.html");
    } else if (feature == marker9) {
        infoPageContent("Sally Fairclough", "./pages/9.html");
    } else if (feature == marker10) {
        infoPageContent("The Bulkeley Gallery", "./pages/10.html");
    } else if (feature == marker11) {
        infoPageContent("Janet Bell", "./pages/11.html");
    } else if (feature == marker12) {
        infoPageContent("Aberlleiniog Sculpture", "./pages/12.html");
    } else if (feature == marker13) {
        infoPageContent("Val Gem Hughes", "./pages/13.html");
    } else if (feature == marker14) {
        infoPageContent("Lynne Stuart", "./pages/14.html");
    } else if (feature == marker15) {
        infoPageContent("Marion Rose", "./pages/15.html");
    } else if (feature == marker16) {
        infoPageContent("Geraldine Hedderick", "./pages/16.html");
    } else if (feature == marker17) {
        infoPageContent("Jane Bunce", "./pages/17.html");
    } else if (feature == marker18) {
        infoPageContent("Michael Linford", "./pages/18.html");
    } else if (feature == marker19) {
        infoPageContent("Callaghan Creative", "./pages/19.html");
    } else if (feature == marker20) {
        infoPageContent("The Crafty Guillemot", "./pages/20.html");
    } else if (feature == marker21) {
        infoPageContent("Lydia Latham Red Studio", "./pages/21.html");
    } else if (feature == marker22) {
        infoPageContent("Rhiannon & Paul Gash", "./pages/22.html");
    } else if (feature == marker23and24) {
        infoPageContent("Sarah Holyfield", "./pages/23and24.html");
    } else if (feature == marker25) {
        infoPageContent("Janet & John", "./pages/25.html");
    } else if (feature == marker26) {
        infoPageContent("Crys Pearce", "./pages/26.html");
    } else if (feature == marker27) {     
        infoPageContent("Jenny Armour", "./pages/27.html");
    } else if (feature == marker28) {
        infoPageContent("Artisan Studio", "./pages/28.html");
    } else if (feature == marker29) {
        infoPageContent("Martin Schwaller", "./pages/29.html");
    } else if (feature == marker30) {
        infoPageContent("David Weaver", "./pages/30.html");
    } else if (feature == marker31) {
        infoPageContent("Caffi Siop Mechell", "./pages/31.html");
    } else if (feature == marker32) {
        infoPageContent("Helen Grove-White", "./pages/32.html");
    } else if (feature == marker33) {
        infoPageContent("Wendy Vidler", "./pages/33.html");
    } else if (feature == marker34) {
        infoPageContent("Lynda Howard", "./pages/34.html");
    } else if (feature == marker35) {
        infoPageContent("Bay Tree Gallery", "./pages/35.html");
    } else if (feature == marker36) {
        infoPageContent("Bryn Humphreys", "./pages/36.html");
    } else if (feature == marker37) {
        infoPageContent("Wispy Willow Creations", "./pages/37.html");
    } else if (feature == marker38and39) {
        infoPageContent("Ucheldre Centre", "./pages/38and39.html");
    } else if (feature == marker40) {
        infoPageContent("Janey Masters", "./pages/40.html");
    } else if (feature == marker41and42) {
        infoPageContent("Trearddur Bay Art", "./pages/41and42.html");
    } else if (feature == marker43) {
        infoPageContent("Anwen Roberts", "./pages/43.html");
    } else if (feature == marker44) {
        infoPageContent("Pat Kaye", "./pages/44.html");
    } else if (feature == marker45) {
        infoPageContent("Huw Gareth Jones", "./pages/45.html");
    } else if (feature == marker46) {
        infoPageContent("Seapig (Cara White)", "./pages/46.html");
    } else if (feature == marker47) {
        infoPageContent("Judith Donaghy", "./pages/47.html");
    } else if (feature == marker48) {
        infoPageContent("Gareth Brindle Jones", "./pages/48.html");
    } else if (feature == marker49to51) {
        infoPageContent("Gill Jones", "./pages/49to51.html");
    } else if (feature == marker52) {
        infoPageContent("Jane Samuel", "./pages/52.html");
    } else if (feature == marker53) {
        infoPageContent("Liz Toole", "./pages/53.html");
    } else if (feature == marker54) {
        infoPageContent("Craig Taylor", "./pages/54.html");
    } else if (feature == marker55and56) {
        infoPageContent("Oriel Ger Y Fenai", "./pages/55and56.html");
    } else if (feature == marker57) {
        infoPageContent("Oriel Môn", "./pages/57.html");
    } else if (feature == marker58) {
        infoPageContent("Stan Brookfield", "./pages/58.html");
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