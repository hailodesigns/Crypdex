$(document).ready(() => {

/* more details*/
  $('.more-details-button').on('click', event => {
    $(event.currentTarget).siblings('.cryptid-details').slideToggle();
  });  
  
 $('.eye-closed').on('click', event => {
  	$(event.currentTarget).toggleClass('eye-open');
  });


  $('.login-button').on('click', () => {
    $('.login-button').toggleClass('button-active');
    $('.login-form').fadeToggle('slow');
     $('.menu-button').removeClass('button-active');
     $('.contact-button').removeClass('button-active');
    $('.nav-menu').hide();
    $('.contact-form').hide();
  });
  
  $('.menu-button').on('click', () => {
    $('.menu-button').toggleClass('button-active');
    $('.nav-menu').fadeToggle('slow');
    $('.login-button').removeClass('button-active');
    $('.contact-button').removeClass('button-active');
    $('.login-form').hide();
    $('.contact-form').hide();
  });

  $('.contact-button').on('click', () => {
    $('.contact-button').toggleClass('button-active');
    $('.contact-form').fadeToggle('slow');
    $('.menu-button').removeClass('button-active');
    $('.login-button').removeClass('button-active');
    $('.nav-menu').hide();
    $('.login-form').hide();
  });

  
//We need to write another function that does this:
// 1. When the user clicks on a size from the list in the product details, two things happen:
//	a. The chosen size appears 'active'
//	b. All of the other sizes appear 'inactive' …unless a different size is clicked, then all the others become 'inactive'
//	c. The ADD TO CART text appears 'active' and the button is no longer disabled  
  

//Write a JQuery object that selects any list item element in the shoe-details class container and triggers an on 'click' event function using arrow syntax
//Write a JQuery object that selects the event currentTarget. Use the addClass method to add the class 'active' to the selected element;
//Write a JQuery object that selects the event currentTarget. Use the siblings() method to find the other <li>s. Use the .removeClass() method to remove the active class from these elements;
//Write a JQuery object that selects the event currentTarget. Use the closest method with the shoe-details class as its parameter to choose the parent class. Add the .children() method to target the closest children of the parent class. Add the removeClass method with the 'disabled' class as its paramemter;
// End the function

  $('.book-details li').on('click', event => {
    $(event.currentTarget).addClass('active');
    $(event.currentTarget).siblings().removeClass('active');
    $(event.currentTarget).closest('.book-details').children().removeClass('disabled');
  });


//Finally, we need to write another function that does this:
// 1. When the user clicks on ADD TO CART, four things happen:
//	a. The number of items in the shopping cart increases by one - We'll have to write a function within our function to make this happen.
//	b. The Shopping Cart will appear.
//  c. The product details will disappear
//	d. The arrow image rotates 90˚ counter-clockwise

  $('.product-photo').on('mouseenter', event => {
    $(event.currentTarget).addClass('photo-active')
  }).on('mouseleave', event => {
    $(event.currentTarget).removeClass('photo-active')
  });
  
//Write a JQuery object that selects the buy-now-button class and triggers an on 'click' event function using arrow syntax
//Write a function within the function using traditional function syntax that:
	//Uses a JQuery object to select the '.items-quantity' class. Add the html method that triggers a function with (i, val) as its parameters
	  //In the callback, use the keyword return to calculate val*1+1. Use '})' to end this sub-function. You have just multiplied the current value in the html by zero and added one to it. 
//Write a JQuery object that selects the '.shopping-cart' class. Use the show method to make it appear;
//Write a JQuery object that selects the event currentTarget. Use the method that will traverse the DOM and select the closest .'shoe-details' class. Use the .hide() method to make it disappear
//Write a JQuery object that selects '.more-details-button' class. Use the find method to locate the img element. Use the removeClass method to remove the class 'rotate' from the img element;
// End the function

  $('.buy-now-button').on('click', event => {
    $('.items-qty').html(function(i, val) {
      return(val*1+1)})
    $('.shopping-cart').show();
  });
  
//Make the Iris of the eye on the logo move
  const eye = document.querySelector('.iris');
window.addEventListener('mousemove', (event) => {
const x = -(window.innerWidth / 2 - event.pageX) / 35;
const y = -(window.innerHeight / 2 - event.pageY) / 35;
eye.style.transform = `rotate(-45deg) translateY(${y}px)  translateX(${x}px)`;         
        });

});