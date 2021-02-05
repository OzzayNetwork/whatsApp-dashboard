
			Highcharts.chart('active-branches', {
                chart: {
                    type: 'bar',
                    backgroundColor: 'transparent'
                },
                title: {
                    text: 'Ticket Sessions',
                    style: {
                        color: '#12263f'
                    }
                },
                xAxis: {
                    categories: ['SaccoBenki', 'Revenuesure', 'Blink', 'BookInn', 'MbongoCash']
                },
                yAxis: {
                    gridLineColor: '#95aac9',
                    gridLineDashStyle: 'ShortDot',
                    gridLineWidth: 0.3,
                    min: 0,
                    title: {
                        text: 'Different sessions from various tickets'
                    }
                },
                legend: {
                    reversed: true
                },
                plotOptions: {
                    series: {
                        stacking: 'normal'
                    }
                },
                series: [{
                    name: 'OnHold',
                    data: [52132, 33212, 41213, 72321, 21312],
                    color:'#999'
                }, {
                    name: 'Engaged',
                    data: [25654, 24353, 33454, 34532, 64571],
                    color: '#f67615'
                }, {
                    name: 'Completed',
                    data: [45654, 34353, 32454, 37532, 40571],
                    color: '#06af00'
                },
            ]
            });
            