import { fetchImages } from './js/pixabay-api'; // Імпорт функції для запитів
import { renderImages, clearGallery } from './js/render-function'; // Імпорт функції для рендерингу та очищення галереї
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

let currentPage = 1;
let currentQuery = '';

form.addEventListener('submit', onSearch);

function onSearch(event) {
	event.preventDefault();
	const searchQuery = event.target.elements.searchQuery.value.trim();

	if (searchQuery === '') {
		iziToast.warning({
			title: 'Warning',
			message: 'Please enter a search query!',
		});
		return;
	}

	currentQuery = searchQuery;
	currentPage = 1;

	// Очищуємо попередні результати
	clearGallery(gallery);

	// Показуємо індикатор завантаження
	showLoader();

	// Виконуємо запит
	fetchImages(currentQuery, currentPage)
		.then(data => {
			if (data.hits.length === 0) {
				iziToast.error({
					title: 'Error',
					message: 'Sorry, there are no images matching your search query. Please, try again!',
				});
				return;
			}

			renderImages(data.hits, gallery);
		})
		.catch(error => {
			iziToast.error({
				title: 'Error',
				message: 'Something went wrong. Please try again later.',
			});
			console.error('Error fetching images:', error);
		})
		.finally(() => {
			hideLoader();
		});
		
}

function showLoader() {
	loader.style.display = 'block';
}

function hideLoader() {
	loader.style.display = 'none';
}



