import throttle from 'lodash.throttle';
// import { common } from './common';

// let formData = {};
const INPUT_KEY = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onInput, 500));
//

function onInput(evt) {
  // const saveData = JSON.parse(localStorage.getItem(INPUT_KEY)) ?? {};
  // saveData.email = refs.input.value;
  // saveData.message = refs.textarea.value;
  // console.log(saveData);
  // localStorage.setItem(INPUT_KEY, JSON.stringify(saveData));

  const formData = JSON.parse(localStorage.getItem(INPUT_KEY)) ?? {};
  formData[evt.target.name] = evt.target.value;

  localStorage.setItem(INPUT_KEY, JSON.stringify(formData));
}

function onFormSubmit(evt) {
  evt.preventDefault();

  evt.target.reset();
  console.log(JSON.parse(localStorage.getItem(INPUT_KEY)));
  localStorage.removeItem(INPUT_KEY);
  // formData = {};
}

SeedMessage();

function SeedMessage() {
  const savedMessage = JSON.parse(localStorage.getItem(INPUT_KEY));

  if (savedMessage) {
    refs.textarea.value = savedMessage.message ?? '';
    refs.input.value = savedMessage.email ?? '';
  }
}
