


var elItem = document.querySelectorAll(".features-list__item");
var elLink = document.querySelectorAll(".features-list__btn ");
var elSlider = document.querySelectorAll(".sliders");

elLink.forEach(function (links) {
  links.addEventListener("click", function (evt) {
    evt.preventDefault();

    elItem.forEach(function (item) {
      item.classList.remove("features-list__item--active")
    });
    links.parentElement.classList.add("features-list__item--active");

    elSlider.forEach(function (item) {
      item.classList.remove("sliders-active")
    });
    document.querySelector(links.getAttribute('href')).classList.add("sliders-active")
    
  })
  })
  
console.log(elSlider);



//! loader/////////////////////////
var btn = document.querySelector(".loader");


setTimeout(() => {
  btn.classList.add("loader-show");
},3000)