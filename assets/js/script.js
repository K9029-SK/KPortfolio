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

  // Burger toggle logic (FIXED and unified)
  const navToggle = document.getElementById('navToggle'); // e.g., your burger button
  const navMenu = document.getElementById('navMenu'); // e.g., the <ul> or nav container

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('show');
    });
  }

  // Arrow-up logic
  const arrowUpBtn = document.getElementById('arrowUpBtn');
  const aboutSection = document.getElementById('about');

  window.addEventListener('scroll', () => {
    const aboutTop = aboutSection.getBoundingClientRect().top;
    arrowUpBtn.style.display = (aboutTop <= 0) ? 'block' : 'none';
  });

  // Scroll to top
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

  toggleScrollTop();
  document.addEventListener('scroll', toggleScrollTop);
});

// View More / View Less for projects
const viewMoreBtn = document.getElementById("viewMoreBtn");
const viewLessBtn = document.getElementById("viewLessBtn");
const extraProjects = document.querySelector(".extra-projects");

if (viewMoreBtn && viewLessBtn && extraProjects) {
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
}
