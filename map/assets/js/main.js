// Get all the elements on the page
const allElements = document.querySelectorAll('*');

// Loop through all the elements and add the contextmenu event listener
allElements.forEach(element => {
  element.addEventListener('contextmenu', event => {
    event.preventDefault();
  });
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

// Andy Ball
// 53.22604323080291, -4.170111853944106
var marker1 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.170111853944106, 53.22604323080291]))
});
markers.getSource().addFeature(marker1);
var label1 = new ol.Overlay({
    position: ol.proj.fromLonLat([-4.170111853944106, 53.22604323080291]),
    element: document.createElement('div'),
    offset: [-14, 5],
    positioning: 'center-left'
});
label1.getElement().innerHTML = '1';
map.addOverlay(label1);

// Her Ceramics
// 53.228316656617054, -4.164384692381407
var marker2 = new ol.Feature({
	geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.164384692381407, 53.228316656617054]))
});
markers.getSource().addFeature(marker2);
var label2 = new ol.Overlay({
	position: ol.proj.fromLonLat([-4.164384692381407, 53.228316656617054]),
	element: document.createElement('div'),
	offset: [-14, 5],
	positioning: 'center-left'
});
label2.getElement().innerHTML = '2';
map.addOverlay(label2);

// Jane Evans
// 53.230137648336374, -4.163859539764031
var marker3 = new ol.Feature({
	geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.163859539764031, 53.230137648336374]))
});
markers.getSource().addFeature(marker3);
var label3 = new ol.Overlay({
	position: ol.proj.fromLonLat([-4.163859539764031, 53.230137648336374]),
	element: document.createElement('div'),
	offset: [-14, 5],
	positioning: 'center-left'
});
label3.getElement().innerHTML = '3';
map.addOverlay(label3);

// georgina rambton
// 53.26430008908315, -4.095106888112449
var marker4 = new ol.Feature({
	geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.095106888112449, 53.26430008908315]))
});
markers.getSource().addFeature(marker4);
var label4 = new ol.Overlay({
	position: ol.proj.fromLonLat([-4.095106888112449, 53.26430008908315]),
	element: document.createElement('div'),
	offset: [-14, 5],
	positioning: 'center-left'
});
label4.getElement().innerHTML = '4';
map.addOverlay(label4);

// beaumaris jewellery
// 53.2635238228386, -4.091714520542633
var marker5 = new ol.Feature({
	geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.091714520542633, 53.2635238228386]))
});
markers.getSource().addFeature(marker5);
var label5 = new ol.Overlay({
	position: ol.proj.fromLonLat([-4.091714520542633, 53.2635238228386]),
	element: document.createElement('div'),
	offset: [-14, 5],
	positioning: 'center-left'
});
label5.getElement().innerHTML = '5';
map.addOverlay(label5);

// canolfan david hughes
// 53.26430879186422, -4.091392733411655
var marker6 = new ol.Feature({
	geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.091392733411655, 53.26430879186422]))
});
markers.getSource().addFeature(marker6);
var label6 = new ol.Overlay({
	position: ol.proj.fromLonLat([-4.091392733411655, 53.26430879186422]),
	element: document.createElement('div'),
	offset: [-14, 5],
	positioning: 'center-left'
});
label6.getElement().innerHTML = '6';
map.addOverlay(label6);

// Jon Fairbarn
// 53.26335437356752, -4.092527017312358
var marker7 = new ol.Feature({
	geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.092527017312358, 53.26335437356752]))
});
markers.getSource().addFeature(marker7);
var label7 = new ol.Overlay({
	position: ol.proj.fromLonLat([-4.092527017312358, 53.26335437356752]),
	element: document.createElement('div'),
	offset: [-14, 5],
	positioning: 'center-left'
});
label7.getElement().innerHTML = '7';
map.addOverlay(label7);

// Mary Jane Flower
// 53.26366473310897, -4.093044403473038
var marker8 = new ol.Feature({
	geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.093044403473038, 53.26366473310897]))
});
markers.getSource().addFeature(marker8);
var label8 = new ol.Overlay({
	position: ol.proj.fromLonLat([-4.093044403473038, 53.26366473310897]),
	element: document.createElement('div'),
	offset: [-14, 5],
	positioning: 'center-left'
});
label8.getElement().innerHTML = '8';
map.addOverlay(label8);

