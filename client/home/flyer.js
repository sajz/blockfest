Template.flyer.helpers({
	ipfsImage: function () {
		return ("https://upload.wikimedia.org/wikipedia/en/1/18/Ipfs-logo-1024-ice-text.png");
	},
	titleImage: function () {
		var titles = 3;
		var rand = Math.floor(Math.random() * (titles)) + 1;
		return ("titles/" + rand + ".png");
	}
});

Template.flyer.events({
	"click #flyer-upload": function (event) {
		event.preventDefault();
		console.log("coucou");
	}
});

Template.flyer.rendered = function () {
	var dir = "QmaJyaXHLEdn1ozr1PRdwToV7PDub8ttLAe8xT9Xt47vJk";
	var request = "https://gateway.ipfs.io/api/v0/object/get?arg=" + dir;
	Meteor.http.get(request, function (err, res) {
		if (!err)
		{
			var links = JSON.parse(res.content)["Links"];
			var rand = Math.floor(Math.random() * (links.length));
			var src = "http://ipfs.io/ipfs/" + links[rand]["Hash"];
			$("#cover").attr("src", src);
			$("#cover").hide();
			$("#cover").show(0);
		}
	});
}
