'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

// if we have multiple elements with same class, querySelectorAll is used to access all the element with same class name.

const btnOpenModal = document.querySelectorAll('.show-modal');

// 'querySelectorAll' will return the nodeList of same class elements, to iterate over each, we can use for loop

// created a function that will remove the class "hidden" to show modal
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

//created a function to add the class "hidden" to make modal invisible
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// showing the modal when button is clicked
for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', openModal);
}

// hiding the modal when close button or overlay is clicked
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// --------- Handling a keyboard key press ----

// here i want, when modal is opened, i want to close it when 'esc' (Escape) key is pressed

// so we have to add click listned on the entire document

document.addEventListener('keydown', function (e) {
  // when any key is pressed the function will be called with an argument that will return the object with all the information of that keypress event. That's why we have written 'e' in the function

  // check if the key pressed is 'Escape' & the modal does not contain class "hidden"
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
