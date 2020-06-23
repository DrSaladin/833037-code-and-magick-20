'use strict';

(function () {

  document.querySelector('.setup-similar').classList.remove('hidden');

  var openButton = document.querySelector('.setup-open');
  var wizardSetup = document.querySelector('.setup');
  var closeButton = document.querySelector('.setup-close');


  var onPopupEscPress = function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      toggleWizardSetup();
    }
  };

  var onPopupEnterPress = function (evt) {
    if (evt.keyCode === 13) {
      toggleWizardSetup();
    }
  };

  var toggleWizardSetup = function () {
    wizardSetup.classList.toggle('hidden');
    if (wizardSetup.classList.contains('hidden')) {
      document.removeEventListener('keydown', onPopupEscPress);
    } else {
      document.addEventListener('keydown', onPopupEscPress);
    }
  };


  openButton.addEventListener('click', toggleWizardSetup);
  openButton.addEventListener('keydown', onPopupEnterPress);

  window.utils.setAttribute(closeButton, 'tabindex', 0);
  closeButton.addEventListener('click', toggleWizardSetup);
  closeButton.addEventListener('keydown', onPopupEnterPress);

  var formOpenIcon = document.querySelector('.setup-open-icon');
  window.utils.setAttribute(formOpenIcon, 'tabindex', 0);

})();
