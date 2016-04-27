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

	//$("#flyer-container").css("background-color", bgcolor);
	$("#flyer-container").fullpage({
		autoScrolling: false,
		fitToSection: false
	});
	//$("#flyer-info").css("background-color", fgcolor);
	$("h2").css("color", bgcolor);
	$("#stay-tuned-streamer").css("background-color", bgcolor);
	$("#cover").css({
		"border-color": bgcolor
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
			"background-color": "#71CE55"
		},
		suptitle: {
			"font-family": "judson",
			"font-weight": "900",
			"font-size": "120px",
			"text-transform": "uppercase",
			"color": "#FFD369",
			"margin-top": "-38px",
			"letter-spacing": "8px"
		},
		subtitle: {
			"color": "#FFD369",
			"margin-top": "-41px"
		}
	},		
	{
		title: {
			"background-color": "#854AA1"
		},
		suptitle: {
			"font-family": "pt-mono",
			"font-weight": "400",
			"font-size": "130px",
			"text-transform": "uppercase",
			"color": "black",
			"margin-top": "-30px",
			"letter-spacing": "8px"
		},
		subtitle: {
			"color": "#854AA1",
			"margin-top": "-41px"
		}	
	},
	{
		title: {
			"background-color": "#FFA239"
		},
		suptitle: {
			"font-family": "dosis",
			"font-weight": "400",
			"font-size": "130px",
			"text-transform": "uppercase",
			"color": "black",
			"margin-top": "-30px",
			"letter-spacing": "8px"
		},
		subtitle: {
			"color": "#FFA239",
			"margin-top": "-41px"
		}
	},
	{
		title: {
			"background-color": "#E8C3DD"
		},
		suptitle: {
			"font-family": "unique",
			"font-weight": "400",
			"font-size": "130px",
			"text-transform": "uppercase",
			"color": "black",
			"margin-top": "-30px",
			"letter-spacing": "8px"
		},
		subtitle: {
			"color": "#85707E",
			"margin-top": "-41px"
		}
	},
	{
		title: {
			"background-color": "#E33E2B"
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
			"color": "#9E2F15",
			"margin-top": "-42px"
		}
	},
	{
		title: {
			"background-color": "#188ACC"
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
	}
	];
	return (couples);
}








































