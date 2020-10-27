$( document ).ready(function() {
	let endpoint = 'https://developer.nps.gov/api/v1/';
	let apiKey = 'Xui3j5YQKjKLv7a5gqDYxeWdkMft7k9xdtduFSgt';
	
	$.ajaxSetup({
		headers: { 'X-Api-Key': apiKey }
	});

	$.ajax({
        url: endpoint + "parks?parkCode=arch,glac,ever",		
        contentType: "application/json",
        dataType: 'json',
        success: function(result){
			console.log(result);
			//$('#parksTable thead').append(`<tt><td>Park Name</td><td>State</td><td>Description</td><td>URL</td></tt>`);
			result.data.forEach(park => {
				$('#parksTable').append(`<tr><td>${park.fullName}</td><td>${park.states}</td><td>${park.description}</td><td>${park.url}</td></tr>`);
			});
            
        }
    })  
  
});