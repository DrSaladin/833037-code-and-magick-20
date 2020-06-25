'use strict';

(function () {
  var wizardSetup = document.querySelector('.setup');

  var wizardList = wizardSetup.querySelector('.setup-similar-list');

  var wizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');


  var createWizard = function (quantity) {
    var wizardOptions = [];
    for (var i = 0; i < quantity; i++) {
      var wizard = {
        name: window.utils.getArrayRandElement(window.utils.WIZARD_NAMES),
        familyName: window.utils.getArrayRandElement(window.utils.WIZARD_FAMILY_NAMES),
        coatColor: window.utils.getArrayRandElement(window.utils.WIZARD_COAT_COLORS),
        eyesColor: window.utils.getArrayRandElement(window.utils.WIZARD_EYE_COLORS),
      };
      wizardOptions.push(wizard);
    }
    return wizardOptions;
  };

  window.createWizards = {
    wizardSetup: wizardSetup,
    wizardList: wizardList,
    wizardTemplate: wizardTemplate,
    createWizard: createWizard
  };

})();
