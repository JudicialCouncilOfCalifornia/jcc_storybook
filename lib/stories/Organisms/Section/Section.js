Drupal.behaviors.name194={attach:function attach(){function a(a){// Migrate to new heading tags.
a.forEach(function(a){var b=a.querySelectorAll("h1, h2, h3, h4, h5, h6");b.forEach(function(a){var b=a.tagName,c=+b.charAt(1),d=a.className,e=document.createElement("h"+(c+1));// Migrate text & replace original heading.
for(d&&e.classList.add(d);a.firstChild;)e.appendChild(a.firstChild);a.parentNode.replaceChild(e,a)})})}function b(a,b){// Extend cards component styling - see Section.css.
if("cards"===b){var c=a[0].getBoundingClientRect();23>=c.left.toFixed()?a[0].classList.remove("unwrapped"):a[0].classList.add("unwrapped")}}(function(a){"complete"===document.readyState||"interactive"===document.readyState?setTimeout(a,1):document.addEventListener("DOMContentLoaded",a)})(function(){// Select custom sections.
// Must specify 'custom' as a custom section class.
var c=document.querySelectorAll(".section.custom"),d=document.querySelectorAll(".cards");// Select cards.
// Adjust custom layouts.
if(0<c.length){c.forEach(function(b){// Adjust subcomponent headings if custom section has H2.
if(!b.classList.contains("headings-adjusted")){// Adjust subheadings if section heading exists, excluding nested sections.
var c=b.querySelector(":scope > .section__content > .container > .section__header");if(c){var d=b.querySelectorAll(".accordion, .action-list, .body, .cards, .steps, .teaser-list, .profile-cards, .view-results .content, .tabs, .list, .find-my-court");if(d){var e=c.querySelector("h1, h2")?c.querySelector("h1, h2").tagName:null;// Adjust relevant subcomponent headings if H2 in use.
e&&"H1"!==e&&(a(d),b.classList.add("headings-adjusted"))}}}})}// Adjust for cards support.
0<d.length&&(b(d,"cards"),window.onresize=function(){b(d,"cards")})})}};