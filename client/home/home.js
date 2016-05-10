Template.apply_btn.events({
	"click #stay-tuned": function () {
		Meteor.call("stayTuned", $("#email").val());
		$("#stay-tuned-container").css({
			"display": "none"
		});
		$("#thankyou").css({
			"display": "block"
		});
	}
});

Template.accueil.helpers({
	remainingDays: function () {
		var blockfest = new Date(2016, 5, 7);
		var diff = blockfest - Date.now();
		var days = Math.floor(diff / (1000 * 60 * 60 * 24));
		return (days);
	},
	speakersList: getList()
});

Template.accueil.rendered = function () {

	var offset   = $(window).height();
	Session.set("offset", offset);
	$('#nav-wrapper').height($("#nav").height());
	$('#nav').affix({
		offset: {
			top: offset
		}
	});

	/*
	   $("#home-btn-apply").hover(function () {
	   $("#application-description").animate({
	   opacity: 1
	   }, 250);
	   }, function () {
	   $("#application-description").animate({
	   opacity: 0
	   }, 250);
	   });
	   */
}

function getList() {
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
		name: "Laurence Allard",
		employment: "Chercheuse en Antropologie des datas",
		workingPlace: "Université Paris 3-IRCAV",
		link: "http://culturesexpressives.fr/doku.php",
		filename: rep + "laurenceallard.jpg"
	},
	{
		name: "Luca Comparini",
		employment: "Blockchain Expert",
		workingPlace: "IBM",
		link: "https://www.linkedin.com/in/lucacomparini",
		filename: rep + "lucascomparini.jpg"
	},		
	{
		name: "Serge Ravet",
		employment: "Directeur de l'Innovation",
		workingPlace: "ADPIOS",
		link: "http://www.europortfolio.org/people/serge-ravet",
		filename: rep + "sergeravet.jpg"
	},		
	{
		name: "Xavier Lavayssière",
		employment: "Cofondateur",
		workingPlace: "Les Bricodeurs",
		link: "https://www.linkedin.com/in/lavayssiere/fr",
		filename: rep + "xavierlava.jpg"
	},		
	{
		name: "Nicolas Loubet",
		employment: "Cofondateur",
		workingPlace: "Cellabz & DAISEE",
		link: "https://www.linkedin.com/in/nicolasloubet",
		filename: rep + "nicolasloubet.jpg"
	},
	{
		name: "Sajida Zouarhi",
		employment: "Ingénieure R&D",
		workingPlace: "Orange Labs",
		link: "https://www.linkedin.com/in/sajidazouarhi",
		filename: rep + "sajida.jpg"
	},
	{
		name: "Justine Hannequin",
		employment: "Designer UX/UI",
		workingPlace: "Freelance",
		link: "https://www.linkedin.com/in/justine-hannequin-650b8642",
		filename: rep + "justineha.jpg"
	},
	{
		name: "Pierre Alexis Ciavaldini",
		employment: "Étudiant 42, Coordinateur",
		workingPlace: "Makernet",
		link: "https://www.linkedin.com/in/pciavald",
		filename: rep + "pierrealexis.jpg"
	},
	{
		name: "Khalil Jouini",
		employment: "Doctorant en sociologie",
		workingPlace: "*",
		link: "http://culturesexpressives.fr/doku.php",
		filename: rep + "khalil.jpg"
	},
	{
		name: "Clément Bergé-Lefranc",
		employment: "cofondateur",
		workingPlace: "Ledgys",
		link: "https://www.linkedin.com/in/clementbl",
		filename: rep + "clementbergelef.jpg"
	},
	{
		name: "Adrian Sauzade",
		employment: "cofondateur",
		workingPlace: "Czam",
		link: "https://www.linkedin.com/in/adriansauzade",
		filename: rep + "adriansauzade.jpg"
	},
	{
		name: "Thomas Saint-Aubin",
		employment: "cofondateur",
		workingPlace: "Open-Law",
		link: "https://www.linkedin.com/in/thomas-saint-aubin-116a3113",
		filename: rep + "thomassaintaubin.jpg"
	},
	{
	  	name: "Alexandre Statchenko",
	  	employment: "Co-fondateur",
	  	workingPlace: "Blockchain France",
	  	link: "https://www.linkedin.com/in/alexandre-stachtchenko-27655655",
	  	filename: rep + "alexstach.jpg"
	 },
	 {
	  	name: "Gilles Cadignan",
	  	employment: "Fondateur",
	  	workingPlace: "Woleet",
	  	link: "https://www.linkedin.com/in/gilles-cadignan-08448995",
	  	filename: rep + "gillescadignan.jpg"
	 },
	 {
	  	name: "Mourdjen Bari",
	  	employment: "Développeur",
	  	workingPlace: "GameLab, CRI",
	  	link: "http://cri-paris.org/team/mourdjen-bari/",
	  	filename: rep + "mourdjen.jpg"
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
	},
	{
		name: "Tom Wersinger",
		employment: "Developpeur frontend / webapps & mobile",
		workingPlace: ".",
		link: "https://www.linkedin.com/in/tomwersinger",
		filename: rep + "tomwersinger.jpg"
	},
	{
		name: "Pol Gouasdoué",
		employment: "UX & UI expert / Interaction Design",
		workingPlace: "UFO",
		link: "https://www.linkedin.com/in/polgoasdoue",
		filename: rep + "polgouasdoue.jpg"
	},/*
	{
		name: "Sophie Pène",
		employment: "UX & UI expert / Interaction Design",
		workingPlace: "UFO",
		link: "https://www.linkedin.com/in/polgoasdoue",
		filename: rep + "polgouasdoue.jpg"
	},
	{
		name: "Salma Mesmoudi",
		employment: "UX & UI expert / Interaction Design",
		workingPlace: "UFO",
		link: "https://www.linkedin.com/in/polgoasdoue",
		filename: rep + "polgouasdoue.jpg"
	},*/
	{
		name: "Laura Champion",
		employment: "Responsable de la communication",
		workingPlace: "EEIE",
		link: "https://www.linkedin.com/in/laura-champion-32579441",
		filename: rep + "laurachampion.jpg"
	}
	];
	return (list);
}
