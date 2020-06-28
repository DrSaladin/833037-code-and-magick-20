'use strict';

(function () {

  var wizardSetup = document.querySelector('.setup');
  var setupForm = wizardSetup.querySelector('.setup-wizard-form');

  var similarListElement = wizardSetup.querySelector('.setup-similar-list');

  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

  var wizardQuantity = 4;
  /*
  var renderWizard = function (wizard) {
    var wizardElement = window.createWizards.wizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name + ' ' + wizard.familyName;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };


  var fragment = document.createDocumentFragment();
  for (var i = 0; i < window.createWizards.createWizard(window.utils.wizardQuantity).length; i++) {
    fragment.appendChild(renderWizard(window.createWizards.createWizard(window.utils.wizardQuantity)[i]));
  }

  window.createWizards.wizardList.appendChild(fragment);
*/

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;

    return wizardElement;
  };

  window.load(function (wizards) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < wizardQuantity; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);

    wizardSetup.querySelector('.setup-similar').classList.remove('hidden');
  }, function () { });


  setupForm.addEventListener('submit', function (evt) {
    window.save(new FormData(setupForm), function (response) {
      wizardSetup.classList.add('hidden');
    });
    evt.preventDefault();
  });
})();
