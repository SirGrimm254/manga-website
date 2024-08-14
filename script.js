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
    const url = `/api/manga?category=${encodeURIComponent(category)}`;
    console.log(`Fetching data from: ${url}`); // Debug log to check the URL

    console.log("Fetching URL:", '/api/manga/1');
    fetch('/api/manga/1')
    .then(response => {
        if (!response.ok) {
            throw new Error(`Network response was not ok. Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error('Fetch error:', error));
  
    fetch(url)
        .then(response => {
            if (!response.ok) {
                // Log detailed error message
                console.error(`Network response was not ok. Status: ${response.status}, Status Text: ${response.statusText}`);
                throw new Error(`Network response was not ok. Status: ${response.status} ${response.statusText}`);
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
                `;
                ul.appendChild(li);
            });
  
            mangaList.appendChild(ul);
        })
        .catch(error => {
            console.error('Fetch error:', error);
            const mangaList = document.getElementById('manga-list');
            mangaList.innerHTML = `<p>An error occurred: ${error.message}</p>`;
        });
  }
  