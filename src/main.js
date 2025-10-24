import { getImagesByQuery } from './js/pixabay-api';
import { createGallery, clearGallery, showLoader, hideLoader, hideMoreBtn, showMoreBtn } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export const refs = {
    form: document.querySelector('.form'),
    input: document.querySelector('input[name="search-text"]'),
    gallery: document.querySelector('.gallery'),
    loader: document.querySelector('.loader'),
    loadMore: document.querySelector('.load-more-btn')
};

let page = 1;
let totalPages = 0;
let queryGlobal = '';

refs.form.addEventListener('submit', handleSubmit);
refs.loadMore.addEventListener('click', onLoadMoreClick)

async function handleSubmit(event) {
    event.preventDefault();

    const query = refs.input.value.trim();
    if (!query) {
        iziToast.warning({
            message: 'Please enter a search term!',
            position: 'topRight',
        });
        return;
    }

    queryGlobal = query;
    page = 1;

    hideMoreBtn();
    clearGallery();
    showLoader();

    try {
        const data = await getImagesByQuery(queryGlobal, page);

        if (!data.hits.length) {
            iziToast.error({
                message: 'Sorry, no images found. Try again!',
                position: 'topRight',
            });
            return;
        }

        createGallery(data.hits);
        totalPages = Math.ceil(data.totalHits / 16)

        if (page < totalPages) {
            showMoreBtn()
        }

    } catch (error) {
        iziToast.error({
            message: 'Something went wrong. Please try again!',
            position: 'topRight',
        });
    } finally {
        hideLoader()
    }
}

async function onLoadMoreClick() {
    page++
    showLoader()

    try {
        const data = await getImagesByQuery(queryGlobal, page)
        createGallery(data.hits, true)

        if (page >= totalPages) {
            hideMoreBtn()
            iziToast.warning({
                message: "We're sorry, but you've reached the end of search results.",
                position: 'topRight',
            });
        }
    } catch (error) {
        iziToast.error({
            message: 'Something went wrong. Please try again!',
            position: 'topRight',
        });
    } finally {
        hideLoader()
    }

    const { height: cardHeight } = refs.gallery
        .firstElementChild.getBoundingClientRect();
    window.scrollBy({
        top: cardHeight * 2,
        behavior: 'smooth',
    });
}

