function docReady(fn) {
  // See if DOM is already available.
  if (document.readyState === "complete" || document.readyState === "interactive") {
    // Call on next available tick.
    setTimeout(fn, 1);
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

function areCardsStacked(cards) {
  let cardLeftPositions = [];
  cards.forEach(card => {
    let cardLeftPosition = card.offsetLeft;
    cardLeftPositions.push(cardLeftPosition);
  });

  return cardLeftPositions.every( v => v === cardLeftPositions[0] );
}

function smallestMedia(cards) {
  let mediaHeights = [];
  cards.forEach(card => {
    let mediaHeight = card.querySelector('.card__media').offsetHeight;
    mediaHeights.push(mediaHeight);
  });

  return Math.min.apply(Math, mediaHeights);
}

docReady(function () {
  const sections = Array.from(document.querySelectorAll('.cards'));

  // Default variant adjustments.
  if (sections) {
    sections.forEach(section => {
      let cards = Array.from(section.querySelectorAll('.card'));
      let container = section.querySelector('.section__main');

      // Default variant adjustments.
      if (cards && (container.classList.contains('with-sidebar') || container.classList.contains('flex'))) {
        if ('ResizeObserver' in window) {
          new ResizeObserver(entries => {
            let isStacked = areCardsStacked(cards);
            let minMediaHeight = smallestMedia(cards) + 'px';
            cards.forEach(card => {
              if ('ResizeObserver' in window) {
                new ResizeObserver(entries => {
                  let cardMedia = card.querySelector('.card__media');
                  let cardMediaFrame = cardMedia.querySelector('.frame');
                  let isDefaultCard = card.classList.contains('card') && card.classList.contains('card--default');

                  // Adjust default card variant media as needed.
                  if (cardMedia && isDefaultCard && !isStacked) {
                    cardMediaFrame.style.height = minMediaHeight;
                    cardMediaFrame.style.width = '100%';
                  }
                  else {
                    // Reset elements as needed when stacked.
                    cardMediaFrame.removeAttribute('style');
                  }
                }).observe(card);
              }
            });
          }).observe(section);
        }
      }
    });
  }
});
