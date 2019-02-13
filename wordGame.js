
function wordScoreCalculator(word)
{ 
 let score = 0;
 let letterTablePoints ={};
 let wordPoints = 1;
 let letters = word.split("");
 
 // populate table of letters in the Alphabet and values
 for (var i = 65;i<91;i++)
 {
     let letter = String.fromCharCode(i);
     letterTablePoints[letter ] =  wordPoints;
     wordPoints++;
    
}
// check letter table against letters
for(let letter in letterTablePoints) {
    if(letterTablePoints.hasOwnProperty(letter)) {
        letters.map(
            function(currentLetter){ 
               // If letter found use score in table
               if (letter == currentLetter.toUpperCase())
               {
                   score += letterTablePoints[letter];
                 
               }
               
                }
            );
    }
}

return score;
}

console.log(wordScoreCalculator("aa"));
