const API_KEY = 'ef19192120864351a616b5a6401950c1'
const BASE_URL = 'https://api.covidactnow.org/v2/county/'
// const $input = $('input')
const $form1 = $('#form1')
const $form2 = $('#form2')
const $vaxOne = $('#vaxOne')
const $vaxTwo = $('#vaxTwo')
const $totalCasesOne = $('#totalCasesOne')
const $totalDeathsOne = $('#totalDeathsOne')
const $totalCasesTwo = $('#totalCasesTwo')
const $totalDeathsTwo = $('#totalDeathsTwo')
// const $vaxx = $('#vax')
const $countyNameOne = $('#countyNameOne')
const $countyNameTwo = $('#countyNameTwo')
const $button2 = $('#btn')






const handleGetData = event => {
 const queryOne = $('#inputOne').val()
  $.ajax(`https://api.covidactnow.org/v2/county/${queryOne}.json?apiKey=${API_KEY}`)
   .then(function(dataOne) {
          $vaxOne.text(dataOne.metrics.vaccinationsInitiatedRatio);
          // $totalDeaths.text(dataTwo.actuals.deaths);
          $countyNameOne.text(dataOne.county);
          popOne = (dataOne.population);
          casesPerOne = (dataOne.actuals.cases) / popOne
          // console.log(casesPer)
          casesPer100One = casesPerOne * 100
          // console.log(casesPer100)
          totalCasesOne = (dataOne.actuals.cases)
          // console.log(totalCases)
          casesScaleOne= casesPer100One * 10
          $(".bar1").height(casesScaleOne + "px");
          
          function round(value, precision) {
            var multiplier = Math.pow(10, precision || 0);
            return Math.round(value * multiplier) / multiplier;
          }
          
          roundedCasesOne = round(casesPer100One, 1)
               
          $totalCasesOne.text(roundedCasesOne);
          totalDeathsOne = (dataOne.actuals.deaths)
          deathsPerOne = (dataOne.actuals.deaths) / popOne
          deathsPer100One = deathsPerOne * 10000
        //  console.log(totalDeaths)
          deathsScaleOne = deathsPer100One* 10
          $(".bar2").height(deathsScaleOne + "px");
          
          function round(value, precision) {
            var multiplier = Math.pow(10, precision || 0);
            return Math.round(value * multiplier) / multiplier;
          }
          
          roundedDeathsOne = round(deathsPer100One, 1)
               
          $totalDeathsOne.text(roundedDeathsOne);
          


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

$form1.on('onChange', handleGetData);

const handleGetData2 = event => {
 const queryTwo = $('#inputTwo').val()
  $.ajax(`https://api.covidactnow.org/v2/county/${queryTwo}.json?apiKey=${API_KEY}`)
   .then(function(dataTwo) {
          $vaxTwo.text(dataTwo.metrics.vaccinationsInitiatedRatio);
          // $totalDeaths.text(dataTwo.actuals.deaths);
          $countyNameTwo.text(dataTwo.county);
          popTwo = (dataTwo.population);
          casesPerTwo = (dataTwo.actuals.cases) / popTwo
          // console.log(casesPer)
          casesPer100Two = casesPerTwo * 100
          // console.log(casesPer100)
          totalCasesTwo = (dataTwo.actuals.cases)
          // console.log(totalCases)
          casesScaleTwo = casesPer100Two * 10
          $(".bar3").height(casesScaleTwo + "px");
          
          function round(value, precision) {
            var multiplier = Math.pow(10, precision || 0);
            return Math.round(value * multiplier) / multiplier;
          }
          
          roundedCasesTwo = round(casesPer100Two, 1)
               
          $totalCasesTwo.text(roundedCasesTwo);
          totalDeathsTwo = (dataTwo.actuals.deaths)
          deathsPerTwo = (dataTwo.actuals.deaths) / popTwo
          deathsPer100Two = deathsPerTwo * 10000
        //  console.log(totalDeaths)
          deathsScaleTwo = deathsPer100Two * 10
          $(".bar4").height(deathsScaleTwo + "px");
          
          function round(value, precision) {
            var multiplier = Math.pow(10, precision || 0);
            return Math.round(value * multiplier) / multiplier;
          }
          
          roundedDeathsTwo = round(deathsPer100Two, 1)
               
          $totalDeathsTwo.text(roundedDeathsTwo);


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
$form2.on('submit', handleGetData2);

$(".bar1").height("50px");




// document.querySelector('button').onclick = function() {
//   var barOne = document.getElementById('bar1');
//   barOne.style.width = "500px";
// }