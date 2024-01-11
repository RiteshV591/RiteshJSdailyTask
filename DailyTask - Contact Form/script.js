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

submitBtn.addEventListener('click', function(e) {
  
  e.preventDefault();

  // show values to display and close the modal only when all the inputs are valid
  if (validateName() && validateEmail() && validateMessage()) {

    fullName.innerHTML = document.querySelector('#name').value;
    email.innerHTML = document.querySelector('#email').value;
    phone.innerHTML = document.querySelector('#phone').value;
    service.innerHTML = document.querySelector('#service').value;
    budget.innerHTML = document.querySelector('.budget-value').textContent;
    message.innerHTML = document.querySelector('#message').value;
    
    // was getting error of "null value" that's why checking first
    const productInput = document.querySelector('input[name="product"]:checked');
    if(productInput){
      product.innerHTML = productInput.value;
    }
    closeModal();
  }

});

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const serviceError = document.getElementById('serviceError');
const messageError = document.getElementById('messageError');

// calling this function when any input given to input box using "onKeyUp()"
function validateName(){
  const name = document.querySelector('#name').value;

  // cheking if given input is empty
  if(name.length == 0){
    nameError.innerHTML = 'Name is Required!';
    nameError.classList.add('error');
    // nameError.classList.remove('valid');
    return false;
  } 
  nameError.innerHTML = 'valid';
  nameError.classList.add('valid');
  return true;
}

// calling this function when any input given to input box using "onKeyUp()"
function validateEmail(){
  var email = document.querySelector('#email').value;

  // cheking if given input is empty
  if(email.length == 0) {
    emailError.innerHTML = 'Email is required'
    return false;
  }

  //checking if regex matches the input value
  if(!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)){
    emailError.innerHTML = 'Email Invalid'
    nameError.classList.add('error');
    nameError.classList.remove('valid');
    return false;
  }
  emailError.innerHTML = 'valid';
  emailError.classList.add('valid');
  return true;
}

// calling this function when any input given to input box using "onKeyUp()"
function validateMessage(){
  var message = document.querySelector('#message').value;
  
  // cheking if given input is empty
  if(message.length == 0){
    messageError.innerHTML = 'Message is Required!';
    nameError.classList.add('error');
    nameError.classList.remove('valid');
    return false;
  } 

  messageError.innerHTML = 'valid';
  messageError.classList.add('valid');
  return true;
}