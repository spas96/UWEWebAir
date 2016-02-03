$(document).ready(function () {
	"use strict"

	var button = $('#send-button');
	button.click(function () {
		var userDateInput1 = $('#start_date');
		var userDate1 = userDateInput1.val();
		var date1 = new Date(userDate1);
		var n = date1.getDay()
		var userDateInput2 = $('#end_date');
		var userDate2 = userDateInput2.val();
		var date2 = new Date(userDate2);
		var m = date2.getDay()

		if(!userDate1){
			alert("ERROR: Please Enter Depart Date");
		}
		else{
			if(!userDate2){
				alert("ERROR: Please Enter Return Date");
			}
			else{
				if(n==1){
					alert("No flights at Monday!\nPlease enter another Depart Date!");
				}
				else{
					if(m==1){
						alert("No flights at Monday!\nPlease enter another Return Date!");

					}
					else{
						alert("Looking for tickets..");
					}
			}	}
		}
	});

});
