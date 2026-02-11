// Future animations or interactivity can go here
console.log("Programmerz loaded successfully!");
AOS.init({
  duration: 1000,   // animation speed
  once: false,       // animate only once
  easing: 'ease-in-out'
});
// Prevent default form submit and show console message
document.getElementById('signin-form')?.addEventListener('submit', function(e){
  e.preventDefault();
  alert('Signed In Successfully!');
});

document.getElementById('signup-form')?.addEventListener('submit', function(e){
  e.preventDefault();
  alert('Account Created Successfully!');
});