// Stiwdio Biewmares
// 53.26296234883538, -4.093939726356511
var marker9 = new ol.Feature({
	geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.093939726356511, 53.26296234883538]))
});
markers.getSource().addFeature(marker9);
var label9 = new ol.Overlay({
	position: ol.proj.fromLonLat([-4.093939726356511, 53.26296234883538]),
	element: document.createElement('div'),
	offset: [-14, 5],
	positioning: 'center-left'
});
label9.getElement().innerHTML = '9';
map.addOverlay(label9);

// Rob Thompson
// 53.26295781087535, -4.093709288382675
var marker10 = new ol.Feature({
	geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.093709288382675, 53.26295781087535]))
});
markers.getSource().addFeature(marker10);
var label10 = new ol.Overlay({
	position: ol.proj.fromLonLat([-4.093709288382675, 53.26295781087535]),
	element: document.createElement('div'),
	offset: [-14, 5],
	positioning: 'center-left'
});
label10.getElement().innerHTML = '10';
map.addOverlay(label10);

// Ian Walton Gallery
// 53.26399921023315, -4.093239138999325
var marker11 = new ol.Feature({
	geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.093239138999325, 53.26399921023315]))
});
markers.getSource().addFeature(marker11);
var label11 = new ol.Overlay({
	position: ol.proj.fromLonLat([-4.093239138999325, 53.26399921023315]),
	element: document.createElement('div'),
	offset: [-14, 5],
	positioning: 'center-left'
});
label11.getElement().innerHTML = '11';
map.addOverlay(label11);

//Janet Bell
// 53.26362354727174, -4.0932205132362975.
var marker12 = new ol.Feature({
	geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.0932205132362975, 53.26362354727174]))
});
markers.getSource().addFeature(marker12);
var label12 = new ol.Overlay({
	position: ol.proj.fromLonLat([-4.0932205132362975, 53.26362354727174]),
	element: document.createElement('div'),
	offset: [-14, 5],
	positioning: 'center-left'
});
label12.getElement().innerHTML = '12';
map.addOverlay(label12);

// Lynne Stuart
// 53.295035402006235, -4.089675603342258
var marker13 = new ol.Feature({
	geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.089675603342258, 53.295035402006235]))
});
markers.getSource().addFeature(marker13);
var label13 = new ol.Overlay({
	position: ol.proj.fromLonLat([-4.089675603342258, 53.295035402006235]),
	element: document.createElement('div'),
	offset: [-14, 5],
	positioning: 'center-left'
});
label13.getElement().innerHTML = '13';
map.addOverlay(label13);

// Aberlleiniog Sculpture
// 53.29678102276969, -4.0874967400269036
var marker14 = new ol.Feature({
	geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.0874967400269036, 53.29678102276969]))
});
markers.getSource().addFeature(marker14);
var label14 = new ol.Overlay({
	position: ol.proj.fromLonLat([-4.0874967400269036, 53.29678102276969]),
	element: document.createElement('div'),
	offset: [-14, 5],
	positioning: 'center-left'
});
label14.getElement().innerHTML = '14';
map.addOverlay(label14);

// Val Gem Hughes
// 53.295737734532075, -4.080770326880127
var marker15 = new ol.Feature({
	geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.080770326880127, 53.295737734532075]))
});
markers.getSource().addFeature(marker15);
var label15 = new ol.Overlay({
	position: ol.proj.fromLonLat([-4.080770326880127, 53.295737734532075]),
	element: document.createElement('div'),
	offset: [-14, 5],
	positioning: 'center-left'
});
label15.getElement().innerHTML = '15';
map.addOverlay(label15);

// Peter Read
// 53.30654526484508, -4.0897573098494675
var marker16 = new ol.Feature({
	geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.0897573098494675, 53.30654526484508]))
});
markers.getSource().addFeature(marker16);
var label16 = new ol.Overlay({
	position: ol.proj.fromLonLat([-4.0897573098494675, 53.30654526484508]),
	element: document.createElement('div'),
	offset: [-14, 5],
	positioning: 'center-left'
});
label16.getElement().innerHTML = '16';
map.addOverlay(label16);

