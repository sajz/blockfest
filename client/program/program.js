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

Template.program.rendered = function () {
	$("body").css("background-color", "white");
	$("#program-header table").css("background-color", Session.get("bgcolor"));
}
