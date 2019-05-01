$(document).ready(function() {



	/*
		Toggle class of some element on click of other element
	*/
	$("[data-toggle-class-2]").click(function(event) {

		event.preventDefault();

		// if target is defined
		if ( $(this).data("target-2") ) {

			var targetIdOrClass = $(this).data("target-2");
			
		} else {
			// if target is not defined - set this as target
			var targetIdOrClass = $(this);

		};


		var target = $(targetIdOrClass);

		// console.log(target)

		var targetToggleClass = $(this).data("toggle-class-2");

		target.toggleClass(targetToggleClass);

	});




});


