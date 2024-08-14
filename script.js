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
  // Construct the URL for the API request
  const url = `/api/manga?category=${encodeURIComponent(category)}`;

  fetch(url)
      .then(response => {
          if (!response.ok) {
              // Handle 404 and other HTTP errors
              throw new Error(`Network response was not ok. Status: ${response.status}`);
          }
          return response.json();
      })
      .then(data => {
          const mangaList = document.getElementById('manga-list');
          mangaList.innerHTML = '';

          if (!Array.isArray(data) || data.length === 0) {
              mangaList.innerHTML = `<p>No manga found for the category "${category}".</p>`;
              return;
          }

          const ul = document.createElement('ul');

          data.forEach(manga => {
              const li = document.createElement('li');
              li.innerHTML = `
                  <img src="${manga.imageUrl}" alt="${manga.title}" class="manga-icon">
                  <a href="${manga.detailPage}" class="manga-title">${manga.title}</a>
                  <ul></ul>
              `;
              ul.appendChild(li);

              if (Array.isArray(manga.subManga)) {
                  const subUl = li.querySelector('ul');
                  manga.subManga.forEach(subManga => {
                      const subLi = document.createElement('li');
                      subLi.innerHTML = `
                          <img src="${subManga.imageUrl}" alt="${subManga.title}" class="manga-icon">
                          <a href="${subManga.detailPage}" class="manga-title">${subManga.title}</a>
                          <ul></ul>
                      `;
                      subUl.appendChild(subLi);

                      if (Array.isArray(subManga.subManga)) {
                          const subSubUl = subLi.querySelector('ul');
                          subManga.subManga.forEach(subSubManga => {
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
      .catch(error => {
          console.error('Error:', error);
          const mangaList = document.getElementById('manga-list');
          mangaList.innerHTML = `<p>An error occurred: ${error.message}</p>`;
      });
}
