// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.



function humanReadable(seconds) {
var hours = parseInt(seconds / 3600 );
var minutes = parseInt(seconds / 60 ) % 60;
var seconds = seconds % 60;

let calcTime = (item) => item < 10 ? "0"+item : item;

return calcTime(hours) + ":" +calcTime(minutes) + ":" + calcTime(seconds);
}
