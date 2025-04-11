var wms_layers = [];

var format_roads_0 = new ol.format.GeoJSON();
var features_roads_0 = format_roads_0.readFeatures(json_roads_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_roads_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_roads_0.addFeatures(features_roads_0);
var lyr_roads_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_roads_0, 
                style: style_roads_0,
                popuplayertitle: "roads",
                interactive: true,
                title: '<img src="styles/legend/roads_0.png" /> roads'
            });
var format_Buildings_1 = new ol.format.GeoJSON();
var features_Buildings_1 = format_Buildings_1.readFeatures(json_Buildings_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buildings_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buildings_1.addFeatures(features_Buildings_1);
var lyr_Buildings_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buildings_1, 
                style: style_Buildings_1,
                popuplayertitle: "Buildings",
                interactive: true,
                title: '<img src="styles/legend/Buildings_1.png" /> Buildings'
            });
var format_sports1_2 = new ol.format.GeoJSON();
var features_sports1_2 = format_sports1_2.readFeatures(json_sports1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sports1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sports1_2.addFeatures(features_sports1_2);
var lyr_sports1_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sports1_2, 
                style: style_sports1_2,
                popuplayertitle: "sports1",
                interactive: true,
                title: '<img src="styles/legend/sports1_2.png" /> sports1'
            });
var format_mark_points_3 = new ol.format.GeoJSON();
var features_mark_points_3 = format_mark_points_3.readFeatures(json_mark_points_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mark_points_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mark_points_3.addFeatures(features_mark_points_3);
var lyr_mark_points_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_mark_points_3, 
                style: style_mark_points_3,
                popuplayertitle: "mark_points",
                interactive: true,
                title: '<img src="styles/legend/mark_points_3.png" /> mark_points'
            });

lyr_roads_0.setVisible(true);lyr_Buildings_1.setVisible(true);lyr_sports1_2.setVisible(true);lyr_mark_points_3.setVisible(true);
var layersList = [lyr_roads_0,lyr_Buildings_1,lyr_sports1_2,lyr_mark_points_3];
lyr_roads_0.set('fieldAliases', {'id': 'id', 'Number': 'Number', });
lyr_Buildings_1.set('fieldAliases', {'id': 'id', 'Building_n': 'Building_n', 'Area': 'Area', });
lyr_sports1_2.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_mark_points_3.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_roads_0.set('fieldImages', {'id': '', 'Number': '', });
lyr_Buildings_1.set('fieldImages', {'id': '', 'Building_n': '', 'Area': '', });
lyr_sports1_2.set('fieldImages', {'id': '', 'Name': '', });
lyr_mark_points_3.set('fieldImages', {'id': '', 'Name': '', });
lyr_roads_0.set('fieldLabels', {'id': 'no label', 'Number': 'no label', });
lyr_Buildings_1.set('fieldLabels', {'id': 'no label', 'Building_n': 'no label', 'Area': 'no label', });
lyr_sports1_2.set('fieldLabels', {'id': 'no label', 'Name': 'no label', });
lyr_mark_points_3.set('fieldLabels', {'id': 'no label', 'Name': 'no label', });
lyr_mark_points_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});