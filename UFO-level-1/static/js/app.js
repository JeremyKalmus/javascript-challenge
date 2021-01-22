// from data.js
var tableData = data;

// select table body with d3
var tbody = d3.select("tbody");

// arrow function to append table rows and table data
data.forEach((aliens) => {
    var row = tbody.append("tr");
    Object.entries(aliens).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

// table to html
var table = d3.select('.table')

table.attr('class', 'table table-bordered table-striped');

// d3 to select filter button and form
var button = d3.select("button");
var form = d3.select("input");


// Event Handlers
button.on("click", filterData);
form.on("submit",filterData);



// create filter function
function filterData() {
    //prevent refresh
    d3.event.preventDefault();

    //select input date with D3
    var inputForm = d3.select('input')

    //get value of input date
    var inputDate = inputForm.property('value');

    //check console to see if input value is working
    console.log(inputDate);

    //filter data
    var filteredData = tableData.filter(alien => alien.datetime === inputDate);
    //check console to see what data was filtered
    console.log(filteredData);

    //clear out existing table
    tbody.html('');

    //rebuild table with filtered data
    filteredData.forEach((aliens) => {
        var row = tbody.append("tr");
        Object.entries(aliens).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });

}