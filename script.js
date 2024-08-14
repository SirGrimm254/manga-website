document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners for category buttons
    document.querySelectorAll('.categories-list a').forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const category = this.getAttribute('data-category');
            fetchMangaByCategory(category);
        });
    });
});

// Function to fetch manga by category
function fetchMangaByCategory(category) {
  fetch(`/api/manga?category=${category}`)
    .then(response => response.json())
    .then(data => {
      const mangaList = document.getElementById('manga-list');
      if (data.length === 0) {
        mangaList.innerHTML = `<p>No manga found for the category "${category}".</p>`;
        return;
    } else {
        const ul = document.createElement('ul');
        data.forEach((manga) => {
            const li = document.createElement('li');
        li.innerHTML = `
          <img src="${manga.imageUrl}" alt="${manga.title}" class="manga-icon">
          <a href="${manga.detailPage}" class="manga-title">${manga.title}</a>
          <ul></ul>
        `;
        ul.appendChild(li);
        });
        mangaList.innerHTML = '';
        mangaList.appendChild(ul);
      }
    });
}
