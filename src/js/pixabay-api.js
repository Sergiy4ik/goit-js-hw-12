import axios from 'axios';
import "izitoast/dist/css/iziToast.min.css";


const API_KEY = '52796639-16b0da086bf021f69585a6f18';

const URL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query, page = 1) {
    try {
        const response = await axios.get(URL, {
            params: {
                key: API_KEY,
                q: query,
                image_type: 'photo',
                orientation: 'horizontal',
                safesearch: true,
                per_page: 16,
                page
            },
        })

        return response.data
    } catch (error) {
        console.error('Pixabay API error:', error);
        throw error;
    }
}