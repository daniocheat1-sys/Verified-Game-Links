document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const gameListings = document.getElementById('gameListings');
    const gameCards = gameListings.getElementsByClassName('game-card');

    searchInput.addEventListener('keyup', (event) => {
        const searchText = event.target.value.toLowerCase();

        for (let i = 0; i < gameCards.length; i++) {
            const card = gameCards[i];
            const title = card.querySelector('h2').textContent.toLowerCase();
            const description = card.querySelector('.description').textContent.toLowerCase();

            // Check if the search text is in the title or description
            if (title.includes(searchText) || description.includes(searchText)) {
                card.style.display = 'block'; // Show the card
            } else {
                card.style.display = 'none'; // Hide the card
            }
        }
    });
});
