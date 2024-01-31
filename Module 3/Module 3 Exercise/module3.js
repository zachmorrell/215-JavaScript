/*
    Zachary Morrell
    CIT 215 Client Side Script/JavaScript
    Module 3 Exercise - Flow Control
    Professor Jeremy Doolin

    This program iterates from 1 to 100 and prints to console-
    the number unless it is a power of 3, 5, or 3 and 5.

    DEBUG METHOD USED: Node.js
        I chose Node.js as the debug method as it doesn't require multiple windows open to debug.
    WHY USE console.log OVER console.debug OR DISPLAYING IN HTML
        I believe console.log doesn't require filtering through the console on a web browser while console.debug does.
        Displaying errors that could be potentially seen by clients, users, and coworkers is very unprofessional and may-
        turn away users from wanting to visit the website often or ever again.
*/
for(let i = 1; i <= 100; i++) {
    // if 3 and 5 divide evenly into i, then it is divisible by both.
    if(i % 3 == 0 && i % 5 == 0) {
        console.log("Multiple of Both");
    } 
    // else if 5 divides evenly into i, then it is divisible by five.
    else if (i % 5 == 0) {
        console.log("Multiple of Five");
    } 
    // else if 3 divides evenly into i, then it is divisible by three.
    else if (i % 3 == 0) {
        console.log("Multiple of Three");
    } 
    // else i is not divisible by 3 nor 5, so print the number.
    else {
        console.log(i.toString());
    }
}