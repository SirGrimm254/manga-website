document.addEventListener('DOMContentLoaded', () => {
    const categoryLinks = document.querySelectorAll('.categories-list a');
    const mangaListContainer = document.getElementById('manga-list');

    categoryLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const category = link.getAttribute('data-category');
            fetchMangaByCategory(category);
        });
    });

    fetch('manga.json')  // Ensure this is the correct path to your JSON file
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        // Handle the data
    })
    .catch(error => {
        console.error('Error fetching manga:', error);
    });


    function fetchMangaByCategory(category) {
        fetch(`/api/manga?category=${category}`)
            .then(response => response.json())
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
                    mangaListContainer.appendChild(mangaItem);
                });
            })
            .catch(error => console.error('Error fetching manga:', error));
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const mangaItems = document.querySelectorAll('.manga-item');

    mangaItems.forEach(item => {
        item.addEventListener('click', () => {
            const title = item.querySelector('h3').textContent;
            window.location.href = `manga-detail.html?title=${encodeURIComponent(title)}`;
        });
    });
});

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
