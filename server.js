const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Sample manga data
const mangaList = [
  { id: 1, title: 'Nano Machine', category: 'Action', imageUrl: '/images/manga1.jpg', detailPage: '/manga-detail.html?id=1' },
  { id: 2, title: 'Solo Levelling', category: 'Fantasy', imageUrl: '/images/manga2.jpg', detailPage: '/solo-detail.html?id=2' },
  { id: 3, title: 'Magic Emperor', category: 'Horror', imageUrl: '/images/manga3.jpg', detailPage: '/emperor-detail.html?id=3' },
  { id: 4, title: "Heavenly Demon\n Can't Live A Normal Life", category: 'Martial Arts', imageUrl: '/images/manga4.jpg', detailPage: '/live-detail.html?id=4' },
  { id: 5, title: 'Solo Levelling', category: 'Action', imageUrl: '/images/manga2.jpg', detailPage: '/solo-detail.html?id=5' },
  { id: 6, title: 'Magic Emperor', category: 'Action', imageUrl: '/images/manga3.jpg', detailPage: '/emperor-detail.html?id=6' },
  { id: 7, title: "Heavenly Demon\n Can't Live A Normal Life", category: 'Action', imageUrl: '/images/manga4.jpg', detailPage: '/live-detail.html?id=7' },
  // Add more manga data as needed
];

// Middleware to serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// API route to fetch manga data by ID
app.get('/api/manga/:id', (req, res) => {
  const mangaId = parseInt(req.params.id, 10);
  const manga = mangaList.find(manga => manga.id === mangaId);
  if (manga) {
    res.json(manga);
  } else {
    res.status(404).json({ error: 'Manga not found' });
  }
});

// API route to fetch manga data with optional category filtering
app.get('/api/manga', (req, res) => {
  const category = req.query.category;
  let filteredManga = mangaList;

  if (category) {
    filteredManga = mangaList.filter(manga => manga.category.toLowerCase() === category.toLowerCase());
  }

  res.header('Access-Control-Allow-Origin', '*');
  res.json(filteredManga);
});

// Serve the main HTML file (index.html)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
