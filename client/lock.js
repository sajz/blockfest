Template.lock.events({
	"click #access": function (event) {
		event.preventDefault();
		Session.set("pwd", $("#pass").val());
	}
});
