google.charts.load('current', {'packages':['line', 'corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

var chartDiv = document.getElementById('chart_div');

var data = new google.visualization.DataTable();
data.addColumn('date', 'Month');
data.addColumn('number', "Vaccination Rate");
data.addColumn('number', "New Cases per 100,000");
data.addColumn('number', "Deaths pert 1,000,000");

data.addRows([
  [new Date(2014, 0),  .26,  500,   50],
  [new Date(2014, 1),  .30,  700,   47],
  [new Date(2014, 2),  .31,  800,   47],
  [new Date(2014, 2),  .31,  800,   47],
  [new Date(2014, 2),  .31,  800,   47],  
  [new Date(2014, 3),  .36,  900,   47],
  [new Date(2014, 4),  .40,  950,   47],
  [new Date(2014, 5),  .41,  975,   47],
  [new Date(2014, 6),  .41,  1000,   47],
  [new Date(2014, 7),  .42,  975,   47],
  [new Date(2014, 8),  .44,  975,   47],
  [new Date(2014, 9),  .46,  800,   47],
  [new Date(2014, 10), .48,  700,   47],
  [new Date(2014, 11), .50,  600,   47],
]);

var materialOptions = {
  chart: {
    title: 'County Name',
    legend.position: bottom,
  },
  width: 900,
  height: 500,
  series: {
    // Gives each series an axis name that matches the Y-axis below.
    0: {axis: 'VRate'},
    1: {axis: 'Cases'}
   
  },
  axes: {
    // Adds labels to each axis; they don't have to match the axis names.
    y: {
      Temps: {label: 'Vaccintion Rate'},
      Daylight: {label: 'Infection Rate, Cases/100,00, Deaths/100,000'}
    }
  }
};

function drawMaterialChart() {
  var materialChart = new google.charts.Line(chartDiv);
  materialChart.draw(data, materialOptions);
  button.innerText = 'Change to Classic';
  button.onclick = drawClassicChart;
}

drawMaterialChart();

}