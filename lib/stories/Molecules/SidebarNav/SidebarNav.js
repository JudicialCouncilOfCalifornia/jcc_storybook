Drupal.behaviors.name732={attach:function attach(){(function(a){"complete"===document.readyState||"interactive"===document.readyState?setTimeout(a,1):document.addEventListener("DOMContentLoaded",a)})(function(){// Helper function to get the Visible pixel height of an element.
function a(a){var b=Math.round,c=!(1<arguments.length&&void 0!==arguments[1])||arguments[1],d={top:window.pageYOffset,bottom:window.pageYOffset+window.innerHeight},e=a.getBoundingClientRect(),f={top:e.y+window.pageYOffset,bottom:e.y+e.height+window.pageYOffset};// Element is not visible at all.
if(d.top>f.bottom||d.bottom<f.top)return 0;// Element is fully within viewport
if(d.top<f.top&&d.bottom>f.bottom)return c?a.clientHeight:"100";// Element is bigger than the viewport
if(f.top<d.top&&f.bottom>d.bottom)return c?a.clientHeight:"100";// determine how much is viible here.
var g=e.height,h=g;// If not pixel, return as a percentage.
if(f.top<d.top&&(h=g-(window.pageYOffset-f.top)),f.bottom>d.bottom&&(h-=f.bottom-d.bottom),!c){var i=100*(h/window.innerHeight);return b(i)}// return as a numerical pixel value by default.
return b(h)}// Set the max height of the sidebar nav, to fit within any available space.
// This only renders on desktop (non-mobile) display, on load, scroll and 
// resize events.
for(var b,c=Array.from(document.querySelectorAll(".sidebar-nav .with-sidebar")),d=function(a){// If main section (larger sidebar) is the same as the full sidebar
// container, It means that the sidebars have stacked.
var b=a.contentRect.width==a.target.lastElementChild.clientWidth;// Apply class to body if sidebar navigation is stacked (mobile display).
a.target.classList.toggle("stacked-sidebars",b),document.body.classList.toggle("mobile-sidebar-nav",b)},e=0,f=c;e<f.length;e++)b=f[e],b.classList.contains("js-open")||(b.classList.add("js-open"),"ResizeObserver"in window&&new ResizeObserver(function(a){d(a[0])}).observe(b));// Toggle the sub menus.
var g=Array.from(document.querySelectorAll(".sidebar-nav__button"));g.forEach(function(a){a.classList.contains("js-open")||(a.classList.add("js-open"),a.addEventListener("pointerdown",function(a){a.target.classList.toggle("open")}))});// Toggle the hamburger menu.
var h=Array.from(document.querySelectorAll(".sidebar-nav__hamburger-toggle"));h.forEach(function(a){a.classList.contains("js-open")||(a.classList.add("js-open"),a.addEventListener("pointerdown",function(b){var c=document.querySelector(".open");c&&c!=b.target&&c.classList.remove("open"),a.classList.toggle("open")}))});// Make sure the content area has enought height for the sidebar nav.
var i=Array.from(document.querySelectorAll(".sidebar-nav"));i.forEach(function(a){var b=a.getElementsByClassName("sidebar-nav__position");if(0<b.length){var c=b[0].clientHeight;c>=a.parentNode.clientHeight?a.parentNode.style.minHeight=c+"px":a.parentNode.style.removeProperty("minHeight")}});var j=document.querySelectorAll(".footer"),k=document.querySelectorAll(".shoe");["load","scroll","resize"].forEach(function(b){return window.addEventListener(b,function(){// Get the total footer visible in pixels. This includes footer and shoe.
var b=a(j[0])+a(k[0]),c=Array.from(document.querySelectorAll("body:not(.mobile-sidebar-nav) .sidebar-nav"));c.forEach(function(a){var c=a.getElementsByClassName("sidebar-nav__position");if(0<c.length&&(c[0].style.removeProperty("max-height"),c[0].style.removeProperty("overflow"),0<b))// We only adjust the sidebar height if the footer becomes visible.
{b=0<b?b+40:b;// Factor the max-height based on window height, minus the footer
// height, minus any visible space on the top of the sidebar nav.
var d=window.innerHeight-b-a.getBoundingClientRect().top;c[0].style.maxHeight=d+"px",c[0].style.overflow="auto"}})})})})}};