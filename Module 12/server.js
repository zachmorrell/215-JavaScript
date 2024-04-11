var http = require('http');
var fs = require('fs');

// Function to check if an object is a number.
function isNumber(str) {
    return !isNaN(parseInt(str));
}

// Function returns HTML links to the different directories.
function html_buttons(data) {
    let return_html = "";
    for(i = 0; i<data.length; i++) {
        return_html += `<a href="http://localhost:8080/${i}">${data[i].account_id}</a><br>`;
    }
    return return_html;
}

// HTML table accumulator to show the results of the JSON file.
function build_table(data) {
    //data = JSON.parse(data);
    if(!Array.isArray(data)) {
        data = [data];
    }

    // html table accumulator.
    let html_table = 
        `<style>
            th,td { padding: 15px; }
            th { background-color: gray; }
            tr:nth-child(odd) { background-color: lightgray; }
        </style>
        <table>
            <tr>`;

    // Builds the table header row based on the keys from the data provided.
    for(let key in data[0]) {
        html_table += `<th>${key}</th>`;
    }
    html_table += `</tr>`;

    // Builds the html table rows based on the data supplied to the function.
    for(let i = 0; i < data.length; i++) {
        html_table += '<tr>'
        for(const key in data[i]) {
            html_table +=  `<td>${data[i][key]}</td>`
        }
        html_table += '</tr>';
    }
    html_table += "</table>"
    return html_table;
}
/* 
    Function to parse a JSON object for the requested query.
        If the query is empty, generate html buttons for each piece of data and return it.
        If the query is a number within the range of the data, generate an html table on the data and return it.
        Else return null.
*/
function data_query(query, data) {
    if(query.length > 1) {
        // Remove the first char ('/') from query.
        query = query.slice(1);
    } else {
        // Return the programmatically generated buttons html.
        return html_buttons(JSON.parse(data));
    }

    // Generates HTML table if the queried url is a number and it alligns to the range of the data.
    if(isNumber(query)) {
        var js_data = JSON.parse(data);
        if(js_data.length > query && query > -1) {
            var queried_data = js_data[query];
            // Return the html table built on the queried data.
            return build_table(queried_data);
        }
    }
    return null;
}

http.createServer(function (req, res) {
    // Read the file data.json
    fs.readFile('data.json', function(err, data) {

        // If an err or exception exists, return an error 500 to the user.
        if(err) {
            console.error('Error reading data.json: ', err);
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.write('Something went wrong, try again later.');
            return res.end();
        }

        // Gather the data for the user.
        var html_result = data_query(req.url, data);
        if(html_result != null) {
            res.writeHead(200, {'Content-Type': 'text/HTML'});
            res.write(html_result);
        } else {
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.write("Information could not be found on " + req.url);
        }
        res.end();
    });
}).listen(8080);