// Marion Rose
// 53.30654118957168, -4.080742509742033
var marker17 = new ol.Feature({
	geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.080742509742033, 53.30654118957168]))
});
markers.getSource().addFeature(marker17);
var label17 = new ol.Overlay({
	position: ol.proj.fromLonLat([-4.080742509742033, 53.30654118957168]),
	element: document.createElement('div'),
	offset: [-14, 5],
	positioning: 'center-left'
});
label17.getElement().innerHTML = '17';
map.addOverlay(label17);


//Geraldine Hedderick
// 53.30162188366376, -4.066903973998473
var marker18 = new ol.Feature({
	geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.066903973998473, 53.30162188366376]))
});
markers.getSource().addFeature(marker18);
var label18 = new ol.Overlay({
	position: ol.proj.fromLonLat([-4.066903973998473, 53.30162188366376]),
	element: document.createElement('div'),
	offset: [-14, 5],
	positioning: 'center-left'
});
label18.getElement().innerHTML = '18';
map.addOverlay(label18);

// Jane Bunce
// 53.303028630129326, -4.066397256456176
var marker19 = new ol.Feature({
	geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.066397256456176, 53.303028630129326]))
});
markers.getSource().addFeature(marker19);
var label19 = new ol.Overlay({
	position: ol.proj.fromLonLat([-4.066397256456176, 53.303028630129326]),
	element: document.createElement('div'),
	offset: [-14, 5],
	positioning: 'center-left'
});
label19.getElement().innerHTML = '19';
map.addOverlay(label19);

// Callaghan Creative
// 53.30585506836922, -4.070348169974567
var marker20 = new ol.Feature({
	geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.070348169974567, 53.30585506836922]))
});
markers.getSource().addFeature(marker20);
var label20 = new ol.Overlay({
	position: ol.proj.fromLonLat([-4.070348169974567, 53.30585506836922]),
	element: document.createElement('div'),
	offset: [-14, 5],
	positioning: 'center-left'
});
label20.getElement().innerHTML = '20';
map.addOverlay(label20);

// The Crafty Guillemot
// 53.306756135560924, -4.067665750652899
var marker21 = new ol.Feature({
	geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.067665750652899, 53.306756135560924]))
});
markers.getSource().addFeature(marker21);
var label21 = new ol.Overlay({
	position: ol.proj.fromLonLat([-4.067665750652899, 53.306756135560924]),
	element: document.createElement('div'),
	offset: [-14, 5],
	positioning: 'center-left'
});
label21.getElement().innerHTML = '21';
map.addOverlay(label21);

// Red Studio
// 53.30717495977572, -4.066672005500644
var marker22 = new ol.Feature({
	geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.066672005500644, 53.30717495977572]))
});
markers.getSource().addFeature(marker22);
var label22 = new ol.Overlay({
	position: ol.proj.fromLonLat([-4.066672005500644, 53.30717495977572]),
	element: document.createElement('div'),
	offset: [-14, 5],
	positioning: 'center-left'
});
label22.getElement().innerHTML = '22';
map.addOverlay(label22);

// Rhiannon & Paul Gash
// 53.30032916467376, -4.148331752712561
var marker23 = new ol.Feature({
	geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.148331752712561, 53.30032916467376]))
});
markers.getSource().addFeature(marker23);
var label23 = new ol.Overlay({
	position: ol.proj.fromLonLat([-4.148331752712561, 53.30032916467376]),
	element: document.createElement('div'),
	offset: [-14, 5],
	positioning: 'center-left'
});
label23.getElement().innerHTML = '23';
map.addOverlay(label23);

// Helen Campbell
// 53.28335664214091, -4.225439848502962
var marker24 = new ol.Feature({
	geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.225439848502962, 53.28335664214091]))
});
markers.getSource().addFeature(marker24);
var label24 = new ol.Overlay({
	position: ol.proj.fromLonLat([-4.225439848502962, 53.28335664214091]),
	element: document.createElement('div'),
	offset: [-14, 5],
	positioning: 'center-left'
});
label24.getElement().innerHTML = '24';
map.addOverlay(label24);

// Jenny Armour
// 53.32767734898476, -4.250954607200908
var marker25 = new ol.Feature({
	geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.250954607200908, 53.32767734898476]))
});
markers.getSource().addFeature(marker25);
var label25 = new ol.Overlay({
	position: ol.proj.fromLonLat([-4.250954607200908, 53.32767734898476]),
	element: document.createElement('div'),
	offset: [-14, 5],
	positioning: 'center-left'
});
label25.getElement().innerHTML = '25';
map.addOverlay(label25);

