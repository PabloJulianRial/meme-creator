const submitForm = document.getElementById('submit-button');
const errorMessage = document.getElementById('error-message');
const memeImage = document.getElementById('meme-image');
const memeTop = document.getElementById('meme-top');
const memeBottom = document.getElementById('meme-bottom');
const urlBox = document.getElementById('image-url');

memeForm.imageUrl.addEventListener('blur', colorFeedback);

function redAlert(inputBox) {
  if (inputBox === 'url') {
    errorMessage.innerText = `Please enter an image URL ending in .jpg or .png!!!!`;
    urlBox.classList.add('bad-url');
    console.dir(urlBox);
  } else if (inputBox === 'text') {
    `Both text boxes can't be blank!!!!`;
  }
}

function colorFeedback(event) {
  if (event.target.value === '') {
    redAlert('url');

    return;
  } else if (
    !/.jpg$/.test(event.target.value) &&
    !/.png$/.test(event.target.value)
  ) {
    redAlert('url');
  } else {
    errorMessage.innerText =
      'Please give an image link, and your meme text below! Square images work best';
  }
}

function memeGenerator() {
  if (memeForm.imageUrl.value === '') {
    redAlert('url');
    return;
  } else if (
    !/.jpg$/.test(memeForm.imageUrl.value) &&
    !/.png$/.test(memeForm.imageUrl.value)
  ) {
    redAlert('url');
    return;
  }
  if (memeForm.topText.value === '' && memeForm.bottomText.value === '') {
    redAlert('text');
    return;
  }

  memeImage.src = memeForm.imageUrl.value;
  memeTop.innerText = memeForm.topText.value;
  memeBottom.innerText = memeForm.bottomText.value;
}
