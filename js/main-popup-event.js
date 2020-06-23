'use strict';


(function () {

  var wizardSetup = document.querySelector('.setup');

  var closeButton = document.querySelector('.setup-close');
  var openButton = document.querySelector('.setup-open');


  document.querySelector('.setup-similar').classList.remove('hidden');

  var wizardSetupDragHandle = document.querySelector('.upload');
  wizardSetupDragHandle.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startPoint = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      dragged = true;

      var shift = {
        x: startPoint.x - moveEvt.clientX,
        y: startPoint.y - moveEvt.clientY
      };


      startPoint = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };


      wizardSetup.style.top = (wizardSetup.offsetTop - shift.y) + 'px';
      wizardSetup.style.left = (wizardSetup.offsetLeft - shift.x) + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (clickEvt) {
          clickEvt.preventDefault();
          wizardSetupDragHandle.removeEventListener('click', onClickPreventDefault);
        };
        wizardSetupDragHandle.addEventListener('click', onClickPreventDefault);
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });


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
    wizardSetup.style.top = '80px';
    wizardSetup.style.left = '50%';
    if (wizardSetup.classList.contains('hidden')) {
      document.removeEventListener('keydown', onPopupEscPress);
    } else {
      document.addEventListener('keydown', onPopupEscPress);
    }
  };


  openButton.addEventListener('click', toggleWizardSetup);
  openButton.addEventListener('keydown', onPopupEnterPress);

  window.utility.setAttribute(closeButton, 'tabindex', 0);
  closeButton.addEventListener('click', toggleWizardSetup);
  closeButton.addEventListener('keydown', onPopupEnterPress);

  var formOpenIcon = document.querySelector('.setup-open-icon');
  window.utility.setAttribute(formOpenIcon, 'tabindex', 0);

})();
