export const machine1 = () => {
    var config = {
        type: 'radar',
        data: {
            labels: [
                'Enumeration', 'CTF-Like', 'Custom Exploration', 'Real-life', 'CVE'
            ],
            datasets: [{
                label: 'Problem Setter\'s Ratings',
                backgroundColor: "#ff000054",
                borderColor: 'red',
                pointBackgroundColor: 'red',
                data: [
                    3,
                    2,
                    1,
                    5,
                    3,
                ]
            }, ]
        },
        options: {
            legend: {
                display: false,
            },
            scale: {
                ticks: {
                    display: false,
                },
                gridLines: {
                    color: "#FFF"
                }
            }
        }
    };

    window.myRadar = new Chart(document.getElementById('machineChart'), config);
    var matrixOptions = {
        legend: {
            display: false,
            position: 'left',
        },
        title: {
            display: false,
        },
        elements: {
            line: {
                tension: 0,
                borderWidth: 3
            }
        },
        scale: {
            pointLabels: {
                fontColor: ['#00F', '#F00']
            },
            display: true,
            ticks: {
                display: false,
                max: 10,
                min: 0
            },
            gridLines: {
                color: "#37393F"
            },
        }
    };
    var ctx = document.getElementById('machine_id_1_chart').getContext('2d');
    window.myBar = new Chart(ctx, {
        type: 'bar',
        data: barChartData = {
            labels: ['Easy1', 'Easy2', 'Medium3', 'Hard4', 'Hard5'],
            datasets: [{
                label: 'Dataset 1',
                backgroundColor: [
                    '#17b06b', '#17b06b', '#ffce56', '#ef121b', '#ef121b'
                ],
                borderColor: [
                    '#17b06b', '#17b06b', '#ffce56', '#ef121b', '#ef121b'
                ],
                borderWidth: 1,
                data: [11, 2, 13, 41, 15, 0]
            }]

        },
        options: {
            tooltips: {
                enabled: false,
            },
            responsive: false,
            legend: {
                display: false,
            },
            scales: {
                yAxes: [{
                    display: false
                }],
                xAxes: [{
                    display: false
                }]
            }
        }
    });
}