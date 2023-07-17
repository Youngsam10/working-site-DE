const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = (_onclick) => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('open');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navlist.classList.remove('open');
};

const sr = ScrollReveal ({
	distance: '30px',
	duration: 2600,
	reset: true
})

sr.reveal('.home-text',{delay:280, origin:'bottom'})

sr.reveal('.featured,.cta,.new,.brand,.contact',{delay:200, origin:'bottom'})

let x = 5
let y = 2
let z = x + y
document.getElementById.innerHTML = "The sum of x + y is: " + z;

var emailLink = document.getElementById('emailLink');

emailLink.addEventListener('click', function(event) {
	var emailAddress = 'desonsolutionsresources@gmail.com'; // Replace with your email address
	var subject = 'Welcome to Deson solutions resouces '; // Replace with your desired subject line
	
	var emailUrl = 'mailto:' + encodeURIComponent(emailAddress) + '?subject=' + encodeURIComponent(subject);
	window.location.href = emailUrl;
	
	event.preventDefault();
  });


  const instagramLink = document.querySelector('.instagram-link');
  instagramLink.addEventListener('click', function(event) {
    event.preventDefault();
    window.open(this.getAttribute('href'), '_blank');
  });



//   about us

// const backButton = document.getElementById('backButton');
// backButton.addEventListener('click', function() {
// 	window.location.href = 'index.html';

	

	
