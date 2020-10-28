function execNPSCall() {
let states = ["AK", "AL", "AR", "AS", "AZ", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "GU", "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA", "MA", "MD", "ME", "MI", "MN", "MO", "MS", "MT", "NC", "ND", "NE", "NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "PR", "RI", "SC", "SD", "TN", "TX", "UT", "VA", "VI", "VT", "WA", "WI", "WV", "WY"]

states.forEach(state => {
	var query = `parks?stateCode=${state}&q=%22National%20Park%22`;
	var res = getRes(query);
	var counter = 0;
	if (res !== undefined) {		
		res.data.forEach(rec => {
			if ('NATIONAL PARK' == rec.designation.toUpperCase()) {
				counter = counter + 1;
			}
		});
		console.log(`State: ${state}; numFound Original: ${res.total}; numFound Filtered: ${counter}`);
	} else {
		console.log("undefined");
	}

});
}

function getRes(query) {	
	let endpoint = 'https://developer.nps.gov/api/v1/';
	let apiKey = 'Xui3j5YQKjKLv7a5gqDYxeWdkMft7k9xdtduFSgt';
	var res;
	$.ajaxSetup({
		headers: { 'X-Api-Key': apiKey }
	});
	$.ajax({
		url: endpoint + query,		
		contentType: "application/json",
		dataType: 'json',
		success: function(result){ res = result; },
		async: false
	})  
	return res;
}