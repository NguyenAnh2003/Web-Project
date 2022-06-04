const checkIn = document.getElementById('checkIn');
const checkOut = document.getElementById('checkOut');
const adults = document.getElementById('number_adults');
const children = document.getElementById('number_children');
const username = document.getElementById('username');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const booking = document.getElementById('book-btn');

booking.addEventListener('click', () => {
  // let info = {
  //   dataIn: checkIn.value,
  //   dataOut: checkOut.value,
  //   adults: adults.value,
  //   children: children.value,
  //   name: username.value,
  //   phone: phone.value,
  //   email: email.value,
  // }
  // console.log(info);

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
    alert("SHIT")
  }
}