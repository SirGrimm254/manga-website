const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Sample manga data
const mangaList = [
    { id: 1, title: 'Nano Machine', category: 'Action', imageUrl: '/images/manga1.jpg' },
    { id: 2, title: 'Solo Levelling', category: 'Fantasy', imageUrl: '/images/manga2.jpg' },
    { id: 3, title: 'Magic Emperor', category: 'Horror', imageUrl: '/images/manga3.jpg' },
    { id: 4, title: "Heavenly Demon Can't Live A Normal Life", category: 'Martial Arts', imageUrl: '/images/manga4.jpg' },
    { id: 5, title: 'Solo Levelling', category: 'Action', imageUrl: '/images/manga2.jpg' },
    { id: 6, title: 'Magic Emperor', category: 'Action', imageUrl: '/images/manga3.jpg' },
    { id: 7, title: "Heavenly Demon Can't Live A Normal Life", category: 'Action', imageUrl: '/images/manga4.jpg' },
    // Add more manga data as needed
];

// Middleware to serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve the main HTML file (index.html)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// API route to fetch manga data with optional category filtering
app.get('/api/manga', (req, res) => {
    const { category } = req.query;
    if (category) {
        // Filter manga by category (case-insensitive)
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
