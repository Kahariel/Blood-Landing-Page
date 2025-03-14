var form = document.getElementById("contactUs");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

// Set the date we're counting down to
var countDownDate = new Date("April 1, 2025").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("date").innerHTML = "Global Launch In: " + (days + " Days, " + hours + " Hours, "
  + minutes + " Minutes and " + seconds + " Seconds. ");
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("date").innerHTML = "RELEASED!";
  }
}, 1000);

function contactUs() {
  var email = document.getElementById("email");
  var message = document.getElementById("message");
  var alert = document.getElementById("alert");

  if (!email || !message) {
    alert("Please insert your email and message!");
    return
  }

  alert.style.display = "block";
}