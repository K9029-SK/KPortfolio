// Prevent browser from restoring scroll position automatically on page reload
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

window.addEventListener("load", () => {
  // Optional: Remove hash from URL if any
  if (window.location.hash) {
    history.replaceState(null, document.title, window.location.pathname + window.location.search);
  }

  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  function updateActiveLink() {
    let current = "";

    sections.forEach(section => {
      // Adjust offset to match nav height exactly (60px)
      const sectionTop = section.offsetTop - 60;
      if (window.pageYOffset >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  }

  updateActiveLink();
  window.addEventListener("scroll", updateActiveLink);
});

const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const arrowUpBtn = document.getElementById('arrowUpBtn');
const aboutSection = document.getElementById('about');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// Show arrow button when scrolling past About section
window.addEventListener('scroll', () => {
  const aboutTop = aboutSection.getBoundingClientRect().top;

  if (aboutTop <= 0) {
    arrowUpBtn.style.display = 'block';
  } else {
    arrowUpBtn.style.display = 'none';
  }
});

const scrollTop = document.querySelector('#scroll-top');

function toggleScrollTop() {
  if (scrollTop) {
    window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
  }
}

scrollTop.addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('load', toggleScrollTop);
document.addEventListener('scroll', toggleScrollTop);



//new

  const viewMoreBtn = document.getElementById("viewMoreBtn");
  const viewLessBtn = document.getElementById("viewLessBtn");
  const extraProjects = document.querySelector(".extra-projects");

  viewMoreBtn.addEventListener("click", () => {
    extraProjects.style.display = "flex";
    viewMoreBtn.style.display = "none";
    viewLessBtn.style.display = "inline-block";
  });

  viewLessBtn.addEventListener("click", () => {
    extraProjects.style.display = "none";
    viewMoreBtn.style.display = "inline-block";
    viewLessBtn.style.display = "none";
  });

  document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.querySelector(".nav-toggle");
    const navLinks = document.querySelector("nav ul");

    toggle.addEventListener("click", function () {
      navLinks.classList.toggle("active");
    });
  });