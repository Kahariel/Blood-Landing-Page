var form = document.getElementById("login");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

function login() {
  var loggedIn = document.getElementById("logged");
  var login = document.getElementById("login");
  var text = document.getElementById("welcome");
  var name = document.getElementById("name").value;
  var pass = document.getElementById("password").value;
  if (!name || !pass) {
    alert("Please insert your email and password!");
    return
  }
  text.innerHTML += name;
  login.style.display = "none";
  loggedIn.style.display = "flex";
}

function register() {
  var loggedIn = document.getElementById("logged");
  var login = document.getElementById("login");
  var name = document.getElementById("name").value;
  var pass = document.getElementById("password").value;
  if (!name || !pass) {
    alert("Please insert your email and password!");
    return
  }
  login.style.display = "none";
  loggedIn.style.display = "flex";
}