var ctx1 = $("#doughnut");
var ctx2 = $("#bar1");
var ctx3 = $("#line");
var ctx4 = $("#bar2");
Chart.defaults.global.legend.display = false;

var tooltip = {
    backgroundColor: "#fff",
    bodyFontColor: "#000",
    titleFontColor: "#000",
    borderColor: "rgba(0,0,0,0.5)",
    borderWidth: "2",
    bodySpacing: "5"
};

var yAxesOptions = [{
    scaleLabel: {
        display: true,
        labelString: "No. of Students",
        fontColor: "#000"
    },
    gridLines: {
        drawOnChartArea: false
    }   
}];

var xAxesOptions1 = [{
    scaleLabel: {
        display: true,
        labelString: "Company",
        fontColor: "#000"
    },
    gridLines: {
        drawOnChartArea: false
    }
}];

var xAxesOptions2 = [{
    scaleLabel: {
        display: true,
        labelString: "Year",
        fontColor: "#000"
    },
    gridLines: {
        drawOnChartArea: false
    }
}];

var xAxesOptions3 = [{
    scaleLabel: {
        display: true,
        labelString: "Profile",
        fontColor: "#000"
    },
    gridLines: {
        drawOnChartArea: false
    }
}];

var optionsForBarGraph1 = {
    animation: {
        duration: "2000",
        easing: "linear"
    },
    tooltips: tooltip,
    scales: {
        xAxes: xAxesOptions1,
        yAxes: yAxesOptions
    }
};

var optionsForBarGraph2 = {
    animation: {
        duration: "2000",
        easing: "linear"
    },
    tooltips: tooltip,
    scales: {
        xAxes: xAxesOptions3,
        yAxes: yAxesOptions
    }
};

var optionsForLineGraph = {
    animation: {
        duration: "2000",
        easing: "linear"
    },
    tooltips: tooltip,
    scales: {
        xAxes: xAxesOptions2,
        yAxes: yAxesOptions
    }
};

var data_doughnut = {
    labels: ["Service-Based", "Product-Based", "Unplaced"],
    datasets: [{
        data: [54, 76, 20],
        backgroundColor: [
            "#ea6227", "#f2a51a", "#361cc1"
        ],
        hoverBorderColor: "#000",
        hoverBorderWidth: "0.5"     
    }]
};

var data_bar1 = {
    labels: ["Company1", "Company2", "Company3", "Company4", "Company5"],
    datasets: [{
        data: [39, 23, 58, 98, 65],
        backgroundColor: [
            "#0779e4", "#4cbbb9", "#77d8d8", "#00bcd4", "blue"
        ],
        hoverBorderColor: "#000",
        hoverBorderWidth: "0.5",
        label: "No. of Students",
        maxBarThickness: 40,
        minBarThickness: 5
    }]
};

var data_line = {
    labels: ["2016", "2017", "2018", "2019", "2020"], 
    datasets: [{
        data: [46, 98, 83, 65, 79],
        borderColor: "#361cc1",
        borderWidth: "3",
        pointBackgroundColor: "#2e82ef",
        pointRadius: "4",
        pointBorderColor: "rgb(0,0,0,0)",
        hoverBorderColor: "#000",
        pointHoverRadius: "5",
        fill: false,
        hoverBorderWidth: "0.5",
        lineTension: "0.1",
        label: "No. of Students" 
    }]
};

var data_bar2 = {
    labels: ["SDE", "SE", "Full Stack", "Android Developer"],
    datasets: [{
        data: [39, 23, 98, 58],
        backgroundColor: [
            "#0779e4", "#4cbbb9", "#77d8d8", "#00bcd4"
        ],
        hoverBorderColor: "#000",
        hoverBorderWidth: "0.5",
        label: "No. of Students",
        maxBarThickness: 40,
        minBarThickness: 5
    }]
};

var myDoughnutChart = new Chart(ctx1, {
    type: 'doughnut',
    data: data_doughnut,
    options: {
        legend: {
            display: true,
            labels: {
                boxWidth: 12
            },
            position: "left"
        },
        tooltips: tooltip,
        animation: {
            duration: "2000",
            easing: "linear"
        }
    }
});

var barChart1 = new Chart(ctx2, {
    type: "bar",
    data: data_bar1,
    options: optionsForBarGraph1
});

var lineChart = new Chart(ctx3, {
    type: "line",
    data: data_line,
    options: optionsForLineGraph 
});

var barChart2 = new Chart(ctx4, {
    type: "bar",
    data: data_bar2,
    options: optionsForBarGraph2
});

$(window).on('resize', function() {
    if(window.innerWidth < 767) {
        $(".chart-area").removeClass("pt-70");
    } else {
        $(".chart-area").addClass("pt-70");
    }
});

$(window).on('load', function() {
    if(window.innerWidth < 767) {
        $(".chart-area").removeClass("pt-70");
    } else {
        $(".chart-area").addClass("pt-70");
    }
});