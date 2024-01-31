window.onload = function(){
    document.getElementById("showResult").style.visibility = "hidden";
    var count = 0;
    document.getElementById("item1").innerHTML = "You have successfully included the JavaScript file.";
    count++;

    // Item 2 - Write a 'for' loop using a 'var'iable, that prints (using console.log())
    //      0 through 9.  Use the variable name 'i'
    var i = 0;
    for (; i < 10; i++) {
        console.log();
    }
    

    // Item 3 - Fix the following 'for' loop. It is supposed to loop from the end of the list
    //      to the first item, printing each item in the list, effectively counting form one to ten
    //      Remember to use the Document Inspector (right click -> Inspect) and choose the Console
    //      tab to see the console.log() printout
    const num_words = ["ten", "nine", "eight", "seven", "six", "five", "four", "three", "two", "one"];
    var j = 9;
    for (; j>-1; j--){
        console.log(num_words[j]);
    }

    // Item 4 - Write a 'do' loop using the 'x' variable below that counts to 20 by twos
    //  e.g.: 0, 2, 4, 6...
    var x = 0;
    do {
        x += 2;
    } while (x < 22);
    

    // Item 5 - Write an accumulator loop (using any loop type you wish) to create a string containing
    //      six (6) HTML line break elements  (<br>). The accumulator variable has already
    //      been initialized for you.
    var line_breaks = "";
    for (let i = 0; i < 6; i++) {
        line_breaks += "<br>";
    }
    console.log(line_breaks);

    // Item 6 - Loop through the following array of numbers using a for/of loop. 
    //      Add up the total of all ODD numbers
    //      The accumulator variable has been created for you
    const numbers = [1, 4, 12, 3, 67, 35, 34, 22, 24, 24, 23, 11];
    var odd_total = 0;
    for (let number of numbers) {
        if(number % 2 != 0) {
            odd_total+=number;
        }
    }
   
    
    // Item 7 - Loop through the following object by keys using for/in. Set the variable 'val' to the value corresponding
    //      to the key. Break the loop if the key is equal to 'break'
    const items = {acctNum:"1001", fullName:"John Doe", balance:5280, break:"now", foo:"bar", baz:"quux"}
    var val;
    for (let key in items) {
        val = items[key];
        if(key == "break"){
            break;
        }
    }


    // Item 8 - Loop through the following array with for/of and accumulate a string.
    //      The accumulator variable has been provided
    //      The loop and switch statements can be uncommented and filled out
    //      In the loop, write a switch/case statement that does the following:
    //          -if the color is 'red', add "R" to the string
    //          -if the color is 'blue', add "B"
    //          -if the color is 'yellow', add "Y"
    //          -if the color is 'green', add "G"
    //          -if the color is 'purple', add "P"
    //          -if the color is 'orange', add "O"
    //          -if it is anything else, print "Invalid color" using console.log()
    const colors = ["red", "red", "orange", "yellow", "red", "purple", "green", "yellow", "blue", "blue", "blue"]
    var colorCodes = "";
    for(let color of colors){
        switch(color) {
            case 'red':
                colorCodes += "R";
            break;
            case 'blue':
                colorCodes += "B";
            break;
            case 'yellow':
                colorCodes += "Y";
            break;
            case 'green':
                colorCodes += "G";
            break;
            case 'purple':
                colorCodes += "P";
            break;
            case 'orange':
                colorCodes += "O";
            break;
            default:
                console.log("Invalid Color");
            break;
        }
    }

    // Item 9 - There are two bugs in the following code.  The calculation is not getting the correct result. 
    //      Fix the bug. 
    const original_radius = 4;
    const extension = 6;
    const radius = original_radius + extension;
    const areaOfCircle = Math.PI * (radius ** 2);

    // Item 10 - There are two bugs in the following code. It is supposed to be a while loop that takes a list 
    //      of words and constructs a full sentence with spaces between each word, but NOT after the last word
    //      (another accumulator pattern)
    //      Fix the two bugs, without rewriting the loop (to be a for loop, for example)
    const words = ["Mindfulness", "is", "the", "only", "doorway", "to", "the", "unhurried", "life"];
    var index = 0;
    var sentence = "";
    // Loop through the words
    while (index < words.length){
        // Add the word to the sentence
        sentence += words[index];
        // if it is not the last word, also add a space
        if (index < words.length-1){
            sentence += " ";
        }
        // Increment the index
        index++;
    }

    if (i == 10){
        document.getElementById("item2").innerHTML = "You have successfully written a for loop with a 'var' variable.";
        count++;
    }

    if (j == -1){
        document.getElementById("item3").innerHTML = "You have successfully written a for loop with a 'let' variable.";
        count++;
    }

    if (x == 22){
        document.getElementById("item4").innerHTML = "You have successfully written a do/while loop.";
        count++;
    }

    if (line_breaks == "<br><br><br><br><br><br>"){
        document.getElementById("item5").innerHTML = "You have successfully written a string accumulator loop.";
        count++;
    }

    if (odd_total === 140){
        document.getElementById("item6").innerHTML = "You have successfully looped through an array with a for/of loop and used a conditional.";
        count++;
    }

    if (val === "now"){
        document.getElementById("item7").innerHTML = "You have successfully broken a for/in loop using a conditional.";
        count++;
    }

    if (colorCodes == "RROYRPGYBBB"){
        document.getElementById("item8").innerHTML = "You have successfully written a switch/case statement.";
        count++;    
    }

    if (Math.round(areaOfCircle) == 314){
        document.getElementById("item9").innerHTML = "You have fixed the Item9 bugs.";
        count++;    
    }

    if (sentence == "Mindfulness is the only doorway to the unhurried life"){
        document.getElementById("item10").innerHTML = "You have fixed the Item10 bugs.";
        count++;    
    }

    if (count == 10){
        document.getElementById("showResult").style.visibility = "visible";
    }else{
        console.log("Score: " + count);
    }

}

function showResult(){
    alert("Congratulations, you have successfully completed the Module 3 Lab!");
}