// Irene Taylor Moores
// 53.360795776875555, -4.29676723816951
var marker26 = new ol.Feature({
	geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.29676723816951, 53.360795776875555]))
});
markers.getSource().addFeature(marker26);
var label26 = new ol.Overlay({
	position: ol.proj.fromLonLat([-4.29676723816951, 53.360795776875555]),
	element: document.createElement('div'),
	offset: [-14, 5],
	positioning: 'center-left'
});
label26.getElement().innerHTML = '26';
map.addOverlay(label26);

// Artisan Studio
// 53.41038457922192, -4.345824090238268
var marker27 = new ol.Feature({
	geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.345824090238268, 53.41038457922192]))
});
markers.getSource().addFeature(marker27);
var label27 = new ol.Overlay({
	position: ol.proj.fromLonLat([-4.345824090238268, 53.41038457922192]),
	element: document.createElement('div'),
	offset: [-14, 5],
	positioning: 'center-left'
});
label27.getElement().innerHTML = '27';
map.addOverlay(label27);

// Deborah Soma-Wallace
// 53.41247950898263, -4.33094463819342
var marker28 = new ol.Feature({
	geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.33094463819342, 53.41247950898263]))
});
markers.getSource().addFeature(marker28);
var label28 = new ol.Overlay({
	position: ol.proj.fromLonLat([-4.33094463819342, 53.41247950898263]),
	element: document.createElement('div'),
	offset: [-14, 5],
	positioning: 'center-left'
});
label28.getElement().innerHTML = '28';
map.addOverlay(label28);

// Martin Schwaller
// 53.407359926722165, -4.359956405692637
var marker29 = new ol.Feature({
	geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.359956405692637, 53.407359926722165]))
});
markers.getSource().addFeature(marker29);
var label29 = new ol.Overlay({
	position: ol.proj.fromLonLat([-4.359956405692637, 53.407359926722165]),
	element: document.createElement('div'),
	offset: [-14, 5],
	positioning: 'center-left'
});
label29.getElement().innerHTML = '29';
map.addOverlay(label29);

// Leigh Fielding
// 53.41175488326616, -4.454539767318445
var marker30 = new ol.Feature({
	geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.454539767318445, 53.41175488326616]))
});
markers.getSource().addFeature(marker30);
var label30 = new ol.Overlay({
	position: ol.proj.fromLonLat([-4.454539767318445, 53.41175488326616]),
	element: document.createElement('div'),
	offset: [-14, 5],
	positioning: 'center-left'
});
label30.getElement().innerHTML = '30';
map.addOverlay(label30);

// Caffi Siop Mechell
// 53.39244572084315, -4.453838948310495
var marker31 = new ol.Feature({
	geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.453838948310495, 53.39244572084315]))
});
markers.getSource().addFeature(marker31);
var label31 = new ol.Overlay({
	position: ol.proj.fromLonLat([-4.453838948310495, 53.39244572084315]),
	element: document.createElement('div'),
	offset: [-14, 5],
	positioning: 'center-left'
});
label31.getElement().innerHTML = '31';
map.addOverlay(label31);

// Helen Grove-White
// 53.39229524810632, -4.4479738317673485
var marker32 = new ol.Feature({
	geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.4479738317673485, 53.39229524810632]))
});
markers.getSource().addFeature(marker32);
var label32 = new ol.Overlay({
	position: ol.proj.fromLonLat([-4.4479738317673485, 53.39229524810632]),
	element: document.createElement('div'),
	offset: [-14, 5],
	positioning: 'center-left'
});
label32.getElement().innerHTML = '32';
map.addOverlay(label32);

// Wendy Vidler
// 53.40281060923736, -4.505226349457496
var marker33 = new ol.Feature({
	geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.505226349457496, 53.40281060923736]))
});
markers.getSource().addFeature(marker33);
var label33 = new ol.Overlay({
	position: ol.proj.fromLonLat([-4.505226349457496, 53.40281060923736]),
	element: document.createElement('div'),
	offset: [-14, 5],
	positioning: 'center-left'
});
label33.getElement().innerHTML = '33';
map.addOverlay(label33);

