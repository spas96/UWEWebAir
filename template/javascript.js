jQuery(function($){ 
			
		$('.send-button').click(function () {
		var userDateInput1 = $('.start_date');
		var userDate1 = userDateInput1.val();
		var userDateInput2 = $('.end_date');
		var userDate2 = userDateInput2.val();
		
		var userDestInput1 = $('.start_dest');
		var userDest1 = userDestInput1.val();
		var userDestInput2 = $('.end_dest');
		var userDest2 = userDestInput2.val();
		var search_box_form = $('.search-box');
		search_box_form.submit(function(e) {
    			e.preventDefault();
		});
		
		userDateInput1.keydown(function(e){
			e.preventDefault();
		);
	
		if(userDate1!="" && userDate2!="" && userDest1!="" && userDest2!=""){
		
							alert("Looking for tickets..");
		
		}
	});
	
})
