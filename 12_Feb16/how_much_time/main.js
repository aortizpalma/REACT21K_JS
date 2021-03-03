calculate = () => {
    let currentDate = new Date().getTime();
    let startDate = document.getElementById("startDateField").value;
    let eventDate = document.getElementById("eventDateField").value;
    let eventName = document.getElementById("eventField").value;
    let summary = document.getElementById("summary");
    let daysLeftFromNow = document.getElementById("daysLeftFromNow");
    let daysLeftFromDate = document.getElementById("daysLeftFromDate");
    let countdown = document.getElementById("countdown");
    let countdowntimer;

    
    // This piece of code is not in use but could have been used instead of the function below to convert the date string to milliseconds.
    let eventDate2 = Date.parse(eventDate);
    console.log(`eventDate2 looks like this: ${eventDate2} and is a ${typeof(eventDate2)}`)
    
    /*     This function serves to convert the string date format YYYY-MM-DD to comma separated format YYYY,MM,DD, so it can be inpunt as a parameter to create a Date object */
    function strReplace(str) {
        let myStr = str;
        let newStr = myStr.replace(/-/g,",");
        console.log(newStr);
        return newStr;
    }
    
    strReplace(eventDate);

    console.log(`The event date is ${eventDate}`);
    console.log(`The event name is "${eventName}"`);
    console.log(`The current date is ${currentDate}`);
    console.log(`The start date is ${startDate}`);
    
    // This prints out the current date, event name and event name into the HTML paragraph with the id "summary"
    summary.textContent = `The event "${eventName}" is happening on ${eventDate}`;
    
    console.log(`The type of eventDate is `+typeof(eventDate));
    
    // This converts the event date from string to miliseconds making use of the strReplace function to enter the YYYY,MM,DD parameters
    let d = new Date(strReplace(eventDate));
    console.log(`the date converted to object: ${d}`+` and in miliseconds it should be ${d.getTime()}`)
    
    // This calculates the difference in miliseconds between the current date and the event date, and then converts this to into days. An hour has 3,600,000 miliseconds.
    let timeDifferenceCurrent = (d.getTime()-currentDate)/(3600000*24);
    
    // This prints the number of days from the current time to the event date in days into the HTML page in the span tag with ID "daysLeftFromNow"
    daysLeftFromNow.textContent = `${timeDifferenceCurrent.toFixed(0)} days from now.`;
    

    

    // This converts the start date from string to miliseconds making use of the strReplace function to enter the YYYY,MM,DD parameters
    let d2 = new Date(strReplace(startDate));
    console.log(`the date converted to object: ${d2}`+` and in miliseconds it should be ${d2.getTime()}`)
    
    // This calculates the difference in miliseconds between the start date and the event date, and then converts this to into days. An hour has 3,600,000 miliseconds.
    let timeDifferenceStartDate = (d.getTime()-d2)/(3600000*24);
    
    // This prints the number of days from the defined date to the event date in days into the HTML page in the span tag with ID "daysLeftFromDate"
    daysLeftFromDate.textContent = `${timeDifferenceStartDate.toFixed(1)} days from the defined starting date.`;
    
    
    // Methods to identify which days of the week are today, the starting days and the event. Saturdays and Sundays are ays numbers 6 and 0 respectively. Monday to Friday are days 1/5.
    let dayOfTheWeekToday = new Date().getDay();
    console.log(`Today is week day # ${dayOfTheWeekToday}`);

    let dayOfTheWeekEvent = d.getDay();
    console.log(`The event is on week day # ${dayOfTheWeekEvent}`);
 
    let dayOfTheWeekStartDate = d2.getDay();
    console.log(`The defined date is on week day # ${dayOfTheWeekStartDate}`);
    

    const timer = (d) => {
        if (countdowntimer) {
            clearInterval(coundowntimer);
        }

        coundowntimer = setInterval(function () {
            let now = new Date();
            let timeDifference = d.getTime() - now;
            let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            let hours = Math.floor(timeDifference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
            let minutes = Math.floor(timeDifference % (1000 * 60 * 60) / (1000 * 60));
            let seconds = Math.floor(timeDifference % (1000 * 60) / 1000);

            countdown.textContent = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;

        }, 1000)

    };
    
    timer(d);


/* 

    function countDays(day) {
        while (i < timeDifferenceStartDate) {

            i++;
        }

    } 


    let NumberOfBusinessDays = "";

    if (timeDifferenceStartDate < 1) {
        NumberOfBusinessDays = 0;
    } else if (timeDifferenceStartDate >= 1) {
        countDays()
    }

 */
    
}


