'use strict';

(function () {

  var wizardSetup = document.querySelector('.setup');

  var closeButton = wizardSetup.querySelector('.setup-close');
  var openButton = document.querySelector('.setup-open');


  document.querySelector('.setup-similar').classList.remove('hidden');


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
    wizardSetup.style.top = '80px';
    wizardSetup.style.left = '50%';
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
