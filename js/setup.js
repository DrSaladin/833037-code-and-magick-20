'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита'];
var WIZARD_FAMILY_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_EYE_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

document.querySelector('.setup-similar').classList.remove('hidden');

var wizardList = document.querySelector('.setup-similar-list');

var wizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var getArrayRandElement = function (array) {
  var randomElement = Math.floor(Math.random() * array.length);
  return array[randomElement];
};

var wizards = [
  {
    name: getArrayRandElement(WIZARD_NAMES),
    familyName: getArrayRandElement(WIZARD_FAMILY_NAMES),
    coatColor: getArrayRandElement(WIZARD_COAT_COLORS),
    eyesColor: getArrayRandElement(WIZARD_EYE_COLORS),
  },
  {
    name: getArrayRandElement(WIZARD_NAMES),
    familyName: getArrayRandElement(WIZARD_FAMILY_NAMES),
    coatColor: getArrayRandElement(WIZARD_COAT_COLORS),
    eyesColor: getArrayRandElement(WIZARD_EYE_COLORS),
  },
  {
    name: getArrayRandElement(WIZARD_NAMES),
    familyName: getArrayRandElement(WIZARD_FAMILY_NAMES),
    coatColor: getArrayRandElement(WIZARD_COAT_COLORS),
    eyesColor: getArrayRandElement(WIZARD_EYE_COLORS),
  },
  {
    name: getArrayRandElement(WIZARD_NAMES),
    familyName: getArrayRandElement(WIZARD_FAMILY_NAMES),
    coatColor: getArrayRandElement(WIZARD_COAT_COLORS),
    eyesColor: getArrayRandElement(WIZARD_EYE_COLORS),
  }
];

var renderWizard = function (wizard) {
  var wizardElement = wizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name + ' ' + wizard.familyName;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var closeButton = document.querySelector('.setup-close');
closeButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  wizardWindow.classList.add('hidden');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    wizardWindow.classList.add('hidden');
  }
});

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));

}
wizardList.appendChild(fragment);

var wizardWindow = document.querySelector('.setup');
wizardWindow.classList.remove('hidden');
