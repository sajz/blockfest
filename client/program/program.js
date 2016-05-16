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
			name: "Lundi",
			descr: "Qu’est-ce que la Blockchain ? État des lieux technologique et idéologique.",
			entries: [
				{
					start: "15h",
					stop: "16h",
					room: "Atelier",
					descr: "Etat des lieux des blockchains (technique)"
				},
				{
					start: "16h",
					stop: "17h",
					room: "Atelier",
					descr: "Créer son identité sur la blockchain"
				},
				{
					start: "17h",
					stop: "18h",
					room: "Atelier",
					descr: "Blockchain 101 : théorie mathématique et technologies existantes"
				},
				{
					start: "18h",
					stop: "19h30",
					room: "Conférence",
					descr: "État des lieux des initiatives publiques et privées, réflexions sur les idéologies derrière les technologies"
				},
				{
					start: "21h",
					stop: "23h",
					room: "Cantina",
					descr: "Cocktail"
				}
			]
		},
		{
			name: "Mardi",
			descr: "Les applications économiques et industrielles",
			entries: [
				{
					start: "13h",
					stop: "14h",
					room: "Atelier",
					descr: "Découvrir Hyperledger"
				},
				{
					start: "14h",
					stop: "15h",
					room: "Atelier",
					descr: "Exploration de la blockchain dans l’immobilier"
				},
				{
					start: "15h",
					stop: "16h",
					room: "Atelier",
					descr: "Energie et blockchain : crédit carbone, smart grid, certification d’énergie verte…"
				},
				{
					start: "16h",
					stop: "17h",
					room: "Atelier",
					descr: "Santé et blockchain : gestion des données médicales, détection des contrefaçons…"
				},
				{
					start: "17h",
					stop: "18h",
					room: "Atelier",
					descr: "Enjeux judiriques de la blockchain"
				},
				{
					start: "18h",
					stop: "19h",
					room: "Conférence",
					descr: "Pitchs de startups blockchain"
				},
				{
					start: "20h",
					stop: "23h",
					room: "Cantina",
					descr: "Cocktail"
				}
			]
		},
		{
			name: "Jeudi",
			descr: "Les implications Culturelles et Sociétales",
			entries: [
				{
					start: "14h",
					stop: "15h",
					room: "Stand",
					descr: "Découvrir la blockchain par le jeu"
				},
				{
					start: "15h",
					stop: "16h",
					room: "Atelier",
					descr: "reconnaissance et de valorisation des personnes et des compétences avec les registres distribués"
				},
				{
					start: "16h",
					stop: "17h",
					room: "Atelier",
					descr: "Monnaies Locales Complémentaires et Blockchain"
				},
				{
					start: "17h",
					stop: "18h",
					room: "Atelier",
					descr: "Supply Chain et Blockchain : traçabilité, labellisation, consommation responsable"
				},
				{
					start: "18h",
					stop: "19h",
					room: "Conférence",
					descr: "Education, civic-tech, culture, économie collaborative… comment la Blockchain peut changer notre société ?"
				},
				{
					start: "20h",
					stop: "23h",
					room: "Cantina",
					descr: "Cocktail"
				}
			]
		},
		{
			name: "Vendredi",
			descr: "Travaux sur la technologie et lancement du BlockSprint",
			entries: [
				{
					start: "14h",
					stop: "15h",
					room: "Atelier",
					descr: "Créer son smart contract avec Solidity"
				},
				{
					start: "15h",
					stop: "16h",
					room: "Atelier",
					descr: "le protocole Chainscript"
				},
				{
					start: "16h",
					stop: "17h",
					room: "Conférence",
					descr: "La Blockchain, une solution aux problèmes de l’Internet des Objets ?"
				},
				{
					start: "17h",
					stop: "18h",
					room: "Conférence",
					descr: "Pré-Sprint : récapitulatif de la semaine"
				},
				{
					start: "18h",
					stop: "23h",
					room: "Cantina",
					descr: "Cocktail"
				},
				{
					start: "19h",
					stop: "20h",
					room: "Conférence",
					descr: "Lancement du BlockSprint"
				}
			]
		}
	];

	return (days);
}
