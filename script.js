const avatar = document.querySelector(".avatar__container");
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  window.scrollY >= 40
    ? avatar.classList.add("hideAvatar")
    : avatar.classList.remove("hideAvatar");
});

const projectCards = document.querySelector(".work__cards-container");

// Using Masonry plugin to achieve masonry layout for project cards
// See https://masonry.desandro.com/
var masonry = new Masonry(projectCards, {
  itemSelector: ".work__card",
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

  var cards = document.querySelectorAll(".work__card");

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
