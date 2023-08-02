const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav__links > li");

const options1 = {
  root: null,
  threshold: 0.15,
  rootMargin: "-150px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      sections.forEach((section, idx) => {
        entry.target === section
          ? (navLinks[idx].ariaCurrent = "true")
          : (navLinks[idx].ariaCurrent = "false");
      });
    }
  });
}, options1);

sections.forEach((section) => {
  observer.observe(section);
});

const avatar = document.querySelector(".avatar__container");
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  window.scrollY >= 40
    ? avatar.classList.add("hideAvatar")
    : avatar.classList.remove("hideAvatar");
});

const projectCards = document.querySelector(".project__cards");

// Using Masonry plugin to achieve masonry layout for project cards
// See https://masonry.desandro.com/
var masonry = new Masonry(projectCards, {
  itemSelector: ".project__card",
  fitWidth: true,
  gutter: 128,
});

function matchProjectCardSizeDependingOnWindowSize() {
  var width = NaN;

  if (window.innerWidth > 1400) {
    width = "576px";
  } else if (window.innerWidth > 550) {
    width = "445px";
  } else if (window.innerWidth > 374) {
    width = "335px";
  } else {
    width = "300px";
  }

  var cards = document.querySelectorAll(".project__card");

  cards.forEach((card) => {
    card.style.maxWidth = width;
  });
}

// Layout may load before images do. This ensures the layout
// is updated once the project card sizes are correct
imagesLoaded(projectCards, () => {
  matchProjectCardSizeDependingOnWindowSize();
  masonry.layout();
});

window.addEventListener("resize", (event) => {
  matchProjectCardSizeDependingOnWindowSize();
  masonry.layout();
});
