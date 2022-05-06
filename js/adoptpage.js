const cardButtons = document.querySelectorAll('.card button');
const modalOuter = document.querySelector('.modal-outer');
const modalInner = document.querySelector('.modal-inner');

function handleCardButtonClick(event) {
  const button = event.currentTarget;
  const card = button.closest('.card');
  // grab the image src
  const imgSrc = card.querySelector('img').src;
  const desc = card.dataset.description;
  const name = card.querySelector('h3').textContent;
  // populate the modal with the new info
  modalInner.innerHTML = `
  <div class="modalImgContainer">
  <img src = "${imgSrc}" alt="${name}"/>
  </div>
  <h2>Hi my name is ${name}!</h2>
  <p>${desc}</p>
  `;
  // show the modal
  modalOuter.classList.add('open');
}

function closeModal() {
  modalOuter.classList.remove('open');
}

cardButtons.forEach((button) =>
  button.addEventListener('click', handleCardButtonClick)
);

modalOuter.addEventListener('click', (event) => {
  const isOutside = !event.target.closest('.modal-inner');
  if (isOutside) {
    closeModal();
  }
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeModal();
  }
});
