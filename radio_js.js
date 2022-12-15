$(document).on("pageloaded", function (event, page) {
    
    var radiografia = {};
    var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    radiografia_fields = {
        generales: ['mes_1', 'mes_2', 'mes_3', 'anio_actual', 'anio_anterior'],
        general_table: ['cartones_acumulados-anio_anterior', 'cartones_acumulados-anio_actual', 'diferencia_anio_pasado-anio_anterior', 'diferencia_anio_pasado-anio_actual', 'porcentaje_crecimiento_vs_anio_pasado-anio_anterior', 'porcentaje_crecimiento_vs_anio_pasado-anio_actual'],
        segmento_meta_table: ['segmento', 'meta'],
        ventas_por_mes_cartones: ['ventas_por_mes_cartones_enero-anio_anterior', 'ventas_por_mes_cartones_enero-anio_actual', 'ventas_por_mes_cartones_febrero-anio_anterior', 'ventas_por_mes_cartones_febrero-anio_actual', 'ventas_por_mes_cartones_marzo-anio_anterior', 'ventas_por_mes_cartones_marzo-anio_actual', 'ventas_por_mes_cartones_abril-anio_anterior', 'ventas_por_mes_cartones_abril-anio_actual', 'ventas_por_mes_cartones_mayo-anio_anterior', 'ventas_por_mes_cartones_mayo-anio_actual', 'ventas_por_mes_cartones_junio-anio_anterior', 'ventas_por_mes_cartones_junio-anio_actual', 'ventas_por_mes_cartones_julio-anio_anterior', 'ventas_por_mes_cartones_julio-anio_actual', 'ventas_por_mes_cartones_agosto-anio_anterior', 'ventas_por_mes_cartones_agosto-anio_actual', 'ventas_por_mes_cartones_septiembre-anio_anterior', 'ventas_por_mes_cartones_septiembre-anio_actual', 'ventas_por_mes_cartones_octubre-anio_anterior', 'ventas_por_mes_cartones_octubre-anio_actual', 'ventas_por_mes_cartones_noviembre-anio_anterior', 'ventas_por_mes_cartones_noviembre-anio_actual', 'ventas_por_mes_cartones_diciembre-anio_anterior', 'ventas_por_mes_cartones_diciembre-anio_actual', 'ventas_por_mes_cartones_total-anio_anterior', 'ventas_por_mes_cartones_total-anio_actual'],         
        curva_de_volumen_helectrolitos: ['volumen_helectrolitos_enero-anio_anterior', 'volumen_helectrolitos_enero-anio_actual', 'volumen_helectrolitos_febrero-anio_anterior', 'volumen_helectrolitos_febrero-anio_actual', 'volumen_helectrolitos_marzo-anio_anterior', 'volumen_helectrolitos_marzo-anio_actual', 'volumen_helectrolitos_abril-anio_anterior', 'volumen_helectrolitos_abril-anio_actual', 'volumen_helectrolitos_mayo-anio_anterior', 'volumen_helectrolitos_mayo-anio_actual', 'volumen_helectrolitos_junio-anio_anterior', 'volumen_helectrolitos_junio-anio_actual', 'volumen_helectrolitos_julio-anio_anterior', 'volumen_helectrolitos_julio-anio_actual', 'volumen_helectrolitos_agosto-anio_anterior', 'volumen_helectrolitos_agosto-anio_actual', 'volumen_helectrolitos_septiembre-anio_anterior', 'volumen_helectrolitos_septiembre-anio_actual', 'volumen_helectrolitos_octubre-anio_anterior', 'volumen_helectrolitos_octubre-anio_actual', 'volumen_helectrolitos_noviembre-anio_anterior', 'volumen_helectrolitos_noviembre-anio_actual', 'volumen_helectrolitos_diciembre-anio_anterior', 'volumen_helectrolitos_diciembre-anio_actual'],
        // registro_y_entrenamientos_en_linea: ['registro-fecha', 'entrenamiento-en-linea-registrados', 'entrenamiento-en-linea-a-la-fecha'],x
        registro_y_entrenamientos_en_linea: ['registro_fecha', 'entrenamiento_en_linea_registrados', 'entrenamiento_en_linea_fecha'],
        skus: ['sku_mes_1-anio_anterior', 'sku_mes_2-anio_anterior', 'sku_mes_3-anio_anterior', 'sku_mes_total-anio_anterior', 'sku_mes_1-anio_actual', 'sku_mes_2-anio_actual', 'sku_mes_3-anio_actual', 'sku_mes_total-anio_actual'],
        mayor_controbucion_marca_y_cupo: ['mayor_contribucion_marca_1', 'mayor_contribucion_cupo_1', 'mayor_contribucion_porcentaje_1', 'mayor_contribucion_marca_2', 'mayor_contribucion_cupo_2', 'mayor_contribucion_porcentaje_2', 'mayor_contribucion_marca_3', 'mayor_contribucion_cupo_3', 'mayor_contribucion_porcentaje_3'],
        porcentaje_crecimiento: ['porcentaje_crecimiento_mes_1-anio_anterior', 'porcentaje_crecimiento_mes_2-anio_anterior', 'porcentaje_crecimiento_mes_3-anio_anterior', 'porcentaje_crecimiento_mes_1-anio_actual', 'porcentaje_crecimiento_mes_2-anio_actual', 'porcentaje_crecimiento_mes_3-anio_actual'],
        contribucion_marcas_premium: ['contribucion_marcas_premium_mes_1-anio_anterior', 'contribucion_marcas_premium_mes_2-anio_anterior', 'contribucion_marcas_premium_mes_3-anio_anterior', 'contribucion_marcas_premium_mes_1-anio_actual', 'contribucion_marcas_premium_mes_2-anio_actual', 'contribucion_marcas_premium_mes_3-anio_actual'],
        contribucion_marcas_premium_familias: ['contribucion_marcas_premium_famlias_mes_1-anio_anterior', 'contribucion_marcas_premium_famlias_mes_2-anio_anterior', 'contribucion_marcas_premium_famlias_mes_3-anio_anterior', 'contribucion_marcas_premium_famlias_mes_1-anio_actual', 'contribucion_marcas_premium_famlias_mes_2-anio_actual', 'contribucion_marcas_premium_famlias_mes_3-anio_actual'],
        contribucion_packs: ['contribucion_packs_mes_1-anio_anterior', 'contribucion_packs_mes_2-anio_anterior', 'contribucion_packs_mes_3-anio_anterior', 'contribucion_packs_mes_1-anio_actual', 'contribucion_packs_mes_2-anio_actual', 'contribucion_packs_mes_3-anio_actual']  
    };
    
    if(page == 'radio') {
        
        Chart.defaults.global.defaultFontColor = 'white';
        
        // antes de cargar la info
         var contenedorInformacion = document.getElementById('loadingDataRadio');
             contenedorInformacion.style.visibility = 'hidden';
             contenedorInformacion.style.opacity = '0';
         var contenedorCargando = document.getElementById('loadingRadio');
             contenedorCargando.style.visibility = 'visible';
             contenedorCargando.style.opacity = '1';
        
        $.ajax({
            url: '/participant_entries',
            type: 'GET',
            data: { _type: "External", atype: "radiografia", index_page: 1 }
        }).done(function(response) {
            if(response.state == 'success' && response.data.length > 0) {
                
                // cuando la info ya cargó
            var contenedorCargando = document.getElementById('loadingRadio');
                 contenedorCargando.style.visibility = 'hidden';
                 contenedorCargando.style.opacity = '0';
            var contenedorInformacion1 = document.getElementById('loadingDataRadio');
                 contenedorInformacion1.style.visibility = 'visible';
                 contenedorInformacion1.style.opacity = '1';
                
                initialize(response.data[0].data)
            } else {
                console.log(response)
            }
        });
        
        function initialize(response) {
            readData(response);
            principal_table();
            print_general_table();
            ventas_por_mes_cartones();
            skus();
            contribucion_marcas_premium();
            contribucion_marcas_premium_familias();
            contribucion_packs();
            mayor_controbucion_marca_y_cupo_chart();
            helectrolitos_chart();
            porcentaje_crecimiento_chart();
        }
        
        function readData(data) {
            Object.keys(radiografia_fields).forEach(function(type) {
                var fields_values = {}
                radiografia_fields[type].forEach(function(value) {
                    fields_values[value] = data[value];
                    radiografia[type] = fields_values;
                });
            });
            
            console.log({radiografia})
        }
        
        function principal_table() {
            var data = radiografia.registro_y_entrenamientos_en_linea;
            var total = Math.ceil(100 * data['entrenamiento-en-linea-registrados'] / data['entrenamiento-en-linea-a-la-fecha'])
            
            // var segmento = radiografia.segmento_meta_table.segmento;
            var segmento = SConfig.participation.nivel_empresario;
            var meta = radiografia.segmento_meta_table.meta;
            
            var modelorama = SConfig.participation.modelorama;
            var id = SConfig.participation['codigo-de-cliente'];
            
            $('#principal_table #modelorama_value').html(modelorama);
            $('#principal_table #codigo_value').html(id);
            console.log({data})
            $('#principal_table #segmento_value').html(segmento);
            $('#principal_table #meta_value').html(meta);
            $('#principal_table #estado_registro_value').html('REGISTRADO ' + data['registro-fecha']);
            
            $('#principal_table .progress-bar').attr('aria-valuenow', data['entrenamiento-en-linea-registrados']);
            $('#principal_table .progress-bar').attr('aria-valuemax', total);
            $('#principal_table .progress-bar').css('width', data['entrenamiento-en-linea-a-la-fecha'] + '%');
            
            $('#principal_table .value_1').html(data['entrenamiento-en-linea-registrados']);
            $('#principal_table .value_2').html(total);
        }
        
        function print_general_table() {
            var data = radiografia.general_table;
            
            $('#general_table .cartones_acumulados .previuos_year').html(radiografia.generales['anio_anterior']);
            $('#general_table .cartones_acumulados .previous_value').html(data['cartones_acumulados-anio_anterior']);
            $('#general_table .cartones_acumulados .actual_year').html(radiografia.generales['anio_actual']);
            $('#general_table .cartones_acumulados .actual_value').html(data['cartones_acumulados-anio_actual']);
            
            $('#general_table .diferencia_pasado .previuos_year').html(radiografia.generales['anio_anterior']);
            $('#general_table .diferencia_pasado .previous_value').html(data['diferencia_anio_pasado-anio_anterior']);
            $('#general_table .diferencia_pasado .actual_year').html(radiografia.generales['anio_actual']);
            $('#general_table .diferencia_pasado .actual_value').html(data['diferencia_anio_pasado-anio_actual']);
            
            $('#general_table .porcentaje_pasado .previuos_year').html(radiografia.generales['anio_anterior']);
            $('#general_table .porcentaje_pasado .previous_value').html(Number(data['porcentaje_crecimiento_vs_anio_pasado-anio_anterior']).toFixed(2) + '%');
            $('#general_table .porcentaje_pasado .actual_year').html(radiografia.generales['anio_actual']);
            $('#general_table .porcentaje_pasado .actual_value').html(Number(data['porcentaje_crecimiento_vs_anio_pasado-anio_actual']).toFixed(2) + '%');
        }
        
        function ventas_por_mes_cartones() {
            var data = radiografia.ventas_por_mes_cartones;
            
            var html = '<tr><th class="table_title" colspan="3">Venta por Mes Cartones</th></tr>';
            html += '<tr><th>Mes</th><th>' + radiografia.generales['anio_anterior'] + '</th><th>' + radiografia.generales['anio_actual'] + '</th></tr>';
            html += '<tr><td>' + months[0] + '</td><td class="color-blue">' + data['ventas_por_mes_cartones_enero-anio_anterior'] + '</td><td class="color-yellow">' + data['ventas_por_mes_cartones_enero-anio_actual'] + '</td></tr>';
            html += '<tr><td>' + months[1] + '</td><td class="color-blue">' + data['ventas_por_mes_cartones_febrero-anio_anterior'] + '</td><td class="color-yellow">' + data['ventas_por_mes_cartones_febrero-anio_actual'] + '</td></tr>';
            html += '<tr><td>' + months[2] + '</td><td class="color-blue">' + data['ventas_por_mes_cartones_marzo-anio_anterior'] + '</td><td class="color-yellow">' + data['ventas_por_mes_cartones_marzo-anio_actual'] + '</td></tr>';
            html += '<tr><td>' + months[3] + '</td><td class="color-blue">' + data['ventas_por_mes_cartones_abril-anio_anterior'] + '</td><td class="color-yellow">' + data['ventas_por_mes_cartones_abril-anio_actual'] + '</td></tr>';
            html += '<tr><td>' + months[4] + '</td><td class="color-blue">' + data['ventas_por_mes_cartones_mayo-anio_anterior'] + '</td><td class="color-yellow">' + data['ventas_por_mes_cartones_mayo-anio_actual'] + '</td></tr>';
            html += '<tr><td>' + months[5] + '</td><td class="color-blue">' + data['ventas_por_mes_cartones_junio-anio_anterior'] + '</td><td class="color-yellow">' + data['ventas_por_mes_cartones_junio-anio_actual'] + '</td></tr>';
            html += '<tr><td>' + months[6] + '</td><td class="color-blue">' + data['ventas_por_mes_cartones_julio-anio_anterior'] + '</td><td class="color-yellow">' + data['ventas_por_mes_cartones_julio-anio_actual'] + '</td></tr>';
            html += '<tr><td>' + months[7] + '</td><td class="color-blue">' + data['ventas_por_mes_cartones_agosto-anio_anterior'] + '</td><td class="color-yellow">' + data['ventas_por_mes_cartones_agosto-anio_actual'] + '</td></tr>';
            html += '<tr><td>' + months[8] + '</td><td class="color-blue">' + data['ventas_por_mes_cartones_septiembre-anio_anterior'] + '</td><td class="color-yellow">' + data['ventas_por_mes_cartones_septiembre-anio_actual'] + '</td></tr>';
            html += '<tr><td>' + months[9] + '</td><td class="color-blue">' + data['ventas_por_mes_cartones_octubre-anio_anterior'] + '</td><td class="color-yellow">' + data['ventas_por_mes_cartones_octubre-anio_actual'] + '</td></tr>';
            html += '<tr><td>' + months[10] + '</td><td class="color-blue">' + data['ventas_por_mes_cartones_noviembre-anio_anterior'] + '</td><td class="color-yellow">' + data['ventas_por_mes_cartones_noviembre-anio_actual'] + '</td></tr>';
            html += '<tr><td>' + months[11] + '</td><td class="color-blue">' + data['ventas_por_mes_cartones_diciembre-anio_anterior'] + '</td><td class="color-yellow">' + data['ventas_por_mes_cartones_diciembre-anio_actual'] + '</td></tr>';
            html += '<tr class="total"><th>Total</th><th class="color-blue">' + data['ventas_por_mes_cartones_total-anio_anterior'] + '</th><th class="color-yellow">' + data['ventas_por_mes_cartones_total-anio_actual'] + '</th></tr>';   
            $('#ventas_por_mes_cartones').html(html);
        }
        
        function skus() {
            var data = radiografia.skus;
            var html = '<tr><th>MES</th><th>' + radiografia.generales['anio_anterior'] + '</th><th>' + radiografia.generales['anio_actual'] + '</th></tr>';    
            html += '<tr><td>' + radiografia.generales['mes_1'] + '</td><td class="color-blue">' + data['sku_mes_1-anio_anterior'] + '</td><td class="color-yellow">' + data['sku_mes_1-anio_actual'] + '</td></tr>';   
            html += '<tr><td>' + radiografia.generales['mes_2'] + '</td><td class="color-blue">' + data['sku_mes_2-anio_anterior'] + '</td><td class="color-yellow">' + data['sku_mes_2-anio_actual'] + '</td></tr>';   
            html += '<tr><td>' + radiografia.generales['mes_3'] + '</td><td class="color-blue">' + data['sku_mes_3-anio_anterior'] + '</td><td class="color-yellow">' + data['sku_mes_3-anio_actual'] + '</td></tr>';   
            html += '<tr class="total"><th>Total</th><th class="color-blue">' + data['sku_mes_total-anio_anterior'] + '</th><th class="color-yellow">' + data['sku_mes_total-anio_actual'] + '</th></tr>';   
            $('#skus').html(html);
        }
        
        function contribucion_marcas_premium() {
            var data = radiografia.contribucion_marcas_premium;
            var html = '<tr><th>MES</th><th>' + radiografia.generales['anio_anterior'] + '</th><th>' + radiografia.generales['anio_actual'] + '</th></tr>';    
            html += '<tr><td>' + radiografia.generales['mes_1'] + '</td><td>' + Number(data['contribucion_marcas_premium_mes_1-anio_anterior']).toFixed(2) + '%</td><td>' + Number(data['contribucion_marcas_premium_mes_1-anio_actual']).toFixed(2) + '%</td></tr>';   
            html += '<tr><td>' + radiografia.generales['mes_2'] + '</td><td>' + Number(data['contribucion_marcas_premium_mes_2-anio_anterior']).toFixed(2) + '%</td><td>' + Number(data['contribucion_marcas_premium_mes_2-anio_actual']).toFixed(2) + '%</td></tr>';   
            html += '<tr><td>' + radiografia.generales['mes_3'] + '</td><td>' + Number(data['contribucion_marcas_premium_mes_3-anio_anterior']).toFixed(2) + '%</td><td>' + Number(data['contribucion_marcas_premium_mes_3-anio_actual']).toFixed(2) + '%</td></tr>';   
            $('#contribucion_marcas_premium').html(html);
        }
        
        function contribucion_marcas_premium_familias() {
            var data = radiografia.contribucion_marcas_premium_familias;
            var html = '<tr><th>MES</th><th>' + radiografia.generales['anio_anterior'] + '</th><th>' + radiografia.generales['anio_actual'] + '</th></tr>';    
            html += '<tr><td>' + radiografia.generales['mes_1'] + '</td><td>' + Number(data['contribucion_marcas_premium_famlias_mes_1-anio_anterior']).toFixed(2) + '%</td><td>' + Number(data['contribucion_marcas_premium_famlias_mes_1-anio_actual']).toFixed(2) + '%</td></tr>';   
            html += '<tr><td>' + radiografia.generales['mes_2'] + '</td><td>' + Number(data['contribucion_marcas_premium_famlias_mes_2-anio_anterior']).toFixed(2) + '%</td><td>' + Number(data['contribucion_marcas_premium_famlias_mes_2-anio_actual']).toFixed(2) + '%</td></tr>';   
            html += '<tr><td>' + radiografia.generales['mes_3'] + '</td><td>' + Number(data['contribucion_marcas_premium_famlias_mes_3-anio_anterior']).toFixed(2) + '%</td><td>' + Number(data['contribucion_marcas_premium_famlias_mes_3-anio_actual']).toFixed(2) + '%</td></tr>';   
            $('#contribucion_marcas_premium_familias').html(html);
        }
        
        function contribucion_packs() {
            var data = radiografia.contribucion_packs;
            var html = '<tr><th>MES</th><th>' + radiografia.generales['anio_anterior'] + '</th><th>' + radiografia.generales['anio_actual'] + '</th></tr>';    
            html += '<tr><td>' + radiografia.generales['mes_1'] + '</td><td>' + Number(data['contribucion_packs_mes_1-anio_anterior']).toFixed(2) + '%</td><td>' + Number(data['contribucion_packs_mes_1-anio_actual']).toFixed(2) + '%</td></tr>';   
            html += '<tr><td>' + radiografia.generales['mes_2'] + '</td><td>' + Number(data['contribucion_packs_mes_2-anio_anterior']).toFixed(2) + '%</td><td>' + Number(data['contribucion_packs_mes_2-anio_actual']).toFixed(2) + '%</td></tr>';   
            html += '<tr><td>' + radiografia.generales['mes_3'] + '</td><td>' + Number(data['contribucion_packs_mes_3-anio_anterior']).toFixed(2) + '%</td><td>' + Number(data['contribucion_packs_mes_3-anio_actual']).toFixed(2) + '%</td></tr>';   
            $('#contribucion_packs').html(html);
        }
        
        function mayor_controbucion_marca_y_cupo_chart() {
            var values = radiografia.mayor_controbucion_marca_y_cupo;
            var sum = Number(values.mayor_contribucion_porcentaje_1) + Number(values.mayor_contribucion_porcentaje_2) + Number(values.mayor_contribucion_porcentaje_3);  
            
            var circle_1 = Number(values.mayor_contribucion_porcentaje_1) / sum * 100;
            var circle_1_html = '<h3 class="marca">' + values.mayor_contribucion_marca_1 + '</h3><p class="cupo">' + values.mayor_contribucion_cupo_1 + '</p><p class="percentage">' + values.mayor_contribucion_porcentaje_1 + '%</p>';    
            var circle_2 = Number(values.mayor_contribucion_porcentaje_2) / sum * 100;
            var circle_2_html = '<h3 class="marca">' + values.mayor_contribucion_marca_2 + '</h3><p class="cupo">' + values.mayor_contribucion_cupo_2 + '</p><p class="percentage">' + values.mayor_contribucion_porcentaje_2 + '%</p>';    
            var circle_3 = Number(values.mayor_contribucion_porcentaje_3) / sum * 100;
            var circle_3_html = '<h3 class="marca">' + values.mayor_contribucion_marca_3 + '</h3><p class="cupo">' + values.mayor_contribucion_cupo_3 + '</p><p class="percentage">' + values.mayor_contribucion_porcentaje_3 + '%</p>';    
            
            $('#mayor_contribucion_marca_y_cupo_chart .circle_1').html(circle_1_html);
            $('#mayor_contribucion_marca_y_cupo_chart .circle_2').html(circle_2_html);
            $('#mayor_contribucion_marca_y_cupo_chart .circle_3').html(circle_3_html);
            
            var container_width = $("#mayor_contribucion_marca_y_cupo_chart").width();
            var circle_1_radio = (circle_1 * container_width / 100 - 10) + 'px';
            var circle_2_radio = (circle_2 * container_width / 100 - 10) + 'px';
            var circle_3_radio = (circle_3 * container_width / 100 - 10) + 'px';
            
            $('#mayor_contribucion_marca_y_cupo_chart .circle_1').css({
                'width': circle_1_radio,
                'height': circle_1_radio
            });
            $('#mayor_contribucion_marca_y_cupo_chart .circle_2').css({
                'width': circle_2_radio,
                'height': circle_2_radio
            });
            $('#mayor_contribucion_marca_y_cupo_chart .circle_3').css({
                'width': circle_3_radio,
                'height': circle_3_radio
            });
        }
        
        function porcentaje_crecimiento_chart() {
            var data_anterior = { label: radiografia.generales['anio_anterior'], data: [], backgroundColor: '#66ccff', borderColor: '#66ccff', fill: false, borderWidth: 1 }
            var data_actual = { label: radiografia.generales['anio_actual'], data: [], backgroundColor: '#ffcc33', borderColor: '#ffcc33', fill: false, borderWidth: 1 }
            
            Object.keys(radiografia.porcentaje_crecimiento).forEach(function(key) {
                var value = radiografia.porcentaje_crecimiento[key]
                if(key.includes('anio_anterior')) {
                    data_anterior.data.push(value)
                } else {
                    data_actual.data.push(value)
                }
            });
            
            var porcentaje_crecimiento_chart = document.getElementById('porcentaje_crecimiento_chart').getContext('2d');
            var myChart2 = new Chart(porcentaje_crecimiento_chart, {
                type: 'bar',
                data: {
                    labels: [radiografia.generales['mes_1'], radiografia.generales['mes_2'], radiografia.generales['mes_3']],
                    datasets: [data_anterior, data_actual],
                },
                options: {
                    responsive: true,
                    scales: {
                        yAxes: [
                            {
                                ticks: {
                                    beginAtZero: true,
                                    callback: function(value, index, values){return value + '%';},
                                },
                                gridLines: {
                                    color: 'rgba(255, 255, 255, 0.1)',
                                    zeroLineWidth: 0,
                                    drawTicks: true,
                                    tickMarkLength: 5
                                }
                            }
                        ],
                        xAxes: [
                            {
                                gridLines: {
                                    color: 'rgba(255, 255, 255, 0.1)',
                                    zeroLineWidth: 0,
                                    drawTicks: true,
                                    tickMarkLength: 5
                                }
                            }
                        ]
                    }
                }
            });
        }
        
        function helectrolitos_chart() {
            var data_anterior = { label: radiografia.generales['anio_anterior'], data: [], backgroundColor: '#66ccff', borderColor: '#66ccff', fill: false, borderWidth: 1 }
            var data_actual = { label: radiografia.generales['anio_actual'], data: [], backgroundColor: '#ffcc33', borderColor: '#ffcc33', fill: false, borderWidth: 1 }
            
            Object.keys(radiografia.curva_de_volumen_helectrolitos).forEach(function(key) {
                var value = Number(radiografia.curva_de_volumen_helectrolitos[key])
                if(key.includes('anio_anterior')) {
                    data_anterior.data.push(value)
                } else {
                    data_actual.data.push(value)
                }
            });
            
            var helectrolitos_chart = document.getElementById('helectrolitos_chart').getContext('2d');
            var myChart = new Chart(helectrolitos_chart, {
                type: 'line',
                data: {
                    labels: months,
                    datasets: [data_anterior, data_actual],
                },
                options: {
                    responsive: true,
                    scales: {
                        yAxes: [
                            {
                                gridLines: {
                                    color: 'rgba(255, 255, 255, 0.1)',
                                    zeroLineWidth: 0,
                                    drawTicks: true,
                                    tickMarkLength: 5
                                }
                            }
                        ],
                        xAxes: [
                            {
                                gridLines: {
                                    color: 'rgba(255, 255, 255, 0.1)',
                                    zeroLineWidth: 0,
                                    drawTicks: true,
                                    tickMarkLength: 5
                                }
                            }
                        ]
                    }
                }
            });
        }
        
    }
});
