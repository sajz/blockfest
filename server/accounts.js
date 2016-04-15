Accounts.onCreateUser(function (options, user) {
	if (user.profile == undefined)
		user.profile = {};
	_.extend(user.profile, {
		contrib: false
	})
	return (user);
});

Meteor.publish("users", function () {
	return (Meteor.users.find());
});

Meteor.methods({
	"add_contrib": function (onename_id) {
		var id = Meteor.users.findOne({profile: {onename: {id: onename_id}}});
		Meteor.call("update_user", {contrib: true});
	},
	"fetch_contribs": function () {
		return (Meteor.users.find({"profile.contrib": true}).fetch());
	},
	"update_user": function (id, update) {
		var profile = Meteor.users.findOne(id).profile;
		console.log(profile);
		for (key in update)
			profile[key] = update[key];
		console.log(profile);
		Meteor.users.update(id, {$set: {"profile": profile}});
	},
	"fetchOneName": function (username) {
		var api_id	= "e9e214e1096661e8c96ba5b9a16b5ff3";
		var api_pw	= "59811b9bdea9e4a033184875df94ba3c7f7c90e682b355da22b5e26e09fc4903";
		var login	= api_id + ":" + api_pw;
		var address	= "https://api.onename.com/v1/users/";
		var request	= address + username;

		Meteor.http.get(request, {auth: login}, function (err, res) {
			if (!err) {
				var onename = JSON.parse(res["content"])[username]["profile"];
				Meteor.users.update(
						{_id:	Meteor.userId()				},
						{$set:	{"profile.onename": onename}}
						);
				Meteor.users.update(
						{_id:	Meteor.userId()					},
						{$set:	{"profile.onename.id": username}}
						);
			}
		});
	},
	"eventbrite": function () {
		var address = "https://www.eventbriteapi.com/v3/";
		var endpoint = "users/me/owned_events/";
		var token = "GQCJGVYJ57GMWUOUZY3X";
		var request = address + endpoint + "?token=" + token;
		return (JSON.parse(Meteor.http.get(request)["content"])["events"][1]);
	}
});















































