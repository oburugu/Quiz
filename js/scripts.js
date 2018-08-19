function onSubmit(){
  var total= 3;
  var score= 0;

  var q1 = document.forms["quiz"]["q1"].value;
	var q2 = document.forms["quiz"]["q2"].value;
	var q3 = document.forms["quiz"]["q3"].value;

  for(i = 1; i <= total; i++) {
		if(eval('q'+i) == null || eval('q'+i) == '') {
			alert('You missed question '+ i);
			return false;
		}
	}

	var answers = ["c", "b", "a"];

	for(i = 1; i <= total; i++) {
		if(eval('q'+1) == answers[i - 1]) {
			score++;
		}
	}

	var results = document.getElementById('results');
	results.innerHTML = '<h2>Your score is <span>'+ score + '</span> out of <span>'+ total+'</span></h2>'
	alert('Your score was ' + score + 'out of ' + total);

	return false;
}
