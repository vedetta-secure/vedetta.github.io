(function($) {
	'use strict';
	$(function() {
		$('.owl-carousel-projects').owlCarousel({
			loop: true,
			stagePadding: 100,
			margin: 20,
			nav: false,
			responsive: {
				0: {
					items: 2
				},
				600: {
					items: 3
				},
				1000: {
					items: 4
				}
			}
		})
		var wWidth = $(window).width();
		var menuWidth = $(".navbar-collapse").width();
		$(".navbar-toggler").click(function() {
			$('.collapsing').toggleClass('show');
			$('body').addClass("sidebar-overlay");
		});
		$("#mobile-menu-overlay, .close-menu, .nav-link").click(function() {
			$('.collapse').toggleClass('show');
			$('body').removeClass("sidebar-overlay");
		});

		$("a.nav-link").on('click', function(event) {
			if (this.hash !== "") {
				event.preventDefault();
				var hash = this.hash;
				$('html, body').animate({
					scrollTop: $(hash).offset().top
				}, 800, function() {

					window.location.hash = hash;
				});
			}
		});

		AOS.init({
			offset: 0,
			duration: 800,
			easing: 'ease-in-quad',
			delay: 100,
		});

		$("#testimonial-flipster").flipster({
			style: 'coverflow',
			spacing: -.9,
			nav: false,
			loop: true,
			buttons: false,
		});

		$('.flipster-custom-nav-link').click(function() {
			var navlinkSelected = parseInt(this.title);
			$('.flipster-custom-nav-link').removeClass("active");
			$(this).addClass("active");
			$("#testimonial-flipster").flipster('jump', navlinkSelected);
		});

		$('#toggle-switch').click(function() {
			if ($('#toggle-switch').is(':checked')) {
				$('.monthly').addClass("text-active");
				$('.yearly').removeClass("text-active");
				$("#toggle-switch").attr("checked", "checked");
			} else {
				$('.monthly').removeClass("text-active");
				$('.yearly').addClass("text-active");
				$("#toggle-switch").removeAttr("checked");
			}
		});

		// counter Satisfied clients
		var maxScVal = 99;
		var isc = parseInt($('.scVal').text());
		var tim;
		function run() {
			tim = setInterval(function() {
				if (isc >= maxScVal) {
					clearInterval(tim);
					return;
				}
				$('.scVal').text(++isc);
			}, 10);
		}
		run();
		//Counters

		// counter finished Projects
		var maxfPVal = 25;
		var ifP = parseInt($('.fpVal').text());
		var timfP;
		function runfP() {
			timfP = setInterval(function() {

				if (ifP >= maxfPVal) {
					clearInterval(timfP);
					return;
				}
				$('.fpVal').text(++ifP);

			}, 100);
		}
		runfP();
		//finished Projects

		//counter Team Members
		var maxtMVal = 10;
		var itm = parseInt($('.tMVal').text());
		var timtM;
		function runtM() {
			timtM = setInterval(function() {
				if (itm >= maxtMVal) {
					clearInterval(timtM);
					return;
				}
				$('.tMVal').text(++itm);
			}, 200);
		}
		runtM();
		//Team Members

		//counter blog post
		var maxbPVal = 333;
		var ibP = parseInt($('.bPVal').text());
		var timbP;
		function runbP() {
			timbP = setInterval(function() {
				if (ibP >= maxbPVal) {
					clearInterval(timbP);
					return;
				}
				$('.bPVal').text(++ibP);

			}, 1);
		}
		runbP();
		//blog post

		


	});
})(jQuery);


function saveContact(){
	var name = $("#name").val();
	var mail = $("#mail").val();
	var companyname = $("#companyname").val();
	var phone = $("#phone").val();
	var message = $("#message").val();

	var jqxhr = $.post( "https://api.pluga.co/v1/webhooks/MzkxODk2NzcwMDc5MzA4Njg1M1QxNjY1MzY0NDMz", {
		name: name,
		company:companyname,
		phone: phone,
		email: mail,
		mensagem:message
	}, function() {
		alert( "success" );
	  })
		.done(function() {
		  alert( "second success" );
		})
		.fail(function() {
		  alert( "error" );
		})
		.always(function() {
		  alert( "finished" );
		});
	   
}