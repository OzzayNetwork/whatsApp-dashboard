Highcharts.chart('emp-gender', {
    chart: {
        type: 'column',
        backgroundColor:'transparent'
    },
    title: {
        text: null
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May','Jun','Jul', 'Aug','Sep', 'Oct', 'Nov','Dec']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Employees'
        },
        gridLineColor: '#95aac9',
        gridLineDashStyle: 'ShortDot',
        gridLineWidth: 0.3,
        min: 0,
        stackLabels: {
            enabled: false,
            style: {
                fontWeight: 'bold',
                color: ( // theme
                    Highcharts.defaultOptions.title.style &&
                    Highcharts.defaultOptions.title.style.color
                ) || 'gray'
            }
        }
    },
    legend: {
        enabled:false,
        align: 'right',
        x: 2,
        verticalAlign: 'bottom',
        y: -0,
        floating: false,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || 'white',
        borderColor: '#CCC',
        borderWidth: 1,
        shadow: false
    },
    tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
    },
    plotOptions: {
        column: {
            stacking: 'normal',
            dataLabels: {
                enabled: false
            },
            borderWidth: 0,
            borderColor: 'transparent',
        }
    },
    series: [{
    		color: '#b73377',
        name: 'Females',
        data: [5, 3, 4, 7, 2,2,12,5,4,8,5,2]
    }, {
    		color:'#2ca9d9',
        name: 'Males',
        data: [2, 2, 3, 2, 1,5, 3, 4, 7, 2,2,9]
    }]
});