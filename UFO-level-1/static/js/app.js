// from data.js
var tableData = data;
// select table body with d3
var tbody = d3.select("tbody");

//setup initialize function to build table on site open
function init(){
  

  // arrow function to append table rows and table data
  data.forEach((aliens) => {
      var row = tbody.append("tr");
      Object.entries(aliens).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      });
    });
  };
// table to html
var table = d3.select('.table')

table.attr('class', 'table table-bordered table-striped');

// d3 to select filter button and form
var button = d3.select("#filter-btn");
var form = d3.select("#datetime");


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

//create search variables
var search_btn = d3.select('#search-btn');
var search_form = d3.select("#search");

//create search even listeners
search_btn.on('click', search);
search_form.on('submit', search);

//search function
function search() {
   
  //d3 to select dropdown menu
  var dropdownMenu = d3.select("#selSearch");
  //get value of dropdown menu
  var searchColumn = dropdownMenu.property("value");
  //log it to check value
  console.log(searchColumn)

  //get value of search input
  var searchInput = search_form.property('value')
    console.log(searchInput)

  // if statements to detemine which column to search on
    if (searchColumn === 'city') {
    var columnFiltered = tableData.filter(alien => alien.city === searchInput)
    }
    else if (searchColumn === 'state') {
      var columnFiltered = tableData.filter(alien => alien.state === searchInput)
      }
    else if (searchColumn === 'country') {
      var columnFiltered = tableData.filter(alien => alien.country === searchInput)
      }
      else if (searchColumn === 'shape') {
        var columnFiltered = tableData.filter(alien => alien.shape === searchInput)
        }
    

        //clear out existing table
        tbody.html('');

        //rebuild table with searched data
        columnFiltered.forEach((aliens) => {
            var row = tbody.append("tr");
            Object.entries(aliens).forEach(([key, value]) => {
              var cell = row.append("td");
              cell.text(value);
            });
          });
}


//reset button to clear search filter
var reset_btn = d3.select('#reset-btn');
reset_btn.on('click', init);

//initialize function to built table at site launch
init()