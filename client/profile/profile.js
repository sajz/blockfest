Template.profile.helpers({
	picture: function () {
		return ("null");
	},
	email: function () {
		return (Meteor.user().emails[0].address);
	},
	field: function (key, placeholder) {
		if (Meteor.user().profile[key])
			return (Meteor.user().profile[key]);
		return (placeholder);
	}
});

Template.profile.events({
	"click #update": function (event) {
		event.preventDefault();
		var fields = [
			"email",
			"name",
			"surname"
		];
		var update = {};
		for (i in fields) {
			if ($("#" + fields[i]).val()) {
				update[fields[i]] = $("#" + fields[i]).val();
				$("#" + fields[i]).val("");
			}
		}
		Meteor.call("update_user", Meteor.user()._id, update);
	},
	"click #update_onename": function (event) {
		event.preventDefault();
		Meteor.call("fetchOneName", $("#onename_id").val());
		$("#onename_id").val("");
		return (false);
	}
});
