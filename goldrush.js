$(document).ready(function(){
	$('.mapImage').click(function(e) {
		e.preventdefault;
		var goldSource = $('<img class="goldImageStyle" src="goldImage.jpg"></img>'); 
		var yCoord = event.pageY;
		var xCoord = event.pageX;

		$('.container').append(goldSource);


	});


});