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

  var onElementPress = function (elementTitle, arraySource, elementInput) {
    if (elementTitle.tagName === 'DIV') {
      elementTitle.style.backgroundColor = window.utility.getArrayRandElement(arraySource);
      elementInput.value = elementTitle.style.backgroundColor;
    }
    elementTitle.style.fill = window.utility.getArrayRandElement(arraySource);
    elementInput.value = elementTitle.style.fill;
    return function () {
      onElementPress(elementTitle, arraySource, elementInput);
    };
  };

  var toggleElementEvents = function () {
    if (wizardSetup.classList.contains('hidden')) {
      wizardCoat.removeEventListener('click', onElementPress(wizardCoat, window.utility.WIZARD_COAT_COLORS, inputWizardCoat));
      fireball.removeEventListener('click', onElementPress(fireballColor, window.utility.FIREBALL_COLORS, inputFireball));
      wizardEyes.removeEventListener('click', onElementPress(wizardEyes, window.utility.WIZARD_EYE_COLORS, inputWizardEyes));
    }
    wizardCoat.addEventListener('click', onElementPress(wizardCoat, window.utility.WIZARD_COAT_COLORS, inputWizardCoat));
    fireball.addEventListener('click', onElementPress(fireballColor, window.utility.FIREBALL_COLORS, inputFireball));
    wizardEyes.addEventListener('click', onElementPress(wizardEyes, window.utility.WIZARD_EYE_COLORS, inputWizardEyes));
  };

  toggleElementEvents();

  var wizardList = document.querySelector('.setup-similar-list');

  var wizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');


  var createWizard = function (quantity) {
    var wizardOptions = [];
    for (var i = 0; i < quantity; i++) {
      var wizard = {
        name: window.utility.getArrayRandElement(window.utility.WIZARD_NAMES),
        familyName: window.utility.getArrayRandElement(window.utility.WIZARD_FAMILY_NAMES),
        coatColor: window.utility.getArrayRandElement(window.utility.WIZARD_COAT_COLORS),
        eyesColor: window.utility.getArrayRandElement(window.utility.WIZARD_EYE_COLORS),
      };
      wizardOptions.push(wizard);
    }
    return wizardOptions;
  };


  var renderWizard = function (wizard) {
    var wizardElement = wizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name + ' ' + wizard.familyName;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  var fragment = document.createDocumentFragment();
  for (var i = 0; i < createWizard(window.utility.wizardQuantity).length; i++) {
    fragment.appendChild(renderWizard(createWizard(window.utility.wizardQuantity)[i]));
  }

  wizardList.appendChild(fragment);
})();
