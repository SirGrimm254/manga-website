export default function handler(req, res) {
    // Sample manga data
    const mangaList = [
        { id: 1, title: 'Nano Machine', genre: 'Action' },
        { id: 2, title: 'Solo Levelling', genre: 'Fantasy' },
        { id: 3, title: 'Magic Emperor', genre: 'Horror' },
        { id: 4, title: 'Heavenly Demon Can\'t Live A Normal Life', genre: 'Martial Arts' }
    ];

    // Respond with the manga list as JSON
    res.status(200).json(mangaList);
}
