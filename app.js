'use strict';

//Selecting Elements
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.close-modal');
const btnsOpen = document.querySelectorAll('.show-modal');

//open modal function
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

//Close modal function
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//Open modal function
btnsOpen.forEach(function (currentBtn) {
  currentBtn.addEventListener('click', openModal);
});

//Closes modal by Button && overlay
btnClose.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//Closes Modal by ESC
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
});
