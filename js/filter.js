function filterCards(e) {
  const cards = document.querySelectorAll('.card');
  let filter = e.target.dataset.filter;
  if (filter === '*') {
    cards.forEach((card) => card.classList.remove('hidden'));
  } else {
    cards.forEach((card) => {
      card.dataset.category === filter
        ? card.classList.remove('hidden')
        : card.classList.add('hidden');
    });
  }
}
