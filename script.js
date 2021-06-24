function shuffle(array) {
  var currentIndex = array.length,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

speed = 0;
min = 1;
max = 200;

const arr = Array(max - min + 1)
  .fill(0)
  .map((_, i) => i + min);
shuffle(arr);

var myCanvas;
var stage;
var ctx;

function init() {
  myCanvas = document.getElementById("demoCanvas");
  ctx = myCanvas.getContext("2d");

  for (var i = min; i <= max; i++) {
    ctx.fillRect(i * 2, 0, 2, arr[i]);
  }
}

function sortGraphic(i, j) {
  ctx.clearRect(j * 2, 0, 2, arr[j]);
  ctx.clearRect((j + 1) * 2, 0, 2, arr[j + 1]);

  if (arr[j] > arr[j + 1]) {
    temp_ele = arr[j];
    arr[j] = arr[j + 1];
    arr[j + 1] = temp_ele;
  }
  ctx.fillRect(j * 2, 0, 2, arr[j]);
  ctx.fillRect((j + 1) * 2, 0, 2, arr[j + 1]);
  if (i > max - min + 1) {
    return;
  }

  if (j >= max - min - i) {
    j = -1;
    i++;
  }
  setTimeout(function () {
    sortGraphic(i, j + 1);
  }, speed);
}
