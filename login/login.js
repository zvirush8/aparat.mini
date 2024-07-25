document.getElementById("login-form").addEventListener("submit", function(event) {
	event.preventDefault();
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	alert("ورود تکمیل شد!");
  window.location.href = "in.html";
});