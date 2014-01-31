$(document).ready(function(){

	$(document).on('click', '.container', function(e) {
		e.preventDefault();
		var goldSource = ($('<img src="goldImage.jpg"></img>'));
		goldSource.css('top', e.pageY);
		goldSource.css('left', e.pageX);
		goldSource.addClass('goldImageStyle');
		$('.container').append($(goldSource));

		var locationNotes = prompt("Would you like to enter notes about this location?");

		console.log(locationNotes);

		goldSource.on('mouseenter', function() {
			console.log(locationNotes);
	});

	});


	$(document).on('click','.goldImageStyle', function(e) {
		e.preventDefault();
		$(this).hide();
		e.stopPropagation();
		
	});
	

});

	
