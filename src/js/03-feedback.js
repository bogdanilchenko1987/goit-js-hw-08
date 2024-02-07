import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const button = document.querySelector('button');
const INPUT_KEY = 'feedback-form-state';
const inputArr = JSON.parse(localStorage.getItem(INPUT_KEY)) ?? {};

form.addEventListener('input', throttle(onInput, 100));
button.addEventListener('submit', onSubmit);

function onInput(evt) {
  const { email, message } = evt.currentTarget.elements;
  const data = {
    email: email.value,
    message: message.value,
  };
  localStorage.setItem(INPUT_KEY, JSON.stringify(data));
  console.log(data);
}

function onSubmit(evt) {
  evt.preventDefault();
  console.log('send');
  evt.currentTarget.reset();
  localStorage.removeItem(INPUT_KEY);
}
