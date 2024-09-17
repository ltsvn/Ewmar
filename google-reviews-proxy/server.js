const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const PORT = 5001;

app.use(cors());
app.get('/api/reviews', async (req, res) => {
    const apiKey = 'AIzaSyCmmVt9h1vtUBRYFJ9s_865LgLWftq4CiI';
    const placeId = 'ChIJJ4qahSW8PEcR-N2mN4N1XwU';

    try {
        const response = await axios.get(
            `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${apiKey}&language=pl`
        );
        res.json(response.data.result.reviews);
    } catch (error) {
        res.status(500).send('Błąd serwera');
    }
});

app.listen(PORT, () => {
    console.log(`Serwer proxy działa na porcie ${PORT}`);
});
