Template.registerHelper("session", function (key) {
	return (Session.get(key));
});

Template.registerHelper("countDown", function () {
	var blockfest = new Date(2016, 5, 7);
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
		var rand = Math.floor(Math.random() * 5) + 1;
		return (logo + rand + ".svg");
	},
	scrollv: function (){
		return (Session.get("scrollv"));
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
	"click #contributors-tab":	function () {Session.set("tab", "contributors");},
	"click #credits-tab":		function () {Session.set("tab", "credits");		},
	"click #profile-tab":		function () {Session.set("tab", "profile");		}
});

Template.body.rendered = function () {

	$(window).scroll(function () {
		Session.set("scrollv", $(window).scrollTop())
	});

	//$('html').attr("xmlns:fb","http://ogp.me/ns/fb#");
	//$("head").attr("prefix", "og: http://ogp.me/ns# fb: http://ogp.me/ns/fb#");
};
