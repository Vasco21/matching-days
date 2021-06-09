
var MatchingDays = function() {
    var matchDayArray = [{weekDays: "Sunday", color : ""},{weekDays: "Monday", color : ""},{weekDays: "Tuesday", color : ""},
                        {weekDays: "Wednesday", color : ""},{weekDays: "Thursday", color : ""},{weekDays: "Friday", color : ""},
                        {weekDays: "Saturday", color : ""}];

    
    var firstDay = 0;
    var secondDay = 0;
    var colorMatch = "";

    var matchColorsOfDays = function(){
        if(firstDay == secondDay && secondDay !== null && firstDay !== null){
            matchDayArray[secondDay].color = "green";
            return matchDayArray;

        }
        if(secondDay !== null && firstDay !== null){
            matchDayArray[firstDay].color = "red";
            return matchDayArray;
        }
        if(secondDay !== null && firstDay !== null){
            matchDayArray[secondDay].color = "blue";
            return matchDayArray;
        }else{
            matchDayArray[firstDay].color = "blue";
            matchDayArray[secondDay].color = "red";
            return matchDayArray;

        }
    }
    var setFirstDay = function(str){
         firstDay = str;
    }

    var setSecondDay = function(str){
         secondDay = str;
    }
     var getAllDay = function(){
        return {
            firstDay,
            secondDay
        }
     }
     var getmatchDayArray = function(){
         return matchDayArray;
     }
     var getcolorMatch = function(){
        return colorMatch;
     }



    return {
        matchColorsOfDays,
        setFirstDay,
        setSecondDay,
        getAllDay,
        getmatchDayArray,
        getcolorMatch,   
    }
}

