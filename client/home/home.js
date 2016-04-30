Template.accueil.helpers({
	remainingDays: function () {
		var blockfest = new Date(2016, 5, 7);
		var diff = blockfest - Date.now();
		var days = Math.floor(diff / (1000 * 60 * 60 * 24));
		return (days);
	},
	teamMembersList: function () {
		var rep = "intervenants/";
		var list = [
		{
			name: "Milad Doueihi",
			employment: "Historien des religions",
			workingPlace: "Université de Paris-Sorbonne",
			link: "https://fr.wikipedia.org/wiki/Milad_Doueihi",
			filename: rep + "milad.jpg"
		},
		{
			name: "Hervé Moal",
			employment: "Directeur du Développement et de l'innovation",
			workingPlace: "ARP-Astrance",
			link: "https://www.linkedin.com/in/herv%C3%A9-moal-20338238",
			filename: rep + "herve.jpg"
		}
		];
		return (list);
	}
});

Template.accueil.events({
	"click #home-program":	function () {Session.set("tab", "program");		},
	"click #home-team":		function () {Session.set("tab", "team");		},
	"click #home-apply": 	function () {
		event.preventDefault();
		Session.set("clickedApply", true);
	},
});
