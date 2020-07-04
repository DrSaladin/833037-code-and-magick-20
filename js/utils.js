'use strict';

(function () {
  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита'];
  var WIZARD_FAMILY_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var MIN_NAME_LENGTH = 2;
  var MAX_NAME_LENGTH = 25;

  var wizardQuantity = 4;

  window.setAttribute = function (element, attrTitle, attrData) {
    element.setAttribute(attrTitle, attrData);
  };

  window.getRandomElement = function (array) {
    var randomElementIndex = Math.floor(Math.random() * array.length);
    return array[randomElementIndex];
  };

  window.utils = {
    WIZARD_NAMES: WIZARD_NAMES,
    WIZARD_FAMILY_NAMES: WIZARD_FAMILY_NAMES,
    FIREBALL_COLORS: FIREBALL_COLORS,
    MIN_NAME_LENGTH: MIN_NAME_LENGTH,
    MAX_NAME_LENGTH: MAX_NAME_LENGTH,
    wizardQuantity: wizardQuantity,
  };
})();
