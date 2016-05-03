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

Template.body.rendered = function () {

	//var nav = ".navbar-inverse .navbar-nav > .active > a";
	//$(nav + ", " + nav + ":hover, " + nav + ":focus").css({
	//	"background-color": "red",
	//	"color": "black"
	//});

	// Meteor.call("eventbrite", function (err, data) {
	// 	if (!err) {
	// 		Session.set("event", data);
	// 	}
	// });


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






			// the body of this function is in assets/material-kit.js
			materialKit.initSliders();
			$(window).on('scroll', materialKit.checkScrollForTransparentNavbar);

            window_width = $(window).width();

            if (window_width >= 768){
                big_image = $('.wrapper > .header');

				$(window).on('scroll', materialKitDemo.checkScrollForParallax);
			}





};
