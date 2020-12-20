var ctx1 = $("#doughnut");
var ctx2 = $("#bar1");
var ctx3 = $("#line");
var ctx4 = $("#bar2");

var data_doughnut = {
    labels: ["Service-Based", "Product-Based", "Unplaced"],
    datasets: [{
        data: [54, 76, 20],
        backgroundColor: [
            "#ea6227", "#f2a51a", "#342ead"
        ]        
    }]
};

var data_bar1 = {
    labels: ["Company1", "Company2", "Company3", "Company4", "Company5"],
    datasets: [{
        data: [39, 23, 58, 98, 65],
        backgroundColor: [
            "#0779e4", "#4cbbb9", "#77d8d8", "#00bcd4", "blue"
        ],
    }]
};

var data_line = {
    labels: ["2016", "2017", "2018", "2019", "2020"], 
    datasets: [{
        data: [46, 98, 83, 65, 79]
    }]
};

var data_bar2 = {
    labels: ["SDE", "SE", "Full Stack", "Android Developer"],
    datasets: [{
        data: [39, 23, 98, 58],
        backgroundColor: [
            "#0779e4", "#4cbbb9", "#77d8d8", "#00bcd4"
        ],
    }]
};

var myDoughnutChart = new Chart(ctx1, {
    type: 'doughnut',
    data: data_doughnut,
    options: {
        layout: {
            padding: {
                left: 30,
                right: 30,
                top: 30,
                bottom: 0
            }
        },
        tooltips: {
            enabled: true,
            backgroundColor: "white"
        }
    }
});

var barChart1 = new Chart(ctx2, {
    type: "bar",
    data: data_bar1,
    options: {
        layout: {
            padding: {
                left: 60,
                right: 60,
                top: 30,
                bottom: 0
            }
        }
    } 
});

var lineChart = new Chart(ctx3, {
    type: "line",
    data: data_line,
    options: {
        layout: {
            padding: {
                left: 60,
                right: 60,
                top: 30,
                bottom: 0
            }
        }
    } 
});

var barChart2 = new Chart(ctx4, {
    type: "bar",
    data: data_bar2,
    options: {
        layout: {
            padding: {
                left: 60,
                right: 60,
                top: 30,
                bottom: 0
            }
        }
    } 
});