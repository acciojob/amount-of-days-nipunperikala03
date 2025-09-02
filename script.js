//your JS code here. If required.
function daysOfAYear(year) {
  // Check if year is a leap year
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    return 366; // leap year
  } else {
    return 365; // normal year
  }
}

// Example usage:
let year = prompt("Enter a year:");
alert("Number of days in " + year + ": " + daysOfAYear(Number(year)));

