const galleryLink = document.querySelector('#go-to-gallery');
galleryLink.addEventListener('click', evt => {
  evt.preventDefault();
  location.href = './1-gallery.html';
});

const formLink = document.querySelector('#go-to-form');
formLink.addEventListener('click', evt => {
  evt.preventDefault();
  location.href = './2-form.html';
});
