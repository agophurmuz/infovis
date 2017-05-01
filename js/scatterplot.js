var width = 400;
var height = 400;

var data = d3.range(40).map(function(i) {
                           return {
                            id: i,
                            x: d3.randomUniform(0, width)(),
                            y: d3.randomUniform(0, height)()
                            };
});

var svg = d3.select("div#scatterplot")
            .append("svg")
            .attr("width",width)
            .attr("height",height);

svg.append("rect")
   .attr("width",width)
   .attr("height",height)
   .style("fill","none")
   .style("stroke","black");

var brush = d3.brush()
    .extent([[0, 0], [width, height]])
    .on("start brush", brushed)
    .on("end", brushended);

var svgBrush = svg.append("g")
    .attr("class", "brush")
    .call(brush);

svgBrush.selectAll("circle")
		.data(data).enter()
		.append("circle")
        .attr("class","noselect")
		.attr("cx", function (d) { return d.x })
		.attr("cy", function (d) { return d.y })
		.attr("r", "3px");

function brushed() {
  // console.log( d3.event.selection );
  var s = d3.event.selection,
      x0 = s[0][0],
      y0 = s[0][1],
      x1 = s[1][0],
      y1 = s[1][1],
      dx = s[1][0] - x0,
      dy = s[1][1] - y0;
  updateSelected(x0,y0,x1,y1);
}

function brushended() {
  console.log('end');
  if (!d3.event.selection) {
    console.log('There is no selection');
  }
}

function updateSelected(x0,y0,x1,y1) {
  var ids = [];
  svgBrush.selectAll("circle")
      .attr("class",
        function(d) {
          if ((x0 <= d.x && d.x <= x1) && (y0 <= d.y && d.y <= y1)) {
            ids.push(d.id);
            return "selected"
          }
          else
            return "noselect";
        }
      )
  d3.select("div#ids").text("IDs selected: " + ids.toString());
}

function unselectAll() {
  svgBrush.selectAll("circle").attr("class","noselect")
  d3.select("div#ids").text("IDs selected: ");
}
