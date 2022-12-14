import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

// Сделай такую же галерею как в первом задании, но используя библиотеку SimpleLightbox,
// которая возьмет на себя обработку кликов по изображениям, открытие и закрытие модального окна,
// а также пролистывание изображений при помощи клавиатуры.
// Посмотри демо видео работы галереи с подключенной библиотекой.

// Необходимо немного изменить разметку карточки галереи, используй этот шаблон.

// <a class="gallery__item" href="large-image.jpg">
//   <img class="gallery__image" src="small-image.jpg" alt="Image description" />
// </a>

// Выполняй это задание в файлах 02-lightbox.html и 02-lightbox.js. Разбей его на несколько подзадач:

//     Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
//     Используй готовый код из первого задания.
//     Подключение скрипта и стилей библиотеки используя CDN сервис cdnjs.
//     Необходимо добавить ссылки на два файла: simple - lightbox.min.js и simple - lightbox.min.css.
//     Инициализация библиотеки после того как элементы галереи созданы и добавлены в div.gallery.
//     Для этого ознакомься с документацией SimpleLightbox - в первую очередь секции «Usage» и «Markup».
//     Посмотри в документации секцию «Options» и добавь отображение подписей к изображениям из атрибута alt.
//     Пусть подпись будет снизу и появляется через 250 миллисекунд после открытия изображения.

const galleryMainDiv = document.querySelector(".gallery");
// console.log(galleryMainDiv);
const galleryMarkup = createGalleryMarkup(galleryItems);
// console.log(galleryMarkup);

galleryMainDiv.insertAdjacentHTML("beforeend", galleryMarkup);
galleryMainDiv.addEventListener("click", onPictureClick);

function createGalleryMarkup(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
<img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join("");
}

function onPictureClick(event) {
  event.preventDefault();
  // console.log(event.target);
  if (event.target.tagName !== "IMG") return;
  console.log(event);

  // console.log(event.target);
  // const instance = basicLightbox.create(
  //   `<img src=${event.target.dataset.source}>`
  // );

  // instance.show();
  // window.addEventListener("keydown", onPress);
  // function onPress(event) {
  //   // console.log(event);
  //   if (event.code === "Escape") {
  //     instance.close();
  //   }
  // }
}

const lightbox = new SimpleLightbox(".gallery__item", {
  captionsData: "alt",
  captionDelay: 250,
});
