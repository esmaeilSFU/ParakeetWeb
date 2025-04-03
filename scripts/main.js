const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

PanZoom(".canvas", { minScale: 0.2, maxScale: 3, increment: 0.1, liner: true });

let slider_Xcount = document.querySelector(".Xcount");
let slider_Ycount = document.querySelector(".Ycount");
let slider_cellSize = document.querySelector(".cellSize");
let select_tilings = document.querySelector(".tilingTypes");
let select_genotype = document.querySelector(".genoTypes");
let check_subdivQuad = document.querySelector(".subdivideQuad");
let check_random = document.querySelector(".randomSeam");
let slider_Param1 = document.querySelector(".param1");
let slider_Param2 = document.querySelector(".param2");
let slider_offsetCount = document.querySelector(".offsetCount");
let slider_offsetDistance = document.querySelector(".offsetDistance");
let check_showGrid = document.querySelector(".showGrid");
let slider_thickness = document.querySelector(".thick");

let output_Xcount = document.querySelector(".Xvalue");
let output_Ycount = document.querySelector(".Yvalue");
let output_cellSize = document.querySelector(".cellSizeValue");
let output_Param1 = document.querySelector(".P1value");
let output_Param2 = document.querySelector(".P2value");
let output_offsetCount = document.querySelector(".ofCntValue");
let output_offsetDistance = document.querySelector(".ofDstValue");
let output_thick = document.querySelector(".thickValue");

let Xposition = 50;
let Yposition = 50;
let XCount = 7;
let YCount = 7;
let tilingType = 2;
let cellSize = 100;
let subdQuad = false;
let randomSeam = false;
let genoType = 15;
let parameter1 = 0.49;
let parameter2 = 0.49;
let offsetCount = 0;
let offsetDistance = 5;
let showGrid = true;
let thick = 2;

const runF = function () {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  t1 = new TilingCombination(
    [Xposition, Yposition],
    XCount,
    YCount,
    tilings[tilingType],
    cellSize,
    subdQuad,
    randomSeam,
    gynoTypes[genoType],
    parameter1,
    parameter2,
    showGrid,
    thick
  );
  t1.drawTiles();

  var offCl = [];
  for (let j = 0; j <= offsetCount; j++) {
    offCl = offCl.concat(
      lightening(
        offset(polylineToClipper(t1.drawTiles()[1]), j * offsetDistance),
        0.2
      )
    );
  }

  var difP = clipperToPolyline(offCl);

  for (var i = 0; i < difP.length; i++) {
    ctx.globalAlpha = 1;
    ctx.lineWidth = 1;
    ctx.strokeStyle = "black";
    polyLine(difP[i], "black", true);
  }
};

runF();
output_Xcount.innerHTML = XCount;
output_Ycount.innerHTML = YCount;
output_cellSize.innerHTML = cellSize;
output_Param1.innerHTML = parameter1;
output_Param2.innerHTML = parameter2;
output_offsetCount.innerHTML = offsetCount;
output_offsetDistance.innerHTML = offsetDistance;

slider_Xcount.oninput = function () {
  output_Xcount.innerHTML = Number(this.value);
  XCount = Number(this.value);
  runF();
};
slider_Ycount.oninput = function () {
  output_Ycount.innerHTML = Number(this.value);
  YCount = Number(this.value);
  runF();
};

slider_cellSize.oninput = function () {
  output_cellSize.innerHTML = Number(this.value);
  cellSize = Number(this.value);
  runF();
};

select_tilings.oninput = function () {
  tilingType = Number(this.value);
  runF();
};

select_genotype.oninput = function () {
  genoType = Number(this.value);
  runF();
};

check_subdivQuad.oninput = function () {
  subdQuad = !subdQuad;
  runF();
};

check_random.oninput = function () {
  randomSeam = !randomSeam;
  runF();
};

slider_Param1.oninput = function () {
  output_Param1.innerHTML = Number(this.value);
  parameter1 = Number(this.value);
  runF();
};
slider_Param2.oninput = function () {
  output_Param2.innerHTML = Number(this.value);
  parameter2 = Number(this.value);
  runF();
};

slider_offsetCount.oninput = function () {
  output_offsetCount.innerHTML = Number(this.value);
  offsetCount = Number(this.value);
  runF();
};
slider_offsetDistance.oninput = function () {
  output_offsetDistance.innerHTML = Number(this.value);
  offsetDistance = Number(this.value);
  runF();
};

check_showGrid.oninput = function () {
  showGrid = !showGrid;
  runF();
};

slider_thickness.oninput = function () {
  output_thick.innerHTML = Number(this.value);
  thick = Number(this.value);
  runF();
};
