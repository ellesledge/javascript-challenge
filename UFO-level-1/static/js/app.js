// from data.js
var tableData = data;

// YOUR CODE HERE!
console.log(tableData)

var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var form = d3.select("form");

function ufosighting(data){
    tbody.html("");
    data.forEach(trow =>{
        const row = tbody.append("tr");
        Object.values(trow).forEach(function(value){
            var cell = row.append("td");
            cell.text(value);
        });
    });
};

function UFO(){
    d3.event.preventDefault();
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    var filteredData = tableData.filter(sighting=>sighting.datetime===inputValue);

    // console.log(filteredData);
    ufosighting(filteredData);
};

button.on("click",UFO);
form.on("submit", UFO);

ufosighting(tableData);
