/* eslint-disable no-plusplus */
// Select all slides
const slides = document.querySelectorAll('.slide');

// This is for the first carousel
function picShiffter() {
  let done = false;
  const pictures = document.querySelectorAll('.pic');

  pictures.forEach((pic, index, array) => {
    if (done) return;
    if (pic.classList.contains('visible')) {
      console.log('it works');
      pic.classList.remove('visible');
      array[(index + 1) % array.length].classList.add('visible');
      done = true;
    }
  });
}

// loop through slides and set each slides translateX property to index * 100%
slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});

// select next slide button
const nextSlide = document.querySelector('.btn-next');

// current slide counter
let curSlide = 0;
// maximum number of slides
const maxSlide = slides.length - 1;

// add event listener and navigation functionality
nextSlide.addEventListener('click', () => {
  // check if current slide is the last and reset current slide
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  //   move slide by -100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

// select prev slide button
const prevSlide = document.querySelector('.btn-prev');

// add event listener and navigation functionality
prevSlide.addEventListener('click', () => {
  // check if current slide is the first and reset current slide to last
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

  //   move slide by 100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

// interval calls picshiffter after xseconds happens
setInterval(picShiffter, 5000);