// Lynda Howard
// 53.36801278970828, -4.553337612344172
var marker34 = new ol.Feature({
	geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.553337612344172, 53.36801278970828]))
});
markers.getSource().addFeature(marker34);
var label34 = new ol.Overlay({
	position: ol.proj.fromLonLat([-4.553337612344172, 53.36801278970828]),
	element: document.createElement('div'),
	offset: [-14, 5],
	positioning: 'center-left'
});
label34.getElement().innerHTML = '34';
map.addOverlay(label34);

// Bryn Humphreys
// 53.31578811769047, -4.643819800438241
var marker35 = new ol.Feature({
	geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.643819800438241, 53.31578811769047]))
});
markers.getSource().addFeature(marker35);
var label35 = new ol.Overlay({
	position: ol.proj.fromLonLat([-4.643819800438241, 53.31578811769047]),
	element: document.createElement('div'),
	offset: [-14, 5],
	positioning: 'center-left'
});
label35.getElement().innerHTML = '35';
map.addOverlay(label35);

// Wispy Willow Creations
// 53.31042175683375, -4.658858903446696 
var marker36 = new ol.Feature({
	geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.658858903446696, 53.31042175683375]))
});
markers.getSource().addFeature(marker36);
var label36 = new ol.Overlay({
	position: ol.proj.fromLonLat([-4.658858903446696, 53.31042175683375]),
	element: document.createElement('div'),
	offset: [-14, 5],
	positioning: 'center-left'
});
label36.getElement().innerHTML = '36';
map.addOverlay(label36);

// Ucheldre Centre & Peter Alexander Lane
// 53.30942320672874, -4.638320087296695
var marker37and38 = new ol.Feature({
	geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.638320087296695, 53.30942320672874]))
});
markers.getSource().addFeature(marker37and38);
var label37and38 = new ol.Overlay({
	position: ol.proj.fromLonLat([-4.638320087296695, 53.30942320672874]),
	element: document.createElement('div'),
	offset: [-14, 5],
	positioning: 'center-left'
});
label37and38.getElement().innerHTML = '37 & 38';
map.addOverlay(label37and38);

// Christine Williams
// 53.305354273868694, -4.638520867105832
var marker39 = new ol.Feature({
	geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.638520867105832, 53.305354273868694]))
});
markers.getSource().addFeature(marker39);
var label39 = new ol.Overlay({
	position: ol.proj.fromLonLat([-4.638520867105832, 53.305354273868694]),
	element: document.createElement('div'),
	offset: [-14, 5],
	positioning: 'center-left'
});
label39.getElement().innerHTML = '39';
map.addOverlay(label39);

// Janey Masters
// 53.30448592137738, -4.63556922688959
var marker40 = new ol.Feature({
	geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.63556922688959, 53.30448592137738]))
});
markers.getSource().addFeature(marker40);
var label40 = new ol.Overlay({
	position: ol.proj.fromLonLat([-4.63556922688959, 53.30448592137738]),
	element: document.createElement('div'),
	offset: [-14, 5],
	positioning: 'center-left'
});
label40.getElement().innerHTML = '40';
map.addOverlay(label40);

// Daniela Milicova
// 53.30587514360081, -4.618343435868697
var marker41 = new ol.Feature({
	geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.618343435868697, 53.30587514360081]))
});
markers.getSource().addFeature(marker41);
var label41 = new ol.Overlay({
	position: ol.proj.fromLonLat([-4.618343435868697, 53.30587514360081]),
	element: document.createElement('div'),
	offset: [-14, 5],
	positioning: 'center-left'
});
label41.getElement().innerHTML = '41';
map.addOverlay(label41);

// Phoenix Studios
// 53.302244229369435, -4.6180956899363395
var marker42 = new ol.Feature({
	geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.6180956899363395, 53.302244229369435]))
});
markers.getSource().addFeature(marker42);
var label42 = new ol.Overlay({
	position: ol.proj.fromLonLat([-4.6180956899363395, 53.302244229369435]),
	element: document.createElement('div'),
	offset: [-14, 5],
	positioning: 'center-left'
});
label42.getElement().innerHTML = '42';
map.addOverlay(label42);

// Trearddur Bay Art
// 53.278515340260256, -4.61335960877091
var marker43 = new ol.Feature({
	geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.61335960877091, 53.278515340260256]))
});
markers.getSource().addFeature(marker43);
var label43 = new ol.Overlay({
	position: ol.proj.fromLonLat([-4.61335960877091, 53.278515340260256]),
	element: document.createElement('div'),
	offset: [-14, 5],
	positioning: 'center-left'
});
label43.getElement().innerHTML = '43';
map.addOverlay(label43);

