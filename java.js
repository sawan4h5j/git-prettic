document.getElementById('searchInput').addEventListener('input', function () {
  handleSearch();
});

function handleSearch() {
  // Get the search input value
  var searchInput = document.getElementById('searchInput').value.toLowerCase();

  // Get the container for book cards
  var bookContainer = document.querySelector('.showcase .container');

  // Get all book cards
  var bookCards = document.querySelectorAll('.showcase .container .row');

  // Loop through each book card
  bookCards.forEach(function (card) {
    // Get the book title text
    var bookTitle = card.querySelector('.text-box .lg-heading').textContent.toLowerCase();

    // Check if the book title contains the search input
    if (bookTitle.includes(searchInput)) {
      // If it matches, show the book card
      card.style.display = 'flex';
      // Move the matching card to the top
      bookContainer.prepend(card);
    } else {
      // If it doesn't match, hide the book card
      card.style.display = 'none';
    }
  });
}
