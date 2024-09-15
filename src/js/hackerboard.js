function hackdemodata(){

        var s1 = {
            label: 'ashawe',
            borderColor: 'blue',
            steppedLine: true,
            data: [{
                x: '2017-01-06 00:00:00',
                y: '00'
            }, {
                x: '2017-01-06 00:07:00',
                y: 100
            }, {
                x: '2017-01-06 00:15:40',
                y: 300
            }, {
                x: '2017-01-06 00:18:10',
                y: 260
            }, {
                x: '2017-01-06 00:20:40',
                y: 350
            }, {
                x: '2017-01-06 00:30:20',
                y: 400
            }, {
                x: '2017-01-06 00:40:10',
                y: 550
            }, ]
        };

        var s3 = {
            label: 'anonymous',
            borderColor: 'green',
            steppedLine: true,
            data: [{
                x: '2017-01-06 00:00:00',
                y: '00'
            }, {
                x: '2017-01-06 00:10:00',
                y: 120
            }, {
                x: '2017-01-06 00:15:00',
                y: 400
            }, {
                x: '2017-01-06 00:21:00',
                y: 360
            }, {
                x: '2017-01-06 00:25:00',
                y: 390
            }, {
                x: '2017-01-06 00:40:00',
                y: 650
            }, ]
        };

        var s2 = {
            label: 'CR007',
            borderColor: 'red',
            steppedLine: true,
            data: [{
                x: '2017-01-06 00:00:00',
                y: '00'
            }, {
                x: '2017-01-06 00:05:00',
                y: 150
            }, {
                x: '2017-01-06 00:15:00',
                y: 350
            }, {
                x: '2017-01-06 00:21:00',
                y: 500
            }, {
                x: '2017-01-06 00:25:00',
                y: 800
            }, {
                x: '2017-01-06 00:40:00',
                y: 900
            }, {
                x: '2017-01-06 00:44:59',
                y: 1900
            }, ]
        };

        var s4 = {
            label: 'liveoverflow',
            borderColor: 'pink',
            steppedLine: true,
            data: [{
                x: '2017-01-06 00:00:00',
                y: '00'
            }, {
                x: '2017-01-06 00:03:00',
                y: 100
            }, {
                x: '2017-01-06 00:07:34',
                y: 250
            }, {
                x: '2017-01-06 00:10:45',
                y: 500
            }, {
                x: '2017-01-06 00:13:29',
                y: 650
            }, {
                x: '2017-01-06 00:21:00',
                y: 900
            }, {
                x: '2017-01-06 00:33:59',
                y: 1350
            }, {
                x: '2017-01-06 00:39:00',
                y: 1680
            }, {
                x: '2017-01-06 00:42:59',
                y: 2540
            }, ]
        };

        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
            type: 'line',
            data: {
                datasets: [s1, s2, s3, s4]
            },
            options: {
                scales: {
                    yAxes: [{
                        type: 'linear'
                    }],
                    xAxes: [{
                        type: 'time',
                        distribution: 'series', // or linear
                        time: {
                            unit: 'minute',
                            displayFormats: {
                                minute: 'mm:ss'
                            },
                            tooltipFormat: 'mm:ss'
                        }
                    }]
                }
            }
        });

}
