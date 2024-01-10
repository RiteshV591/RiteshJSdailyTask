"use strict";


// ======= Modal show and hide ========

// get all the variables needed to make modal working
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelector(".btn--show-modal");

// function to open modal that removes class "hidden" to both modal and overlay
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

// function to close modal that adds class "hidden" to both modal and overlay
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// adding click listner on navbar link to "open" modal by calling openModal function
btnsOpenModal.addEventListener("click", openModal);

// adding click listner on cross icon and overlay to "close" modal by calling closeModal function
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// adding keypress event on entire document that listen for "escape" key and call the closeModal function
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});


// ========= showing product and budget when service option is selected ========

// getting variables needed
const productRow = document.querySelector('.productRow');
const budgetRow = document.querySelector('.budgetRow');

// defining the function that will be called by onchange when a option is selected that returns index 
// (My personal logic "Don't know if it's efficient!")
function getService(el){

  // storing the returned index of current selected option
  const selectedServiceIndex = el.selectedIndex;

  // cheking if it's between 1-3 only then show both product and budget row by removing "hidden" class
  if(selectedServiceIndex >= 1 && selectedServiceIndex <=3 ){
    productRow.classList.remove('hidden');
    budgetRow.classList.remove('hidden');
    
    // unless keep them hidden
  } else {
    productRow.classList.add('hidden');
    budgetRow.classList.add('hidden');
  }

}

// ===== Getting the count of budget from range input and showing it to display ====

const changingBudgetValue = document.querySelector('.changing-budget');
const budgetRangeInput = document.querySelector('#budget');

// setting the range value to label
budgetRangeInput.addEventListener("input", function(e){
  changingBudgetValue.textContent = e.target.value;
})


// ==== Setting the value recieved by user on the main page ====== 
// (it is a lengthy process, but don't know the efficient method)


//getting all the lables to show the stored value
const submitBtn = document.querySelector('.submit-btn');
const fullName = document.querySelector('.displayName')
const email = document.querySelector('.displayEmail')
const phone = document.querySelector('.displayPhone')
const service = document.querySelector('.displayService')
const product = document.querySelector('.displayProduct')
const budget = document.querySelector('.displayBudget')
const message = document.querySelector('.displayMessage')


// setting click listner to submit button to store the values entered by user and close the modal

submitBtn.addEventListener('click', function() {
  
  fullName.innerHTML = document.querySelector('#name').value;
  email.innerHTML = document.querySelector('#email').value;
  phone.innerHTML = document.querySelector('#phone').value;
  service.innerHTML = document.querySelector('#service').value;
  product.innerHTML = document.querySelector('input[name="product"]:checked').value; 
  budget.innerHTML = document.querySelector('.budget-value').textContent;
  message.innerHTML = document.querySelector('#message').value;
  closeModal();

});
