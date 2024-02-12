// Initializing the element by id for coding question.
const coding_dt = document.getElementById("coding_question");

// Attaching an eventlistener to the coding_dt element.
coding_dt.addEventListener("mouseover", coding_answer);

// Declaring the element by id for style question.
const style_dt = document.getElementById("style_question");

// Arrow pointers are not hoisted like traditional functions-
// requiring it to be defined before using it, curly braces.
style_answer = () => {
    let result = "\
    <ol>\
        <li>A space before and after operators <span class=\"blue\">\
        ( = + - * / ) </span> </li>\
        <li>Keep line lengths under 80 characters for readability.</li>\
        <li>Use only one naming convention. (snake_case or others)</li>\
    </ol>";
    document.getElementById("style_answer").innerHTML = result;
}

// Attaching event listener to style_dit element.
style_dt.addEventListener("mouseover", style_answer);

// Initializing the variable used for the performance question by element id.
const performance = document.getElementById("performance_question");

// String containing the HTML for the performance_answer,-
// this prevents the need for curly braces.
const performance_result = "\
<ol>\
    <li>Load JavaScript last by placing its import at the end of the body or \
    adding the <span class=\"blue\"> defer=\"true\" </span> attribute to the script's import.</li>\
    <li>Reduce activity in loops as much as possible.</li>\
    <li>Avoid unnecessary variables or variables that you do not want to save\
    </li>\
</ol>";

// One line arrow function, without curly braces, for displaying the performance_answer.
performance_answer = () => document.getElementById("performance_answer").innerHTML = performance_result;

// Attaching the eventlistener to the performance question element.
performance.addEventListener("mouseover", performance_answer);

// Traditional, hoisted, function for displaying the coding answer.
function coding_answer() {
    let result = "\
    <ol>\
        <li>Initialize variables on creation.</li>\
        <li>Declare all variables at the top of the script.</li>\
        <li>Use the <span class=\"blue\"> === </span> comparison, as it forces comparison between values and \
        types. <span class=\"blue\"> == </span> converts the data to matching types.</li>\
    </ol>";
    document.getElementById("coding_answer").innerHTML = result;
}