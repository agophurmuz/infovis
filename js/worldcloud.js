


function getRandomColor() {
	var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
	}
    return color;
}

var words = [{"count": 34, "word": "information"},
			{"count": 34, "word":"data"},
			{"count": 28, "word": "visualization"},
			{"count": 11, "word": "abstract"},
			{"count": 9, "word": "visual"},
			{"count": 8, "word": "space"},
			{"count": 7, "word": "card"},
			{"count": 7, "word": "computer"},
			{"count": 6, "word": "representations"},
			{"count": 6, "word": "graphical"},
			{"count": 5, "word": "records"},
			{"count": 5, "word": "cognition"}
			];

d3.select("div#wc")
    .selectAll("span")
    .data(words)
    .enter()
    .append("span")
    .html(function(d){return "<b style='color:"+getRandomColor()+";font-size:"+d.count/3.0+"em'> "+d.word+" </b>";});