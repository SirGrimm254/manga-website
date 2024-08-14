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
  // Use the updated API URL
  const url = `https://manga-website-p71mxtf00-sirgrimm254s-projects.vercel.app/api/manga?category=${encodeURIComponent(category)}`;
  console.log(`Fetching data from: ${url}`); // Debug log to check the URL

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

          // Adjust based on the response format of the Vercel API
          // Example: Assuming response is an object with a "results" property
          if (!data.results || !Array.isArray(data.results) || data.results.length === 0) {
              mangaList.innerHTML = `<p>No manga found for the category "${category}".</p>`;
              return;
          }

          const ul = document.createElement('ul');

          data.results.forEach(manga => {
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
