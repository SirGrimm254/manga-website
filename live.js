document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const chapterNumber = parseInt(urlParams.get('chapter'), 10) || 1;
    const mangaTitle = "Heavenly Demon Can't Live A Normal Life" ;  // Replace this with dynamic manga title if needed

    if (chapterNumber) {
        loadChapterImages(chapterNumber, mangaTitle);
        setupNavigationButtons(chapterNumber, mangaTitle);
    }
});

function loadChapterImages(chapterNumber, mangaTitle) {
    const mangaChapters = {
        1: [
            'images/heavenly-demon/chapter1/1-o.jpg',
            // Add more images as needed
        ],
        2: [
            'images/heavenly-demon/chapter2/1-o.jpg',
            // Add more images for chapter 2
        ],
        3: [
            'images/heavenly-demon/chapter3/1-o.jpg',
            // Add more images for chapter 3
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

        chapterTitle.textContent = `${mangaTitle} - Chapter ${chapterNumber}`;
    } else {
        chapterTitle.textContent = 'Chapter not found';
    }
}

function setupNavigationButtons(currentChapter, mangaTitle) {
    const nextButton = document.getElementById('next-chapter');
    const prevButton = document.getElementById('prev-chapter');
    const nextButtonBottom = document.getElementById('next-chapter-bottom');
    const prevButtonBottom = document.getElementById('prev-chapter-bottom');

    const totalChapters = 3;  // Set this to the actual number of chapters available

    if (currentChapter < totalChapters) {
        nextButton.href = `live.html?chapter=${currentChapter + 1}`;
        nextButtonBottom.href = `live.html?chapter=${currentChapter + 1}`;
    } else {
        nextButton.classList.add('disabled');
        nextButtonBottom.classList.add('disabled');
    }

    if (currentChapter > 1) {
        prevButton.href = `live.html?chapter=${currentChapter - 1}`;
        prevButtonBottom.href = `live.html?chapter=${currentChapter - 1}`;
    } else {
        prevButton.classList.add('disabled');
        prevButtonBottom.classList.add('disabled');
    }
}
