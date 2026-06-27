// Get the drawing context on the canvas 
var densityCanvas = document.getElementById("consulting-chart");
if (densityCanvas) {
    var densityCanvas = document.getElementById("consulting-chart").getContext('2d');
    Chart.defaults.global.defaultFontFamily = "Marcellus";
    Chart.defaults.global.defaultFontSize = 14;


    var barChart = new Chart(densityCanvas, {
        type: 'bar',
        data: {
            labels: theme_options.year,
            datasets: [{
                label: 'Consulting Rate',
                backgroundColor: '#324662',
                borderColor: '#324662',
                data: theme_options.consult,
            }, {
                label: 'Success Rate',
                backgroundColor: '#789FC0',
                borderColor: '#789FC0',
                data: theme_options.success,
            }]
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Chart.js Bar Chart - Stacked'
                },
            },
            interaction: {
                intersect: false,
            },
            scales: {
                x: {
                    stacked: true,
                },
                y: {
                    stacked: true
                }
            },
            responsive: true
        }
    });
}