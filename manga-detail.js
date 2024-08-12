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
            // Add more images for chapter 1
        ],
        2: [
            'images/nano-machine/chapter2/page1.jpg',
            'images/nano-machine/chapter2/page2.jpg',
            'images/nano-machine/chapter2/page3.jpg',
            // Add more images for chapter 2
        ],
        3: [
            'images/nano-machine/chapter3/page1.jpg',
            'images/nano-machine/chapter3/page2.jpg',
            'images/nano-machine/chapter3/page3.jpg',
            // Add more images for chapter 3
        ]
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
