import { galleryItems } from "./gallery-items.js";

// Ссылка на оригинальное изображение должна храниться в data - атрибуте source на элементе < img >,
// и указываться в href ссылки.Не добавляй другие HTML теги или CSS классы кроме тех, что есть в этом шаблоне.

// Этот функционал не обязателен при сдаче задания, но будет хорошей дополнительной практикой.

// Добавь закрытие модального окна по нажатию клавиши Escape.Сделай так,
//  чтобы прослушивание клавиатуры было только пока открыто модальное окно.
//  У библиотеки basicLightbox есть метод для программного закрытия модального окна.

const galleryMainDiv = document.querySelector(".gallery");
// console.log(galleryMainDiv);
const galleryMarkup = createGalleryMarkup(galleryItems);
// console.log(galleryMarkup);
galleryMainDiv.insertAdjacentHTML("beforeend", galleryMarkup);
galleryMainDiv.addEventListener("click", onPictureClick);

function createGalleryMarkup(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

function onPictureClick(event) {
  event.preventDefault();
  // console.log(event.target);
  if (event.target.tagName !== "IMG") return;

  // console.log(event.target);
  const instance = basicLightbox.create(
    `<img src=${event.target.dataset.source}>`
  );

  instance.show();

  galleryMainDiv.addEventListener("keydown", onPress);
  function onPress(event) {
    console.log(event.key);

    if (event.code === "Escape") {
      instance.close();
      galleryMainDiv.removeEventListener("keydown", onPress);
    }
  }
}

// 1) У першому завданні при закритті модалки потрібно знімати слухач події keydown.
// Подивіться тут https://github.com/electerious/basicLightbox
// як можна реалізувати зняття слухача повністю при закритті модалки.
//   Також враховуйте, що слухач потрібно також знімати при закритті модалки по кліку.
