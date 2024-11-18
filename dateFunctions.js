// dateFunctions.js

// Challenge 1: Calculate Days Since
// Given an array of objects with `startDate` properties as strings (e.g., "2023-01-01"),
// map through each array index and calculate the number of days since each date. Use `Date` objects, subtraction for
// date difference, and `Math.floor` to round to whole days.
function calculateDaysSince(datesArray) {
    return datesArray.map((element) => {
            let startDate = new Date(element.startDate);
            const currentDate = new Date();

            if (startDate == false) {
                return NaN }
            
            let difference = currentDate - startDate;
            let daysSince = Math.floor(difference / (1000 * 60 * 60 * 24));
            return daysSince
        });
}

// Challenge 2: Filter Recent Dates
// Given an array of date strings, return only the dates within the past 30 days.
// Use `Date` object and the `filter` array method to find dates between 30 days ago and today.

function filterRecentDates(datesArray) {
    if (!Array.isArray(datesArray)) {
        return "Input is not an array!"
    }

    const inLast30Days = (dateString) => {
        let startDate = new Date(dateString);
        const currentDate = new Date();
        let difference = currentDate - startDate;
        let daysSince = Math.floor(difference / (1000 * 60 * 60 * 24));
        return daysSince >= 0 && daysSince < 30;
    };

    const filteredDates = datesArray.filter(inLast30Days);
    return filteredDates;
}


// Challenge 3: Get Month Names
// Given an array of `Date` objects, return an array of month names for each date.
// Use `getMonth` method to get the month index and map it to a month name array.
function getMonthNames(datesArray) {
    if (!Array.isArray(datesArray)) {
        return "Input is not an array!"
    }
    
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    return datesArray.map((dateString) => {
        const date = new Date(dateString);
        const monthIndex = date.getMonth();
        return monthNames[monthIndex];
    });
}


// Challenge 4: Sort Dates in Ascending Order
// Given an array of `Date` objects, return a new array sorted in ascending order.
// Use `sort` method to arrange dates by time.
function sortDatesAscending(datesArray) {
    if (!Array.isArray(datesArray)) {
        return "Input is not an array!"
    }

    let dateObjects = datesArray.map((dateString) => {
        let date = new Date(dateString);
        return date;
    });

    dateObjects = dateObjects.sort((a, b) => a - b);
    return dateObjects.map((date) => date.toISOString().slice(0, -14));
}


// Challenge 5: Calculate Age
// Given an array of birthdates as strings (e.g., "2000-05-10"), return an array of ages.
// Use `getFullYear` and `getMonth` to compare current date with birthdate, accounting for past birthdays.

function calculateAges(datesArray) {
    if (!Array.isArray(datesArray)) {
        return "Input is not an array!"
    }

    return datesArray.map((element) => {
        const birthday = new Date(element);
        const currentDate = new Date();

        const birthYear = birthday.getFullYear();
        const birthMonth = birthday.getMonth();

        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth();

        let age = currentYear - birthYear;
        if (currentMonth < birthMonth) {
            age -= 1;
        }
        return age;
    })
}

// const datesArray = ["2001-01-04", "1994-05-10", "1985-11-15", "1975-10-31"]
// console.log(calculateAges(datesArray));

// Challenge 6: Group Dates by Year
// Given an array of `Date` objects, return an object where each year is a key, and the value is an array of dates from that year.
// Use `reduce` to build an object with years as keys and `push` to add dates to the corresponding arrays.


// Challenge 7: Find First Monday of Month
// Given a year and a month, find the date of the first Monday of that month.
// Use a `while` loop and `getDay` to increment the date until it reaches Monday (1).


// Challenge 8: Check Leap Year
// Given an array of years, return an array of booleans indicating if each year is a leap year.
// Use modulus to check divisibility rules for leap years.


// Challenge 9: Add Days to Dates
// Given an array of `Date` objects and a number of days, return a new array with each date incremented by the given number of days.
// Use `setDate` to add days to each date.


// Challenge 10: Get Day of Week for Dates
// Given an array of `Date` objects, return an array of the day of the week for each date.
// Use `getDay` and map each day index to a day name array.
function getDayOfWeekForDates(datesArray) {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
   
}

// Challenge 11: Find Most Recent Date
// Given an array of `Date` objects, return the most recent date.
// Use `Math.max` to find the largest date in milliseconds, then convert back to a `Date`.


// Challenge 12: Get Last Day of Month
// Given a year and month, return the last day of the month.
// Use `new Date(year, month + 1, 0)` to get the last day of the previous month.


// Challenge 13: Calculate Duration Between Two Dates
// Given two dates, return the duration between them in days, hours, and minutes.
// Use subtraction and division to calculate differences in days, hours, and minutes.


// Challenge 14: List Dates of Specific Weekday in a Month
// Given a year, a month, and a weekday, return an array of all dates that fall on that weekday in that month.
// Use a loop with `getDay` to check each date until the end of the month.


// Challenge 15: Get Date Differences for Object Properties
// Given an object with properties containing date strings, return a new object with the difference in days for each date property relative to today.
// Use `Object.entries`, `map`, and `Math.floor` to calculate days for each date.


module.exports = {
    calculateDaysSince,
    filterRecentDates,
    getMonthNames,
    sortDatesAscending,
    calculateAges,
    // groupDatesByYear,
    // findFirstMonday,
    // checkLeapYears,
    // addDaysToDates,
    // getDayOfWeekForDates,
    // findMostRecentDate,
    // getLastDayOfMonth,
    // calculateDuration,
    // listDatesOfWeekdayInMonth,
    // getDateDifferences
}


  
 
  
  
  







