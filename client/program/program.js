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
	},
	days: getDays()
});

Template.program.rendered = function () {

	var even = 0;
	jQuery(".day-entry").each(function () {
		var $div = jQuery(this);
		if (even % 2) {
			$div.css({
				"background-color": "rgba(255, 255, 255, 0.1)"
			});
		}
		even++;
	});

}

function getDays() {
	var days = [
		{
			name: "Jeudi 9 Juin",
			descr: "Session préparatoire",
			entries: [
				{
					start: "18h30",
					stop: "19h",
					room: "Atelier",
					descr: "Découvrir les blockchains par le jeu"
				},
				{
					start: "19h",
					stop: "19h30",
					room: "Terre du Milieu",
					descr: "État des lieux des blockchains : Revue des différentes technologies"
				},
				{
					start: "19h30",
					stop: "20h",
					room: "Terre du Milieu",
					descr: "Créer son identité sur la blockchain"
				},
				{
					start: "20h",
					stop: "21h30",
					room: "Holodeck",
					descr: "Conférence participative : Tour d'horizon des applications et implications de la blockchain"
				}
			]
		},
		{
			name: "Vendredi 10 Juin",
			descr: "Introduction et lancement du BlockSprint",
			entries: [
				{
					start: "17h",
					stop: "19h",
					room: "Terre du Milieu",
					descr: "Pré-Sprint : Introduction au week-end, aux valeurs, aux objecitfs. Introduction aux procédés et exigences de documentation."
				},
				{
					start: "19h",
					stop: "--h",
					room: "Holodeck",
					descr: "Lancement du BlockSprint"
				}
			]
		},
		{
			name: "Samedi 11 & Dimanche 12 Juin",
			descr: "BlockSprint",
			entries: [
				{
					start: "--h",
					stop: "18h",
					room: "Terre du Milieu",
					descr: "Le BlockSprint sera un moment de création collective, pour construire des projets blockchain et une base de connaissance ouverte."
				}
			]
		}
	];

	return (days);
}
