describe("Matching Day factory", function(){
    it('Should return green color if you selected both dates!', function () {

        var matchDays = MatchingDays();
        assert.equal('Sunday', 'Sunday', matchDays.matchColorsOfDays("green"));
        assert.equal('Monday', 'Monday', matchDays.matchColorsOfDays("green"));
        assert.equal('Tuesday', 'Tuesday', matchDays.matchColorsOfDays("green"));
        assert.equal('Wednesday', 'Wednesday', matchDays.matchColorsOfDays("green"));
        assert.equal('Thursday', 'Thursday', matchDays.matchColorsOfDays("green"));
        assert.equal('Friday', 'Friday', matchDays.matchColorsOfDays("green"));
        assert.equal('Saturday', 'Saturday', matchDays.matchColorsOfDays("green"));  
    });
    it('Should return the value of the first selected date!', function () {

        var matchDays = MatchingDays();
        var date = new Date('2025-09-17')
        matchDays.setFirstDay(date.getDay())
        assert.equal(3, matchDays.getAllDay().firstDay);  
    });

    it('Should return the value of the second selected date!', function () {

        var matchDays = MatchingDays();
        var date = new Date('2025-01-02')
        matchDays.setSecondDay(date.getDay())
        assert.equal(4, matchDays.getAllDay().secondDay);
       
    });

    it('Should return the fisrt color for the selected date!', function () {
        var DayArray = [{weekDays: "Sunday", color : ""},{weekDays: "Monday", color : ""},{weekDays: "Tuesday", color : ""},
                        {weekDays: "Wednesday", color : ""},{weekDays: "Thursday", color : ""},{weekDays: "Friday", color : ""},
                        {weekDays: "Saturday", color : ""}];

        var matchDays = MatchingDays();
        var date = new Date('1992-01-29')
        matchDays.setFirstDay(date.getDay())
        assert.equal(3, matchDays.getAllDay().firstDay);
        assert.equal(DayArray, matchDays.matchColorsOfDays())
    });

    it('Should return the second color for the selected date!', function () {
        var DayArray = [{weekDays: "Sunday", color : ""},{weekDays: "Monday", color : ""},{weekDays: "Tuesday", color : ""},
                        {weekDays: "Wednesday", color : ""},{weekDays: "Thursday", color : ""},{weekDays: "Friday", color : ""},
                        {weekDays: "Saturday", color : ""}];

        var matchDays = MatchingDays();
        var date = new Date('1992-01-29')
        matchDays.setSecondDay(date.getDay())
        assert.equal(3, matchDays.getAllDay().secondDay);
        assert.equal(DayArray, matchDays.matchColorsOfDays())
    });




});