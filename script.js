document.addEventListener('DOMContentLoaded', () => {
    const categoryLinks = document.querySelectorAll('.categories-list a');
    const mangaListContainer = document.getElementById('manga-list');

    // Fetch and display manga by category when a category link is clicked
    categoryLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const category = link.getAttribute('data-category');
            fetchMangaByCategory(category);
        });
    });

    function fetchMangaByCategory(category) {
      const apiUrl = 'https://example.com/api/manga';
      fetch(`${apiUrl}?category=${category}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
            .then(mangaList => {
                console.log(mangaList);
                mangaListContainer.innerHTML = ''; // Clear previous results
                mangaList.forEach(manga => {
                    const mangaItem = document.createElement('div');
                    mangaItem.classList.add('manga-item');
                    mangaItem.innerHTML = `
                        <img src="${manga.imageUrl}" alt="${manga.title}">
                        <h3>${manga.title}</h3>
                        <p>Category: ${manga.category}</p>
                    `;
                    mangaItem.addEventListener('click', () => {
                        window.location.href = `manga-detail.html?title=${encodeURIComponent(manga.title)}`;
                    });
                    mangaListContainer.appendChild(mangaItem);
                });
            })
            .catch(error => console.error('Error fetching manga:', error));
    }

    // Footer visibility toggle based on scroll direction
    let lastScrollTop = 0;
    const footer = document.querySelector('footer');

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Scrolling down
            footer.classList.add('hidden');
        } else {
            // Scrolling up
            footer.classList.remove('hidden');
        }

        lastScrollTop = scrollTop;
    });
});
