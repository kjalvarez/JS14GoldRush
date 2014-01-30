$(document).ready(function(){
	$('.container').click(function(e) {
		e.preventdefault;
		var goldSource = ($('<img src="goldImage.jpg"></img>'));
		goldSource.css('top', e.pageY);
		goldSource.css('left', e.pageX);
		goldSource.addClass('goldImageStyle')


		console.log(e.pageX);
		console.log(e.pageY);
		
		$('.container').append($(goldSource));

	});



});

	// <div class="goldImageStyle"><img src="goldImage.jpg"></img></div>
