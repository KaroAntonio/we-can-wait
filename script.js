
var width = window.innerWidth || document.body.clientWidth,
	height = window.innerHeight || document.body.clientHeight;

var points = 0;

var urls = [
	'http://www.clickclickclick.com',
	'http://www.urban75.com/Mag/java7.html',
	'https://www.clickerheroes.com'
]
var url_i = 0|(Math.random() * urls.length);

var content = $('#content');
content.css({
	'position':'absolute',
	'top':40+'px',
	'left':width/2-200+'px'
});

$(document).ready(function() {
	display_points();
	requestAnimationFrame(animate);
	display_iframe(url_i);

	$('#next-button').click(function() {
		url_i = (url_i + 1) % urls.length
		display_iframe(url_i);
	})
})

function animate() {
	update_pointer();

	requestAnimationFrame(animate);
}

function update_pointer() {
	points += 1;
	$('#points').html(0|points/60)
}

function display_iframe(i) {
	var frame = $('<iframe>');
	frame[0].src = urls[i];

	$('#frame').empty();
	frame.appendTo($('#frame'));
	frame.css({
		'margin-left':width*1/4+'px',
		'margin-top': '100px',
		'width':width/2,
		'height':height*2/3
	});
}

function display_points() {
	var pts = $('<div>');
	pts.attr('id','points');
	pts.html(points);	
	pts.appendTo($('#content'));
	
	pts.css({
		'text-align':'center'
	});
}

