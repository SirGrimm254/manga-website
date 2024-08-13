document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const chapterNumber = parseInt(urlParams.get('chapter'), 10) || 1;
    const mangaTitle = 'Solo levelling';  // Replace this with dynamic manga title if needed

    if (chapterNumber) {
        loadChapterImages(chapterNumber, mangaTitle);
        setupNavigationButtons(chapterNumber, mangaTitle);
    }
});

function loadChapterImages(chapterNumber, mangaTitle) {
    // Mock data - replace this with actual data from your server or database
    const mangaChapters = {
        1: [
            'images/solo-levelling/prologue/page1.jpg',
            'images/solo-levelling/prologue/page2.jpg',
            'images/solo-levelling/prologue/page3.jpg',
            'images/solo-levelling/prologue/page4.jpg',
            'images/solo-levelling/prologue/page5.jpg',
            'images/solo-levelling/prologue/page6.jpg',
            'images/solo-levelling/prologue/page7.jpg',
            'images/solo-levelling/prologue/page8.jpg',
            'images/solo-levelling/prologue/page9.jpg',
        ],
        2: [
            'images/solo-levelling/chapter1/page1.jpg',
            'images/solo-levelling/chapter1/page2.jpg',
            'images/solo-levelling/chapter1/page3.jpg',
            'images/solo-levelling/chapter1/page4.jpg',
            'images/solo-levelling/chapter1/page5.jpg',
            'images/solo-levelling/chapter1/page6.jpg',
            'images/solo-levelling/chapter1/page7.jpg',
            'images/solo-levelling/chapter1/page8.jpg',
            'images/solo-levelling/chapter1/page9.jpg',
            'images/solo-levelling/chapter1/page10.jpg',
            'images/solo-levelling/chapter1/page11.jpg',
            'images/solo-levelling/chapter1/page12.jpg',
            'images/solo-levelling/chapter1/page13.jpg',
            'images/solo-levelling/chapter1/page14.jpg',
            'images/solo-levelling/chapter1/page15.jpg',
            'images/solo-levelling/chapter1/page16.jpg',
            'images/solo-levelling/chapter1/page17.jpg',
            'images/solo-levelling/chapter1/page18.jpg',
            'images/solo-levelling/chapter1/page19.jpg',
            'images/solo-levelling/chapter1/page20.jpg',
            'images/solo-levelling/chapter1/page21.jpg',
            'images/solo-levelling/chapter1/page22.jpg',
            'images/solo-levelling/chapter1/page23.jpg',
            'images/solo-levelling/chapter1/page24.jpg',
            'images/solo-levelling/chapter1/page25.jpg',
            'images/solo-levelling/chapter1/page26.jpg',
            'images/solo-levelling/chapter1/page27.jpg',
            'images/solo-levelling/chapter1/page28.jpg',
        ]
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
            window.location.href = `prologue.html?chapter=${currentChapter + 1}`;
        });
        nextButtonBottom.addEventListener('click', () => {
            window.location.href = `prologue.html?chapter=${currentChapter + 1}`;
        });
    } else {
        nextButton.disabled = true;
        nextButtonBottom.disabled = true;
    }

    if (currentChapter > 1) {
        prevButton.addEventListener('click', () => {
            window.location.href = `prologue.html?chapter=${currentChapter - 1}`;
        });
        prevButtonBottom.addEventListener('click', () => {
            window.location.href = `prologue.html?chapter=${currentChapter - 1}`;
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
