'use strict';

(function () {
  var wizardSetup = document.querySelector('.setup');
  var similarListElement = wizardSetup.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

  var wizardQuantity = 4;

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorEyes;
    // wizardElement.querySelector('.setup-fireball').style.background = wizard.colorFireball;

    return wizardElement;
  };

  var similarList = document.querySelector('.setup-similar-list');

  window.renderWizardModel = function (data) {
    var takeNumber = data.length > wizardQuantity ? wizardQuantity : data.length;
    similarList.innerHTML = '';

    for (var i = 0; i < takeNumber; i++) {
      similarListElement.appendChild(renderWizard(data[i]));
    }

    wizardSetup.querySelector('.setup-similar').classList.remove('hidden');
  };
})();
