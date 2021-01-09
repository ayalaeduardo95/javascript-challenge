// UFO-Level-2
// from data.js
var tableData = data;

// View Data first
console.log(tableData);

// Create a reference to the Table Body
var tbody = d3.select("tbody");

// UFO Sighting values per col
tableData.forEach(function(ufoSighting) {
    console.log(ufoSighting);
     // Append row for each obj
    var row = tbody.append("tr");

    // Use Obj to console log all of the UFO Sightings
    Object.entries(ufoSighting).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row per value
      var cell = row.append("td");
      cell.text(value);
    });
  });


// Button
var button = d3.select("#filter-btn");
button.on("click", function() {

    tbody.html("");

    // Select the input date
    var inputElement = d3.select("#input");
    // Get the Value of the input
    var inputValue = inputElement.property("value");
    // Filter Data
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue ||
                                                    sighting.city === inputValue ||
                                                    sighting.state === inputValue ||
                                                    sighting.country === inputValue ||
                                                    sighting.shape === inputValue);
    
    console.log(filteredData);


    filteredData.forEach(function(selections) {

    console.log(selections);
     // Append row for each obj
    var row = tbody.append("tr");
    // use obj to console log each sightinh
    Object.entries(selections).forEach(function([key, value]) {
        console.log(key, value);
        // Append cell to a row per value
        var cell = row.append("td");
        cell.text(value);
    });
});
});