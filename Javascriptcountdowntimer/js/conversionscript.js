

// timer time
var timerTime = 2;
var futureTime = new Date();
futureTime.setMinutes(futureTime.getMinutes() + timerTime);
var targetTime = new Date(futureTime).getTime();
var timerHandle ;

function countdown() {
  var now = new Date().getTime();
  // Find the difference between target and now
  var diff = targetTime - now;
  var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((diff % (1000 * 60)) / 1000);
  $('.counter').html(minutes + ":" + seconds);
  // stop when count  down finishes
  if (seconds <1 && minutes<1) {
    clearInterval(timerHandle);
  }
}
$( document ).ready(
    function(){
        //start timer
        timerHandle = setInterval("countdown()",1000);

    }
);
