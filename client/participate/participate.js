var tabname = "participate-tab"

Template.participate.helpers({
	home:				function(home) {
		if (!Session.get(tabname))
			Session.set(tabname, home);
	},
	participate_tab:	function () {
		return (Session.get(tabname));
	},
	session:			function (key) {
		return (Session.get(key));
	}
});

Template.body.events({
	"click #students-tab":		function () {Session.set(tabname, "students");	 },
	"click #enterprises-tab":	function () {Session.set(tabname, "enterprises");},
	"click #sponsors-tab":		function () {Session.set(tabname, "sponsors");	 }
});
