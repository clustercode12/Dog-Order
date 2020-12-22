const urlParams = new URLSearchParams(window.location.search);
const firstName = urlParams.get('firstName');
var lastName = urlParams.get('lastName');
var address = urlParams.get('address');
var city = urlParams.get('city');
var country = urlParams.get('country');
var state = urlParams.get('state');
var zipcode = urlParams.get('zipcode');
var email = urlParams.get('email');
var phone = urlParams.get('phone');


document.getElementById('name').innerHTML = "Full Name: " + firstName + " " + lastName;
document.getElementById('address').innerHTML = "Shipping Address: " + address;
document.getElementById('city').innerHTML = "City: " + city;
document.getElementById('state').innerHTML = "State: " + state;
document.getElementById('country').innerHTML = "Country: " + country;
document.getElementById('zipcode').innerHTML = "Zipcode: " + zipcode;
document.getElementById('phone').innerHTML = "Phone: " + phone;
document.getElementById('email').innerHTML = "Email: " + email;

function order() {
    alert("Order Sent");
}
