Drupal.behaviors.name41={attach:function attach(){(function(a){"complete"===document.readyState||"interactive"===document.readyState?setTimeout(a,1):document.addEventListener("DOMContentLoaded",a)})(function(){// Apply class to body if sidebar nav is present.
// This class can be used to adjust content components to allow space for
// the floating sidebarnav.
for(var a,b=Array.from(document.querySelectorAll(".sidebar-nav .with-sidebar")),c=function(a){// If main section (larger sidebar) is the same as the full sidebar
// container, It means that the sidebars have stacked.
var b=a.contentRect.width==a.target.lastElementChild.clientWidth;// Apply class to body if sidebar navigation is stacked (mobile display).
a.target.classList.toggle("stacked-sidebars",b),document.body.classList.toggle("mobile-sidebar-nav",b)},d=0,e=b;d<e.length;d++)a=e[d],a.classList.contains("js-open")||(a.classList.add("js-open"),"ResizeObserver"in window&&new ResizeObserver(function(a){c(a[0])}).observe(a));// Toggle the sub menus.
var f=Array.from(document.querySelectorAll(".sidebar-nav__button"));f.forEach(function(a){a.classList.contains("js-open")||(a.classList.add("js-open"),a.addEventListener("pointerdown",function(a){a.target.classList.toggle("open")}))});// Toggle the hamburger menu.
var g=Array.from(document.querySelectorAll(".sidebar-nav__hamburger-toggle"));g.forEach(function(a){a.classList.contains("js-open")||(a.classList.add("js-open"),a.addEventListener("pointerdown",function(b){var c=document.querySelector(".open");c&&c!=b.target&&c.classList.remove("open"),a.classList.toggle("open")}))});// Make sure the content area has enought height for the sidebar nav.
var h=Array.from(document.querySelectorAll(".sidebar-nav"));h.forEach(function(a){var b=a.getElementsByClassName("sidebar-nav__position");if(0<b.length){var c=b[0].clientHeight;c>=a.parentNode.clientHeight?a.parentNode.style.minHeight=c+"px":a.parentNode.style.removeProperty("minHeight")}})})}};