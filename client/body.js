Template.registerHelper("session", function (key) {
	return (Session.get(key));
});

Template.registerHelper("countDown", function () {
	var blockfest = new Date(2016, 6, 6);
	var diff = blockfest - Date.now();
	var days = Math.floor(diff / (1000 * 60 * 60 * 24));
	return (days);
});

Template.body.helpers({
	has_access:	function () {
		if (Session.get("pwd") == "bisou")
			return (true);
		return (false);
	},
	home:		function(home) {
		if (!Session.get("tab"))
			Session.set("tab", home);
	},
	tab:		function () {
		return (Session.get("tab"));
	},
	getLogo: function () {
		var logo = "logo/logo";
		var rand = Math.floor(Math.random() * 14) + 1;
		return (logo + rand + ".svg");
	}
});

Template.body.events({
	"click #accueil-tab":		function () {Session.set("tab", "accueil");		},
	"click #program-tab":		function () {Session.set("tab", "program");		},
	"click #participate-tab":	function () {Session.set("tab", "participate");	},
	"click #rules-tab":			function () {Session.set("tab", "rules");		},
	"click #team-tab":			function () {Session.set("tab", "team");		},
	"click #partners-tab":		function () {Session.set("tab", "partners");	},
	"click #info-tab":			function () {Session.set("tab", "info");		},
	"click #profile-tab":		function () {Session.set("tab", "profile");		}
});



Template.body.onCreated(function() {
	var transparent = true;

	var transparentDemo = true;
	var fixedTop = false;

	var navbar_initialized = false;

	$(document).ready(function(){

	    // Init Material scripts for buttons ripples, inputs animations etc, more info on the next link https://github.com/FezVrasta/bootstrap-material-design#materialjs
	    $.material.init();


	    //  Activate the Tooltips
	    $('[data-toggle="tooltip"], [rel="tooltip"]').tooltip();

	    // Activate Datepicker
	    if($('.datepicker').length != 0){
	        $('.datepicker').datepicker({
	             weekStart:1
	        });
	    }

	    // Activate Popovers
	    $('[data-toggle="popover"]').popover();

	    // Active Carousel
		$('.carousel').carousel({
	      interval: 400000
	    });

	});

	materialKit = {
	    misc:{
	        navbar_menu_visible: 0
	    },

	    checkScrollForTransparentNavbar: debounce(function() {
	            if($(document).scrollTop() > 260 ) {
	                if(transparent) {
	                    transparent = false;
	                    $('.navbar-color-on-scroll').removeClass('navbar-transparent');
	                }
	            } else {
	                if( !transparent ) {
	                    transparent = true;
	                    $('.navbar-color-on-scroll').addClass('navbar-transparent');
	                }
	            }
	    }, 17),

	    initSliders: function(){
	        // Sliders for demo purpose
	        $('#sliderRegular').noUiSlider({
	            start: 40,
	            connect: "lower",
	            range: {
	                min: 0,
	                max: 100
	            }
	        });

	        $('#sliderDouble').noUiSlider({
	            start: [20, 60] ,
	            connect: true,
	            range: {
	                min: 0,
	                max: 100
	            }
	        });
	    }
	}


	var big_image;

	materialKitDemo = {
	    checkScrollForParallax: debounce(function(){
	        var current_scroll = $(this).scrollTop();

	        oVal = ($(window).scrollTop() / 3);
	        big_image.css({
	            'transform':'translate3d(0,' + oVal +'px,0)',
	            '-webkit-transform':'translate3d(0,' + oVal +'px,0)',
	            '-ms-transform':'translate3d(0,' + oVal +'px,0)',
	            '-o-transform':'translate3d(0,' + oVal +'px,0)'
	        });

	    }, 6)

	}
	// Returns a function, that, as long as it continues to be invoked, will not
	// be triggered. The function will be called after it stops being called for
	// N milliseconds. If `immediate` is passed, trigger the function on the
	// leading edge, instead of the trailing.

	function debounce(func, wait, immediate) {
		var timeout;
		return function() {
			var context = this, args = arguments;
			clearTimeout(timeout);
			timeout = setTimeout(function() {
				timeout = null;
				if (!immediate) func.apply(context, args);
			}, wait);
			if (immediate && !timeout) func.apply(context, args);
		};
	};

});
