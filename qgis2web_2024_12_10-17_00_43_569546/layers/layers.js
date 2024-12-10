var wms_layers = [];


        var lyr_OpenStreet_0 = new ol.layer.Tile({
            'title': 'Open Street',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_RBI_50K_2023_SumateraBarat_1 = new ol.format.GeoJSON();
var features_RBI_50K_2023_SumateraBarat_1 = format_RBI_50K_2023_SumateraBarat_1.readFeatures(json_RBI_50K_2023_SumateraBarat_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RBI_50K_2023_SumateraBarat_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RBI_50K_2023_SumateraBarat_1.addFeatures(features_RBI_50K_2023_SumateraBarat_1);
var lyr_RBI_50K_2023_SumateraBarat_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RBI_50K_2023_SumateraBarat_1, 
                style: style_RBI_50K_2023_SumateraBarat_1,
                popuplayertitle: "RBI_50K_2023_Sumatera Barat",
                interactive: true,
    title: 'RBI_50K_2023_Sumatera Barat<br />\
    <img src="styles/legend/RBI_50K_2023_SumateraBarat_1_0.png" /> BA03050040<br />\
    <img src="styles/legend/RBI_50K_2023_SumateraBarat_1_1.png" /> <br />'
        });
var format_PENDIDIKAN_PT_50K_2 = new ol.format.GeoJSON();
var features_PENDIDIKAN_PT_50K_2 = format_PENDIDIKAN_PT_50K_2.readFeatures(json_PENDIDIKAN_PT_50K_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PENDIDIKAN_PT_50K_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PENDIDIKAN_PT_50K_2.addFeatures(features_PENDIDIKAN_PT_50K_2);
var lyr_PENDIDIKAN_PT_50K_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PENDIDIKAN_PT_50K_2, 
                style: style_PENDIDIKAN_PT_50K_2,
                popuplayertitle: "PENDIDIKAN_PT_50K",
                interactive: true,
    title: 'PENDIDIKAN_PT_50K<br />\
    <img src="styles/legend/PENDIDIKAN_PT_50K_2_0.png" /> Pendidikan Dasar<br />\
    <img src="styles/legend/PENDIDIKAN_PT_50K_2_1.png" /> Pendidikan Khusus<br />\
    <img src="styles/legend/PENDIDIKAN_PT_50K_2_2.png" /> Pendidikan Menengah Pertama<br />\
    <img src="styles/legend/PENDIDIKAN_PT_50K_2_3.png" /> Pendidikan Menengah Umum<br />\
    <img src="styles/legend/PENDIDIKAN_PT_50K_2_4.png" /> Pendidikan Tinggi<br />\
    <img src="styles/legend/PENDIDIKAN_PT_50K_2_5.png" /> Perpustakaan<br />\
    <img src="styles/legend/PENDIDIKAN_PT_50K_2_6.png" /> <br />'
        });
var format_PEMERINTAHAN_AR_50K_3 = new ol.format.GeoJSON();
var features_PEMERINTAHAN_AR_50K_3 = format_PEMERINTAHAN_AR_50K_3.readFeatures(json_PEMERINTAHAN_AR_50K_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEMERINTAHAN_AR_50K_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMERINTAHAN_AR_50K_3.addFeatures(features_PEMERINTAHAN_AR_50K_3);
var lyr_PEMERINTAHAN_AR_50K_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PEMERINTAHAN_AR_50K_3, 
                style: style_PEMERINTAHAN_AR_50K_3,
                popuplayertitle: "PEMERINTAHAN_AR_50K",
                interactive: true,
                title: '<img src="styles/legend/PEMERINTAHAN_AR_50K_3.png" /> PEMERINTAHAN_AR_50K'
            });

lyr_OpenStreet_0.setVisible(true);lyr_RBI_50K_2023_SumateraBarat_1.setVisible(true);lyr_PENDIDIKAN_PT_50K_2.setVisible(true);lyr_PEMERINTAHAN_AR_50K_3.setVisible(true);
var layersList = [lyr_OpenStreet_0,lyr_RBI_50K_2023_SumateraBarat_1,lyr_PENDIDIKAN_PT_50K_2,lyr_PEMERINTAHAN_AR_50K_3];
lyr_RBI_50K_2023_SumateraBarat_1.set('fieldAliases', {'NAMA WILAYAH': 'NAMA WILAYAH', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUAS WILAYAH': 'LUAS WILAYAH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_PENDIDIKAN_PT_50K_2.set('fieldAliases', {'NAMA': 'NAMA', 'LUAS': 'LUAS', 'KATPDK': 'KATPDK', 'JLPDDK': 'JLPDDK', 'FGGPDK': 'FGGPDK', 'JENIS': 'JENIS', 'FCODE': 'FCODE', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'JJGPDF': 'JJGPDF', 'JNSPDL': 'JNSPDL', });
lyr_PEMERINTAHAN_AR_50K_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FGSGOV': 'FGSGOV', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_RBI_50K_2023_SumateraBarat_1.set('fieldImages', {'NAMA WILAYAH': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUAS WILAYAH': '', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'Range', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_PENDIDIKAN_PT_50K_2.set('fieldImages', {'NAMA': 'TextEdit', 'LUAS': 'TextEdit', 'KATPDK': 'TextEdit', 'JLPDDK': 'TextEdit', 'FGGPDK': 'TextEdit', 'JENIS': 'TextEdit', 'FCODE': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'JJGPDF': 'TextEdit', 'JNSPDL': 'TextEdit', });
lyr_PEMERINTAHAN_AR_50K_3.set('fieldImages', {'NAMOBJ': '', 'FGSGOV': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_RBI_50K_2023_SumateraBarat_1.set('fieldLabels', {'NAMA WILAYAH': 'inline label - always visible', 'FCODE': 'hidden field', 'REMARK': 'hidden field', 'METADATA': 'hidden field', 'SRS_ID': 'hidden field', 'KDBBPS': 'hidden field', 'KDCBPS': 'hidden field', 'KDCPUM': 'hidden field', 'KDEBPS': 'hidden field', 'KDEPUM': 'hidden field', 'KDPBPS': 'hidden field', 'KDPKAB': 'hidden field', 'KDPPUM': 'hidden field', 'LUAS WILAYAH': 'inline label - always visible', 'TIPADM': 'hidden field', 'WADMKC': 'hidden field', 'WADMKD': 'hidden field', 'WADMKK': 'hidden field', 'WADMPR': 'hidden field', 'WIADKC': 'hidden field', 'WIADKK': 'hidden field', 'WIADPR': 'hidden field', 'WIADKD': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', });
lyr_PENDIDIKAN_PT_50K_2.set('fieldLabels', {'NAMA': 'inline label - always visible', 'LUAS': 'inline label - always visible', 'KATPDK': 'hidden field', 'JLPDDK': 'hidden field', 'FGGPDK': 'hidden field', 'JENIS': 'hidden field', 'FCODE': 'hidden field', 'SRS_ID': 'hidden field', 'LCODE': 'hidden field', 'METADATA': 'hidden field', 'JJGPDF': 'hidden field', 'JNSPDL': 'hidden field', });
lyr_PEMERINTAHAN_AR_50K_3.set('fieldLabels', {'NAMOBJ': 'inline label - always visible', 'FGSGOV': 'hidden field', 'FCODE': 'hidden field', 'REMARK': 'hidden field', 'SRS_ID': 'hidden field', 'LCODE': 'hidden field', 'METADATA': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', });
lyr_PEMERINTAHAN_AR_50K_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});