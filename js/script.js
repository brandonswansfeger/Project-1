const API_KEY = 'ef19192120864351a616b5a6401950c1'

// This is the endpoint URL -- https://api.covidactnow.org/v2/county/01001.timeseries.json?apiKey=ef19192120864351a616b5a6401950c1

const BASE_URL = 'https://api.covidactnow.org/v2/county/'

const $input = $('input')
const $form = $('form')
const $vax = $('#vax')
const $totalCases = $('#totalCases')
const $totalDeaths = $('#totalDeaths')
const $vaxx = $('#vax')
const $countyName = $('#countyName')
const $button2 = $('#btn')

const handleGetData = event => {
    event.preventDefault()
    const query = $input.val()
    $.ajax(`https://api.covidactnow.org/v2/county/${query}.json?apiKey=${API_KEY}`)
     .then(function(data) {
            $vax.text(data.metrics.vaccinationsInitiatedRatio);
            $totalCases.text(data.actuals.cases);
            $totalDeaths.text(data.actuals.deaths);
            $countyName.text(data.county);
            var pop = (data.population);
        // console.log(totalCases);
        //     console.log(totalDeaths);
            // console.log(pop);
        //     console.log(countyName);
        //     console.log(vax);
     }, 
            function(error) {
        console.log(error);
    });
} 
$form.on('submit', handleGetData)

google.charts.load('current', {'packages':['corechart', 'bar']});
google.charts.setOnLoadCallback(drawStuff);

function drawStuff() {

  var button = document.getElementById('change-chart');
  var chartDiv = document.getElementById('chart_div');

  var data = google.visualization.arrayToDataTable([
    ['County Name', 'New Cases per 100,000', 'Deaths per 10,000'],
    [' ', 20000, 10000],
    ['Cases per 100,000', $totalCases, $totalDeaths],
    ['Deaths per 10,000', , 2000],
    [' ', 20000, 10000],
    ]);

  var materialOptions = {
    width: 900,
    chart: {
      title: ' ',
      subtitle: ' '
    },
    series: {
      0: { axis: 'Cases per 100,000' }, // Bind series 0 to an axis named 'distance'.
      1: { axis: 'Deaths per 10,000' } // Bind series 1 to an axis named 'brightness'.
    },
    axes: {
      y: {
        distance: {label: ' '}, // Left y-axis.
        brightness: {side: 'right', label: ' '} // Right y-axis.
      }
    }
  };

  var classicOptions = {
    width: 900,
    series: {
      0: {targetAxisIndex: 0},
      1: {targetAxisIndex: 1}
    },
    title: 'County Name',
    vAxes: {
      // Adds titles to each axis.
      0: {title: ' '},
      1: {title: ' '}
    }
  };

  function drawMaterialChart() {
    var materialChart = new google.charts.Bar(chartDiv);
    materialChart.draw(data, google.charts.Bar.convertOptions(materialOptions));
    button.innerText = 'Change to Classic';
    button.onclick = drawClassicChart;
  }

  function drawClassicChart() {
    var classicChart = new google.visualization.ColumnChart(chartDiv);
    classicChart.draw(data, classicOptions);
    button.innerText = 'Change to Material';
    button.onclick = drawMaterialChart;
  }

  drawMaterialChart();
};

