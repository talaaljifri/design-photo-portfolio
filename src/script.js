document.addEventListener("DOMContentLoaded", function () {
    // Load Navbar
    fetch("navbar.html") // Ensure this path matches your project structure
      .then(response => response.text())
      .then(data => {
        document.getElementById("navbar-container").innerHTML = data;
        highlightActivePage(); // Call function after navbar is injected
      })
      .catch(error => console.error("Error loading navbar:", error));
  
    // Load Icons
    fetch("icons.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("icons-container").innerHTML = data;
      })
      .catch(error => console.error("Error loading icons:", error));
  });
  
  // Highlight active navbar item
  function highlightActivePage() {
    const currentPage = window.location.pathname.split("/").pop().replace(".html", "");
    const navLinks = document.querySelectorAll(".nav-link");
  
    navLinks.forEach(link => {
      if (link.dataset.page === currentPage) {
        link.classList.add("text-purple-800", "font-bold");
      } else {
        link.classList.remove("text-purple-800", "font-bold");
      }
    });
  }
  

  