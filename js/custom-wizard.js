'use strict';
/*
(function () {
  var wizardSetup = document.querySelector('.setup');
  var inputWizardCoat = wizardSetup.querySelector('input[name = "coat-color"]');
  var wizardCoat = wizardSetup.querySelector('.wizard-coat');

  var fireball = wizardSetup.querySelector('.setup-fireball');
  var inputFireball = wizardSetup.querySelector('input[name = "fireball-color"]');

  var wizardEyes = wizardSetup.querySelector('.wizard-eyes');
  var inputWizardEyes = wizardSetup.querySelector('input[name = "eyes-color"]');


  var onElementPress = function (evt, array, elementInput) {
    if (evt.target.tagName === 'use') {
      evt.target.style.fill = window.utils.getArrayRandElement(array);
      elementInput.value = evt.target.style.fill;
    }
    evt.target.style.backgroundColor = window.utils.getArrayRandElement(array);
    elementInput.value = evt.target.style.backgroundColor;
  };

  var toggleElementEvents = function () {
    if (wizardSetup.classList.contains('hidden')) {
      wizardCoat.removeEventListener('click', function (evt) {
        onElementPress(evt, window.utils.WIZARD_COAT_COLORS, inputWizardCoat);
      });
      fireball.removeEventListener('click', function (evt) {
        onElementPress(evt, window.utils.FIREBALL_COLORS, inputFireball);
      });
      wizardEyes.removeEventListener('click', function (evt) {
        onElementPress(evt, window.utils.WIZARD_EYE_COLORS, inputWizardEyes);
      });
    }
    wizardCoat.addEventListener('click', function (evt) {
      onElementPress(evt, window.utils.WIZARD_COAT_COLORS, inputWizardCoat);
    });
    fireball.addEventListener('click', function (evt) {
      onElementPress(evt, window.utils.FIREBALL_COLORS, inputFireball);
    });
    wizardEyes.addEventListener('click', function (evt) {
      onElementPress(evt, window.utils.WIZARD_EYE_COLORS, inputWizardEyes);
    });
  };

  toggleElementEvents();

})();
*/
