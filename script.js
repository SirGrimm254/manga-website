// script.js
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

    // Define the fetchMangaByCategory function
    function fetchMangaByCategory(category) {
        fetch(`/api/manga?category=${category}`)
            .then(response => response.json())
            .then(data => {
                // Update the manga list container with the fetched data
                mangaListContainer.innerHTML = '';
                data.forEach(manga => {
                    const mangaElement = document.createElement('div');
                    mangaElement.innerHTML = `
                        <h2>${manga.title}</h2>
                        <img src="${manga.imageUrl}" alt="${manga.title}">
                    `;
                    mangaListContainer.appendChild(mangaElement);
                });
            })
            .catch(error => console.error(error));
    }
});

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
