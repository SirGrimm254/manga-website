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
      mangaList.innerHTML = '';
      if (data.length === 0) {
        mangaList.innerHTML = `<p>No manga found for the category "${category}".</p>`;
        return;
    }
      const ul = document.createElement('ul');

      data.forEach((manga) => {
        const li = document.createElement('li');
        li.innerHTML = `
          <img src="${manga.imageUrl}" alt="${manga.title}" class="manga-icon">
          <a href="${manga.detailPage}" class="manga-title">${manga.title}</a>
          <ul></ul>
        `;
        ul.appendChild(li);
      
        // Generate sub-manga list
        if (manga.subManga) {
          const subUl = li.querySelector('ul');
          manga.subManga.forEach((subManga) => {
            const subLi = document.createElement('li');
            subLi.innerHTML = `
              <img src="${subManga.imageUrl}" alt="${subManga.title}" class="manga-icon">
              <a href="${subManga.detailPage}" class="manga-title">${subManga.title}</a>
              <ul></ul>
            `;
            subUl.appendChild(subLi);

            // Generate sub-sub-manga list
            if (subManga.subManga) {
              const subSubUl = subLi.querySelector('ul');
              subManga.subManga.forEach((subSubManga) => {
                const subSubLi = document.createElement('li');
                subSubLi.innerHTML = `
                  <img src="${subSubManga.imageUrl}" alt="${subSubManga.title}" class="manga-icon">
                  <a href="${subSubManga.detailPage}" class="manga-title">${subSubManga.title}</a>
                `;
                subSubUl.appendChild(subSubLi);
              });
            }
          });
        }
      });

      mangaList.appendChild(ul);
    })
    .catch(error => console.error('Error:', error));
}
