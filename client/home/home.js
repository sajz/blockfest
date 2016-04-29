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
			link: "#",
			filename: rep + "herve.jpg"
		}
		];
		return (list);
	}
});
