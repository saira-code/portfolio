const sections = document.querySelectorAll('.section');
function checkVisibility() {
  const triggerBottom = window.innerHeight * 0.85;
  sections.forEach(section => {
    const boxTop = section.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      section.classList.add('visible');
    }
  });
}

const scrollTopBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', () => {
  checkVisibility();
  if (window.scrollY > 300) {
    scrollTopBtn.style.display = 'block';
  } else {
    scrollTopBtn.style.display = 'none';
  }
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const navLinks = document.querySelectorAll('.nav-links a');
function setActiveLink() {
  let index = sections.length;
  while (--index && window.scrollY + 50 < sections[index].offsetTop) {}
  navLinks.forEach(link => link.classList.remove('active'));
  navLinks[index].classList.add('active');
}

window.addEventListener('scroll', setActiveLink);
window.addEventListener('load', () => {
  checkVisibility();
  setActiveLink();
});
