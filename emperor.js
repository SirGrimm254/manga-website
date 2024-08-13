document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const chapterNumber = parseInt(urlParams.get('chapter'), 10) || 1;
    const mangaTitle = 'Magic Emperor';  // Replace this with dynamic manga title if needed

    if (chapterNumber) {
        loadChapterImages(chapterNumber, mangaTitle);
        setupNavigationButtons(chapterNumber, mangaTitle);
    }
});

function loadChapterImages(chapterNumber, mangaTitle) {
    const mangaChapters = {
        1: [
            'images/magic-emperor/chapter1/1-o.jpg',
            'images/magic-emperor/chapter1/2-o.jpg',
            'images/magic-emperor/chapter1/3-o.jpg',
            'images/magic-emperor/chapter1/4-o.jpg',
            'images/magic-emperor/chapter1/5-o.jpg',
            'images/magic-emperor/chapter1/6-o.jpg',
            'images/magic-emperor/chapter1/7-o.jpg',
            'images/magic-emperor/chapter1/8-o.jpg',
            'images/magic-emperor/chapter1/9-o.jpg',
            'images/magic-emperor/chapter1/10-o.jpg',
            'images/magic-emperor/chapter1/11-o.jpg',
            'images/magic-emperor/chapter1/12-o.jpg',
            'images/magic-emperor/chapter1/13-o.jpg',
            'images/magic-emperor/chapter1/14-o.jpg',
            'images/magic-emperor/chapter1/15-o.jpg',
            'images/magic-emperor/chapter1/16-o.jpg',
            'images/magic-emperor/chapter1/17-o.jpg',
            'images/magic-emperor/chapter1/18-o.jpg',
            'images/magic-emperor/chapter1/19-o.jpg',
            'images/magic-emperor/chapter1/20-o.jpg',
            'images/magic-emperor/chapter1/21-o.jpg',
            'images/magic-emperor/chapter1/22-o.jpg',
            'images/magic-emperor/chapter1/23-o.jpg',
            'images/magic-emperor/chapter1/24-o.jpg',
            'images/magic-emperor/chapter1/25-o.jpg',
            'images/magic-emperor/chapter1/26-o.jpg',
            'images/magic-emperor/chapter1/27-o.jpg',
            'images/magic-emperor/chapter1/28-o.jpg',
            'images/magic-emperor/chapter1/29-o.jpg',
            'images/magic-emperor/chapter1/30-o.jpg',
            'images/magic-emperor/chapter1/31-o.jpg',
            'images/magic-emperor/chapter1/32-o.jpg',
            'images/magic-emperor/chapter1/33-o.jpg',
            'images/magic-emperor/chapter1/34-o.jpg',
            'images/magic-emperor/chapter1/35-o.jpg',
            'images/magic-emperor/chapter1/36-o.jpg',
            'images/magic-emperor/chapter1/37-o.jpg',
            'images/magic-emperor/chapter1/38-o.jpg',
            'images/magic-emperor/chapter1/39-o.jpg',
            'images/magic-emperor/chapter1/40-o.jpg',
            'images/magic-emperor/chapter1/41-o.jpg',
            'images/magic-emperor/chapter1/42-o.jpg',
            'images/magic-emperor/chapter1/43-o.jpg',
            'images/magic-emperor/chapter1/44-o.jpg',
            'images/magic-emperor/chapter1/45-o.jpg',
            'images/magic-emperor/chapter1/46-o.jpg',
            'images/magic-emperor/chapter1/47-o.jpg',
            'images/magic-emperor/chapter1/48-o.jpg',
            'images/magic-emperor/chapter1/49-o.jpg',
            'images/magic-emperor/chapter1/50-o.jpg',
            'images/magic-emperor/chapter1/51-o.jpg',
            'images/magic-emperor/chapter1/52-o.jpg',
            'images/magic-emperor/chapter1/53-o.jpg',
            'images/magic-emperor/chapter1/54-o.jpg',
            'images/magic-emperor/chapter1/55-o.jpg',
            'images/magic-emperor/chapter1/56-o.jpg',
            'images/magic-emperor/chapter1/57-o.jpg',
            'images/magic-emperor/chapter1/58-o.jpg',
            'images/magic-emperor/chapter1/59-o.jpg',
            'images/magic-emperor/chapter1/60-o.jpg',
            'images/magic-emperor/chapter1/61-o.jpg',
            'images/magic-emperor/chapter1/62-o.jpg',
            'images/magic-emperor/chapter1/63-o.jpg',
            'images/magic-emperor/chapter1/64-o.jpg',
            'images/magic-emperor/chapter1/65-o.jpg',
            'images/magic-emperor/chapter1/66-o.jpg',
            'images/magic-emperor/chapter1/67-o.jpg',
            'images/magic-emperor/chapter1/68-o.jpg',
            'images/magic-emperor/chapter1/69-o.jpg',
            'images/magic-emperor/chapter1/70-o.jpg',
            'images/magic-emperor/chapter1/71-o.jpg',
            'images/magic-emperor/chapter1/72-o.jpg',
            'images/magic-emperor/chapter1/73-o.jpg',
            'images/magic-emperor/chapter1/74-o.jpg',
            'images/magic-emperor/chapter1/75-o.jpg',
            'images/magic-emperor/chapter1/76-o.jpg',
            'images/magic-emperor/chapter1/77-o.jpg',
            'images/magic-emperor/chapter1/78-o.jpg',
            'images/magic-emperor/chapter1/79-o.jpg',
            'images/magic-emperor/chapter1/80-o.jpg',
            'images/magic-emperor/chapter1/81-o.jpg',
            'images/magic-emperor/chapter1/82-o.jpg',
            'images/magic-emperor/chapter1/83-o.jpg',
            'images/magic-emperor/chapter1/84-o.jpg',
            'images/magic-emperor/chapter1/85-o.jpg',
            'images/magic-emperor/chapter1/86-o.jpg',
            'images/magic-emperor/chapter1/87-o.jpg',
            'images/magic-emperor/chapter1/88-o.jpg',
            'images/magic-emperor/chapter1/89-o.jpg',
            'images/magic-emperor/chapter1/90-o.jpg',
            'images/magic-emperor/chapter1/91-o.jpg',
            'images/magic-emperor/chapter1/92-o.jpg',
            'images/magic-emperor/chapter1/93-o.jpg',
            'images/magic-emperor/chapter1/94-o.jpg',
            'images/magic-emperor/chapter1/95-o.jpg',
            'images/magic-emperor/chapter1/96-o.jpg',
            'images/magic-emperor/chapter1/97-o.jpg',
            'images/magic-emperor/chapter1/98-o.jpg',
            'images/magic-emperor/chapter1/99-o.jpg',
            'images/magic-emperor/chapter1/100-o.jpg',
            'images/magic-emperor/chapter1/101-o.jpg',
            'images/magic-emperor/chapter1/102-o.jpg',
            'images/magic-emperor/chapter1/103-o.jpg',
            'images/magic-emperor/chapter1/104-o.jpg',
            'images/magic-emperor/chapter1/105-o.jpg',
            'images/magic-emperor/chapter1/106-o.jpg',
            'images/magic-emperor/chapter1/107-o.jpg',
            'images/magic-emperor/chapter1/108-o.jpg',
            'images/magic-emperor/chapter1/109-o.jpg',
            'images/magic-emperor/chapter1/110-o.jpg',
            'images/magic-emperor/chapter1/111-o.jpg',
            'images/magic-emperor/chapter1/112-o.jpg',
            'images/magic-emperor/chapter1/113-o.jpg',
            'images/magic-emperor/chapter1/114-o.jpg',
            'images/magic-emperor/chapter1/115-o.jpg',
            'images/magic-emperor/chapter1/116-o.jpg',
            'images/magic-emperor/chapter1/117-o.jpg',
            'images/magic-emperor/chapter1/118-o.jpg',
            'images/magic-emperor/chapter1/119-o.jpg',
            'images/magic-emperor/chapter1/120-o.jpg',
            'images/magic-emperor/chapter1/121-o.jpg',
            'images/magic-emperor/chapter1/122-o.jpg',
            'images/magic-emperor/chapter1/123-o.jpg',
            'images/magic-emperor/chapter1/124-o.jpg',
            'images/magic-emperor/chapter1/125-o.jpg',
            'images/magic-emperor/chapter1/126-o.jpg',
            'images/magic-emperor/chapter1/127-o.jpg',
            'images/magic-emperor/chapter1/128-o.jpg',
            'images/magic-emperor/chapter1/129-o.jpg',
            'images/magic-emperor/chapter1/130-o.jpg',
            'images/magic-emperor/chapter1/131-o.jpg',
            'images/magic-emperor/chapter1/132-o.jpg',
            'images/magic-emperor/chapter1/133-o.jpg',
            'images/magic-emperor/chapter1/134-o.jpg',
            'images/magic-emperor/chapter1/135-o.jpg',
            'images/magic-emperor/chapter1/136-o.jpg',
            'images/magic-emperor/chapter1/137-o.jpg',
            'images/magic-emperor/chapter1/138-o.jpg',
            'images/magic-emperor/chapter1/139-o.jpg',
            'images/magic-emperor/chapter1/140-o.jpg',
            'images/magic-emperor/chapter1/141-o.jpg',
            'images/magic-emperor/chapter1/142-o.jpg',
            'images/magic-emperor/chapter1/143-o.jpg',
            'images/magic-emperor/chapter1/144-o.jpg',
            'images/magic-emperor/chapter1/145-o.jpg',
            'images/magic-emperor/chapter1/146-o.jpg',
            'images/magic-emperor/chapter1/147-o.jpg',
            'images/magic-emperor/chapter1/148-o.jpg',
            'images/magic-emperor/chapter1/149-o.jpg',
            'images/magic-emperor/chapter1/150-o.jpg',
            'images/magic-emperor/chapter1/151-o.jpg',
            'images/magic-emperor/chapter1/152-o.jpg',
            'images/magic-emperor/chapter1/153-o.jpg',
            'images/magic-emperor/chapter1/154-o.jpg',
            'images/magic-emperor/chapter1/155-o.jpg',
            'images/magic-emperor/chapter1/156-o.jpg',
            'images/magic-emperor/chapter1/157-o.jpg',
            'images/magic-emperor/chapter1/158-o.jpg',
            'images/magic-emperor/chapter1/159-o.jpg',
            'images/magic-emperor/chapter1/160-o.jpg',
            'images/magic-emperor/chapter1/161-o.jpg',
            'images/magic-emperor/chapter1/162-o.jpg',
            'images/magic-emperor/chapter1/163-o.jpg',
            'images/magic-emperor/chapter1/164-o.jpg',
            'images/magic-emperor/chapter1/165-o.jpg',
            'images/magic-emperor/chapter1/166-o.jpg',
            'images/magic-emperor/chapter1/167-o.jpg',
            'images/magic-emperor/chapter1/168-o.jpg',
            'images/magic-emperor/chapter1/169-o.jpg',
            'images/magic-emperor/chapter1/170-o.jpg',
            'images/magic-emperor/chapter1/171-o.jpg',
            'images/magic-emperor/chapter1/172-o.jpg',
            'images/magic-emperor/chapter1/173-o.jpg',
            'images/magic-emperor/chapter1/174-o.jpg',
            'images/magic-emperor/chapter1/175-o.jpg',
            'images/magic-emperor/chapter1/176-o.jpg',
            'images/magic-emperor/chapter1/177-o.jpg',
            'images/magic-emperor/chapter1/178-o.jpg',
            'images/magic-emperor/chapter1/179-o.jpg',
            'images/magic-emperor/chapter1/180-o.jpg',
            'images/magic-emperor/chapter1/181-o.jpg',
            'images/magic-emperor/chapter1/182-o.jpg',
            'images/magic-emperor/chapter1/183-o.jpg',
            'images/magic-emperor/chapter1/184-o.jpg',
            'images/magic-emperor/chapter1/185-o.jpg',
            'images/magic-emperor/chapter1/186-o.jpg',
            'images/magic-emperor/chapter1/187-o.jpg',
            'images/magic-emperor/chapter1/188-o.jpg',
            'images/magic-emperor/chapter1/189-o.jpg',
            'images/magic-emperor/chapter1/190-o.jpg',
            'images/magic-emperor/chapter1/191-o.jpg',
            'images/magic-emperor/chapter1/192-o.jpg',
            'images/magic-emperor/chapter1/193-o.jpg',
            'images/magic-emperor/chapter1/194-o.jpg',
            'images/magic-emperor/chapter1/195-o.jpg',
            'images/magic-emperor/chapter1/196-o.jpg',
            'images/magic-emperor/chapter1/197-o.jpg',
            'images/magic-emperor/chapter1/198-o.jpg',
            'images/magic-emperor/chapter1/199-o.jpg',
            'images/magic-emperor/chapter1/200-o.jpg',
            'images/magic-emperor/chapter1/201-o.jpg',
            'images/magic-emperor/chapter1/202-o.jpg',
            'images/magic-emperor/chapter1/203-o.jpg',
            'images/magic-emperor/chapter1/204-o.jpg',
            'images/magic-emperor/chapter1/205-o.jpg',
            'images/magic-emperor/chapter1/206-o.jpg',
            'images/magic-emperor/chapter1/207-o.jpg',
            'images/magic-emperor/chapter1/208-o.jpg',
            'images/magic-emperor/chapter1/209-o.jpg',
            'images/magic-emperor/chapter1/210-o.jpg',
            'images/magic-emperor/chapter1/211-o.jpg',
            'images/magic-emperor/chapter1/212-o.jpg',
            'images/magic-emperor/chapter1/213-o.jpg',
            'images/magic-emperor/chapter1/214-o.jpg',
            'images/magic-emperor/chapter1/215-o.jpg',
            'images/magic-emperor/chapter1/216-o.jpg',
        ],
        2: [
            'images/demonic-emperor/chapter2/page1.jpg',
            'images/demonic-emperor/chapter2/page2.jpg',
        ],
        3: [
            'images/demonic-emperor/chapter3/page1.jpg',
            'images/demonic-emperor/chapter3/page2.jpg',
        ],
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

    const totalChapters = 3;

    if (currentChapter < totalChapters) {
        nextButton.href = `emperor.html?chapter=${currentChapter + 1}`;
        nextButtonBottom.href = `emperor.html?chapter=${currentChapter + 1}`;
    } else {
        nextButton.disabled = true;
        nextButtonBottom.disabled = true;
    }

    if (currentChapter > 1) {
        prevButton.href = `emperor.html?chapter=${currentChapter - 1}`;
        prevButtonBottom.href = `emperor.html?chapter=${currentChapter - 1}`;
    } else {
        prevButton.disabled = true;
        prevButtonBottom.disabled = true;
    }
}
