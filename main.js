const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const iOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", iOpen?"ri-close-line":"ri-menu-line")
});

navLinks.addEventListener("click", (e) =>{
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");

});

const sr = ScrollReveal({
  distance: "50px",
  origin: "bottom",
  duration: 1000,
});

sr.reveal(".header_container h2");
sr.reveal(".header_container h1", { delay: 500 });
sr.reveal(".header_container p", { delay: 1000 });
sr.reveal(".header_btns", { delay: 1500 });

sr.reveal(".steps_card", { interval: 500 });
sr.reveal(".explore_card", { interval: 500 });
sr.reveal(".job_card", { interval: 500 });


// Save scroll position before the page unloads
window.addEventListener("beforeunload", function () {
  localStorage.setItem("scrollY", window.scrollY);
});

// Scroll to saved position on load
window.addEventListener("load", function () {
  const scrollY = localStorage.getItem("scrollY");
  if (scrollY !== null) {
    window.scrollTo(0, parseInt(scrollY));
  }
});





  

  