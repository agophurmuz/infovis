

d3.json("data.json", function(data) {

var w=800, h=600 , pad=250;

var svg = d3.select("div#viz").append("svg").attr("width",w).attr("height",h);

function getRandomColor() {
	var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
	}
    return color;
}

var max = d3.max(data, function(d) { return d.poblacion; });
var escala = d3.scaleLinear().domain([0,max]).range([0,w-pad]);
var tooltip = d3.select("body").append("div").attr("class", "toolTip");

svg.selectAll("text").data(data).enter().append("text")
  .attr("x",240)
  .attr("y", function(d,i) {return 15+(i*20);} )
  .text( function(d,i) {return d.provincia;}  )
  .attr("text-anchor", "end");

svg.selectAll("rect").data(data).enter().append("rect")
  .attr("x",250)
  .attr("y", function(d,i) {return (i*20);} )
  .attr("width", function(d,i) { return escala(d.poblacion);} )
  .attr("height",18)
  .on("mouseover", function(d){
            tooltip
              .style("left", d3.event.pageX + "px")
              .style("top", d3.event.pageY + "px")
              .style("display", "inline-block")
              .style("color", getRandomColor())
              .html((d.provincia) + " : " + (d.poblacion));
   })
  .on("mouseout", function(d){ tooltip.style("display", "none");});

  });