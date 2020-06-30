'use strict';

(function () {
  window.save = function (data, onLoad, onError) {
    var URL = 'https://javascript.pages.academy/code-and-magick';
    var StatusCode = {
      OK: 200,
    };
    var TIMEOUT_IN_MS = 10000;

    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === StatusCode.OK) {
        onLoad(xhr.response);
        console.log('save.ok');
      } else {
        onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
        console.log('save.fail');
      }
    });
    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });

    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    xhr.timeout = TIMEOUT_IN_MS;

    xhr.open('POST', URL);
    xhr.send(data);
  };

  window.load = function (onLoad, onError) {
    var URL = 'https://javascript.pages.academy/code-and-magick/data';
    var StatusCode = {
      OK: 200,
    };
    var TIMEOUT_IN_MS = 10000;

    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === StatusCode.OK) {
        onLoad(xhr.response);
        console.log('load.ok');
      } else {
        onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
        console.log('load.fail');
      }
    });
    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });
    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    xhr.timeout = TIMEOUT_IN_MS;

    xhr.open('GET', URL);
    xhr.send();
  };

})();
