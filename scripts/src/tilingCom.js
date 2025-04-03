class TilingCombination {
  constructor(
    startP = [0, 0],
    x_num = 5,
    y_num = 5,
    cell,
    size = 100,
    msqb = false,
    randomSeam = false,
    gt,
    p1 = 0.5,
    p2 = 0.5,
    showGird = true,
    thick = 1
  ) {
    this.startPX = startP[0];
    this.startPY = startP[1];
    this.x_num = x_num;
    this.y_num = y_num;
    this.cell = new cell(size, startP);
    this.size = size;
    this.gt = gt;
    this.p1 = p1;
    this.p2 = p2;
    this.msqb = msqb;
    this.randomSeam = randomSeam;
    this.showGird = showGird;
    this.thick = thick;
  }

  drawTiles() {
    var pls = [];
    var bsGrids = [];

    for (var i = 0; i < this.x_num; i++) {
      for (var j = 0; j < this.y_num; j++) {
        var vector = [
          i * this.cell.translationX[i % this.cell.translationX.length][0] +
            j * this.cell.translationY[0],
          1 * this.cell.translationX[i % this.cell.translationX.length][1] +
            j * this.cell.translationY[1],
        ];

        var randCells = [];
        var newCells = [];
        var newRandCells = [];

        //////
        if (this.msqb) {
          for (var l in this.cell.lines) {
            var pline = this.cell.lines[l];
            newCells = newCells.concat(mirroredSubdivideQuad(pline));
          }
        } else {
          var newCells = this.cell.lines;
        }

        //////
        if (this.randomSeam) {
          for (let k = 0; k < newCells.length; k++) {
            Math.myRandom = Math.seed(
              0,
              newCells[k].length - 1,
              100 * i + 10 * j + k
            );
            var rn1 = Math.myRandom();
            var randomedSeamCurves = circularShift(newCells[k], rn1);
            randCells = randCells.concat([randomedSeamCurves]);
          }
        } else {
          var randCells = newCells;
        }

        for (var m = 0; m < randCells.length; m++) {
          newRandCells[m] = [];
          for (var n = 0; n < randCells[m].length; n++) {
            newRandCells[m][n] = [];
            newRandCells[m][n] = newRandCells[m][n].concat([
              randCells[m][n][0] + vector[0],
              randCells[m][n][1] + vector[1],
            ]);
          }
        }

        ///////////////////////////Drawing base Grid

        if (showGrid) ctx.globalAlpha = 0.01;
        else ctx.globalAlpha = 0.75;

        ctx.lineWidth = 1;
        ctx.setLineDash([1, 1]);
        for (var o = 0; o < newRandCells.length; o++) {
          polyLine(newRandCells[o], "red", true);
          bsGrids = bsGrids.concat([newRandCells[o]]);
        }

        ///////////////////Drawing Curves | stoing curves for offseting
        if (this.gt != undefined) {
          for (var pli in newRandCells) {
            ctx.globalAlpha = 1;
            ctx.setLineDash([]);

            if (this.thick == 1) ctx.globalAlpha = 0.5;
            if (this.thick < 1) ctx.globalAlpha = 0;
            pls = pls.concat(
              this.gt(newRandCells[pli], this.thick, this.p1, this.p2)
            );
          }
        }
      }
    }
    return [bsGrids, pls];
  }
}
