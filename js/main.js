$(document).on('ready', function(){

	function moveSlider(e){
		e.preventDefault();

		var pos 	= $(e.currentTarget).offset()
		,	posX	= e.pageX - pos.left
		,	value	= posX*100/$(e.currentTarget).outerWidth();

		if(posX >= 0 && posX <= $(e.currentTarget).outerWidth()){

			$('.slider > .progress').css('width', posX+'px');
			$('.slider > .indicator').css('left', posX+'px');

			$('#valueSlider').val(value);

		}
	}

	$('.slider').on('mousedown', function(e){

		moveSlider(e);

		$(this).on('mousemove', function(e){
			moveSlider(e);
		});

	}).on('mouseup', function(){
		$(this).off('mousemove');
	});

});