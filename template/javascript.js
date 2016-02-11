jQuery(function($){ 

var datefield=document.createElement("input")
    datefield.setAttribute("type", "date")
        document.write('<link href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/themes/base/jquery-ui.css" rel="stylesheet" type="text/css" />\n')
        document.write('<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.4/jquery.min.js"><\/script>\n')
        document.write('<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/jquery-ui.min.js"><\/script>\n')
		
			$( ".start_date" ).datepicker({
				onClose: function( selectedDate ) {
				$( ".end_date" ).datepicker( "option", "minDate", selectedDate );
			},
			 beforeShowDay: function(date) {
				var day = date.getDay();
				return [day != 1];
			},
			minDate: 0
			});
			$( ".end_date" ).datepicker({
				onClose: function( selectedDate ) {
				$( ".start_date" ).datepicker( "option", "maxDate", selectedDate );
			  },
			 beforeShowDay: function(date) {
				var day = date.getDay();
				return [day != 1];
			}
			});
			
				$('.send-button').click(function () {
		var userDateInput1 = $('.start_date');
		var userDate1 = userDateInput1.val();
		var userDateInput2 = $('.end_date');
		var userDate2 = userDateInput2.val();
		var search_box_form = $('.search-box');
		search_box_form.submit(function(e) {
    			e.preventDefault();
		});
		
		
	
		if(userDate1!="" && userDate2!=""){
		
							alert("Looking for tickets..");
		
		}
	});
	
})
