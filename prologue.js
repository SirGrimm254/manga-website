document.addEventListener('DOMContentLoaded', () => {
    const mangaTitle = 'Solo Levelling';  // The title of the manga
    loadPrologueImages(mangaTitle);
});

function loadPrologueImages(mangaTitle) {
    const prologueImages = [
        'images/solo-levelling/prologue/page1.jpg',
        'images/solo-levelling/prologue/page2.jpg',
        'images/solo-levelling/prologue/page3.jpg',
        'images/solo-levelling/prologue/page4.jpg',
        'images/solo-levelling/prologue/page5.jpg',
        'images/solo-levelling/prologue/page6.jpg',
        'images/solo-levelling/prologue/page7.jpg',
        'images/solo-levelling/prologue/page8.jpg',
        'images/solo-levelling/prologue/page9.jpg',
    ];

    const imagesContainer = document.getElementById('images-container');
    imagesContainer.innerHTML = '';  // Clear previous images

    prologueImages.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = `${mangaTitle} - Prologue Image`;
        imagesContainer.appendChild(img);
    });
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