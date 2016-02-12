$(function()
  {

      var lookFor = [
          "Bristol",
          "Newcastle",
          "Manchester",
          "London",
          "Glasgow",
          "Cardiff",
		  "Edinburgh",
          "Southampton",
          "Birmingham",
      ];
      var form = document.getElementById("search-box"); 
      var resultsDiv = document.getElementById("results");
	  var resultsDiv1 = document.getElementById("results1");
      var searchField1 = form.start_dest;
	  var searchField2 = form.end_dest;
	  


      
      // now, attach the keyup handler to the search field:

      searchField1.onkeyup = function()
      {


          var txt = this.value.toLowerCase();
          if ( txt.length == 0 ) return;

          var txtRE = new RegExp( "(" + txt + ")", "ig" );
          // now...do we have any matches?
          var top = 0;
          for ( var s = 0; s < lookFor.length; ++s )
          {
              var srch = lookFor[s];
              if ( srch.toLowerCase().indexOf(txt) >= 0 )
              {
                  srch = srch.replace( txtRE, "<span>$1</span>" );
                  var div = document.createElement("div");
                  div.innerHTML = srch;
                  div.onclick = function() {

                      searchField1.value = this.innerHTML.replace(/\<\/?span\>/ig,"");
					  if((searchField1.value=="Bristol" && searchField2.value=="London") || (searchField1.value=="London" && searchField2.value=="Manchester") || (searchField1.value=="Bristol" && searchField2.value=="Glasgow") || (searchField1.value=="Glasgow" && searchField2.value=="Newcastle") || (searchField1.value=="Newcastle" && searchField2.value=="Manchester")){
						  var myElement = document.querySelector(".end_date");
						  myElement.style.backgroundColor = "#bbb";
						  myElement.setAttribute("disabled", "true"); 
					  }
					  else{
						  var myElement = document.querySelector(".end_date");
						  myElement.style.backgroundColor = "white";
						 myElement.removeAttribute("disabled");
					  }

                      resultsDiv.style.display = "none";
                  };
                  div.style.top = top + "px";
                  top += 20;
                  resultsDiv.appendChild(div);
                  resultsDiv.style.display = "block";
              }
          }
      }
      // and the keydown handler:
      searchField1.onkeydown = function() 
      {

          while ( resultsDiv.firstChild != null )
          {
              resultsDiv.removeChild( resultsDiv.firstChild );          
          }
          resultsDiv.style.display = "none";
      }
	  
	  
	  
	  
	  
	  searchField2.onkeyup = function()
      {
          var txt = this.value.toLowerCase();
          if ( txt.length == 0 ) return;

          var txtRE = new RegExp( "(" + txt + ")", "ig" );
          // now...do we have any matches?
          var top = 0;
          for ( var s = 0; s < lookFor.length; ++s )
          {
              var srch = lookFor[s];
              if ( srch.toLowerCase().indexOf(txt) >= 0 )
              {
                  srch = srch.replace( txtRE, "<span>$1</span>" );
                  var div = document.createElement("div");
                  div.innerHTML = srch;
                  div.onclick = function() {
                      searchField2.value = this.innerHTML.replace(/\<\/?span\>/ig,"");
					  if((searchField1.value=="Bristol" && searchField2.value=="London") || (searchField1.value=="London" && searchField2.value=="Manchester") || (searchField1.value=="Bristol" && searchField2.value=="Glasgow") || (searchField1.value=="Glasgow" && searchField2.value=="Newcastle") || (searchField1.value=="Newcastle" && searchField2.value=="Manchester")){
						  var myElement = document.querySelector(".end_date");
						  myElement.style.backgroundColor = "#bbb";
						  myElement.setAttribute("disabled", "true"); 
					  }
					  else{
						  var myElement = document.querySelector(".end_date");
						  myElement.style.backgroundColor = "white";
						 myElement.removeAttribute("disabled");
					  }
                      resultsDiv1.style.display = "none";
                  };
                  div.style.top = top + "px";
                  top += 20;
                  resultsDiv1.appendChild(div);
                  resultsDiv1.style.display = "block";
              }
          }
      }
      // and the keydown handler:
      searchField2.onkeydown = function() 
      {
          while ( resultsDiv1.firstChild != null )
          {
              resultsDiv1.removeChild( resultsDiv1.firstChild );          
          }
          resultsDiv1.style.display = "none";
      }
     
  })
