'use strict';

(function () {

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
})();
