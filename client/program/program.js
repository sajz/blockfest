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
