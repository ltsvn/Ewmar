import axios from "axios";


export async function GET(req, res) {
    const apiKey = "AIzaSyCmmVt9h1vtUBRYFJ9s_865LgLWftq4CiI";
    const placeId = 'ChIJJ4qahSW8PEcR-N2mN4N1XwU';

    try {
        const response = await axios.get(
            `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${apiKey}&language=pl`
        );
        return Response.json(response.data.result.reviews);
    } catch (error) {
        console.error('Error fetching reviews:', error);
        // res.status(500).json({ error: 'Błąd serwera', details: error.message });
    }
}
