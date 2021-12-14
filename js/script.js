const API_KEY = 'ef19192120864351a616b5a6401950c1'
const BASE_URL = 'https://api.covidactnow.org/v2/county/'

const $form1 = $('#form1')
const $form2 = $('#form2')
const $vaxOne = $('#vaxOne')
const $vaxTwo = $('#vaxTwo')
const $totalCasesOne = $('#totalCasesOne')
const $totalDeathsOne = $('#totalDeathsOne')
const $totalCasesTwo = $('#totalCasesTwo')
const $totalDeathsTwo = $('#totalDeathsTwo')

const $countyNameOne = $('#countyNameOne')
const $countyNameTwo = $('#countyNameTwo')
const $button2 = $('#btn')





//county one ajax call

const handleGetData = event => {
 const queryOne = $('#inputOne').val()
  $.ajax(`https://api.covidactnow.org/v2/county/${queryOne}.json?apiKey=${API_KEY}`)
   .then(function(dataOne) {
          $vaxOne.text(dataOne.metrics.vaccinationsInitiatedRatio);
//        
          $countyNameOne.text(dataOne.county);
          popOne = (dataOne.population);
          casesPerOne = (dataOne.actuals.cases) / popOne
//
//calculation of case rate and conversion to pixels for bar chart     
//
          casesPer100One = casesPerOne * 100
          
          totalCasesOne = (dataOne.actuals.cases)
         
          casesScaleOne= casesPer100One * 5
          $(".bar1").height(casesScaleOne + "px");

//case rate rounded for display purposes

          function round(value, precision) {
            var multiplier = Math.pow(10, precision || 0);
            return Math.round(value * multiplier) / multiplier;
          }
          
          roundedCasesOne = round(casesPer100One, 1)
               
          $totalCasesOne.text(roundedCasesOne);

 //calculation of death rate and conversion to pixels for bar chart              
          totalDeathsOne = (dataOne.actuals.deaths)
          deathsPerOne = (dataOne.actuals.deaths) / popOne
          deathsPer100One = deathsPerOne * 10000
      
          deathsScaleOne = deathsPer100One* 5
          $(".bar2").height(deathsScaleOne + "px");
          
          function round(value, precision) {
            var multiplier = Math.pow(10, precision || 0);
            return Math.round(value * multiplier) / multiplier;
          }
          
          roundedDeathsOne = round(deathsPer100One, 1);
               
          $totalDeathsOne.text(roundedDeathsOne);
   }, 
          function(error) {
      console.log(error);
  });
} 

// County Two Ajax call
$form1.on('onChange', handleGetData);
const handleGetData2 = event => {
 const queryTwo = $('#inputTwo').val()
  $.ajax(`https://api.covidactnow.org/v2/county/${queryTwo}.json?apiKey=${API_KEY}`)
   .then(function(dataTwo) {
          $vaxTwo.text(dataTwo.metrics.vaccinationsInitiatedRatio);
          $countyNameTwo.text(dataTwo.county);
          popTwo = (dataTwo.population);
          casesPerTwo = (dataTwo.actuals.cases) / popTwo
          casesPer100Two = casesPerTwo * 100
          totalCasesTwo = (dataTwo.actuals.cases)
          casesScaleTwo = casesPer100Two * 5
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
          deathsScaleTwo = deathsPer100Two * 5
          $(".bar4").height(deathsScaleTwo + "px");
          
          function round(value, precision) {
            var multiplier = Math.pow(10, precision || 0);
            return Math.round(value * multiplier) / multiplier;
          }
          
          roundedDeathsTwo = round(deathsPer100Two, 1)
               
          $totalDeathsTwo.text(roundedDeathsTwo);
   }, 
   
          function(error) {
      console.log(error);
  });
} 
$form2.on('onChange', handleGetData2);