// Anwen Roberts
// 53.271245304266685, -4.599152884806176
var marker44 = new ol.Feature({
	geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.599152884806176, 53.271245304266685]))
});
markers.getSource().addFeature(marker44);
var label44 = new ol.Overlay({
	position: ol.proj.fromLonLat([-4.599152884806176, 53.271245304266685]),
	element: document.createElement('div'),
	offset: [-14, 5],
	positioning: 'center-left'
});
label44.getElement().innerHTML = '44';
map.addOverlay(label44);

// Anglesey Leather
// 53.273441789021, -4.5822790565215925
var marker45 = new ol.Feature({
	geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.5822790565215925, 53.273441789021]))
});
markers.getSource().addFeature(marker45);
var label45 = new ol.Overlay({
	position: ol.proj.fromLonLat([-4.5822790565215925, 53.273441789021]),
	element: document.createElement('div'),
	offset: [-14, 5],
	positioning: 'center-left'
});
label45.getElement().innerHTML = '45';
map.addOverlay(label45);

// Pat Kaye
// 53.27415253177238, -4.583029279755465
var marker46 = new ol.Feature({
	geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.583029279755465, 53.27415253177238]))
});
markers.getSource().addFeature(marker46);
var label46 = new ol.Overlay({
	position: ol.proj.fromLonLat([-4.583029279755465, 53.27415253177238]),
	element: document.createElement('div'),
	offset: [-14, 5],
	positioning: 'center-left'
});
label46.getElement().innerHTML = '46';
map.addOverlay(label46);

// Hue Gareth Jones
// 53.24690461703372, -4.569868931986229
var marker47 = new ol.Feature({
	geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.569868931986229, 53.24690461703372]))
});
markers.getSource().addFeature(marker47);
var label47 = new ol.Overlay({
	position: ol.proj.fromLonLat([-4.569868931986229, 53.24690461703372]),
	element: document.createElement('div'),
	offset: [-14, 5],
	positioning: 'center-left'
});
label47.getElement().innerHTML = '47';
map.addOverlay(label47);

// Seapig - Cara White, Celina Nancarrow, Paula Cutler
// 53.24786346279857, -4.464093711083357
var marker48to50 = new ol.Feature({
	geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.464093711083357, 53.24786346279857]))
});
markers.getSource().addFeature(marker48to50);
var label48to50 = new ol.Overlay({
	position: ol.proj.fromLonLat([-4.464093711083357, 53.24786346279857]),
	element: document.createElement('div'),
	offset: [-14, 5],
	positioning: 'center-left'
});
label48to50.getElement().innerHTML = '48 to 50';
map.addOverlay(label48to50);

// Judith Donaghy
// 53.22881016720018, -4.494936828468671
var marker51 = new ol.Feature({
	geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.494936828468671, 53.22881016720018]))
});
markers.getSource().addFeature(marker51);
var label51 = new ol.Overlay({
	position: ol.proj.fromLonLat([-4.494936828468671, 53.22881016720018]),
	element: document.createElement('div'),
	offset: [-14, 5],
	positioning: 'center-left'
});
label51.getElement().innerHTML = '51';
map.addOverlay(label51);

// Jane Samuel and Caroline Brogden
// 53.22722112010076, -4.5215393597008955
var marker52and53 = new ol.Feature({
	geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.5215393597008955, 53.22722112010076]))
});
markers.getSource().addFeature(marker52and53);
var label52and53 = new ol.Overlay({
	position: ol.proj.fromLonLat([-4.5215393597008955, 53.22722112010076]),
	element: document.createElement('div'),
	offset: [-14, 5],
	positioning: 'center-left'
});
label52and53.getElement().innerHTML = '52 & 53';
map.addOverlay(label52and53);

// Liz Toole
// 53.19534325931114, -4.405894475626167
var marker54 = new ol.Feature({
	geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.405894475626167, 53.19534325931114]))
});
markers.getSource().addFeature(marker54);
var label54 = new ol.Overlay({
	position: ol.proj.fromLonLat([-4.405894475626167, 53.19534325931114]),
	element: document.createElement('div'),
	offset: [-14, 5],
	positioning: 'center-left'
});
label54.getElement().innerHTML = '54';
map.addOverlay(label54);

