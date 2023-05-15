ScrollReveal().reveal('#nama1', {delay: 200})
ScrollReveal().reveal('#nama2', {delay: 400})
ScrollReveal().reveal('#nama3', {delay: 600})
ScrollReveal().reveal('#skills', {delay: 500})
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 100;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
  