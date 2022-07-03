const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0,
  rootMargin: '0px 0px -100px 0px',
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

faders.forEach((fader) => {
  appearONScroll.observe(fader);
});
