/*
 * MAIN JAVASCRIPTS
 *
 * Controls the functionality of the app
 */
$(function(){


    // Populate cities - cities is defined in cities.js
    for (var i = 0; i < cities.length; i++)
        $('.cities ul').append('<li>' + cities[i] + '</li>');


    // When a user clicks on the menu...
	$('.menu').on("click", function(){

        // Show list of cities
		$('.cities').animate({
			left: 0
		});

	});


    // When a user clicks a city...
	$('.cities li').on("click", function(){

        // Clear all data pertaining to perhaps a previously selected city
		resetScreen();
		
        // Grab the name of the city selected
		var city = $(this).text();
		$('.city').text(city);

        // Call to simpleWeather API to get weather conditions and temperature
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

        // Hide list of cities
		$('.cities').animate({
			left: '100%'
		});

	});

    
    // When a user clicks on the current conditions...
	$('.press').on("click", function(){

        // Hide the current conditions icon then reveal the current temperature
		$(this).slideUp(function(){
			$('.temp').slideDown();
		});

	});


	function resetScreen(){

        // Show the main menu button
		$('.press').show();

        // Hide the temperature
		$('.temp').text('').hide();

        // Clear current conditions
		$('.conditions').text('');

	}


});

