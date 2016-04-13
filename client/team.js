Template.team.helpers({
	getTeam: function () {
		Meteor.call("fetch_contribs", function (err, dat) {
			Session.set("contribs", dat);
		});
	}
});

Template.team.events({
	"click #add": function (event) {
		event.preventDefault();
		var name = event.target.parentElement.parentElement.children[0].value;
		Meteor.call("add_contrib", name);
	}
});
