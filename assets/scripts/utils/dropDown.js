function toggleDropdown() {
  document.getElementById("promosDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn') && event.target.classList.contains("show")) {
    toggleDropdown();
  }
}