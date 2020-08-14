var whatsTheCurrentTime = moment().format('LT');  
console.log(whatsTheCurrentTime);
var userPlanObject = {};


if(localStorage.getItem("plans")){

    userPlanObject = JSON.parse(localStorage.getItem("plans"));
}



var currentHour = moment().format("HH");
console.log(currentHour);
console.log( typeof currentHour);

var letsMakeANumber = parseInt(currentHour);
console.log("it's now a number", letsMakeANumber);
console.log( typeof letsMakeANumber);


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



for(var i = 0; i < 9; i ++){

    var row = $("<div>").addClass("row");
    var hourColumn = $("<div>").addClass("col-2 hour")
    var planYourDayColumn = $("<textarea>").addClass("col-9 hour");
    planYourDayColumn.text(userPlanObject[i])
    var buttonSaver = $("<button>").addClass("col-1 time-block saveBtn").attr("id", `${i}`);
    var saveIcon = $("<i>").addClass("fas fa-save");

    $(".container").append(row);
    // $(".container").append(`<div class="row"><div class="col-2 hour">${i<12 ? `${i} am` : i> 12 ? `${i-12} pm` : "12 pm"}</div><textarea class="col-9 hour future">
    // </textarea><button class="col-1 time-block saveBtn"><i class="fas fa-save"></i></button></div>`)
    $(row).append(hourColumn, planYourDayColumn, buttonSaver);
    buttonSaver.append(saveIcon);

    console.log(workDayHours[i].value);
    

    if(workDayHours[i].dayOrNight === "am"){
        $(hourColumn).text(`${workDayHours[i].hourOftheDay}` + " am");
    }
    else{
        $(hourColumn).text(`${workDayHours[i].hourOftheDay}` + " pm");
    }

    

    if(letsMakeANumber > workDayHours[i].value){
        $(planYourDayColumn).addClass("past");
        console.log("it's the past");
    }
    else if(letsMakeANumber === workDayHours[i].value){
        $(planYourDayColumn).addClass("present");
        console.log("it's the present");
    }
    else if(letsMakeANumber < workDayHours[i].value){
        $(planYourDayColumn).addClass("future");
        console.log("it's the future");
    }
    
}




$("button").click(function(event){

    console.log("button has been clicked");

    event.preventDefault();

    
    var textValue = $(this).siblings("textarea").val();
    var hourKey = $(this).attr("id");

    console.log(textValue);
    console.log(hourKey);

    userPlanObject[hourKey] = textValue;



    localStorage.setItem("plans", JSON.stringify(userPlanObject));


})
