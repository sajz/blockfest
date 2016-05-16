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
	jQuery('img.svg').each(function ()
	{
		var $img = jQuery(this);
		var imgID = $img.attr('id');
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');

		jQuery.get(imgURL, function(data)
		{
			var $svg = jQuery(data).find('svg');
			if(typeof imgID !== 'undefined')
				$svg = $svg.attr('id', imgID);
			if(typeof imgClass !== 'undefined')
				$svg = $svg.attr('class', imgClass+' replaced-svg');
			$svg = $svg.removeAttr('xmlns:a');
			$img.replaceWith($svg);
			$svg.attr("fill", "white");
		}, 'xml');
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
		}
	];

	return (days);
}