// Crafty as Hel - Ynys Mon
// 53.15637252056552, -4.349249928556872
var marker55 = new ol.Feature({
	geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.349249928556872, 53.15637252056552]))
});
markers.getSource().addFeature(marker55);
var label55 = new ol.Overlay({
	position: ol.proj.fromLonLat([-4.349249928556872, 53.15637252056552]),
	element: document.createElement('div'),
	offset: [-14, 5],
	positioning: 'center-left'
});
label55.getElement().innerHTML = '55';
map.addOverlay(label55);

// Craig Taylor
// 53.19060846685907, -4.3296016419439765
var marker56 = new ol.Feature({
	geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.3296016419439765, 53.19060846685907]))
});
markers.getSource().addFeature(marker56);
var label56 = new ol.Overlay({
	position: ol.proj.fromLonLat([-4.3296016419439765, 53.19060846685907]),
	element: document.createElement('div'),
	offset: [-14, 5],
	positioning: 'center-left'
});
label56.getElement().innerHTML = '56';
map.addOverlay(label56);

// Bryn Teg Ceramics
// 53.1677918962019, -4.322484505041031
var marker57 = new ol.Feature({
	geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.322484505041031, 53.1677918962019]))
});
markers.getSource().addFeature(marker57);
var label57 = new ol.Overlay({
	position: ol.proj.fromLonLat([-4.322484505041031, 53.1677918962019]),
	element: document.createElement('div'),
	offset: [-14, 5],
	positioning: 'center-left'
});
label57.getElement().innerHTML = '57';
map.addOverlay(label57);

// Carole Randall
// 53.214835678065036, -4.202636727594483
var marker58 = new ol.Feature({
	geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.202636727594483, 53.214835678065036]))
});
markers.getSource().addFeature(marker58);
var label58 = new ol.Overlay({
	position: ol.proj.fromLonLat([-4.202636727594483, 53.214835678065036]),
	element: document.createElement('div'),
	offset: [-14, 5],
	positioning: 'center-left'
});
label58.getElement().innerHTML = '58';
map.addOverlay(label58);

// Oriel Mon
// 53.263460879604935, -4.312066971276088
var marker59 = new ol.Feature({
	geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.312066971276088, 53.263460879604935]))
});
markers.getSource().addFeature(marker59);
var label59 = new ol.Overlay({
	position: ol.proj.fromLonLat([-4.312066971276088, 53.263460879604935]),
	element: document.createElement('div'),
	offset: [-14, 5],
	positioning: 'center-left'
});
label59.getElement().innerHTML = '59';
map.addOverlay(label59);

