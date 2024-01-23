window.onload = function(){
    document.getElementById("showResult").style.visibility = "hidden";
    var count = 0;
    const mystery = {};
    document.getElementById("item1").innerHTML = "You have successfully included the JavaScript file.";
    count++;

    // Item 2 - Comment out the following line
    //count++;

    // Item 3 - Create a constant called 'x' that equals the number 5. 
    const x = 5;
    // Item 4 - Create a variable called 'courseName' that equals the string "CIT215"
    var courseName = "CIT215";
    // Item 5 - Create a number constant called 'numTypes' that equals the number of JavaScript data types
    const numTypes = 8;
    // Item 6 - Create a constant called 'veritas' that equals the boolean value true
    const veritas = true;
    // Item 7 - Use the 'typeof' operator on the variable 'mystery' and assign it to a variable called 'mystery_type'
	  // the variable 'mystery' already exists, so you don't have to create it
    mystery_type = typeof(mystery);
    // Items 8 and 9 are in the HTML file

    // Item 10 - Set the innerHTML of the 'item10' element to the string:
    //      "You have successfully edited HTML with JavaScript."
    //      It must be exactly that string
    document.getElementById("item10").innerHTML = "You have successfully edited HTML with JavaScript.";
    /*
        !!! DO NOT EDIT ANY JAVASCRIPT BELOW THIS LINE !!!
    */

    if (count == 1){
        document.getElementById("item2").innerHTML = "You have successfully commented out a line of code.";
        count++;
    }
    
    try{
        x = 3;
    }catch (err){
        document.getElementById("item3").innerHTML = "You have successfully created an integer variable called 'x' that equals 5.";
        count++;
    }

    if (courseName === "CIT215"){
        courseName = "JavaScript";
        if (courseName === "JavaScript"){
            document.getElementById("item4").innerHTML = "You have successfully created a string variable called 'courseName' that equals 'CIT215'.";
            count++;
        }
    }

    if (numTypes << 3 == 64){
        document.getElementById("item5").innerHTML = "You have successfully created a variable containing the number of JavaScript data types.";
        count++;
    }

    if (veritas === true){
        document.getElementById("item6").innerHTML = "You have successfully created a boolean variable called 'veritas' that contains the value 'true'";
        count++;
    }

    if (mystery_type === "object"){
        document.getElementById("item7").innerHTML = "You have successfully used the 'typeof' operator";
        count++;
    }

    const item8 = document.getElementById("item8");
    if (item8 != null){
        item8.innerHTML = "You have successfully added the id property for item8";
        count++;
    }

    const item9 = document.getElementById("item9");
    if (item9 != null){
        item9.innerHTML = "You have successfully added the HTML element for item9";
        count++;
    }

    const item10 = document.getElementById("item10");
    if (item10.innerHTML == "You have successfully edited HTML with JavaScript."){
        count++;
    }

    if (count == 10){
        document.getElementById("showResult").style.visibility = "visible";
    }else{
        console.log("Score: " + count);
    }

}

function showResult(){
    alert("Congratulations, you have successfully completed the Module 2 Lab!");
}
