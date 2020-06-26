'use strict';

(function () {
  var setupForm = document.querySelector('.setup-wizard-form');
  setupForm.setAttribute('action', 'https://javascript.pages.academy/code-and-magick');

  var userAvatar = setupForm.querySelector('input[name = "avatar"]');
  userAvatar.setAttribute('accept', 'image/png, image/jpeg');

  var inputUserName = setupForm.querySelector('.setup-user-name');
  inputUserName.setAttribute('minlength', window.utils.MIN_NAME_LENGTH);

  inputUserName.addEventListener('invalid', function () {
    if (inputUserName.validity.valueMissing) {
      inputUserName.setCustomValidity('Обязательное поле');
    } else {
      inputUserName.setCustomValidity('');
    }
  });

  inputUserName.addEventListener('input', function () {
    var valueLength = inputUserName.value.length;

    if (valueLength < window.utils.MIN_NAME_LENGTH) {
      inputUserName.setCustomValidity('Ещё ' + (window.utils.MIN_NAME_LENGTH - valueLength) + ' симв.');
    } else if (valueLength > window.utils.MAX_NAME_LENGTH) {
      inputUserName.setCustomValidity('Удалите лишние ' + (valueLength - window.utils.MAX_NAME_LENGTH) + ' симв.');
    } else {
      inputUserName.setCustomValidity('');
    }
  });
})();
