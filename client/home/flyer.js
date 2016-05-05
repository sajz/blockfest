Template.flyer.helpers({
	ipfsImage: function () {
		return ("https://upload.wikimedia.org/wikipedia/en/1/18/Ipfs-logo-1024-ice-text.png");
	},

	coverImage: function () {
		var rand = Math.floor(Math.random() * 29) + 1;
		return ("570/" + rand + ".jpg");
	}

	/*
	coverImage: function () {
		var dir = "QmPW997svo5xAamfhv3jiWNVrgMS8xVUqxFSDEc7xhoNkL";
		var request = "https://gateway.ipfs.io/api/v0/object/get?arg=" + dir;
		Meteor.http.get(request, function (err, res) {
			if (!err)
			{
				var links = JSON.parse(res.content)["Links"];
				var rand = Math.floor(Math.random() * (links.length));
				var src = "http://ipfs.io/ipfs/" + links[rand]["Hash"];
				$("#cover").attr("src", src);
			}
			else
				console.log(err);
		});
	}
	*/
});

Template.flyer.events({
	"click #ipfs-toggle": function (event) {
		event.preventDefault();
		$("#flyer-display").css({
			"display": "none"
		});
		$("#flyer-upload").css({
			"display": "block"
		});
	},
	"click #upload-close": function (event) {
		event.preventDefault();
		$("#flyer-display").css({
			"display": "block"
		});
		$("#flyer-upload").css({
			"display": "none"
		});
	},
	"click #scroll": function (event) {
		event.preventDefault();
		window.scrollTo(0, Session.get("offset") + 1);
	}
});


Template.flyer.onRendered(function () {

	var couples	= getCouples();
	var rand	= Math.floor(Math.random() * (couples.length));
	$("#flyer-title").css(couples[rand].title);
	$("#flyer-suptitle").css(couples[rand].suptitle);
	$("#flyer-subtitle").css(couples[rand].subtitle);
	var bgcolor = rgb2hex($("#flyer-title").css("background-color"));
	var fgcolor = rgb2hex($("#flyer-suptitle").css("color"));
	Session.set("bgcolor", bgcolor);

	$("#flyer-container").css("background-color", bgcolor);
	$("#flyer-container").fullpage({
		autoScrolling: false,
		fitToSection: false
	});
	$("h2").css("color", "black");
	$("#stay-tuned-streamer").css("background-color", bgcolor);
	$("body").css("background-color", bgcolor);
	$("#home-title")
		.css(couples[rand].suptitle)
		.css({
			"font-size": "100%",
			"color": bgcolor,
			"padding": "0px",
			"margin": "0px",
			"letter-spacing": "0"
		})
		.html($("#flyer-suptitle").html());

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
});

function rgb2hex(rgb) {
	rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
	return (rgb && rgb.length === 4) ? "#" +
		("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
		("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
		("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
}

function getCouples() {
	var couples = [
	{
		title: {
				"background-color": "#CD91BA"
		},
		suptitle: {
			"font-family": "unique",
			"font-weight": "400",
			"font-size": "130px",
			"text-transform": "uppercase",
			"color": "#222",
			"margin-top": "-30px",
			"letter-spacing": "8px"
		},
		subtitle: {
			"color": "black",
			"margin-top": "-41px"
		}
	},
	{
		title: {
			"background-color": "#F05341"
		},
		suptitle: {
			"font-family": "bluebirdRegular",
			"font-weight": "300",
			"font-size": "124px",
			"color": "#F7D89F",
			"letter-spacing": "12px",
			"margin-top": "-22px"
		},
		subtitle: {
			"color": "#F7D89F",
			"margin-top": "-42px"
		}
	},
	{
		title: {
			"background-color": "#379DD8"
		},
		suptitle: {
			"padding-top": "30px",
			"padding-bottom": "20px",
			"font-family": "retroscape",
			"font-weight": "400",
			"font-size": "75px",
			"color": "#FDF600",
			"margin-top": "-22px",
			"text-transform": "uppercase"
		},
		subtitle: {
			"color": "white",
			"margin-top": "-29px"
		}
	},
/*	{
		title: {
			"background-color": "#9276EF"
		},
		suptitle: {
/*			"padding-top": "30px",
			"padding-bottom": "20px",*
			"font-family": "Averia Libre",
			"font-weight": "400",
			"font-size": "105px",
			"color": "White",
			"margin-top": "-22px",
			"line-height": "1.4",
			"text-transform": "uppercase"
		},
		subtitle: {
			"color": "white",
			"margin-top": "-17px"
		}
	},*/
		{
		title: {
			"background-color": "#FFA239"
		},
		suptitle: {
/*			"padding-top": "30px",
			"padding-bottom": "20px",*/
			"font-family": "DosisBold",
			"font-weight": "bold",
   		 	"font-style": "normal",
			"font-size": "105px",
			"color": "#222",
			"margin-top": "-22px",
			"line-height": "1.4",
			"letter-spacing": "12px",
			"text-transform": "uppercase"
		},
		subtitle: {
			"color": "black",
			"margin-top": "-17px"
		}
	},
	{
		title: {
			"background-color": "#71CE55"
		},
		suptitle: {
/*			"padding-top": "30px",
			"padding-bottom": "20px", */
			"font-family": 'Averia Serif Libre',
			"font-weight": "bold",
   		 	"font-style": "normal",
			"font-size": "105px",
			"color": "#222",
			"margin-top": "-22px",
			"line-height": "1.4",
			"letter-spacing": "12px",
			"text-transform": "uppercase"
		},
		subtitle: {
			"color": "black",
			"margin-top": "-17px"
		}
	}
		
	];
	return (couples);
}








































