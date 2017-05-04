var chartGroup = "chartGroup";
var heatmapChart = dc.heatMap("#heatmapdc", chartGroup);
var barChart = dc.barChart("#barchart", chartGroup);
d3.csv("data/distanceWalk.csv", function(error, experiments) {

  var ndx    = crossfilter(experiments),
      runDim = ndx.dimension(function(d) { return [+d.hour, +d.day]; }),
      runGroup = runDim.group().reduceSum(function(d) { return +d.value; });

  heatmapChart
    .width(45 * 20 + 80)
    .height(45 * 5 + 40)
    .dimension(runDim)
    .group(runGroup)
    .keyAccessor(function(d) { return +d.key[0]; })
    .valueAccessor(function(d) { return +d.key[1]; })
    .colorAccessor(function(d) { return +d.value; })
    .title(function(d) {
        return "Dia:   " + d.key[0] + "\n" +
               "Hora:  " + d.key[1] + "\n" +
               "Kms: " + (299000 + d.value) + " km/s";})
    .colors(["#ffffd9","#edf8b1","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#253494","#081d58"])
    .calculateColorDomain();

  heatmapChart.render();
});
