import { refs } from '../main';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox('.gallery a');

export function createGallery(images, append = false) {
  const markup = images.map(item => `
    <li class="gallery-list-item">
      <a class="gallery-link" href="${item.largeImageURL}">
        <img class="gallery-list-img" src="${item.webformatURL}" alt="${item.tags}" width="360" height="200">
      </a>
      <div class="gallery-list-container">
        <div class="subtitle-container">
          <h2 class="gallery-list-subtitle">likes</h2>
          <p class="subtitle-p">${item.likes}</p>
        </div>
        <div class="subtitle-container">
          <h2 class="gallery-list-subtitle">views</h2>
          <p class="subtitle-p">${item.views}</p>
        </div>
        <div class="subtitle-container">
          <h2 class="gallery-list-subtitle">comments</h2>
          <p class="subtitle-p">${item.comments}</p>
        </div>
        <div class="subtitle-container">
          <h2 class="gallery-list-subtitle">downloads</h2>
          <p class="subtitle-p">${item.downloads}</p>
        </div>
      </div>
    </li>`).join('');

  if (append) {
    refs.gallery.innerHTML += markup;
  } else {
    refs.gallery.innerHTML = markup;
  }

  lightbox.refresh();
}

export function clearGallery() {
  refs.gallery.innerHTML = '';
}

export function showLoader() {
  refs.loader.classList.remove("hidden")
}

export function hideLoader() {
  refs.loader.classList.add("hidden")
}

export function showMoreBtn() {
  refs.loadMore.classList.remove("hidden")
}

export function hideMoreBtn() {
  refs.loadMore.classList.add("hidden")
}