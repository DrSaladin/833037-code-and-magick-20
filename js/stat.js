'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 15;
var TEXT_WIDTH = 50;
var TEXT_HEIGHT = 16;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var MAXHEIGHT = 150;
var BLACKCOLOR = '#000';
var TITLE_X = 130;
var TITLE_Y = 40;
var TITLE_GAP = 16;
var BOTTOM_IDENT = 80;
var BAR_HEIGHT = CLOUD_HEIGHT - TEXT_HEIGHT - TITLE_GAP - TEXT_HEIGHT - GAP - BOTTOM_IDENT;

var renderCloud = function (ctx, x, y, fillcolor, ) {
  ctx.fillStyle = fillcolor;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderTitle = function (ctx, x, y, fill, text) {
  ctx.fillStyle = fill;
  ctx.fillText(text, x, y);
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

var sortingNames = function (players) {
  for (var begin = 0; begin <= players.length - 2; begin++) {
    var firsName = players[begin];

    for (var j = begin + 1; j <= players.length - 1; j++) {
      if (players[j].indexOf("Вы") !== -1) {
        firsName = players[j];
        var swap = players[begin];
        players[begin] = firsName;
        players[j] = swap;
        break;
      };
    };
  };

  return players;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  renderTitle(ctx, TITLE_X, TITLE_Y, BLACKCOLOR, 'Ура вы победили!');
  renderTitle(ctx, TITLE_X, TITLE_Y + TITLE_GAP, BLACKCOLOR, 'Список результатов:');

  var colors = ['rgba(255, 0, 0, 1)', 'rgba(100, 20, 0, 1)', 'rgba(340, 0, 30, 1)', 'rgba(280, 10, 50, 1)'];
  ctx.fillStyle = '#000';

  var maxTime = getMaxElement(times);
  var players = sortingNames(players);

 for (var i = 0; i < players.length; i++) {
  var colorsIndex = colors[i];

  ctx.fillStyle = colorsIndex;
  ctx.fillRect(CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i, 240, BAR_WIDTH, BAR_HEIGHT * - 1 * times[i] / maxTime);
  ctx.fillStyle = '#000';
  ctx.fillText(players[i], CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i, 250);
  ctx.fillText(Math.round(times[i]), CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i, CLOUD_HEIGHT - (BAR_HEIGHT * times[i] / maxTime) - 50);
  colorsIndex++;
};
};
