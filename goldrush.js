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
			var locationNotesdiv = $('<div class="noteStyle">' + locationNotes + '</div>');
			locationNotesdiv.css({
				'top': e.pageY,
				'left': e.pageX,
				'background-color' : '#CFB53B',
				'font-family' : 'Ceviche One',
				'border-radius' : '5px',
				'font-size' : '36px'
			});


		goldSource.on('mouseenter', function() {
			e.preventDefault();
			console.log(locationNotes);
			$('.container').append(locationNotesdiv);
			locationNotesdiv.show();

		goldSource.on('mouseleave', function(){
			e.preventDefault();
			locationNotesdiv.hide();
		})

	});

	});


	$(document).on('click','.goldImageStyle', function(e) {
		e.preventDefault();
		$(this).hide();
		e.stopPropagation();
		
	});
	

});

	
