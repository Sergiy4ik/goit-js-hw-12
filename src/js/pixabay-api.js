import axios from 'axios';
import "izitoast/dist/css/iziToast.min.css";


const API_KEY = '52796639-16b0da086bf021f69585a6f18';

const URL = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
    return axios
        .get(URL, {
            params: {
                key: API_KEY,
                q: query,
                image_type: 'photo',
                orientation: 'horizontal',
                safesearch: true,
                per_page: 12
            },
        })
        .then(response => response.data)
        .catch(error => {
            console.error('Pixabay API error:', error);
            throw error;
        });
}