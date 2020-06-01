'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var TEXT_HEIGHT = 16;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var BLACK_COLOR = '#000';
var WHITE_COLOR = '#fff';
var TITLE_X = 130;
var TITLE_Y = 40;
var TITLE_GAP = 16;
var BOTTOM_INDENT = 80;
var barHeight = CLOUD_HEIGHT - TEXT_HEIGHT - TITLE_GAP - TEXT_HEIGHT - GAP - BOTTOM_INDENT;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderTitle = function (ctx, x, y, color, text) {
  ctx.fillStyle = color;
  ctx.fillText(text, x, y);
  ctx.font = '16px PT Mono';
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

var getRandomNumber = function (min, max) {
  return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min))) + Math.ceil(min);
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, WHITE_COLOR);

  renderTitle(ctx, TITLE_X, TITLE_Y, BLACK_COLOR, 'Ура вы победили!');
  renderTitle(ctx, TITLE_X, TITLE_Y + TITLE_GAP, BLACK_COLOR, 'Список результатов:');

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {

    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      ctx.fillRect(CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i, 240, BAR_WIDTH, barHeight * -1 * times[i] / maxTime);
    } else {
      ctx.fillStyle = 'hsl(235, ' + getRandomNumber(1, 100) + '%,' + ' 27%)';
      ctx.fillRect(CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i, 240, BAR_WIDTH, barHeight * -1 * times[i] / maxTime);
    }

    ctx.fillStyle = BLACK_COLOR;
    ctx.fillText(players[i], CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i, 260);
    ctx.fillText(Math.round(times[i]), CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i, CLOUD_HEIGHT - (barHeight * times[i] / maxTime) - 40);
  }
};
