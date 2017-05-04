// set the dimensions and margins of the graph
var margin = {top: 20, right: 20, bottom: 30, left: 50},
        width = 960 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

// set the ranges
var x = d3.scaleTime().range([0, width]);
var y = d3.scaleLinear().range([height, 0]);

var svg = d3.select("body").append("svg")
           .attr("width", width + margin.left + margin.right)
           .attr("height", height + margin.top + margin.bottom)
         .append("g")
           .attr("transform",
                 "translate(" + margin.left + "," + margin.top + ")");

// parse the date / time
var parseTime = d3.timeParse("%d-%b-%y");

d3.json("../data/distanceWalkingRunning.json", function(data) {

  // format the data
   data.forEach(function(d) {
       d.startDate = parseTime(d.startDate);
       d.value = d.value;
   });

  var lineFunction = d3.line()
          .x(function(d) { return x(d.startDate); })
          .y(function(d) { return y(d.value); });

  lineFunction.curve(d3.curveLinear)

  x.domain(d3.extent(data, function(d) { return d.startDate; }));
  y.domain([0, d3.max(data, function(d) { return d.value; })]);

  // Get the data

    // Add the valueline path.
    svg.append("path")
        .data([data])
        .attr("class", "line")
        .attr("d", lineFunction);




    // Add the X Axis
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

    // text label for the x axis
    svg.append("text")
    .attr("transform",
          "translate(" + (width/2) + " ," +
                         (height + 30) + ")")
    .style("text-anchor", "middle")
    .text("X Axis");

    // Add the Y Axis
    svg.append("g")
        .call(d3.axisLeft(y));

    svg.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 0 - margin.left)
    .attr("x",0 - (height / 2))
    .attr("dy", "1em")
    .style("text-anchor", "middle")
    .text("Y Axis");
});
