'use strict';
var lastEmojiId = 0;
$(document).ready(function() {
 	// Home: calendar function
    $("#datepicker").datepicker({
            changeMonth: true,
            changeYear: true,
            onSelect: function() { 
            var dateObject = $(this).datepicker('getDate'); 
            console.log('Month: '+ dateObject.getMonth()+ ', Date: '+ dateObject.getDate()+ ', Year: '+ dateObject.getFullYear());

            var dateText = weekday(dateObject.getDay()) + ' ' + monthToString(dateObject.getMonth()) + ' ' + 
                        dateObject.getDate() + ', ' + dateObject.getFullYear();
            console.log(dateText);
            var ele = $("p:contains("+ dateText +")");
            //console.log('divID found: ' + ele.offset().top);
            if (ele.length) {
                $('html, body').animate({
                    scrollTop: ele.offset().top - 282
                }, 500);
            }
        }
    })
    .hide();
    /*.click(function() {
      $(this).hide();
    });*/

    $("#calendar-button").click(function() {
       $("#datepicker").toggle(); 
       var calendarHeight = $('#datepicker').height();
       if ($('#datepicker').is(':visible')) {
            $('body').css('padding-top', calendarHeight+72+'px');
        }
        else {
            $('body').css('padding-top', 72+'px');
        }
    });
});


function weekday(day) {
    //console.log(day.getDay());
    var d;
    switch(day) {
        case 1:
            d = "Mon.";
            break;
        case 2:
            d = "Tue.";
            break;
        case 3:
            d = "Wed.";
            break;
        case 4:
            d = "Thu.";
            break;
        case 5:
            d = "Fri.";
            break;
        case 6:
            d = "Sat.";
            break;
        case 0:
            d = "Sun.";
            break;
    }
    return d;
}


function monthToString(m) {
    var monthText;
    switch(m) {
        case 0:
            monthText = "Jan";
            break;
        case 1:
            monthText = "Feb";
            break;
        case 2:
            monthText = "Mar";
            break;
        case 3:
            monthText = "Apr";
            break;
        case 4:
            monthText = "May";
            break;
        case 5:
            monthText = "Jun";
            break;
        case 6:
            monthText = "Jul";
            break;
        case 7:
            monthText = "Aug";
            break;
        case 8:
            monthText = "Sep";
            break;
        case 9:
            monthText = "Oct";
            break;
        case 10:
            monthText = "Nov";
            break;
        case 11:
            monthText = "Dec";
            break;
    }
    return monthText;
}