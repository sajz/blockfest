Template.accueil.helpers({
	remainingDays: function () {
		var blockfest = new Date(2016, 5, 7);
		var diff = blockfest - Date.now();
		var days = Math.floor(diff / (1000 * 60 * 60 * 24));
		return (days);
	},
	speakersList: function () {
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
		},
		{
			name: "Sébastien Couture",
			employment: "Co-fondateur",
			workingPlace: "Stratumm",
			link: "https://www.linkedin.com/in/couturesebastien",
			filename: rep + "sebastiencout.jpg"
		},
		{
			name: "Jérôme Giusti",
			employment: "Avocat fondateur",
			workingPlace: "11-100-34",
			link: "https://www.linkedin.com/in/jeromegiusti",
			filename: rep + "jeromegiusti.jpg"
		}
		];
		return (list);
	}
});

Template.accueil.events({
	"click #home-btn-program":	function () {Session.set("tab", "program");		},
	"click #home-btn-team":		function () {Session.set("tab", "team");		},
	"click #home-btn-apply": 	function (event) {
		event.preventDefault();
		Session.set("clickedApply", true);
	}
});

Template.accueil.rendered = function () {
	$("#home-btn-apply").hover(function () {
		$("#application-description").animate({
			opacity: 1
		}, 250);
	}, function () {
		$("#application-description").animate({
			opacity: 0
		}, 250);
	});
}
