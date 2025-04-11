var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_roads_1 = new ol.format.GeoJSON();
var features_roads_1 = format_roads_1.readFeatures(json_roads_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_roads_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_roads_1.addFeatures(features_roads_1);
var lyr_roads_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_roads_1, 
                style: style_roads_1,
                popuplayertitle: "roads",
                interactive: true,
                title: '<img src="styles/legend/roads_1.png" /> roads'
            });
var format_Buildings_2 = new ol.format.GeoJSON();
var features_Buildings_2 = format_Buildings_2.readFeatures(json_Buildings_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buildings_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buildings_2.addFeatures(features_Buildings_2);
var lyr_Buildings_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buildings_2, 
                style: style_Buildings_2,
                popuplayertitle: "Buildings",
                interactive: true,
                title: '<img src="styles/legend/Buildings_2.png" /> Buildings'
            });
var format_sports1_3 = new ol.format.GeoJSON();
var features_sports1_3 = format_sports1_3.readFeatures(json_sports1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sports1_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sports1_3.addFeatures(features_sports1_3);
var lyr_sports1_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sports1_3, 
                style: style_sports1_3,
                popuplayertitle: "sports1",
                interactive: true,
                title: '<img src="styles/legend/sports1_3.png" /> sports1'
            });
var format_mark_points_4 = new ol.format.GeoJSON();
var features_mark_points_4 = format_mark_points_4.readFeatures(json_mark_points_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mark_points_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mark_points_4.addFeatures(features_mark_points_4);
var lyr_mark_points_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_mark_points_4, 
                style: style_mark_points_4,
                popuplayertitle: "mark_points",
                interactive: true,
                title: '<img src="styles/legend/mark_points_4.png" /> mark_points'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_roads_1.setVisible(true);lyr_Buildings_2.setVisible(true);lyr_sports1_3.setVisible(true);lyr_mark_points_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_roads_1,lyr_Buildings_2,lyr_sports1_3,lyr_mark_points_4];
lyr_roads_1.set('fieldAliases', {'id': 'id', 'Number': 'Number', });
lyr_Buildings_2.set('fieldAliases', {'id': 'id', 'Building_n': 'Building_n', 'Area': 'Area', });
lyr_sports1_3.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_mark_points_4.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_roads_1.set('fieldImages', {'id': '', 'Number': '', });
lyr_Buildings_2.set('fieldImages', {'id': '', 'Building_n': '', 'Area': '', });
lyr_sports1_3.set('fieldImages', {'id': '', 'Name': '', });
lyr_mark_points_4.set('fieldImages', {'id': '', 'Name': '', });
lyr_roads_1.set('fieldLabels', {'id': 'no label', 'Number': 'no label', });
lyr_Buildings_2.set('fieldLabels', {'id': 'no label', 'Building_n': 'no label', 'Area': 'no label', });
lyr_sports1_3.set('fieldLabels', {'id': 'header label - visible with data', 'Name': 'no label', });
lyr_mark_points_4.set('fieldLabels', {'id': 'no label', 'Name': 'no label', });
lyr_mark_points_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});