
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Full Stack', 'SDE', 'Graphic Des', 'Android Dev', 'SE'],
        datasets: [{
            label: 'Members',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                '#4fa6d5',
                '#4fa6d5',
                '#4fa6d5',
                '#4fa6d5',
                '#4fa6d5',
                
                
            ],
            borderColor: [
                '#4fa6d5',
                '#4fa6d5',
                '#4fa6d5',
                '#4fa6d5',
                '#4fa6d5',
                
                
                
            ],
            borderWidth: 1
        }]
    },
    options: {
        legend:{
            position: "top",
            align:"end",
            labels:{
                boxWidth: 20 ,
            }
        },
        animation: {
            duration: 4000,
        },

        title: {
            display: "true",
            text:"Technology Skills",
            position:"bottom",
            
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
})



var ctx2 = document.getElementById('myChart2').getContext('2d');
var myChart2 = new Chart(ctx2, {
    type: 'horizontalBar',
    data: {
        labels: ['Full Stack', 'SDE', 'Graphic Des', 'Android Dev', 'SE'],
        datasets: [{
            label: '',
            data: [12, 19, 3, 5, 9],
            backgroundColor: [
                '#4fa6d5',
                '#4fa6d5',
                '#4fa6d5',
                '#4fa6d5',
                '#4fa6d5',
                
                
            ],
            borderColor: [
                '#4fa6d5',
                '#4fa6d5',
                '#4fa6d5',
                '#4fa6d5',
                '#4fa6d5',
                
                
                
            ],
            borderWidth: 1
        }]
    },
    options: {
        legend:{
            display:false,
            position: "top",
            align:"end",
            labels:{
                boxWidth: 20 ,
            }
        },
        animation: {
            duration: 4000,
        },

        title: {
            display:"true",
            text: "Completed Projects",
            position:"bottom",
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
})


var ctx3 = document.getElementById('myChart3').getContext('2d');
var myChart3 = new Chart(ctx3, {
    type: 'doughnut',
    data: {
        labels: ['Completed Project', 'Current Project'],
        datasets: [{
            label: 'Members',
            data: [12, 19],
            backgroundColor: [
                '#4fa6d5',
                '#8fc6e9',
                
                
            ],
          
            borderWidth: 1
        }]
    },
    options: {
        legend:{
            position: "bottom",
            align:"center",
            labels:{
                boxWidth: 20 ,
            }
        },
        animation: {
            duration: 10000,
        },

        title: {
            display: false,
            text:"Technical Skills",
        },
        scales: {
            xAxes: [{

                gridLines: {
                   display: false,
                },

                ticks : {
                    display: false,
                }
             }],
             
            yAxes: [{
                gridLines: {
                    display: false,
                 },

                ticks: {
                    display:false,
                    beginAtZero: true,
                }
            }]
        }
    }
})




//gantt chart

var barOptions_stacked = {
    hover :{
        animationDuration:10
    },
    scales: {
        xAxes: [{
            label:"Duration",
            ticks: {
                beginAtZero:true,
                fontFamily: "'Calibre', sans-serif",
                fontSize:11
            },
            scaleLabel:{
                display:true,
                
            },
            gridLines: {
            }, 
            stacked: true
        }],
        yAxes: [{

            display:true,
            scaleLabel: { labelString: ["One", "Two", "Three", "Four", "Five"] },

            gridLines: {
                display:false,
                color: "#fff",
                zeroLineColor: "#fff",
                zeroLineWidth: 0
            },
            ticks: {
                fontFamily: " 'Calibre', sans-serif",
                fontSize:11,

                
            },
            stacked: true
        }]
    },
    legend:{
        display:false
    },
};

var gantt = document.getElementById("gChart1");
var ganttChart = new Chart(gantt, {    
    type: 'horizontalBar',
    data: {
        labels: ["Planning", "Design and Prototyping", "SW Development", "Testing"],
        
        datasets: [{
            data: [50,250, 550, 950],
            backgroundColor: "rgba(63,103,126,0)",
            hoverBackgroundColor: "rgba(50,90,100,0)"
            
        },{
            data: [200, 300, 400, 200 ],
            backgroundColor: ['#4fa6d5','#4fa6d5','#8fc6e9','#4fa6d5'],
        }]
    },
    options: barOptions_stacked,
});

// this part to make the tooltip only active on your real dataset
var originalGetElementAtEvent = myChart.getElementAtEvent;
myChart.getElementAtEvent = function (e) {
    return originalGetElementAtEvent.apply(this, arguments).filter(function (e) {
        return e._datasetIndex === 1;
    });
}





var gantt = document.getElementById("gChart2");
var ganttChart = new Chart(gantt, {    
    type: 'horizontalBar',
    data: {
        labels: ["Planning", "Design and Prototyping", "SW Development", "Testing"],
        
        datasets: [{
            data: [50,250, 550, 950],
            backgroundColor: "rgba(63,103,126,0)",
            hoverBackgroundColor: "rgba(50,90,100,0)"
            
        },{
            data: [200, 300, 400, 200 ],
            backgroundColor: ['#4fa6d5','#4fa6d5','#8fc6e9','#4fa6d5'],
        }]
    },
    options: barOptions_stacked,
});

// this part to make the tooltip only active on your real dataset
var originalGetElementAtEvent = myChart.getElementAtEvent;
myChart.getElementAtEvent = function (e) {
    return originalGetElementAtEvent.apply(this, arguments).filter(function (e) {
        return e._datasetIndex === 1;
    });
}



var gantt = document.getElementById("gChart3");
var ganttChart = new Chart(gantt, {    
    type: 'horizontalBar',
    data: {
        labels: ["Planning", "Design and Prototyping", "SW Development", "Testing"],
        
        datasets: [{
            data: [50,250, 550, 950],
            backgroundColor: "rgba(63,103,126,0)",
            hoverBackgroundColor: "rgba(50,90,100,0)"
            
        },{
            data: [200, 300, 400, 200 ],
            backgroundColor: ['#4fa6d5','#4fa6d5','#8fc6e9','#4fa6d5'],
        }]
    },
    options: barOptions_stacked,
});

// this part to make the tooltip only active on your real dataset
var originalGetElementAtEvent = myChart.getElementAtEvent;
myChart.getElementAtEvent = function (e) {
    return originalGetElementAtEvent.apply(this, arguments).filter(function (e) {
        return e._datasetIndex === 1;
    });
}



;



