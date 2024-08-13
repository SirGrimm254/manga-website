// manga-detail.js
document.addEventListener('DOMContentLoaded', () => {
    const mangaId = new URLSearchParams(window.location.search).get('id');
    if (mangaId) {
        fetch(`/api/manga/${mangaId}`)
            .then(response => response.json())
            .then(data => {
                // Update the HTML with the fetched data
                const mangaTitleElement = document.getElementById('manga-title');
                mangaTitleElement.textContent = data.title;

                const mangaImageElement = document.querySelector('.manga-image img');
                mangaImageElement.src = data.imageUrl;

                const mangaSynopsisElement = document.getElementById('manga-synopsis');
                mangaSynopsisElement.textContent = data.synopsis;

                const mangaChaptersElement = document.getElementById('manga-chapters');
                mangaChaptersElement.innerHTML = data.chapters.map(chapter => `<li><a href="chapter.html?chapter=${chapter.id}">${chapter.title}</a></li>`).join('');
            })
            .catch(error => console.error(error));
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const chapterNumber = parseInt(urlParams.get('chapter'), 10) || 1;
    const mangaTitle = 'Nano Machine';  // Replace this with dynamic manga title if needed

    if (chapterNumber) {
        loadChapterImages(chapterNumber, mangaTitle);
        setupNavigationButtons(chapterNumber, mangaTitle);
    }
});

function loadChapterImages(chapterNumber, mangaTitle) {
    // Mock data - replace this with actual data from your server or database
    const mangaChapters = {
        1: [
            'images/nano-machine/chapter1/page1.jpg',
            'images/nano-machine/chapter1/page2.jpg',
            'images/nano-machine/chapter1/page3.jpg',
            'images/nano-machine/chapter1/page4.jpg',
            'images/nano-machine/chapter1/page5.jpg',
            'images/nano-machine/chapter1/page6.jpg',
            'images/nano-machine/chapter1/page7.jpg',
            'images/nano-machine/chapter1/page8.jpg',
            'images/nano-machine/chapter1/page9.jpg',
            'images/nano-machine/chapter1/page10.jpg',
            'images/nano-machine/chapter1/page11.jpg',
            'images/nano-machine/chapter1/page12.jpg',
            'images/nano-machine/chapter1/page13.jpg',
            'images/nano-machine/chapter1/page14.jpg',
            'images/nano-machine/chapter1/page15.jpg',
            'images/nano-machine/chapter1/page16.jpg',
            'images/nano-machine/chapter1/page17.jpg',
            'images/nano-machine/chapter1/page18.jpg',
            'images/nano-machine/chapter1/page19.jpg',
            'images/nano-machine/chapter1/page20.jpg',
            'images/nano-machine/chapter1/page21.jpg',
            'images/nano-machine/chapter1/page22.jpg',
            'images/nano-machine/chapter1/page23.jpg',
            'images/nano-machine/chapter1/page24.jpg',
            'images/nano-machine/chapter1/page25.jpg',
            'images/nano-machine/chapter1/page26.jpg',
        ],
        2: [
            'images/nano-machine/chapter2/page1.jpg',
            'images/nano-machine/chapter2/page2.jpg',
            'images/nano-machine/chapter2/page3.jpg',
            'images/nano-machine/chapter2/page4.jpg',
            'images/nano-machine/chapter2/page5.jpg',
            'images/nano-machine/chapter2/page6.jpg',
            'images/nano-machine/chapter2/page7.jpg',
            'images/nano-machine/chapter2/page8.jpg',
            'images/nano-machine/chapter2/page9.jpg',
            'images/nano-machine/chapter2/page10.jpg',
            'images/nano-machine/chapter2/page11.jpg',
            'images/nano-machine/chapter2/page12.jpg',
            // Add more images for chapter 2
        ],
        3: [
            'images/nano-machine/chapter3/page1.jpg',
            'images/nano-machine/chapter3/page2.jpg',
            'images/nano-machine/chapter3/page3.jpg',
            'images/nano-machine/chapter3/page4.jpg',
            'images/nano-machine/chapter3/page5.jpg',
            'images/nano-machine/chapter3/page6.jpg',
            'images/nano-machine/chapter3/page7.jpg',
            'images/nano-machine/chapter3/page8.jpg',
            'images/nano-machine/chapter3/page9.jpg',
            'images/nano-machine/chapter3/page10.jpg',
            'images/nano-machine/chapter3/page11.jpg',
            'images/nano-machine/chapter3/page12.jpg',
            'images/nano-machine/chapter3/page13.jpg',
            'images/nano-machine/chapter3/page14.jpg',
            'images/nano-machine/chapter3/page15.jpg',
            'images/nano-machine/chapter3/page16.jpg',
            'images/nano-machine/chapter3/page17.jpg',
            'images/nano-machine/chapter3/page18.jpg',
            'images/nano-machine/chapter3/page19.jpg',
            'images/nano-machine/chapter3/page20.jpg',
            'images/nano-machine/chapter3/page21.jpg',
        ],
        // Add more chapters as needed
    };

    const imagesContainer = document.getElementById('images-container');
    const chapterTitle = document.getElementById('chapter-title');
    imagesContainer.innerHTML = '';  // Clear previous images

    const chapterImages = mangaChapters[chapterNumber];
    if (chapterImages) {
        chapterImages.forEach(src => {
            const img = document.createElement('img');
            img.src = src;
            img.alt = `Chapter ${chapterNumber} Image`;
            imagesContainer.appendChild(img);
        });

        // Update the title to include the manga name
        chapterTitle.textContent = `${mangaTitle} - Chapter ${chapterNumber} Images`;
    } else {
        chapterTitle.textContent = 'Chapter not found';
    }
}

function setupNavigationButtons(currentChapter, mangaTitle) {
    const nextButton = document.getElementById('next-chapter');
    const prevButton = document.getElementById('prev-chapter');
    const nextButtonBottom = document.getElementById('next-chapter-bottom');
    const prevButtonBottom = document.getElementById('prev-chapter-bottom');

    // Assuming you know the total number of chapters
    const totalChapters = 3;

    if (currentChapter < totalChapters) {
        nextButton.addEventListener('click', () => {
            window.location.href = `chapter.html?chapter=${currentChapter + 1}`;
        });
        nextButtonBottom.addEventListener('click', () => {
            window.location.href = `chapter.html?chapter=${currentChapter + 1}`;
        });
    } else {
        nextButton.disabled = true;
        nextButtonBottom.disabled = true;
    }

    if (currentChapter > 1) {
        prevButton.addEventListener('click', () => {
            window.location.href = `chapter.html?chapter=${currentChapter - 1}`;
        });
        prevButtonBottom.addEventListener('click', () => {
            window.location.href = `chapter.html?chapter=${currentChapter - 1}`;
        });
    } else {
        prevButton.disabled = true;
        prevButtonBottom.disabled = true;
    }
}

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
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;  // For Mobile or negative scrolling
});
