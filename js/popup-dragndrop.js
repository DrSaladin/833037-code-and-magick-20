'use strict';

(function () {

  var wizardSetup = document.querySelector('.setup');

  var wizardSetupDragHandle = wizardSetup.querySelector('.upload');
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

})();
