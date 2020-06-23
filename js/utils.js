'use strict';

(function () {
  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита'];
  var WIZARD_FAMILY_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var WIZARD_EYE_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var MIN_NAME_LENGTH = 2;
  var MAX_NAME_LENGTH = 25;

  var wizardQuantity = 4;

  var getArrayRandElement = function (array) {
    var randomElement = Math.floor(Math.random() * array.length);
    return array[randomElement];
  };

  var setAttribute = function (element, attrTitle, attrData) {
    element.setAttribute(attrTitle, attrData);
  };

  window.utils = {
    WIZARD_NAMES: WIZARD_NAMES,
    WIZARD_FAMILY_NAMES: WIZARD_FAMILY_NAMES,
    FIREBALL_COLORS: FIREBALL_COLORS,
    WIZARD_EYE_COLORS: WIZARD_EYE_COLORS,
    WIZARD_COAT_COLORS: WIZARD_COAT_COLORS,
    MIN_NAME_LENGTH: MIN_NAME_LENGTH,
    MAX_NAME_LENGTH: MAX_NAME_LENGTH,
    wizardQuantity: wizardQuantity,
    getArrayRandElement: getArrayRandElement,
    setAttribute: setAttribute
  };
})();
