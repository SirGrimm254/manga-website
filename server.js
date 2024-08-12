const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Sample manga data
const mangaList = [
    { id: 1, title: 'Nano Machine', category: 'Action', imageUrl: '/images/Manga1.jpg' },
    { id: 2, title: 'Solo Levelling', category: 'Fantasy', imageUrl: '/images/Manga2.jpg' },
    { id: 3, title: 'Demonic Emperor', category: 'Horror', imageUrl: '/images/Manga3.jpg' },
    { id: 4, title: "Heavenly Demon Can't Live A Normal Life", category: 'Martial Arts', imageUrl: '/images/Manga4.jpg' },
    // Add more manga data as needed
];

// Middleware to serve static files from 'public' directory
app.use(express.static('public'));

// Serve the main HTML file (index.html)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API route to fetch manga data with optional category filtering
app.get('/api/manga', (req, res) => {
    const { category } = req.query;
    if (category) {
        // Filter manga by category
        const filteredManga = mangaList.filter(manga => manga.category.toLowerCase() === category.toLowerCase());
        res.json(filteredManga);
    } else {
        // Return all manga if no category is specified
        res.json(mangaList);
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
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
