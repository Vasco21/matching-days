var matchingDaysFunc = MatchingDays();

var matchingDateTemplate = document.querySelector(".matchingTemplate").innerHTML;

var templateCompiler = Handlebars.compile(matchingDateTemplate);

if(matchingDaysFunc.getmatchDayArray()) {
    document.querySelector("#templateDisplay").innerHTML = templateCompiler({day : matchingDaysFunc.getmatchDayArray()})
}


function handler(e){
    
    var d1 = document.getElementById('firstday').valueAsDate;

    var d2 = document.getElementById('secondday').valueAsDate;

    if(d1 && d2) {

    } else if(d1 && !d2) {

    } else if(d2 && !d1) {
    }
    if(d1) {
        var n = d1.getDay()
    }
    if(d2) {
        var n2 = d2.getDay()
    }
    
    // console.log(matchingDaysFunc.getmatchDayArray()[n].weekDays);

    matchingDaysFunc.matchColorsOfDays(n, n2);

    if(matchingDaysFunc.getmatchDayArray()) {
        document.querySelector("#templateDisplay").innerHTML = templateCompiler({day : matchingDaysFunc.getmatchDayArray()})
    }
  }