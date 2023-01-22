// Set todaysDate string to time formatted
let todaysDate = moment().format("dddd, MMMM Do YYYY");
$('#displayDate').text(todaysDate);

// Iterate from 9 to 17 (less than 18)
for (let i=9; i<18; i++) {
    // Set textArea as selector of #textArea + i
    let textArea = $('#textArea' + i);
    // Set textArea text contents to value of localStorage, or || "" (a blank string)
    textArea.text(localStorage.getItem('time-' + i) || "");
    
    // Set hour to the current hour using moment (24hr)
    let hour = moment().hour();
    if (i == hour) { // If i is the current hour
        textArea.css('background-color', 'red'); // set colour as red
    } else if (i > hour) {
        textArea.css('background-color', 'green'); // set colour as green
    } else if (i < hour) {
        textArea.css('background-color', 'grey'); // set colour as grey
    }
    
    // Set click handler for submit + i
    $('#submit' + i).on('click', function() {
        let taskValue = textArea.val(); // Get the value of the text area
        localStorage.setItem('time-' + i, taskValue); // Store value of textArea (taskValue) in local storage as 'tim

        console.log("Saved " + i + " as \"" + taskValue + "\"");
    })
}