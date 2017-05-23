// JavaScript Document

var yttreSSH = document.getElementsByClassName('yttreSSH');

[].forEach.call(yttreSSH, function (c) {
	'use strict';
var next = c.getElementsByClassName('next')[0],
prev = c.getElementsByClassName('prev')[0],
bubblesContainer = c.getElementsByClassName('navigation')[0],
inner = c.getElementsByClassName('inreSSH')[0],
imgs = inner.getElementsByTagName('img'),
box = c.getElementsByClassName('headline')[0],
currentImageIndex = 0;
var windowWidth = window.innerWidth;
var bubbles = [];
var width = 0;
var unit = 'vw';
    

var mediaQueryList = window.matchMedia("(orientation: portrait)"); 
// Create the query list.
// Define a callback function for the event listener.
mediaQueryList.addListener(handleOrientationChange); 
// Add the callback function as a listener to the query list.

handleOrientationChange(); // Run the orientation change handler once.

function handleOrientationChange(evt) {
  changeWidth();
}

function changeWidth() {

    if (window.matchMedia("(min-width: 500px)").matches) {
      /* the viewport is at least 600 pixels wide */
        width = 100;
    } else {
      /* the viewport is less than 600 pixels wide */
        width = 140;
    }
    
}


  for (let i = 0; i <  4; i++)
   {
    let b = document.createElement('span');
    b.classList.add('navbubblor');
    bubblesContainer.appendChild(b);
    bubbles.push(b);
  
	  b.addEventListener('click', function() { 
	  currentImageIndex = i;
	  switchImg();
	  
	  });
  }

  


		function switchImg() 
		{

			inner.style.left = -width * currentImageIndex + unit;
			
			bubbles.forEach(function(b, i) 
	{
      		if (i === currentImageIndex) 
			{
        		b.classList.add('active');
     		} 
			else 
			{
       			b.classList.remove('active');
     		}
    });
		}

		
  

			function showNext() {
    			currentImageIndex++;

    			if (currentImageIndex >= imgs.length) 
					{
     					currentImageIndex = 0;
    				}

    			switchImg();
  			}



			 function showPrev() {
   			 	currentImageIndex--;

    			if (currentImageIndex < 0) 
					{
      					currentImageIndex = imgs.length - 1;
   					}
	
   				switchImg();
 			}
			
		next.addEventListener('click', showNext);
		prev.addEventListener('click', showPrev);
		
		 switchImg();

		var t = setInterval(showNext, 4000); 
		
		c.addEventListener('mouseover', function () 
		{ 
			clearInterval(t); 
		}); 
		
		c.addEventListener('mouseout', function () { 
			t = setInterval(showNext, 4000); 
		});
		
		switchImg();

});
 