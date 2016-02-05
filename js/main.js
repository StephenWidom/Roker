$(function(){

	$('.menu').on("click", function(){
		$('.cities').animate({
			left: 0
		});
	});

	function resetScreen(){
		$('.press').show();
		$('.temp').text('').hide();
		$('.conditions').text('');
	}

	$('.cities li').on("click", function(){

		resetScreen();
		
		var city = $(this).text();
		$('.city').text(city);

		$.simpleWeather({
			location: city,
			woeid: '',
			unit: 'f',
			success: function(weather){
				$('.country').text(weather.country);
				$('.conditions').html('<em>Current conditions:</em>' + weather.currently);
				$('.temp').text(weather.temp + '° F');
			},
			error: function(error){
				$('.temp').text(error);
			}
		});

		$('.cities').animate({
			left: '100%'
		});

	});

	$('.press').on("click", function(){
		$(this).slideUp(function(){
			$('.temp').slideDown();
		});
	});

});
