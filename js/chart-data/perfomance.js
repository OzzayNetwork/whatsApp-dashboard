 // Create the chart
//Highcharts.setOptions({
//    colors: ['#67ff6b']
//});
Highcharts.chart('perfomance', {
    chart: {
        backgroundColor: 'transparent',
        type: 'column'
    },
    title: {
        text: 'Menu Visits Summary',
        style: {
            color: '#a5a8ad'
        }
    },

    accessibility: {
        announceNewData: {
            enabled: true
        }
    },

    plotOptions: {
        series: {
            borderWidth: 0,
            borderColor: '#67ff6b'
        }
    },

    xAxis: {
        type: 'category',
        lineColor: '#a5a8ad',
        lineWidth: 1,
        labels: {
            style: {
                color: '#a5a8ad'
            }
        }
    },
    yAxis: {
        title: {
            text: 'Total Menu Visists',
            gridLineColor: '#2e3134',
            labels: {
                style: {
                    color: '#a5a8ad'
                }
            }
        }

    },
    legend: {
        enabled: true,
        backgroundColor: 'transparent',
		 color: '#a5a8ad',
		  itemStyle: {
//                 fontSize:'35px',
//                 font: '35pt Trebuchet MS, Verdana, sans-serif',
                 color: '#a5a8ad'
              },
              itemHoverStyle: {
                 color: 'white'
              },
              itemHiddenStyle: {
                 color: '#444'
              },
        style: {
            color: '#a5a8ad',

        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:16px; font-weight:800;">{series.name}</span><br>',
        pointFormat: '<span  style="font-size:16px; font-weight:800; color:{point.color}">{point.name}</span>: <b style="color:{point.color}">KES {point.y}</b><br/>',
        formatter: function () {

            var point = this.point,
                s = '<span style="font-size:16px; font-weight:800;">' + this.series.name + '</span><br/><p><span  style="font-size:16px; font-weight:800; color:{point.color}>' + point.name + '</span> :<b> KES ' + Highcharts.numberFormat(point.y, 0, '.', ',') + '' + '<br/></p>';
            if (point.drilldown) {
                s += '<p><br/> Click to view <b>' + point.name + '</b> Collections </p>';
            }
            return s;
        },
        crosshairs: true


    },
    lang: {
        thousandsSep: ','
    },

    series: [{
        name: "Menu Visits",
        colorByPoint: false,
		color: '#075e54',// blue
        data: [{
                name: "Loan repayemt",
                y: 2000000,
                drilldown: "Parking"
            },
            {
                name: "Fosa Deposit",
                y: 300000,
                drilldown: "Business Permits"
            },
            {
                name: "Account withdrawal  ",
                y: 2536000,
                drilldown: "Land Rates"
            },
            {
                name: "Dividend withdrawal",
                y: 3258023,
                drilldown: "Rent"
            },
            {
                name: "LITTLE ANGEL SAVINGS",
                y: 2225895,
                drilldown: "Bill Payments"
            },
            {
                name: "Holiday Savings",
                y: 2225895,
                drilldown: "Bill Payments"
            },
        ]
    }],
    drilldown: {
        series: [{
            name: 'Parking',
            id: 'Parking',
            data: [{
                    name: 'Daily Parking',
                    y: 22,
                    drilldown: 'Daily Parking'
                },
                {
                    name: 'Seasonal Parking',
                    y: 22,
                    drilldown: 'Seasonal Parking'
                },
                {
                    name: 'Offstreet Parking',
                    y: 224,
                    drilldown: 'Offstreet Parking'
                },
                {
                    name: 'Parking Status',
                    y: 202,
                    drilldown: 'Parking Status'
                },
            ]
        }, {
            name: 'Chrome',
            id: 'Chrome',
            data: [
                ['v40.0', 5],
                ['v50.0', 7],
                ['v60.0', 8],
                ['v70.0', 17],
                ['v80.0', 37],
                ['v89.0', 27]
            ]
        }, {
            name: 'Daily Parking',
            id: 'Daily Parking',
			type: 'spline',
            data: [
                ['CBD', 17.2],
                ['KIJABE', 25.2],
                ['WESTLANDS', 25.2],
                ['KILIMANI', 5],
                ['UPPER_HILL', 7],
                ['KOMBO', 8],
                ['COMM', 17],
                ['NGARA', 37],
                ['HIGHRIDGE', 27],
                ['IND.AREA', 17.2],
                ['YAYA', 25.2],
                ['PARKING_BORDER', 5],
                ['HURLINGHAM', 7],
                ['LAVINGTON', 8],
                ['KAREN', 17],
                ['BURU', 37],
                ['PANGANI', 27],
                ['MUTHAIGA', 27],
                ['EASTLEIGH', 8],
                ['NGONG', 17],
                ['UTAWALA', 37],
            ]
        }]
    }
});
