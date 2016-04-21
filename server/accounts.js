Accounts.onCreateUser(function (options, user) {
	if (user.profile == undefined)
		user.profile = {};
	_.extend(user.profile, {
		contrib: false
	})
	return (user);
});

var ipfsObj = false;
var fs = Npm.require('fs');

const testIpfs = function () {
	let started = ipfsObj.start();
	if (started) {
		ipfsObj.api.add(new Buffer('random stuff'), function (err, data) {
			if (!err)
				console.log('ipfs hash ' + data[0].Hash);
			else
				console.log(err);
		});
	}
};

Meteor.startup(function () {

	ipfsObj =  IpfsConnector.getInstance(); //singleton
	ipfsObj.setLogLevel('info');
	testIpfs();

	UploadServer.init({
		tmpDir: process.env.PWD + '/.uploads/tmp',
		uploadDir: process.env.PWD + '/.uploads/',
		checkCreateDirectories: true,
		finished: function (fileInfo, formFields) {
			console.log(fileInfo);
			console.log(formFields);
			fs.readFile(process.env.PWD + '/.uploads' + fileInfo.path, 'utf8', function (err, data) {
				if (err) {
					console.log('Error: ' + err);
					return;
				}
				ipfsObj.api.add(new Buffer(data), function (err, data) {
					if (err)
						console.log(err);
					else
						console.log(data);
				});
			});
		}
	});
});

Meteor.publish("users", function () {
	return (Meteor.users.find());
});

Meteor.methods({
	"add_contrib": function (onename_id) {
		var id = Meteor.users.findOne({profile: {onename: {id: onename_id}}});
		Meteor.call("update_user", {contrib: true});
	},
	"fetch_contribs": function () {
		return (Meteor.users.find({"profile.contrib": true}).fetch());
	},
	"update_user": function (id, update) {
		var profile = Meteor.users.findOne(id).profile;
		console.log(profile);
		for (key in update)
			profile[key] = update[key];
		console.log(profile);
		Meteor.users.update(id, {$set: {"profile": profile}});
	},
	"fetchOneName": function (username) {
		var api_id	= "e9e214e1096661e8c96ba5b9a16b5ff3";
		var api_pw	= "59811b9bdea9e4a033184875df94ba3c7f7c90e682b355da22b5e26e09fc4903";
		var login	= api_id + ":" + api_pw;
		var address	= "https://api.onename.com/v1/users/";
		var request	= address + username;

		Meteor.http.get(request, {auth: login}, function (err, res) {
			if (!err) {
				var onename = JSON.parse(res["content"])[username]["profile"];
				Meteor.users.update(
						{_id:	Meteor.userId()				},
						{$set:	{"profile.onename": onename}}
						);
				Meteor.users.update(
						{_id:	Meteor.userId()					},
						{$set:	{"profile.onename.id": username}}
						);
			}
		});
	},
	"eventbrite": function () {
		var address = "https://www.eventbriteapi.com/v3/";
		var endpoint = "users/me/owned_events/";
		var token = "GQCJGVYJ57GMWUOUZY3X";
		var request = address + endpoint + "?token=" + token;
		return (JSON.parse(Meteor.http.get(request)["content"])["events"][1]);
	}
});















































