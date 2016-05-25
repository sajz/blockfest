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
					start: "17h30",
					stop: "18h20",
					room: "Atelier",
					descr: "Comprendre les blockchains par la métaphore"
				},
				{
					start: "18h20",
					stop: "20h",
					room: "Terre du Milieu",
					descr: "Blockchain & monde réel : 6 thématiques appuyées d'exemples concrets"
				},
				{
					start: "20h",
					stop: "20h30",
					room: "Terre du Milieu",
					descr: "Dîner"
				},
				{
					start: "20h30",
					stop: "21h10",
					room: "Holodeck",
					descr: "Les implications sociétales et culturelles : tables rondes"
				},
				{
					start: "21h10",
					stop: "21h50",
					room: "Holodeck",
					descr: "Les enjeux de sa diffusion : pédagogie & design"
				},
				{
					start: "21h50",
					stop: "22h30",
					room: "Holodeck",
					descr: "Atelier de pratique et de contribution : “Validation ninja meetup”"
				},
				{
					start: "22h30",
					stop: "00h",
					room: "Holodeck",
					descr: "BlockChill : expériences sonores sensorielles"
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
					descr: "Pré-Sprint : Introduction au week-end, aux valeurs, aux objectifs."
				},
				{
					start: "19h",
					stop: "--h",
					room: "Holodeck",
					descr: "Barcamp : venez pitcher vos idées. Le BlockSprint sera un moment de création collective, pour construire des projets blockchain et une base de connaissance ouverte."
				}
			]
		},
		{
			name: "Samedi 11 Juin",
			descr: "BlockSprint",
			entries: [
				{
					start: "08h30",
					stop: "09h",
					room: "Terre du Milieu",
					descr: "Petit déjeunner"
				},
				{
					start: "09h",
					stop: "11h",
					room: "Terre du Milieu",
					descr: "Ateliers Techniques pour chaque Dojo par les mentors"
				},
				{
					start: "11h",
					stop: "--h",
					room: "Terre du Milieu",
					descr: "BlockSprint"
				}
			]
		},
		{
			name: "Dimanche 12 Juin",
			descr: "BlockSprint",
			entries: [
				{
					start: "08h30",
					stop: "09h",
					room: "Terre du Milieu",
					descr: "Petit déjeunner"
				},
				{
					start: "12h",
					stop: "--h",
					room: "Terre du Milieu",
					descr: "Deadline de rendu des présentations"
				},
				{
					start: "14h30",
					stop: "16h",
					room: "Terre du Milieu",
					descr: "Démos & Pitchs"
				},
				{
					start: "18h",
					stop: "19h",
					room: "Terre du Milieu",
					descr: "Annonce des résultats et clôture"
				}
			]
		}
	];

	return (days);
}
