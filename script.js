document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('[data-category="Action"]').addEventListener('click', function(event) {
      event.preventDefault();
      const category = 'Action';
      fetchMangaByCategory(category);
    });
  });
  
  function fetchMangaByCategory(category) {
    fetch(`/api/manga?category=${category}`)
      .then(response => response.json())
      .then(data => {
        const mangaList = document.getElementById('manga-list');
        mangaList.innerHTML = '';
        const ul = document.createElement('ul');
  
        data.forEach((manga) => {
          const li = document.createElement('li');
          li.innerHTML = `
            <img src="${manga.imageUrl}" alt="${manga.title}" class="manga-icon">
            <a href="manga-detail.html?id=${manga.id}" class="manga-title">${manga.title}</a>
            <ul></ul>
          `;
          ul.appendChild(li);
  
          if (manga.subManga) {
            const subUl = li.querySelector('ul');
            manga.subManga.forEach((subManga) => {
              const subLi = document.createElement('li');
              subLi.innerHTML = `
                <img src="${subManga.image}" alt="${subManga.title}" class="manga-icon">
                <a href="${subManga.detailPage}" class="manga-title">${subManga.title}</a>
                <ul></ul>
              `;
              subUl.appendChild(subLi);
  
              if (subManga.subManga) {
                const subSubUl = subLi.querySelector('ul');
                subManga.subManga.forEach((subSubManga) => {
                  const subSubLi = document.createElement('li');
                  subSubLi.innerHTML = `
                    <img src="${subSubManga.image}" alt="${subSubManga.title}" class="manga-icon">
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
  