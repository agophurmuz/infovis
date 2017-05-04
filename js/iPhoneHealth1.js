c3.generate({
  bindto: '#distanceChart',
  data: {
    url: 'data/distanceWalk.csv',
    x: 'date',
    //xFormat: '%Y-%m-%d'
    names: {
            value: 'Kms Caminado'
        },
  },
  axis: {
    y: {
      show: false
    },
    x: {
      type: 'timeseries',
      tick: {
        format: '%d/%m/%Y',
      }
    }
  },
  zoom: {
     enabled: true
 },
 tooltip: {
        format: {
            /**
             * https://github.com/mbostock/d3/wiki/Time-Formatting
             */
            value: function (value) {
                return d3.format(",.2f")(value) + ' kms';
            }
        }
    }
});

c3.generate({
  bindto: '#stepChart',
  data: {
    url: 'data/step.csv',
    x: 'date',
    //xFormat: '%Y-%m-%d'
    names: {
            value: 'asos'
        },
  },
  axis: {
    y: {
      show: false
    },
    x: {
      type: 'timeseries',
      tick: {
        format: '%d/%m/%Y',
      }
    }
  },
  zoom: {
     enabled: true
 },
 tooltip: {
        format: {
            /**
             * https://github.com/mbostock/d3/wiki/Time-Formatting
             */
            value: function (value) {
                return d3.format(",.2f")(value) + ' pasos';
            }
        }
    }
});
