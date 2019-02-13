
let wordSubmitButton = document.querySelector('#submitWordButton');
wordSubmitButton.addEventListener("click",function(){
	let word = document.querySelector('#wordBox').value;
	document.querySelector('#scoreBoard').innerHTML = "Points: "+wordScoreCalculator(word);
});