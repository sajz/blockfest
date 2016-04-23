Template.flyer.helpers({
	ipfsImage: function () {
		return ("https://upload.wikimedia.org/wikipedia/en/1/18/Ipfs-logo-1024-ice-text.png");
	},
	coverImage: function () {
		var dir = "QmSmjERBMSesWAMPXkzvt8DRYLNWJfHW9WZS9ZVkozgRhL";
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
});

Template.flyer.events({
	"click #flyer-upload": function (event) {
		event.preventDefault();
		$("#flyer-display").css({
			"display": "none"
		});
		$("#flyer-upload-container").css({
			"display": "block"
		});
	},
	"click #upload-close": function (event) {
		event.preventDefault();
		$("#flyer-display").css({
			"display": "block"
		});
		$("#flyer-upload-container").css({
			"display": "none"
		});
	}
});


Template.flyer.onRendered(function () {

	var couples = getCouples();
	var rand = Math.floor(Math.random() * (couples.length));
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
	$("#flyer-info").css("background-color", fgcolor);
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
			"background-color": "#E8C3DD"
		},
		suptitle: {
			"font-family": "unique",
			"font-weight": "300",
			"font-size": "120px",
			"text-transform": "uppercase",
			"color": "black"
		},
		subtitle: {
			"color": "#85707E"
		}
	},
	{
		title: {
			"background-color": "#E33E2B"
		},
		suptitle: {
			"font-family": "bluebirdRegular",
			"font-weight": "300",
			"font-size": "120px",
			"color": "#F7D89F"
		},
		subtitle: {
			"color": "#9E2F15"
		}
	},
	{
		title: {
			"background-color": "#188ACC"
		},
		suptitle: {
			"padding-top": "40px",
			"padding-bottom": "20px",
			"font-family": "retroscape",
			"font-weight": "300",
			"font-size": "70px",
			"color": "#FDF600",
			"text-transform": "uppercase"
		},
		subtitle: {
			"color": "white"
		}
	}
	];
	return (couples);
}








































