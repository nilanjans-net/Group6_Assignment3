$(document).ready(function () {
	var url = window.location.href.split('?')[1];
	$("#maintext").text("Reservation page for ID: " + url);
});