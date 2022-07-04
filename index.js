const faders = document.querySelectorAll('.fade-in');
const nav = document.querySelector('.fake-nav');
const hero = document.querySelector('.hero');
const btn = document.querySelector('.btn');
const filled = document.querySelector('.progress-bar');
const darkIcon = document.querySelector('.dark-icon');

const appearOptions = {
  threshold: 0,
  rootMargin: '0px 0px -100px 0px',
};

const options = {
  rootMargin: '-60px 0px 0px 0px',
};

const appearONScroll = new IntersectionObserver(function (
  entries,
  appearONScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('appear');
      appearONScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

const navScroll = new IntersectionObserver(function (entries, navScroll) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      nav.classList.remove('disappear');
      btn.classList.remove('disappear');
    } else {
      nav.classList.add('disappear');
      btn.classList.add('disappear');
    }
  });
}, options);

navScroll.observe(hero);

faders.forEach((fader) => {
  appearONScroll.observe(fader);
});

function update() {
  filled.style.width = `${
    (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
  }%`;
  requestAnimationFrame(update);
}

update();

let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.querySelector('.dark-mode-toggle');

const enableDarkMode = () => {
  document.body.classList.add('darkmode');
  darkIcon.classList.add('fa-sun');
  darkIcon.classList.remove('fa-moon');
  localStorage.setItem('darkMode', 'enabled');
};

const disableDarkMode = () => {
  document.body.classList.remove('darkmode');
  darkIcon.classList.add('fa-moon');
  darkIcon.classList.remove('fa-sun');
  localStorage.setItem('darkMode', null);
};

if (darkMode === 'enabled') {
  enableDarkMode();
}

darkModeToggle.addEventListener('click', () => {
  darkMode = localStorage.getItem('darkMode');

  if (darkMode !== 'enabled') {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});
