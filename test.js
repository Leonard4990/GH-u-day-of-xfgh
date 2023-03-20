// Pop-up ad JavaScript code
window.onload = function() {
  var popup = document.getElementById("popup-ad");
  var closeBtn = document.querySelector(".close-btn");

  if (localStorage.getItem("popupShown") === "true") {
    setTimeout(function() {
      popup.style.display = "block";
    }, 2000);
  }

  closeBtn.onclick = function() {
    popup.style.display = "none";
    localStorage.setItem("popupShown", "true");
    window.location.href = "https://www.google.com";
  };
};
