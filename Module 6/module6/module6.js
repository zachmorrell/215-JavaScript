window.onload = function(){
    document.getElementById("showResult").style.visibility = "hidden";
    var count = 0;
    document.getElementById("item1").innerHTML = "You have successfully included the JavaScript file.";
    count++;

    // Item 2 - Use getElementsByTagName() et the innerHTML of the only h2 element to
    // "Module 6 Lab"
    // Remember, that function always returns an array, even if there is only 
    // one of those elements

    // Item 3 - Get all elements of Class name "center" and set the result to
    //  a variable called "centeredItems"
    // but do NOT use getElementById()

    // Item 4 - Get an element of the id "item4".  Give it a new attribute.
    //  name of attribute is "task", value of attribute is "4"

    // Item 5 and 6 - Create a variable called "width" that is set to the width of the
    //  browser window. Create a second variable called "height" that gets the browser
    //  height

    // Item 7 & 8 - Create a variable called "screenWidth" that is set to the width of 
    //  the client's screen height. Create a second variable called "screenHeight" that is
    //  set to the client's screen height

    // Item 9 - Debug the following code. It is supposed to underline the first
    //  list item of the bulleted list on the web page
    //  The second line is commented out because it breaks everything
    //  If you are unable to figure this out, just comment out all of this code
    const firstListItem = document.getElementsByTagName("li");
    //firstListItem.style.textDecoration = "underline";

    // Item 10 - Modify the background color of the body to be white
    // but do NOT use getElementById()

    // Do not edit any code below this point

    const h2text = document.getElementById("labnum").innerHTML;
    if (h2text == "Module 6 Lab"){
        document.getElementById("item2").innerHTML = "You have successfully retrieved an element by tag name.";
        count++;
    }

    const headerdiv = document.getElementById("headerdiv");
    if (headerdiv == centeredItems[0]){
        document.getElementById("item3").innerHTML = "You have successfully retrieved an element by class name.";
        count++;
    }

    if (document.getElementById("item4").task == "4"){
        document.getElementById("item4").innerHTML = "You have successfully added an attribute to an element.";
        count++;
    }

    if (typeof width == "number"){
        document.getElementById("item5").innerHTML = "You have successfully retrieved the browser window width.";
        count++;
    }

    if (typeof height == "number"){
        document.getElementById("item6").innerHTML = "You have successfully retrieved the browser window height.";
        count++;
    }

    if (typeof screenWidth == "number"){
        document.getElementById("item7").innerHTML = "You have successfully retrieved the screen width.";
        count++;
    }

    if (typeof screenHeight == "number"){
        document.getElementById("item8").innerHTML = "You have successfully retrieved the screen height.";
        count++;
    }

    if (document.getElementById("item1").style.textDecoration == "underline"){
        document.getElementById("item9").innerHTML = "You have successfully debugged Item 9.";
        count++;
    }

    if (document.getElementById("wrongcolor").style.backgroundColor == "white"){
        document.getElementById("item10").innerHTML = "You have successfully debugged changed the background color of the body.";
        count++;
    }

    if (count == 10){
        document.getElementById("showResult").style.visibility = "visible";
    }else{
        console.log("Score: " + count);
    }

}

function showResult(){
    alert("Congratulations, you have successfully completed the Module 6 Lab!");
}