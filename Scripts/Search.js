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
			execQuery(query);	
		} else {
		//display error
		}
	}
});

function execQuery(query) {
	let endpoint = 'https://developer.nps.gov/api/v1/';
	let apiKey = 'Xui3j5YQKjKLv7a5gqDYxeWdkMft7k9xdtduFSgt';
	$.ajaxSetup({
		headers: { 'X-Api-Key': apiKey }
	});

	$.ajax({		
        url: endpoint + query,		
        contentType: "application/json",
        dataType: 'json',
		success: function(result) { displayResults(result) },
		error: function() {
			console.log("error!")
			//$('#info').html('<p>An error has occurred</p>');
		}
    })  
}

function displayResults(res) {
		console.log(res);
		res = filterNationalParks(res);
		if (res.total > 0) {			
			$(".results").css("display", "block");
			$(".output").empty();
			$(".output").append(`<p><b>Results found:</b>${res.total}</p>`);
			res.parks.forEach(park => {				
				var formulateLi = `<div class="top-level"><h3><a href="${park.url}">${park.fullName}</a></h3><p><b>Description:</b>${park.description}</p></div>`
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
       