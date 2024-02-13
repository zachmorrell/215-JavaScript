window.onload = function(){
    document.getElementById("showResult").style.visibility = "hidden";
    var count = 0;
    document.getElementById("item1").innerHTML = "You have successfully included the JavaScript file.";
    count++;

    // Item 2 - Create an object called "course" with two properties.
    //  one called 'name' that is set to the string CIT215
    //  one called 'hours' that is set to 3
    const course = {name:"CIT215", hours:3};

    // Item 3 - Add a third field to the 'course' object called 'language' 
    // that is equal to "JavaScript"
    course.language = "JavaScript";

    // Item 4 - delete the field 'transmission'
    const book = {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        year: 1960,
        transmission: "manual"
    }
    delete book.transmission;


    // Item 5 - Loop through the following object by keys
    //  use the provided accumulator variable to build a string
    //  from the values (spaces are already provided)
    const phrases = {
        phrase1: "Hello, my name is Inigo Montoya. ",
        phrase2: "You killed my father. ",
        phrase3: "Prepare to die."
    }
    var lines = "";
    for(let key in phrases) {
        lines += phrases[key];
    }

    // Item 6 - Add a new field called "campuses" that will be an Array
    //  The array will contain the names of the three WVNCC campuses as follows:
    //  "Wheeling"
    //  "Weirton"
    //  "New Martinsville"
    const college = {
        name: "West Virginia Northern Community College",
        established: 1972
    }
    college.campuses = ["Wheeling", "Weirton", "New Martinsville"];

    // Item 7 - Create an object with a variable name 'book2' that
    //  has the following properties:
    //      a 'title' of 'Rocket Boys'
    //      a 'year' of 1998
    //      an 'author' that is a nested object.
    //      This object has the following fields:
    //          a 'name' of 'Homer Hickam'
    //          a 'hometown' of 'Coalwood, West Virginia'
    //          a 'birthYear' of 1943
    const book2 = {title:"Rocket Boys", year:1998, author: {name:"Homer Hickam", hometown:"Coalwood, West Virginia", birthYear:1943}};

    // Item 8 - Parse the following string into a JavaScript object
    //  with the variable name 'plant'
    const plantString = "{\"name\": \"Touchstone Gold Beets\", \"frostTolerant\":true, \"daysToHarvest\":90, \"daysToEmerge\":21, \"depth\":0.5}";
    const plant = JSON.parse(plantString);

    // Item 9 - Stringify the 'phrases' object from Item 5
    //  save the result in a variable called 'greeting'
    let greeting = JSON.stringify(phrases);

    // Item 10 - Debug the following code. It is supposed to print
    // a comma separated list of all the ingredients for the recipe
    //  (yes, there will be a trailing comma at the end... that's ok)
    const recipe = {
        name: "Peanut Butter and Jelly Sandwich",
        difficulty: "easy",
        servings: 1,
        ingredients: ["bread", "strawberry or grape preserves", "peanut butter"]
    }

    var ingredientList = "";
    for (let ingredient in recipe.ingredients){
        ingredientList += recipe.ingredients[ingredient] + ",";
    }

    // DO NOT EDIT ANY CODE BELOW THIS LINE

    try{
        if (course.name === "CIT215" && course.hours === 3){
            document.getElementById("item2").innerHTML = 
            "You have successfully created a simple object.";
            count++;
        }
    }catch{
        console.log("course object not defined");
    }

    try{
        if (course.language === "JavaScript"){
            document.getElementById("item3").innerHTML = 
            "You have successfully added a field to an object.";
            count++;
        }
    }catch{
        console.log("course object not defined or field added incorrectly");
    }

    if (book.transmission === undefined){
        document.getElementById("item4").innerHTML = 
            "You have successfully deleted a field from an object.";
        count++;
    }

    if (lines === "Hello, my name is Inigo Montoya. You killed my father. Prepare to die."){
        document.getElementById("item5").innerHTML = 
            "You have successfully looped through an object by keys.";
        count++;
    }

    var campusString = "";
    for (let campus in college.campuses){
        campusString += college.campuses[campus];
    }
    if (campusString === "WheelingWeirtonNew Martinsville"){
        document.getElementById("item6").innerHTML = 
            "You have successfully added an array to an object.";
        count++;
    }

    var bookData = book2.title + " " + book2.year;
    if (bookData === "Rocket Boys 1998"){
        var authorData = book2.author.name + " " + book2.author.hometown + " " + book2.author.birthYear;
        if (authorData === "Homer Hickam Coalwood, West Virginia 1943"){
            document.getElementById("item7").innerHTML = 
            "You have successfully created a nested object.";
            count++;
        }
    }

    if (plant.name === "Touchstone Gold Beets"){
        document.getElementById("item8").innerHTML = 
            "You have successfully parsed a string into a JavaScript object.";
        count++;
    }

    if (greeting === "{\"phrase1\":\"Hello, my name is Inigo Montoya. \",\"phrase2\":\"You killed my father. \",\"phrase3\":\"Prepare to die.\"}"){
        document.getElementById("item9").innerHTML = 
            "You have successfully stringified an object.";
        count++;
    }

    if (ingredientList === "bread,strawberry or grape preserves,peanut butter,"){
        document.getElementById("item10").innerHTML = 
            "You have successfully debugged the loop.";
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