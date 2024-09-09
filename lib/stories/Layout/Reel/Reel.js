Drupal.behaviors.name834={attach:function attach(){(function(a){"complete"===document.readyState||"interactive"===document.readyState?setTimeout(a,1):document.addEventListener("DOMContentLoaded",a)})(function(){var a=function(a){// let items = elem.children;
// let itemsTotalWidth = 0;
// for (let i = 0; i < items.length; i++) {
//   itemsTotalWidth += parseInt(items[i].offsetWidth, 10);
// }
// if (elem.scrollWidth > elem.clientWidth) {
//   elem.classList.add('overflowing');
// } else {
//   elem.classList.remove('overflowing');
// }
//let offSetRight = window.innerWidth - (elem.lastElementChild.offsetLeft + elem.lastElementChild.offsetWidth);
// if (itemsTotalWidth > elem.offsetWidth || elem.firstElementChild.offsetLeft < 0 || offSetRight < 0) {
//   elem.classList.add('overflowing');
// }
// else {
//   elem.classList.remove('overflowing');
// }
a.classList.toggle("overflowing",a.scrollWidth>a.clientWidth)},b=Array.from(document.querySelectorAll(".reel"));// for (let reel of reels) {
//   if ('ResizeObserver' in window) {
//     new ResizeObserver(entries => {
//       toggleOverflowClass(entries[0].target);
//     }).observe(reel);
//   }
// }
b.forEach(function(b){b.classList.contains("js-reel-overflow")||(b.classList.add("js-reel-overflow"),a(b),"ResizeObserver"in window&&new ResizeObserver(function(){a(b)}).observe(b))})})}};