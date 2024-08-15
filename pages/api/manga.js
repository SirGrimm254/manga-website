export default function handler(req, res) {
    // Sample manga data
    const mangaList = [
        { id: 1, title: 'Nano Machine', category: 'Action', imageUrl: '/images/manga1.jpg', detailPage: '/manga-detail.html?id=1' },
        { id: 2, title: 'Solo Leveling', category: 'Fantasy', imageUrl: '/images/manga2.jpg', detailPage: '/manga-detail.html?id=2' },
        { id: 3, title: 'Magic Emperor', category: 'Horror', imageUrl: '/images/manga3.jpg', detailPage: '/manga-detail.html?id=3' },
        { id: 4, title: "Heavenly Demon Can't Live A Normal Life", category: 'Martial Arts', imageUrl: '/images/manga4.jpg', detailPage: '/manga-detail.html?id=4' }
    ];

    // Filter the manga based on category if provided
    const category = req.query.category;
    const filteredManga = category
        ? mangaList.filter(manga => manga.category.toLowerCase() === category.toLowerCase())
        : mangaList;

    // Respond with the filtered manga list as JSON
    res.status(200).json(filteredManga);
}
