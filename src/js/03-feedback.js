import throttle from 'lodash.throttle';
const formRef = document.querySelector('.feedback-form');
const emailRef = document.querySelector('input');
const messageRef = document.querySelector('textarea');
const STORAGE_KEY = 'feedback-form-state';

formRef.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log({email: emailRef.value, message: messageRef.value});
    event.currentTarget.reset();
})
formRef.addEventListener("input", throttle(event => {
    const formSave = { email: emailRef.value, message: messageRef.value };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formSave));
}, 500)
);
function populateTextarea() {
  const saveMessage = localStorage.getItem(STORAGE_KEY);
  if (saveMessage) {
    const currentData = JSON.parse(saveMessage);
    emailRef.value = currentData.email;
    messageRef.value = currentData.message;
}
};