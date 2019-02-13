
let wordSubmitButton = document.querySelector('#submitWordButton');
// attach event listener to submit word button
wordSubmitButton.addEventListener("click",function(){
	let word = document.querySelector('#wordBox').value;
	// if word is in the word dictionary allocate points
	if (wordList.includes(word.toLowerCase())){
			 document.querySelector('#scoreBoard').innerHTML = "Points: "+wordScoreCalculator(word);

	}else
	{
		 document.querySelector('#scoreBoard').innerHTML = "Incorrect word spelt!!!!";
	}
});