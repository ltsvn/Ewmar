import axios from 'axios';

export default async function handler(req, res) {
    const apiKey = process.env.GOOGLE_API_KEY;
    const placeId = 'ChIJJ4qahSW8PEcR-N2mN4N1XwU';

    try {
        const response = await axios.get(
            `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${apiKey}&language=pl`
        );
        res.status(200).json(response.data.result.reviews);
    } catch (error) {
        console.error('Error fetching reviews:', error);
        res.status(500).json({ error: 'Błąd serwera', details: error.message });
    }
}
