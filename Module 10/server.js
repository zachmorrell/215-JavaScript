class server {
    // Constructor for server class.
    constructor(hostname, ip_address, operating_system, services, online) {
        this.hostname = hostname;
        this.ip_address = ip_address;
        this.operating_system = operating_system;
        this.services = services;
        this.online = online;
    }
    // Function to return the name of the server instance.
    hostname() {
        return this.hostname;
    }
    // Function to return table building html for the server instance.
    infoTable() {
        // Accumulator for table html.
        let html_table = 
        `<table>
            <tr>
                <th>Server Key</th>
                <th>Server Value</th>
            </tr>
            <tr>
                <td>Hostname:</td>
                <td>${this.hostname}</td>
            </tr>
            <tr>
                <td>IP Address:</td>
                <td>${this.ip_address}</td>
            </tr>
            <tr>
                <td>Operating System:</td>
                <td>${this.operating_system}</td>
            </tr>`;

        // For each entry in the services dictionary, add to the html accumulator it's key and values. 
        Object.entries(this.services).forEach(([key, value]) => {
            html_table += `<tr>
            <td>${key}:</td>
            <td>${value}</td>
        </tr>`
        });

        html_table += `
        <tr>
            <td>Status</td>
            <td>${(this.online) ? "Online" : "Offline"}</td>
        </tr>`;
        return html_table; 
    }
}

function initialize_servers() {
    // Creates 3 server instances inside servers global array.
    servers = [
        new server("server 1", "10.0.0.4", "Linux", {"Email":true, "web":false, "database":true}, true), 
        new server("server 2", "10.0.0.65", "Windows", {"Email":false, "web":false, "database":true}, false), 
        new server("server 3", "10.0.0.42", "Linux", {"Email":true, "web":true, "database":true}, true) ];
}

// Called from body onload actionlistener.
function populate_select() {
    // Creates the servers.
    initialize_servers();

    // Accumulator to store the server select element html..
    let server_select_html = `<label for="servers">Choose a server:</label>
    <select name ="servers" id="servers" onchange="load_table()">`;

    // For each server instance in the server array, add to the select options.
    servers.forEach((_server, index) => {
        server_select_html += `<option value="${index}">${_server.hostname}</option>`;
    });

    // Close the select html.
    server_select_html += `</select>`;
    // Sets the innerHTML of the <p> element to the server_select_html accumulator.
    document.getElementById("server_select").innerHTML = server_select_html;
    load_table();
}

// Function to load or generate the infoTable table for a selected server.
function load_table() {
    // Reference to the select element.
    let selected_server = document.getElementById("servers");
    // Reference to the p element for displaying the server inforTable.
    let server_table = document.getElementById("server_table");
    // populates the server_table's innerHTML to the infoTable on the selected server.
    server_table.innerHTML = servers[selected_server.value].infoTable();
}