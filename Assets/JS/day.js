'use strict';

// Global variable for my hours to plan my work, declared. //
let t4Hours = {
    
    "0100": "",
    "0200": "",
    "0300": "",
    "0400": "",
    "0500": "",
    "0600": "",
    "0700": "",
    "0800": "",
    "0900": "",
    "1000": "",
    "1100": "",
    "1200": "",
    "1300": "",
    "1400": "",
    "1500": "",
    "1600": "",
    "1700": "",
    "1800": "",
    "1900": "",
    "2000": "",
    "2100": "",
    "2200": "",
    "2300": "",
    "0000": "",

};


// Local Storage for my hours available to plan in my work day. //
$(document).ready(function() {
    
    if(!localStorage.getItem('t4Hours')) {
       
        tasksUpdated(t4Hours);

    } 
    
    else {
        
        tasksUpdated(JSON.parse(localStorage.getItem('t4Hours')));
    
    };
});


// Using https://momentjs.com/ I am having trouble with this section. I have to refresh the page to get the accurate time.//
// $('#currDate').text(moment().format('YYYY-' + 'MM-' + 'DD') + moment().format(' dddd  ') + moment().format('LTS'));
$('#currDate').text(moment().format());

let counter = 1;

for(const property in t4Hours){
    
    let taskEntered = "#anyTask" + counter;
    
    $(taskEntered).text(t4Hours[property]);
    
    let clockTime = "#clock" + counter;
    
    let theMoment = moment().hour();
    
    let myHours = $(clockTime).text();
    
    let schedTask = strungHours(myHours);
        console.log(schedTask);

        // Distinguishing whether the task/event has passed or not.  Keep it simple! //
        if (schedTask < theMoment) {
            
            $(taskEntered).removeClass("current");
            $(taskEntered).addClass("past");

        }
        
        else if (schedTask === theMoment) {
            
            $(taskEntered).addClass("current");
            $(taskEntered).removeClass("past");

        }
        
        else if (schedTask > theMoment) {

            $(taskEntered).removeClass("past");
            $(taskEntered).removeClass("current");
            $(taskEntered).addClass("future");

        };

        counter++; // Increments needed for arguments: past, present, future.  //

};


// "Stringing the hours," LOL! //
function strungHours(myHours) {
    
    switch(myHours) { // Switch statement https://www.w3schools.com/js/js_switch.asp //
    
        case "0000": return 0;
            break;
        case "0100": return 1;
            break;
        case "0200": return 2;
            break;
        case "0300": return 3;
            break;
        case "0400": return 4;
            break;
        case "0500": return 5;
            break;
        case "0600": return 6;
            break;
        case "0700": return 7;
            break;
        case "0800": return 8;
            break;
        case "0900": return 9;
            break;
        case "1000": return 10;
            break;
        case "1100": return 11;
            break;
        case "1200": return 12;
            break;
        case "1300": return 13;
            break;
        case "1400": return 14;
            break;
        case "1500": return 15;
            break;
        case "1600": return 16;
            break;
        case "1700": return 17;
            break;
        case "1800": return 18;
            break;
        case "1900": return 19;
            break;
        case "2000": return 20;
            break;
        case "2100": return 21;
            break;
        case "2200": return 22;
            break;
        case "2300": return 23;
        default: "Plan your day!"
        
    }; 
};


// I need to update my data. //
function updateThis() {
    
    dataResults = localStorage.getItem('t4Hours');

        return (dataResults ? dataResults : t4Hours);

};


function setLS() {
    
    localStorage.setItem('t4Hours', JSON.stringify(t4Hours));

};
  

function saveLS(schedBody) {
    
    localStorage.setItem('t4Hours', JSON.stringify(schedBody));

};

 
function saveSched(myHours, myData) {
    
    if(!localStorage.getItem('t4Hours')) {
      
        setLS();

    };
  
    var schedule = JSON.parse(localStorage.getItem('t4Hours'));
    
        schedule[myHours] = myData;
  
        saveLS(schedule);
        
};

  
function tasksUpdated(schedBody) {
    
    $(".taskRow").each(function(getData) {
      
        // Using the "this" selector, to get the children. //
        let myPlanner = $(this).children("div");
      
        $(this).children("textarea").text(schedBody[myPlanner.text()]);

        return getData;
      
    });
};

// Event Listeners. //
$("#refresh").click(function() {
    // GET HELP!  You may need to use "thisData, and "myHours"; but you need to clear "saveSched"!
});


$("#saveTask").click(function() {
    
    thisData = $(this).siblings("textarea").val();
    
    myHours = $(this).siblings("div").text();
    
    saveSched(myHours, thisData);

});

