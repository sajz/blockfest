Template.accueil.helpers({
	remainingDays: function () {
		var blockfest = new Date(2016, 6, 6);
		var diff = blockfest - Date.now();
		var days = Math.floor(diff / (1000 * 60 * 60 * 24));
		return (days);
	}
});
