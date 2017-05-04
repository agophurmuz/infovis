  d3.csv('data/distanceWalk.csv', function(data) {
    data = MG.convert.date(data, "date");
    MG.data_graphic({
        title: "Kilometros Caminados",
        // description: "...",
        data: data,
        width: 960,
        height: 500,
        target: document.getElementById('distanceChartMetricGraphics'),
        x_accessor: 'date',
        y_accessor: 'value'
    });
  });

  d3.csv('data/step.csv', function(data) {
    data = MG.convert.date(data, "date");
    MG.data_graphic({
        title: "Pasos",
        // description: "...",
        data: data,
        width: 960,
        height: 500,
        target: document.getElementById('stepChartMetricGraphics'),
        x_accessor: 'date',
        y_accessor: 'value'
    });
  });
