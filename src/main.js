import { getImagesByQuery } from './js/pixabay-api';
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export const refs = {
    form: document.querySelector('.form'),
    input: document.querySelector('input[name="search-text"]'),
    gallery: document.querySelector('.gallery'),
    loader: document.querySelector('.loader')
};

refs.form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const query = refs.input.value.trim();
    if (!query) {
        iziToast.warning({
            message: 'Please enter a search term!',
            position: 'topRight',
        });
        return;
    }

    clearGallery();
    showLoader();

    getImagesByQuery(query)
        .then(data => {
            if (!data.hits.length) {
                iziToast.error({
                    message: 'Sorry, no images found. Try again!',
                    position: 'topRight',
                });
                return;
            }

            createGallery(data.hits);
        })
        .catch(() => {
            iziToast.error({
                message: 'Something went wrong. Please try again!',
                position: 'topRight',
            });
        })
        .finally(() => {
            hideLoader()
        })

}
