Drupal.behaviors.name50={attach:function attach(){(function(a){"complete"===document.readyState||"interactive"===document.readyState?setTimeout(a,1):document.addEventListener("DOMContentLoaded",a)})(function(){// If reduced animation motion is preferred, set the speed to 0 (instant).
var a=window.matchMedia("(prefers-reduced-motion: reduce)"),b=a.matches?0:200,c=Array.from(document.querySelectorAll("details summary"));c.forEach(function(a){a.classList.contains("js-accordion")||(a.classList.add("js-accordion"),a.addEventListener("click",function(c){c.preventDefault(),a.closest("details").hasAttribute("open")?(a.closest("details").classList.add("closing"),setTimeout(function(){a.closest("details").removeAttribute("open"),a.closest("details").classList.remove("closing")},b)):setTimeout(function(){a.closest("details").setAttribute("open","")},b);// Close any open details who werent clicked.
var d=Array.from(document.querySelectorAll("details"));d.forEach(function(a){a.hasAttribute("open")&&(a.classList.add("closing"),setTimeout(function(){a.removeAttribute("open"),a.classList.remove("closing")},b))})}))})})}};