const formData = {
  email: '',
  message: '',
};
const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;

document.addEventListener('DOMContentLoaded', () => {
  const savedData = localStorage.getItem('feedback-form-state');
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    formData.email = parsedData.email || '';
    formData.message = parsedData.message || '';
    emailInput.value = formData.email;
    messageInput.value = formData.message;
  }
});
form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});
form.addEventListener('submit', event => {
  event.preventDefault();

  const trimmedEmail = formData.email.trim();
  const trimmedMessage = formData.message.trim();

  if (!trimmedEmail || !trimmedMessage) {
    alert('Fill please all fields');
    return;
  }

  console.log('Form submitted:', {
    email: trimmedEmail,
    message: trimmedMessage,
  });

  localStorage.removeItem('feedback-form-state');
  formData.email = '';
  formData.message = '';
  form.reset();
});
const formButton = document.querySelector('.form-href-wrap');
formButton.addEventListener('click', evt => {
  evt.preventDefault();
  location.href = 'https://siriulas.github.io/goit-js-hw-09/';
});
