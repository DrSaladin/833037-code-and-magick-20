'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита'];
var WIZARD_FAMILYNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_EYESCOLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_HEAD = ['rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_HANDSCOLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)'];
var WIZARD_COATCOLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

document.querySelector('.setup-similar').classList.remove('hidden');

var wizardList = document.querySelector('.setup-similar-list');

var wizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var getArrayRandElement = function (arrey) {
  var randonElement = Math.floor(Math.random() * arrey.length);
  return arrey[randonElement];
};

var wizards = [
  {
    name: getArrayRandElement(WIZARD_NAMES),
    familyName: getArrayRandElement(WIZARD_FAMILYNAMES),
    coatColor: getArrayRandElement(WIZARD_COATCOLOR),
    headColor: getArrayRandElement(WIZARD_HEAD),
    eyesColor: getArrayRandElement(WIZARD_EYESCOLOR),
    handsColor: getArrayRandElement(WIZARD_HANDSCOLOR),
  },
  {
    name: getArrayRandElement(WIZARD_NAMES),
    familyName: getArrayRandElement(WIZARD_FAMILYNAMES),
    coatColor: getArrayRandElement(WIZARD_COATCOLOR),
    headColor: getArrayRandElement(WIZARD_HEAD),
    eyesColor: getArrayRandElement(WIZARD_EYESCOLOR),
    handsColor: getArrayRandElement(WIZARD_HANDSCOLOR),
  },
  {
    name: getArrayRandElement(WIZARD_NAMES),
    familyName: getArrayRandElement(WIZARD_FAMILYNAMES),
    coatColor: getArrayRandElement(WIZARD_COATCOLOR),
    headColor: getArrayRandElement(WIZARD_HEAD),
    eyesColor: getArrayRandElement(WIZARD_EYESCOLOR),
    handsColor: getArrayRandElement(WIZARD_HANDSCOLOR),
  },
  {
    name: getArrayRandElement(WIZARD_NAMES),
    familyName: getArrayRandElement(WIZARD_FAMILYNAMES),
    coatColor: getArrayRandElement(WIZARD_COATCOLOR),
    headColor: getArrayRandElement(WIZARD_HEAD),
    eyesColor: getArrayRandElement(WIZARD_EYESCOLOR),
    handsColor: getArrayRandElement(WIZARD_HANDSCOLOR),
  }
];

var renderWizard = function (wizard) {
  var wizardElement = wizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name + ' ' + wizard.familyName;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.headColor;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.eyesColor;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.handsColor;

  return wizardElement;
};

var closeButton = document.querySelector('.setup-close');
closeButton.onclick = function () {
  wizardWindow.classList.add('hidden');
};

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
