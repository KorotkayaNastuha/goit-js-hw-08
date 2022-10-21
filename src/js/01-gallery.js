import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
console.log(galleryItems);


const galleryEl = document.querySelector('.gallery');
const markUp = galleryItems.map((image) => 
	`<div class="gallery__item">
		<a class="gallery__link" href=${image.original}>
		<img class = "gallery__image"
			src=${image.preview}
			data-source=${image.original}
			alt=${image.description}
		/>
		</a>
	</div >`).join("");

galleryEl.innerHTML = markUp;
    
let galleryLightbox = new SimpleLightbox('.gallery a', {captionsData: "alt",  captionDelay: 250,});