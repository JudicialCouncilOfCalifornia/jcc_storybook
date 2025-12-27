Drupal.behaviors.name34={attach:function attach(){(function(a){"complete"===document.readyState||"interactive"===document.readyState?setTimeout(a,1):document.addEventListener("DOMContentLoaded",a)})(function(){var a=function(a){// "scrollWidth" is the width of element, uneffected by overflow, visible 
// content, or screen size. The inner content (not counting gaps) set 
// this width.
// "clientWidth" is visible width of element, effected by wrapping, 
// overflow, window size, etc.
// "gap" spacing does not effect either above value.
// When the visible clientWidth is less than the scrollWidth, we know that
// we are starting to overflow, so we can toggle the overflow class to 
// the element.
a.classList.toggle("overflowing",a.scrollWidth>a.clientWidth)},b=Array.from(document.querySelectorAll(".reel"));b.forEach(function(b){b.classList.contains("js-reel-overflow")||(b.classList.add("js-reel-overflow"),a(b),"ResizeObserver"in window&&new ResizeObserver(function(){a(b)}).observe(b))})})}};