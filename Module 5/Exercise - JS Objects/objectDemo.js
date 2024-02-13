/*
    Zachary Morrell
    CIT 215 Client Side Script and JavaScript
    Professor Jeremy Doolin
    Module 5 Exercise - JS Objects
*/

// 1) Create a personal computer object.
const personal_computer = {make:"Custom PC", model:"Custom PC", cpu_model:"Intel(R) Core(TM) i9-9900K", cpu_frequency:360.00, memory:320, color:"Black"};

// 2) Add two new fields.
personal_computer.gpu_model = "NVIDIA GeForce GTX 1080";
personal_computer.disk_space = 6000;

// 3) Modify cpu frequency and memory using dot notation
personal_computer.cpu_frequency = 3.60;
personal_computer.memory = 6000;

// 4) Delete the color property.
delete personal_computer.color;

// 5) Loop through the list, printing the key/value pair
for (let key in personal_computer) {
    console.log(key + ": " +personal_computer[key]);
}

// This is just extra, based off what we have learned in class.
html = "";
for (let key in personal_computer) {
    html += "<strong>" + key + "</strong><br><i>&nbsp;&nbsp;&nbsp;&nbsp;" + personal_computer[key] + "</i><br><br>";
}
document.getElementById("computer_object").innerHTML = html;