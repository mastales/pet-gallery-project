const images = [
	{
		url: "./assets/images/Photo-gallery-1.jpg",
	},
	{
		url: "./assets/images/Photo-gallery-2.jpg",
	},
	{
		url: "./assets/images/Photo-gallery-3.jpg",
	},
	{
		url: "./assets/images/Photo-gallery-4.jpg",
	},
	{
		url: "./assets/images/Photo-gallery-5.jpg",
	},
	{
		url: "./assets/images/Photo-gallery-6.jpg",
	},
	{
		url: "./assets/images/Photo-gallery-6.jpg",
	},
	{
		url: "./assets/images/Photo-gallery-6.jpg",
	},
	{
		url: "./assets/images/Photo-gallery-6.jpg",
	},

	{
		url: "./assets/images/Photo-gallery-6.jpg",
	},
	{
		url: "./assets/images/Photo-gallery-6.jpg",
	},
];

const showGallery = () => {
	images.forEach((image) => {
		// create
		createImageContainer(image.url);
	});
};

const createImageContainer = (imgUrl) => {
	/**
	 * 
	 * <div class="photo-gallery__item">
						<img
							src="./assets/images/Photo-gallery-1.jpg"
							alt="concert goers with smoke and lasers"
							class="photo-gallery__image"
						/>
					</div>
	 * 
	 */
	let parentEl = document.querySelector(".photo-gallery");

	let photoGalleryItem = document.createElement("div");
	photoGalleryItem.classList.add("photo-gallery__item");

	let img = document.createElement("img");
	img.classList.add("photo-gallery__image");
	img.src = imgUrl;
	photoGalleryItem.appendChild(img);
	parentEl.appendChild(photoGalleryItem);
};

// Onload show gallery
showGallery();
