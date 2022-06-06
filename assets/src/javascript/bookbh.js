const checkIn = document.getElementById('checkIn');
const checkOut = document.getElementById('checkOut');
const adults = document.getElementById('number_adults');
const children = document.getElementById('number_children');
const username = document.getElementById('username');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const booking = document.getElementById('book-btn');
const progressBar = document.querySelector('.progress');
const accepted = document.querySelector('.accept-form');
const denied = document.querySelector('.denied-form');

booking.addEventListener('click', () => {
  checkEmpty(name, phone, email);
  // set text empty
  checkIn.value = "";
  checkOut.value = "";
  adults.value = "Choose";
  children.value = "Choose";
  username.value = "";
  phone.value = "";
  email.value = "";
});

function checkEmpty(name, phone, email) {
  if(name.value == "" || phone.value == "" || email.value == "")
  {
    showDenied();
  }
  else {
    showAccpt();
  }
}

// counting time close
let time;

// show accepted form
function showAccpt() {
  accepted.classList.add('active');

  time = setTimeout(() => {
    accepted.classList.remove('active');
  }, 2000);
} 
// show denied form
function showDenied() {
  denied.classList.add('active');

  time = setTimeout(() => {
    denied.classList.remove('active');
  }, 2000);
}
