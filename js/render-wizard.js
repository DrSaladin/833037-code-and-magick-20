'use strict';

(function () {

  var wizardSetup = document.querySelector('.setup'); // убрать потом
  var wizardCoatInput = document.querySelector('input[name = "coat-color"]');
  var wizardCoat = document.querySelector('.wizard-coat');

  var fireballColor = document.querySelector('.setup-fireball-wrap');
  var fireball = document.querySelector('.setup-fireball');
  var fireballInput = document.querySelector('input[name = "fireball-color"]');

  var wizardEyes = document.querySelector('.wizard-eyes');
  var wizardEyesInput = document.querySelector('input[name = "eyes-color"]');

  var onElementPress = function (elementTitle, arraySource, elementInput) {
    if (elementTitle.tagName === 'DIV') {
      elementTitle.style.backgroundColor = window.utility.getArrayRandElement(arraySource);
      elementInput.value = elementTitle.style.backgroundColor;
    }
    elementTitle.style.fill = window.utility.getArrayRandElement(arraySource);
    elementInput.value = elementTitle.style.fill;
  };

  onElementPress(wizardCoat, window.utility.WIZARD_COAT_COLORS, wizardCoatInput);
  onElementPress(wizardEyes, window.utility.WIZARD_EYE_COLORS, wizardEyesInput);
  onElementPress(fireballColor, window.utility.FIREBALL_COLORS, fireballInput);

  var onCoatPress = function () {
    wizardCoat.style.fill = window.utility.getArrayRandElement(window.utility.WIZARD_COAT_COLORS);
    wizardCoatInput.value = wizardCoat.style.fill;
  };

  var onEyePress = function () {
    wizardEyes.style.fill = window.utility.getArrayRandElement(window.utility.WIZARD_EYE_COLORS);
    wizardEyesInput.value = wizardEyes.style.fill;
  };

  var onFireballPress = function () {
    fireballColor.style.backgroundColor = window.utility.getArrayRandElement(window.utility.FIREBALL_COLORS);
    fireballInput.value = fireballColor.style.backgroundColor;
  };


  var toggleElementEvents = function () {
    if (wizardSetup.classList.contains('hidden')) {
      wizardCoat.removeEventListener('click', onCoatPress);
      fireball.removeEventListener('click', onFireballPress);
      wizardEyes.removeEventListener('click', onEyePress);
    }
    wizardCoat.addEventListener('click', onCoatPress);
    fireball.addEventListener('click', onFireballPress);
    wizardEyes.addEventListener('click', onEyePress);
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
