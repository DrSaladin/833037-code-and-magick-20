'use strict';

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

document.querySelector('.setup-similar').classList.remove('hidden');

var openButton = document.querySelector('.setup-open');
var wizardSetup = document.querySelector('.setup');
var closeButton = document.querySelector('.setup-close');


var onPopupEscPress = function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    toggleWizardSetup();
  }
};

var onPopupEnterPress = function (evt) {
  if (evt.keyCode === 13) {
    toggleWizardSetup();
  }
};


var toggleWizardSetup = function () {
  wizardSetup.classList.toggle('hidden');
  if (wizardSetup.classList.contains('hidden')) {
    document.removeEventListener('keydown', onPopupEscPress);
  } else {
    document.addEventListener('keydown', onPopupEscPress);
  }
};


openButton.addEventListener('click', toggleWizardSetup);
openButton.addEventListener('keydown', onPopupEnterPress);

closeButton.setAttribute('tabindex', 0);
closeButton.addEventListener('click', toggleWizardSetup);
closeButton.addEventListener('keydown', onPopupEnterPress);

var formOpenIcon = document.querySelector('.setup-open-icon');
formOpenIcon.setAttribute('tabindex', 0);

var wizardCoatInput = document.querySelector('input[name = "coat-color"]');
var wizardCoat = document.querySelector('.wizard-coat');

var fireballColor = document.querySelector('.setup-fireball-wrap');
var fireball = document.querySelector('.setup-fireball');
var fireballInput = document.querySelector('input[name = "fireball-color"]');

var wizardEyes = document.querySelector('.wizard-eyes');
var wizardEyesInput = document.querySelector('input[name = "eyes-color"]');


var onCoatPress = function () {
  wizardCoat.style.fill = getArrayRandElement(WIZARD_COAT_COLORS);
  wizardCoatInput.value = wizardCoat.style.fill;
};

var onEyePress = function () {
  wizardEyes.style.fill = getArrayRandElement(WIZARD_EYE_COLORS);
  wizardEyesInput.value = wizardEyes.style.fill;
};

var onFireballPress = function () {
  fireballColor.style.backgroundColor = getArrayRandElement(FIREBALL_COLORS);
  fireballInput.value = fireballColor.style.backgroundColor;
};


var toggleElementEvents = function () {
  if (wizardSetup.classList.contains('.hidden')) {
    wizardCoat.removeEventListener('click', onCoatPress);
    fireball.removeEventListener('click', onFireballPress);
    wizardEyes.removeEventListener('click', onEyePress);
  } else {
    wizardCoat.addEventListener('click', onCoatPress);
    fireball.addEventListener('click', onFireballPress);
    wizardEyes.addEventListener('click', onEyePress);
  }
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
      name: getArrayRandElement(WIZARD_NAMES),
      familyName: getArrayRandElement(WIZARD_FAMILY_NAMES),
      coatColor: getArrayRandElement(WIZARD_COAT_COLORS),
      eyesColor: getArrayRandElement(WIZARD_EYE_COLORS),
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
for (var i = 0; i < createWizard(wizardQuantity).length; i++) {
  fragment.appendChild(renderWizard(createWizard(wizardQuantity)[i]));
}

wizardList.appendChild(fragment);

var setupForm = document.querySelector('.setup-wizard-form');
setupForm.setAttribute('action', 'https://javascript.pages.academy/code-and-magick');

var userAvatar = document.querySelector('input[name = "avatar"]');
userAvatar.setAttribute('accept', 'image/png, image/jpeg');

var userNameInput = document.querySelector('.setup-user-name');
userNameInput.setAttribute('minlength', MIN_NAME_LENGTH);


userNameInput.addEventListener('invalid', function () {
  if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
});

userNameInput.addEventListener('input', function () {
  var valueLength = userNameInput.value.length;

  if (valueLength < MIN_NAME_LENGTH) {
    userNameInput.setCustomValidity('Ещё ' + (MIN_NAME_LENGTH - valueLength) + ' симв.');
  } else if (valueLength > MAX_NAME_LENGTH) {
    userNameInput.setCustomValidity('Удалите лишние ' + (valueLength - MAX_NAME_LENGTH) + ' симв.');
  } else {
    userNameInput.setCustomValidity('');
  }
});
