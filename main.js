$(document).ready(function(){
	var $menu = $('#sidebar-wrapper');
	$(document).on('click', '.js-menu-open', function(evt){
		$menu.addClass('open');
		return evt.target.tagName === 'A';
	}).on('click', '.js-menu-close', function(evt){
		$menu.removeClass('open');
	});

	// scroll smoothly to page section
	// Select all links with hashes
	$('a[href*="#"]').click(function(event) {
	    // On-page links
	    if (
	      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
	      && 
	      location.hostname == this.hostname
	    ) {
	      // Figure out element to scroll to
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	      // Does a scroll target exist?
	      if (target.length) {
	        // Only prevent default if animation is actually gonna happen
	        event.preventDefault();
	        $('html, body').animate({
	          scrollTop: target.offset().top
	        }, 1000, function() {
	          // Callback after animation
	          // Must change focus!
	          var $target = $(target);
	          $target.focus();
	          if ($target.is(":focus")) { // Checking if the target was focused
	            	$target.blur();
	            return false;
	          } else {
	            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
	            $target.focus(); // Set focus again
	            $target.blur();
	          };
	        });
	      }
	    }
	  });

	// make project divs into links
	$(".portfolio_img").click(function() {
	  url = $(this).find("a").attr("href"); 
	  console.log(url)
	  window.open(url, '_blank')
	  console.log($(this).find("a").attr("href"))
	  return false;
	});


	// scrolling words
		var words = ["coder", "problem solver",  "team player", "developer", "bit weird"],
			el = document.getElementById('scroll'),
			word_counter = 0,
			character_counter = 0;
		function updateText()
		{
			let character = words[word_counter][character_counter];
			if(character == ' '){
				el.innerHTML = el.innerHTML + '&nbsp;';
				character_counter++;
			} else {
				el.innerHTML = el.innerHTML+words[word_counter][character_counter++];
			}
			if(character_counter == words[word_counter].length +1)
			{
				word_counter++; 	//choose a different word
				character_counter = 0;	//start over with the first character of the word
				el.innerHTML = '';  //set the html to be blank
				//if we're displaying the last word, go back to the first word
				if(word_counter == words.length)
					word_counter = 0;
			}
		}
		setInterval(updateText,300);
});