map.on('click', function(evt) {
	var feature = map.forEachFeatureAtPixel(evt.pixel,
		function(feature) {
			return feature;
		});
	if (feature == mapinfo) {
		infoPageContent("Map Info", "./pages/help.html");
	} else if (feature == marker1) {
		infoPageContent("Andy Ball", "./pages/1.html");
	} else if (feature == marker2) {
		infoPageContent("Her Ceramics", "./pages/2.html");
	} else if (feature == marker3) {
		infoPageContent("Jane Evans", "./pages/3.html");
	} else if (feature == marker4) {
		infoPageContent("Georgina Rambton", "./pages/4.html");
	} else if (feature == marker5) {
		infoPageContent("Beaumaris Jewellery", "./pages/5.html");
	} else if (feature == marker6) {
		infoPageContent("Canolfan David Hughes", "./pages/6.html");
	} else if (feature == marker7) {
		infoPageContent("Jon Fairbarn", "./pages/7.html");
	} else if (feature == marker8) {
		infoPageContent("Mary Jane Flower", "./pages/8.html");
	} else if (feature == marker9) {
		infoPageContent("Stiwdio Biewmares", "./pages/9.html");
	} else if (feature == marker10) {
		infoPageContent("Rob Thompson", "./pages/10.html");
	} else if (feature == marker11) {
		infoPageContent("Ian Walton Gallery", "./pages/11.html");
	} else if (feature == marker12) {
		infoPageContent("Janet Bell", "./pages/12.html");
	} else if (feature == marker13) {
		infoPageContent("Lynne Stuart", "./pages/13.html");
	} else if (feature == marker14) {
		infoPageContent("Aberlleiniog Sculpture", "./pages/14.html");
	} else if (feature == marker15) {
		infoPageContent("Val Gem Hughes", "./pages/15.html");
	} else if (feature == marker16) {
		infoPageContent("Peter Read", "./pages/16.html");
	} else if (feature == marker17) {
		infoPageContent("Marion Rose", "./pages/17.html");
	} else if (feature == marker18) {
		infoPageContent("Geraldine Hedderick", "./pages/18.html");
	} else if (feature == marker19) {
		infoPageContent("Jane Bunce", "./pages/19.html");
	} else if (feature == marker20) {
		infoPageContent("Callaghan Creative", "./pages/20.html");
	} else if (feature == marker21) {
		infoPageContent("The Crafty Guillemot", "./pages/21.html");
	} else if (feature == marker22) {
		infoPageContent("Red Studio", "./pages/22.html");
	} else if (feature == marker23) {
		infoPageContent("Rhiannon & Paul Gash", "./pages/23.html");
	} else if (feature == marker24) {
		infoPageContent("Helen Campbell", "./pages/24.html");
	} else if (feature == marker25) {
		infoPageContent("Jenny Armour", "./pages/25.html");
	} else if (feature == marker26) {
		infoPageContent("Irene Taylor Moores", "./pages/26.html");
	} else if (feature == marker27) {
		infoPageContent("Artisan Studio", "./pages/27.html");
	} else if (feature == marker28) {
		infoPageContent("Deborah Soma-Wallace", "./pages/28.html");
	} else if (feature == marker29) {
		infoPageContent("Martin Schwaller", "./pages/29.html");
	} else if (feature == marker30) {
		infoPageContent("Leigh Fielding", "./pages/30.html");
	} else if (feature == marker31) {
		infoPageContent("Caffi Siop Mechell", "./pages/31.html");
	} else if (feature == marker32) {
		infoPageContent("Helen Grove-White", "./pages/32.html");
	} else if (feature == marker33) {
		infoPageContent("Wendy Vidler", "./pages/33.html");
	} else if (feature == marker34) {
		infoPageContent("Lynda Howard", "./pages/34.html");
	} else if (feature == marker35) {
		infoPageContent("Bryn Humphreys", "./pages/35.html");
	} else if (feature == marker36) {
		infoPageContent("Wispy Willow Creations", "./pages/36.html");
	} else if (feature == marker37and38) {
		infoPageContent("Ucheldre Centre & Peter Alexander Lane", "./pages/37-38.html");
	} else if (feature == marker39) {
		infoPageContent("Christine Williams", "./pages/39.html");
	} else if (feature == marker40) {
		infoPageContent("Janey Masters", "./pages/40.html");
	} else if (feature == marker41) {
		infoPageContent("Daniela Milicova", "./pages/41.html");
	} else if (feature == marker42) {
		infoPageContent("Phoenix Studios", "./pages/42.html");
	} else if (feature == marker43) {
		infoPageContent("Trearddur Bay Art", "./pages/43.html");
	} else if (feature == marker44) {
		infoPageContent("Anwen Roberts", "./pages/44.html");
	} else if (feature == marker45) {
		infoPageContent("Anglesey Leather", "./pages/45.html");
	} else if (feature == marker46) {
		infoPageContent("Pat Kaye", "./pages/46.html");
	} else if (feature == marker47) {
		infoPageContent("Hue Gareth Jones", "./pages/47.html");
	} else if (feature == marker48to50) {
		infoPageContent("Seapig - Cara White, Celina Nancarrow, Paula Cutler", "./pages/48-50.html");
	} else if (feature == marker51) {
		infoPageContent("Judith Donaghy", "./pages/51.html");
	} else if (feature == marker52and53) {
		infoPageContent("Jane Samuel and Caroline Brogden", "./pages/52-53.html");
	} else if (feature == marker54) {
		infoPageContent("Liz Toole", "./pages/54.html");
	} else if (feature == marker55) {
		infoPageContent("Crafty as Hel - Ynys Mon", "./pages/55.html");
	} else if (feature == marker56) {
		infoPageContent("Craig Taylor", "./pages/56.html");
	} else if (feature == marker57) {
		infoPageContent("Bryn Teg Ceramics", "./pages/57.html");
	} else if (feature == marker58) {
		infoPageContent("Carole Randall", "./pages/58.html");
	} else if (feature == marker59) {
		infoPageContent("Oriel Mon", "./pages/59.html");
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