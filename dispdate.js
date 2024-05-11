// Get today's date
var today = new Date();

// Extract day, month, and year
var day = today.getDate();
var month = today.getMonth() + 1; // Months are zero-based
var year = today.getFullYear();

// Format the date as "DD/MM/YYYY"
var formattedDate = day + '/' + month + '/' + year;
console.log("Today's date is: " + formattedDate);