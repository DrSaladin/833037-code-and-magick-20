'use strict';

(function () {
  var COAT_COLORS = [
    'rgb(146, 100, 161)',
    'rgb(215, 210, 55)',
    'rgb(241, 43, 107)',
    'rgb(101, 137, 164)',
    'rgb(0, 0, 0)',
    'rgb(215, 210, 55)',
    'rgb(56, 159, 117)',
    'rgb(241, 43, 107)'
  ];

  var EYES_COLORS = [
    'red',
    'orange',
    'yellow',
    'green',
    'lightblue',
    'blue',
    'purple'
  ];

  var FIREBALL_COLORS = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];


  var wizardSetup = document.querySelector('.setup');
  var inputWizardCoat = wizardSetup.querySelector('input[name = "coat-color"]');
  var inputWizardEyes = wizardSetup.querySelector('input[name = "eyes-color"]');
  var inputFireball = wizardSetup.querySelector('input[name = "fireball-color"]');


  var wizard = {
    onEyesChange: function () { },
    onCoatChange: function () { },
    onFireballChange: function () { }
  };

  var getRandomElement = function (array) {
    var randomElementIndex = Math.floor(Math.random() * array.length);
    return array[randomElementIndex];
  };

  var wizardElement = document.querySelector('.setup-wizard');

  var wizardCoatElement = wizardElement.querySelector('.wizard-coat');
  wizardCoatElement.addEventListener('click', function () {
    var newColor = getRandomElement(COAT_COLORS);
    wizardCoatElement.style.fill = newColor;
    inputWizardCoat.value = newColor;
    wizard.onCoatChange(newColor);
  });

  var wizardEyesElement = wizardElement.querySelector('.wizard-eyes');
  wizardEyesElement.addEventListener('click', function () {
    var newColor = getRandomElement(EYES_COLORS);
    wizardEyesElement.style.fill = newColor;
    inputWizardEyes.value = newColor;
    wizard.onEyesChange(newColor);
  });

  var wizardFireballElement = document.querySelector('.setup-fireball-wrap');
  wizardFireballElement.addEventListener('click', function () {
    var newColor = getRandomElement(FIREBALL_COLORS);
    wizardFireballElement.style.background = newColor;
    inputFireball.value = newColor;
    wizard.onFireballChange(newColor);
  });

  return (window.wizard = wizard);
})();
