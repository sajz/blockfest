var team = new Mongo.Collection('team');

Template.team.helpers({
	getTeam: function () {
		console.log(team.find().fetch());
		return (team.find().fetch());
	},
	addTeam: function (member) {
		team.add(member);
	}
});
