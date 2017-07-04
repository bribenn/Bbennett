$(document).ready(function(){
	var $menu = $('#sidebar-wrapper');
	$(document).on('click', '.js-menu-open', function(evt){
		$menu.addClass('open');
		return evt.target.tagName === 'A';
	}).on('click', '.js-menu-close', function(evt){
		$menu.removeClass('open');
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


