// scriptNavigTitle.js
// Function to determine the active page and apply the style
function setActivePage() {
  const currentPage = window.location.pathname;
  const navigationLinks = document.querySelectorAll("#navigation ul li a");
  navigationLinks.forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.parentElement.classList.add("active");
    }
  });
}
// Call the setActivePage function when the page loads
window.addEventListener("DOMContentLoaded", setActivePage);