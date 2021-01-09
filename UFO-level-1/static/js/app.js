// UFO-Level-1
// from data.js
var tableData = data;

// View the data to understand it
console.log(tableData);

// Get a reference to the table body
var tbody = d3.select("tbody");

// UFO Sighting Values
tableData.forEach(function(ufoSighting) {
    console.log(ufoSighting);
    // Append table row for each UFO Sighting
    var row = tbody.append("tr");

    // Console Log each UFO Sighting
    Object.entries(ufoSighting).forEach(function([key, value]) {
      console.log(key, value);
      // Append cells to the row per values
      var cell = row.append("td");
      cell.text(value);
    });
  });


// Button
var button = d3.select("#filter-btn");
button.on("click", function() {

    tbody.html("");

    // Select the Input Date
    var inputElement = d3.select("#datetime");
    // Get the values 
    var inputValue = inputElement.property("value");
    // Console Log
    console.log(inputValue);
    // Filter Data depending on the request of the user
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
    // Console Log Filtered Values
    console.log(filteredData);


    filteredData.forEach(function(selections) {

    console.log(selections);
    // Append table row for each UFO Sifhting
    var row = tbody.append("tr");
    // Console Log each UFO Sighting
    Object.entries(selections).forEach(function([key, value]) {
        console.log(key, value);
        // Append Cell to the row per values
        var cell = row.append("td");
        cell.text(value);
    });
});
});

