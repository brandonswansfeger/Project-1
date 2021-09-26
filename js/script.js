const API_KEY = 'ef19192120864351a616b5a6401950c1'
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
            $totalDeaths.text(data.actuals.deaths);
            $countyName.text(data.county);
            pop = (data.population);
            casesPer = (data.actuals.cases) / pop
            console.log(casesPer)
            casesPer100 = casesPer * 100
            console.log(casesPer100)
            totalCases = (data.actuals.cases)
            console.log(totalCases)
            casesScale = casesPer100 * 10
            $(".bar1").height(casesScale + "px");
            
            function round(value, precision) {
              var multiplier = Math.pow(10, precision || 0);
              return Math.round(value * multiplier) / multiplier;
            }
            
            roundedCases = round(casesPer100, 1)
                 
            $totalCases.text(roundedCases);
            totalDeaths = (data.actuals.deaths)
            deathsPer = (data.actuals.deaths) / pop
            deathsPer100 = deathsPer * 10000
           console.log(totalDeaths)
            deathsScale = deathsPer100 * 10
            $(".bar2").height(deathsScale + "px");
            
            function round(value, precision) {
              var multiplier = Math.pow(10, precision || 0);
              return Math.round(value * multiplier) / multiplier;
            }
            
            roundedDeaths = round(deathsPer100, 1)
                 
            $totalDeaths.text(roundedDeaths);


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
$form.on('submit', handleGetData);

$(".bar1").height("50px");




// document.querySelector('button').onclick = function() {
//   var barOne = document.getElementById('bar1');
//   barOne.style.width = "500px";
// }