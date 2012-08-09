$(function() {
	var oprahnum = 1;
	$(".button.large").click(function() {
		var x = 0
		while ( x < 15) {
			x = Math.floor(Math.random()*500)
		}
		var y = 0
		while ( y < 15 ) {
			var y = Math.floor(Math.random()*600)
		}	
		$("<img src='smiling_star.gif' id='star'>").insertAfter('.stars').offset({top: x, left: y});
		var oprahsrc = 'oprahcar' + oprahnum + '.png'
		$("#oprah").replaceWith("<img src=" + oprahsrc + " id='oprah'>");
		if (oprahnum == 3) {
			oprahnum = 0;
		} else {
			oprahnum ++;
		}
	});
});