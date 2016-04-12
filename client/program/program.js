var tabname = "program-tab"

Template.program.helpers({
	home:			function(home) {
		if (!Session.get(tabname))
			Session.set(tabname, home);
	},
	program_tab:	function () {
		return (Session.get(tabname));
	},
	session:		function (key) {
		return (Session.get(key));
	}
});

Template.body.events({
	"click #week":		function () {Session.set(tabname, "week");		},
	"click #weekend":	function () {Session.set(tabname, "weekend");	}
});
