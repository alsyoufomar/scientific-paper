const faders = document.querySelectorAll('.fade-in');
const nav = document.querySelector('.fake-nav');
const hero = document.querySelector('.hero');
const btn = document.querySelector('.btn');
const filled = document.querySelector('.progress-bar');

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
