Template.registerHelper("session", function (key) {
	return (Session.get(key));
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
	session:	function (key) {
		return (Session.get(key));
	},
	countDown: function () {
		var blockfest = new Date(2016, 5, 6);
		var diff = blockfest - Date.now();
		var days = Math.floor(diff / (1000 * 60 * 60 * 24));
		return (days);
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
	Meteor.call("eventbrite", function (err, data) {
		if (!err) {
			Session.set("event", data);
		}
	});
};
