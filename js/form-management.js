'use strict';

(function () {
  var setupForm = document.querySelector('.setup-wizard-form');
  window.utility.setAttribute(setupForm, 'action', 'https://javascript.pages.academy/code-and-magick');

  var userAvatar = document.querySelector('input[name = "avatar"]');
  window.utility.setAttribute(userAvatar, 'accept', 'image/png, image/jpeg');

  var userNameInput = document.querySelector('.setup-user-name');
  window.utility.setAttribute(userNameInput, 'minlength', window.utility.MIN_NAME_LENGTH);


  userNameInput.addEventListener('invalid', function () {
    if (userNameInput.validity.valueMissing) {
      userNameInput.setCustomValidity('Обязательное поле');
    } else {
      userNameInput.setCustomValidity('');
    }
  });

  userNameInput.addEventListener('input', function () {
    var valueLength = userNameInput.value.length;

    if (valueLength < window.utility.MIN_NAME_LENGTH) {
      userNameInput.setCustomValidity('Ещё ' + (window.utility.MIN_NAME_LENGTH - valueLength) + ' симв.');
    } else if (valueLength > window.utility.MAX_NAME_LENGTH) {
      userNameInput.setCustomValidity('Удалите лишние ' + (valueLength - window.utility.MAX_NAME_LENGTH) + ' симв.');
    } else {
      userNameInput.setCustomValidity('');
    }
  });
})();
