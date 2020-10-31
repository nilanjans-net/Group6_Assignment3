//Make Footer stay at the bottom
var states = ["AK", "AL", "AR", "AS", "AZ", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "GU", "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA", "MA", "MD", "ME", "MI", "MN", "MO", "MS", "MT", "NC", "ND", "NE", "NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "PR", "RI", "SC", "SD", "TN", "TX", "UT", "VA", "VI", "VT", "WA", "WI", "WV", "WY"]
var parkCodes = ["ABLI","ACAD","ADAM","ADM","AGFO","AKRO","AKSO","ALAG","ALFL","ALPO","AMIS","AMME","ANCH","ANDE","ANIA","ANIA","ANJO","ANTC","ANTI","APCO","APIS","APPA","APPA","ARCH","ARHO","ARPO","ASIS","AZRU","BADL","BAND","BAWA","BEFR","BELA","BEOL","BIBE","BICA","BICY","BIHO","BISC","BISO","BITH","BLAC","BLCA","BLRI","BLUE","BOAF","BOHA","BOSO","BOST","BOWA","BRCA","BRCR","BRVB","BUFF","BUIS","CABR","CACH","CACL","CACO","CAGR","CAHA","CAKR","CALI","CALO","CANA","CANY","CARE","CARI","CARL","CASA","CATO","CAVE","CAVO","CCSO","CEBR","CHAM","CHAT","CHCH","CHCU","CHIC","CHIR","CHIS","CHOH","CHPI","CHPO","CHRI","CIRO","CLBA","CMCO","CODA","COLM","COLO","CORO","COSW","COWP","CRLA","CRMO","CRSPP","CUGA","CUIS","CURE","CUVA","DAAV","DABE","DELA","DELE","DENA","DENA","DEPO","DESO","DETO","DEVA","DEWA","DINO","DRTO","DSC","EBLA","EDAL","EDIS","EFMO","EISE","ELIS","ELMA","ELMO","ELRO","EUON","EVER","FAIR","FAMA","FARM","FEHA","FIIS","FLAG","FLFO","FOBO","FOBU","FOCA","FOCL","FODA","FODC","FODO","FOFR","FOLA","FOLS","FOMA","FOMC","FONE","FOPO","FOPU","FORA","FOSC","FOSM","FOST","FOSU","FOTH","FOUN","FOUS","FOVA","FOWA","FRDO","FRED","FRHI","FRLA","FRSP","GAAR","GAAR","GARI","GATE","GEGR","GERO","GETC","GETT","GEWA","GICL","GLAC","GLBA","GLBA","GLCA","GLDE","GLEC","GLOR","GOGA","GOSP","GRBA","GRCA","GREE","GRFA","GRKO","GRON","GRPO","GRSA","GRSA","GRSM","GRSP","GRTE","GUCO","GUIS","GUMO","GWCA","GWMP","HAFE","HAFO","HAGR","HALE","HAMP","HAVO","HEHO","HFC","HFJC","HOAL","HOBE","HOCU","HOFU","HOME","HOSP","HOVE","HPTC","HSTR","HUTR","IATR","ICAG","ICRC","ILMI","IMDE","IMRO","IMSF","INDE","INDU","ISRO","JAGA","JAME","JAZZ","JECA","JEFF","JEFM","JELA","JICA","JODA","JODR","JOFI","JOFL","JOMU","JOTR","KAHO","KALA","KATM","KATM","KEFJ","KEMO","KEWE","KICA","KIMO","KLGO","KLSE","KNRI","KOVA","LABE","LACH","LACL","LACL","LAME","LAMR","LAVO","LBME","LECL","LIBI","LIBO","LIHO","LINC","LIRI","LIRO","LODI","LODT","LONG","LOWE","LYJO","MAAC","MABI","MACA","MALU","MANA","MANZ","MASI","MAVA","MAWA","MCHO","MEAF","MEVE","MIMA","MIMI","MISS","MMBC","MNRR","MOCA","MOCR","MOJA","MONO","MOPI","MORA","MORR","MORU","MRCC","MUWO","MWAC","MWRO","MWSO","NABR","NACC","NACC","NACC","NACE","NAMA","NATC","NATR","NATR","NAVA","NCR","NCRC","NCRC","NCRO","NCSO","NEBE","NEJE","NEPE","NERI","NERO","NERO","NICO","NIFC","NIOB","NISI","NOAT","NOCA","NOCO","none","none","NPS","NPS","NPS","NPS","NPS","NPS","NPS","NPS","NPS","NPSA","NRLO","NWAK","OBRI","OCJO","OCMU","OFIE","OKCI","OLYM","OPOT","ORCA","OREG","ORPI","OVVI","OZAR","PAAL","PAAV","PAIS","PECO","PEFO","PERI","PETE","PETR","PEVI","PGSO","PHSO","PIMA","PINN","PIPE","PIRO","PISC","PISO","PISP","POEX","POGR","POHE","POPO","PORE","PRES","PRPA","PRWI","PUHE","PUHO","PWRO","RABR","REDW","RICH","RIGR","ROCA","ROCR","ROLA","ROMO","ROVA","ROVA","ROWI","RTCA","RUCA","SAAN","SACN","SACR","SAFE","SAFR","SAGA","SAGU","SAHI","SAIR","SAJH","SAJU","SAMA","SAMO","SAPA","SAPU","SARA","SARI","SCBL","SEAC","SEBE","SEKI","SERO","SESO","SHEN","SHIC","SHIL","SITK","SLBE","SOAR","SPAR","SPCO","STEA","STLI","STMA","STRC","STRI","SUCR","TAPR","THKO","THRB","THRI","THRO","THST","TICA","TIMU","TONT","TOSY","TRTE","TUAI","TUIN","TUMA","TUPE","TUZI","ULSG","UNST","UPDE","USAR","VAFO","VAMA","VICC","VICK","VIET","VIIS","VOYA","WABA","WACA","WACC","WAPA","WASH","WEFA","WHHO","WHIS","WHMI","WHSA","WICA","WICR","WIHO","WORI","WOTR","WRBR","WRST","WRST","WUPA","YELL","YOHO","YORK","YOSE","YUCH","ZION"]
$(document).ready(function () {
	//populate dropdowns
	var parkCodeOptions = $("#park_code");	
    parkCodes.forEach(parkCode => {
        parkCodeOptions.append($("<option />").val(parkCode).text(parkCode));
    });
	
	var stateOptions = $("#park_state");	
    states.forEach(state => {
        stateOptions.append($("<option />").val(state).text(state));
    });
	
	stateOptions.prop("selectedIndex", -1);
	parkCodeOptions.prop("selectedIndex", -1);

});



$(document).on('click','#search_click',function(){	
	var parkName = $("#park_name").val().trim();
	var parkState = $("#park_state").val();
	var parkCode = $("#park_code").val();	

	if (parkName != "" || parkState != null || parkCode != null) {
		var query = `parks?q="${parkName} National Park"`;
		if (parkState != null) {
			query = query + `&stateCode=${parkState}`;
		};
		if (parkCode != null) {
			query = query + `&parkCode=${parkCode}`;
		};
			
	
		if (query != "") {
			execQuery(query, 'parkSearch', '');	
		} else {
		//display error
		}
	}
});

$(document).on('click','#check_avail_button',function(){
	var parkCode = $(this).attr("value");
	if (parkCode !== undefined && parkCode != '') {
		var query = `campgrounds?parkCode=${parkCode}`;
		execQuery(query, 'campSearch', parkCode);
	}
	
	
});

$(document).on('click','#reserve_button',function(){
	var campId = $(this).attr("value");
	window.location.replace("Contacts.html?id=" + campId);
	console.log("Camp ID: " + campId);
	
	
});


function execQuery(query, type, parkCode) {
	let endpoint = 'https://developer.nps.gov/api/v1/';
	let apiKey = 'Xui3j5YQKjKLv7a5gqDYxeWdkMft7k9xdtduFSgt';
	$.ajaxSetup({
		headers: { 'X-Api-Key': apiKey }
	});

	$.ajax({		
        url: endpoint + query,		
        contentType: "application/json",
        dataType: 'json',
		success: function(result) { 
			if ('parkSearch' == type) {
				displayResults(result) 
			} else if ('campSearch' == type) {
				displayCampgrounds(result, parkCode);
			}
		},
		error: function() {
			console.log("error!");
		}
    })  
}

function displayCampgrounds(results, parkCode) {
	var pName = `#park_${parkCode}`;
	console.log(results);
	var campgroundTable = getCampsTable(results);
	if (campgroundTable !== undefined && campgroundTable != '') {
		var paragraph = $(pName);
		paragraph.empty();
		paragraph.append(campgroundTable);
	}
}

function displayResults(res) {
		console.log(res);
		res = filterNationalParks(res);
		if (res.total > 0) {			
			$(".results").css("display", "block");
			$(".output").empty();
			$(".output").append(`<p><b>Results found:</b>${res.total}</p>`);
			res.parks.forEach(park => {				
				var activitiesStr = getActivities(park);
				var feesTbl = getFeesTbl(park);
				
				var formulateLi = `<div class="top-level"><h3><a href="${park.url}">${park.fullName}</a></h3><p><b>Description:</b>${park.description}</p>`;
				if (activitiesStr.length != 0) { 
					formulateLi = formulateLi + `<p><b>Activities Available: </b>${activitiesStr}</p>`
				}
				
				if (feesTbl.length != 0) { 
					formulateLi = formulateLi + `<p><b>Entrance Fees: </b>${feesTbl}</p>`
				}
				
				
				formulateLi = formulateLi + `<p><b>Campgrounds: </b><button id="check_avail_button" class = "camp_button" value=${park.parkCode}>Check availability</button></p><p id="${'park_' + park.parkCode}"></p></div>`;
				$(".output").append(formulateLi);				
			});			
		} else {
			$(".results").css("display", "block");
			$(".output").empty();
			$(".output").append('<p class="no_results">No results matched search criteria. Please change your selection criteria and try again<p>');
		}
}

function filterNationalParks(results) {
	var filteredResults = {};
	filteredResults.parks = [];
	var counter = 0;
	if (results !== undefined && results.total > 0) {
		results.data.forEach(park => {
			if (park.designation.includes("National Park")) {
				counter = counter + 1;
				filteredResults.parks.push(park);
			}
		});
	}
	filteredResults.total = counter;
	return filteredResults;
}

function getActivities(park) {
	var activitiesStr = '';
	if (park.activities !== undefined) {
		park.activities.forEach(activity => {
			if (activitiesStr.length != 0) {
				activitiesStr = activitiesStr + ', ' + activity.name;
			} else {
				activitiesStr = activity.name;
			}
		});
	}
	return activitiesStr;
}

function getFeesTbl(park) {
	var feesTbl = '';
	if (park.entranceFees !== undefined && park.entranceFees.length != 0) {
		if (park.entranceFees.length == 1 & park.entranceFees[0].cost == "0.00") {
			feesTbl = 'There is no entrance fee to the park';
		} else {
			park.entranceFees.forEach(feeObj => {
				if (feesTbl.length == 0) {
					feesTbl = `<thead><tr><th>Cost</th><th>Description</th></tr></thead><tbody><tr><td>${feeObj.cost}</td><td>${feeObj.title}</td></tr>`;
				} else {
					feesTbl = feesTbl + `<tr><td>$${feeObj.cost}</td><td>${feeObj.title}</td></tr>`;
				}
			});
			feesTbl = '<table id="parksTable">' + feesTbl + '</tbody></table>';
		}
	}
	return feesTbl;
}

function getCampsTable(results) {
	var campTbl = '';
	if (results !== undefined && results.total != 0) {
		results.data.forEach(camp => {
			campTbl = campTbl + `<li><b>${camp.name + "</b>; Total Available: " + camp.campsites.totalSites}<p>${camp.description}</p>`;
			if (camp.reservationUrl != "") {
				 campTbl = campTbl + `<p><button id="reserve_button" class = "camp_button" value=${camp.parkCode + "_" + camp.id}>Reserve</button></p></li>`;
			} else {
				campTbl = campTbl + `<p class="no_results">This campground is not reservable</p>`;
			}
			campTbl = campTbl + '<br></li>';
			
		});
		campTbl = '<ol>' + campTbl + '</ol>';
	} else {
		campTbl = '<p class="no_results"> No Campgrounds Found!</p>';
	}
	return campTbl;
}
       