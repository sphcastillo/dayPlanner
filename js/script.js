var whatsTheCurrentTime = moment().format('LT');  
console.log(whatsTheCurrentTime);

var currentHour = moment().format("HH");
console.log(currentHour);


/** Used in header **/

var dayNdate = moment().format('dddd'+ ", " + "LL");
console.log(dayNdate);

$("#currentDay").append(dayNdate);




var workDayHours = [

    { 
        hourOftheDay : 9,
        value: 9,
        dayOrNight: "am"
    },
    { 
        hourOftheDay : 10,
        value: 10,
        dayOrNight: "am"
    },
    { 
        hourOftheDay : 11,
        value: 11,
        dayOrNight: "am"
    },
    { 
        hourOftheDay : 12,
        value: 12,
        dayOrNight: "pm"    
    },
    { 
        hourOftheDay: 1,
        value: 13,
        dayOrNight: "pm"  
    },
    {
        hourOftheDay: 2,
        value: 14,
        dayOrNight: "pm"
    },
    {
        hourOftheDay: 3,
        value: 15,
        dayOrNight: "pm"
    },
    {
        hourOftheDay: 4,
        value: 16,
        dayOrNight: "pm"
    },
    {
        hourOftheDay: 5,
        value: 17,
        dayOrNight: "pm"
    }

]


for(var i = 0; i < workDayHours.length; i ++){

    var row = $("<div>").addClass("row");
    var hourColumn = $("<div>").addClass("col-2 hour").text(`${workDayHours[i].hourOftheDay}` + " am");
    var planYourDayColumn = $("<textarea>").addClass("col-9 hour");
    var buttonSaver = $("<button>").addClass("col-1 time-block saveBtn i");
    var saveIcon = $("<i>").addClass("fas fa-save");

    $(".container").append(row);
    $(row).append(hourColumn, planYourDayColumn, buttonSaver);
    buttonSaver.append(saveIcon);
}

