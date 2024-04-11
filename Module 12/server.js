var http = require('http');
var fs = require('fs');

/* 
    Function to parse a JSON object for the requested query.
        If the query is empty return the supplied data.
        If the query is a number within the range of the data, return it as a JSON object.
        Else return null.
*/
function data_query(query, data) {
    if(query.length > 1) {
        // Remove the first char ('/') from query.
        query = query.slice(1);
    } else {
        return data;
    }
    if(isNumber(query)) {
        var js_data = JSON.parse(data);
        if(js_data.length > query && query > -1) {
            var queried_data = js_data[query];
            return JSON.stringify(queried_data);
        }
    }
    return null;
}

// Function to check if an object is a number.
function isNumber(str) {
    return !isNaN(parseInt(str));
}

// My table accumulator from module 11.
function build_table(data) {
    data = JSON.parse(data);
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
        <tr>
            <th>Account ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Address</th>
            <th>Balance</th>
        </tr>`;
    // Build the accumulator based on the data from the parameter.
    for(let i = 0; i < data.length; i++) {
        let account = data[i];
        html_table += 
        `<tr>
            <td>${account.account_id}</td>
            <td>${account.first_name}</td>
            <td>${account.last_name}</td>
            <td>${account.city}</td>
            <td>${account.state}</td>
            <td>${account.zip}</td>
            <td>${account.address}</td>
            <td>${account.balance}</td>
        </tr>`;
    }
    html_table += "</table>"
    // Set the innerHTML of results section to the html_table accumulator.
    return html_table;
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
        var queried_data = data_query(req.url, data);
        if(queried_data != null) {
            res.writeHead(200, {'Content-Type': 'text/HTML'});
            res.write(build_table(queried_data));
        } else {
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.write("Information could not be found on " + req.url);
        }
        res.end();
    });
}).listen(8080);