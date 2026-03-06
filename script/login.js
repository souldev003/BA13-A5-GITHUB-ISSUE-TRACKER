function signIn() {
  const userName = document
    .getElementById("username-input")
    .value.toLowerCase()
    .trim(" ");
  const password = document
    .getElementById("password-input")
    .value.toLowerCase()
    .trim(" ");

  if (userName != "admin") {
    alert("Invalid username");
  } else if (password != "admin123") {
    alert("Invalid password");
  } else {
    window.location.assign("home.html");
  }
}
