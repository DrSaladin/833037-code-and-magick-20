'use strict';

(function () {
  var wizardSetup = document.querySelector('.setup');
  var inputWizardCoat = wizardSetup.querySelector('input[name = "coat-color"]');
  var wizardCoat = wizardSetup.querySelector('.wizard-coat');

  var fireballColor = wizardSetup.querySelector('.setup-fireball-wrap');
  var fireball = wizardSetup.querySelector('.setup-fireball');
  var inputFireball = wizardSetup.querySelector('input[name = "fireball-color"]');

  var wizardEyes = wizardSetup.querySelector('.wizard-eyes');
  var inputWizardEyes = wizardSetup.querySelector('input[name = "eyes-color"]');

  var onElementPress = function (elementTitle, array, elementInput) {
    if (elementTitle.tagName === 'DIV') {
      elementTitle.style.backgroundColor = window.utils.getArrayRandElement(array);
      elementInput.value = elementTitle.style.backgroundColor;
    }
    elementTitle.style.fill = window.utils.getArrayRandElement(array);
    elementInput.value = elementTitle.style.fill;
    return function () {
      onElementPress(elementTitle, array, elementInput);
    };
  };

  var toggleElementEvents = function () {
    if (wizardSetup.classList.contains('hidden')) {
      wizardCoat.removeEventListener('click', onElementPress(wizardCoat, window.utils.WIZARD_COAT_COLORS, inputWizardCoat));
      fireball.removeEventListener('click', onElementPress(fireballColor, window.utils.FIREBALL_COLORS, inputFireball));
      wizardEyes.removeEventListener('click', onElementPress(wizardEyes, window.utils.WIZARD_EYE_COLORS, inputWizardEyes));
    }
    wizardCoat.addEventListener('click', onElementPress(wizardCoat, window.utils.WIZARD_COAT_COLORS, inputWizardCoat));
    fireball.addEventListener('click', onElementPress(fireballColor, window.utils.FIREBALL_COLORS, inputFireball));
    wizardEyes.addEventListener('click', onElementPress(wizardEyes, window.utils.WIZARD_EYE_COLORS, inputWizardEyes));
  };

  toggleElementEvents();

})();
