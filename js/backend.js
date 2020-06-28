'use strict';

(function () {
  window.save = function (data, onLoad, onError) {
    var URL = 'https://javascript.pages.academy/code-and-magick';

    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      onLoad(xhr.response);
    });

    xhr.open('POST', URL);
    xhr.send(data);
  };

  window.load = function (onLoad, onError) {
    var URL = 'https://javascript.pages.academy/code-and-magick/data';
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.open('GET', URL);

    xhr.addEventListener('load', function () {
      onLoad(xhr.response);
    });

    xhr.send();
  };

})();

