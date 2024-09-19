import axios from 'axios';

export default async function handler(req, res) {
    const apiKey = 'AIzaSyCmmVt9h1vtUBRYFJ9s_865LgLWftq4CiI';  // Twój klucz API Google
    const placeId = 'ChIJJ4qahSW8PEcR-N2mN4N1XwU';  // Twój Place ID

    try {
        const response = await axios.get(
            `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${apiKey}&language=pl`
        );
        res.status(200).json(response.data.result.reviews);  // Zwracamy recenzje w formacie JSON
    } catch (error) {
        res.status(500).json({ error: 'Błąd serwera' });  // W razie błędu zwracamy status 500
    }
}
