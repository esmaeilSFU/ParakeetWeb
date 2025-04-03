/////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////

var gtA = function (pline, lnWidth, ratio) {
  ctx.lineWidth = lnWidth;
  var CntPt = centroid(pline);
  var Pts = [];
  var Pls = [[]];
  for (var i = 0; i < pline.length; i++) {
    Pls[i] = [];
    var Avpt = new avPt(pline[i], pline[(i + 1) % pline.length], 0.5);
    Pts.push(Avpt);
    Pts.push(avPt(Avpt, CntPt, ratio));
    Pts.push(avPt(pline[i], CntPt, ratio));
    Pts.push(centroid(pline));

    polyLine(Pts, "black", false); ///////////////

    Pls[i] = Pts;
    ctx.strokeStyle = "black";
    Pts = [];
  }
  return Pls;
};
var gtB = function (pline, lnWidth, ratio) {
  ctx.lineWidth = lnWidth;
  var CntPt = centroid(pline);
  var Pts = [];
  var Pls = [[]];
  for (var i = 0; i < pline.length; i++) {
    Pls[i] = [];
    var Avpt = new avPt(pline[i], pline[(i + 1) % pline.length], 0.5);

    Pts.push(pline[i]);
    Pts.push(avPt(pline[i], CntPt, ratio));
    Pts.push(avPt(Avpt, CntPt, ratio));
    Pts.push(centroid(pline));

    polyLine(Pts, "black", false); ///////////////

    Pls[i] = Pts;
    ctx.strokeStyle = "black";
    Pts = [];
  }
  return Pls;
};

var gtC = function (pline, lnWidth, ratio) {
  ctx.lineWidth = lnWidth;
  var CntPt = centroid(pline);
  var Pls = [[]];
  var Pts = [];
  for (var i = 0; i < pline.length; i++) {
    Pls[i] = [];
    var Avpt = new avPt(pline[i], pline[(i + 1) % pline.length], 0.5);

    Pts.push(pline[i]);
    Pts.push(avPt(Avpt, CntPt, ratio));
    Pts.push(centroid(pline));

    polyLine(Pts, "black", false); ///////////////

    Pls[i] = Pts;
    ctx.strokeStyle = "black";
    Pts = [];
  }
  return Pls;
};

var gtD = function (pline, lnWidth, ratio) {
  ctx.lineWidth = lnWidth;
  var CntPt = centroid(pline);
  var Pls = [[]];
  var Pts = [];
  for (var i = 0; i < pline.length; i++) {
    Pls[i] = [];
    var Avpt = new avPt(pline[i], pline[(i + 1) % pline.length], 0.5);

    Pts.push(Avpt);
    Pts.push(avPt(pline[i], CntPt, ratio));
    Pts.push(centroid(pline));

    polyLine(Pts, "black", false); ///////////////

    Pls[i] = Pts;
    ctx.strokeStyle = "black";
    Pts = [];
  }
  return Pls;
};

var gtE = function (pline, lnWidth, ratio) {
  var Pls = [[]];
  ctx.lineWidth = lnWidth;
  var CntPt = centroid(pline);
  var Pts = [];
  for (var i = 0; i < pline.length; i++) {
    Pls[i] = [];
    var Avpt = new avPt(pline[i], pline[(i + 1) % pline.length], 0.5);
    var Avpt1 = new avPt(pline[i], Avpt, ratio);

    Pts.push(Avpt1);
    Pts.push(avPt(pline[i], CntPt, ratio));
    Pts.push(centroid(pline));

    polyLine(Pts, "black", false); ///////////////

    Pls[i] = Pts;
    ctx.strokeStyle = "black";
    Pts = [];
  }
  return Pls;
};

var gtF = function (pline, lnWidth, ratio) {
  var Pls = [[]];
  ctx.lineWidth = lnWidth;

  var CntPt = centroid(pline);
  var Pts = [];
  for (var i = 0; i < pline.length; i++) {
    Pls[i] = [];
    var Avpt = new avPt(pline[i], pline[(i + 1) % pline.length], 0.5);
    var Avpt1 = new avPt(Avpt, pline[(i + 1) % pline.length], ratio);
    Pts.push(Avpt1);
    Pts.push(avPt(Avpt, CntPt, ratio));
    Pts.push(centroid(pline));

    polyLine(Pts, "black", false); ///////////////
    Pls[i] = Pts;
    ctx.strokeStyle = "black";
    Pts = [];
  }
  return Pls;
};

var gtG = function (pline, lnWidth, ratio) {
  ctx.lineWidth = lnWidth;

  var Pls = [[]];
  var CntPt = centroid(pline);
  var Pts = [];
  for (var i = 0; i < pline.length; i++) {
    Pls[i] = [];
    var Avpt = new avPt(pline[i], pline[(i + 1) % pline.length], 0.5);
    if (i % 2 == 0) {
      var Avpt1 = new avPt(Avpt, pline[[i + 1] % pline.length], ratio);
    } else {
      var Avpt1 = new avPt(Avpt, pline[i], ratio);
    }

    Pts.push(Avpt1);
    Pts.push(avPt(Avpt, CntPt, ratio));
    Pts.push(centroid(pline));

    polyLine(Pts, "black", false); ///////////////
    Pls[i] = Pts;
    ctx.strokeStyle = "black";
    Pts = [];
  }
  return Pls;
};
var gtH = function (pline, lnWidth, ratio) {
  ctx.lineWidth = lnWidth;
  var Pls = [[]];
  var CntPt = centroid(pline);
  var Pts = [];
  for (var i = 0; i < pline.length; i++) {
    Pls[i] = [];
    var Avpt = new avPt(pline[i], pline[(i + 1) % pline.length], ratio);

    Pts.push(Avpt);
    Pts.push(avPt(pline[i], CntPt, ratio));
    Pts.push(CntPt);

    polyLine(Pts, "black", false); ///////////////
    Pls[i] = Pts;
    ctx.strokeStyle = "black";
    Pts = [];
  }
  return Pls;
};

var gtI = function (pline, lnWidth, ratio) {
  var Pls = [[]];
  if (pline.length % 2 == 0) {
    ctx.lineWidth = lnWidth;
    var CntPt = centroid(pline);
    var Pts = [];
    for (var i = 0; i < pline.length / 2; i++) {
      Pls[i] = [];
      var pt1 = new avPt(pline[i], pline[(i + 1) % pline.length], ratio);
      var pt2 = new avPt(
        pline[(pline.length / 2 + i) % pline.length],
        pline[(pline.length / 2 + i + 1) % pline.length],
        ratio
      );
      Pts.push(pt1);
      Pts.push(pt2);
      polyLine(Pts, "black", false); ///////////////
      Pls[i] = Pts;
      Pts = [];
    }
  }
  return Pls;
};

var gtJ = function (pline, lnWidth, ratio) {
  var Pls = [];
  var Pts = [];
  ctx.lineWidth = lnWidth;
  Pts.push([
    avPt(pline[0], pline[1], ratio)[0],
    avPt(pline[0], pline[1], ratio)[1],
  ]);
  for (var i = 1; i < pline.length; i++) {
    Pts.push([
      avPt(pline[i], pline[(i + 1) % pline.length], ratio)[0],
      avPt(pline[i], pline[(i + 1) % pline.length], ratio)[1],
    ]);
  }
  Pts.push([
    avPt(pline[0], pline[1], ratio)[0],
    avPt(pline[0], pline[1], ratio)[1],
  ]);

  polyLine(Pts, "black", false); ///////////////
  Pls = [Pts];
  return Pls;
};

var gtK = function (pline, lnWidth, ratio) {
  var Pls = [[]];
  ctx.lineWidth = lnWidth;

  var z = math.cross(
    [pline[1][0] - pline[0][0], pline[1][1] - pline[0][1], 0],
    [pline[2][0] - pline[1][0], pline[2][1] - pline[1][1], 0]
  )[2];
  var clockWise = z > 0;
  if (!clockWise) {
    ratio = -ratio;
  }

  var pline2 = [];
  var pline3 = [];
  var pline4 = [];

  //////rotating & extending all lines of the polygon ;
  for (var i = 0; i < pline.length; i++) {
    var pt1 = pline[i];
    var pt2 = pline[(i + 1) % pline.length];
    var pt3 = geometric.pointRotate(pt2, 90 * ratio, pt1);
    var exLn = extendLine([pt1, pt3], 0.85, 0);
    ctx.strokeStyle = "black";
    pline3.push(exLn);
  }

  ////// all lines of the polygon ;
  for (var i = 0; i < pline3.length; i++) {
    Pls[i] = [];
    var pt1_0 = pline3[i][0];
    var pt1_1 = pline3[i][1];
    var pt2_0 = pline3[(i + 1) % pline.length][0];
    var pt2_1 = pline3[(i + 1) % pline.length][1];

    var pt3 = math.intersect(pt1_0, pt1_1, pt2_0, pt2_1);
    pline4.push(pline3[i][0]);
    pline4.push(pt3);

    polyLine(pline4, "black", false); ///////////////
    Pls[i] = pline4;
    pline4 = [];
  }

  Pline3 = [];
  return Pls;
};

var gtL = function (pline, lnWidth, ratio1, ratio2) {
  var Pls = [[]];
  ctx.lineWidth = lnWidth;

  var z = math.cross(
    [pline[1][0] - pline[0][0], pline[1][1] - pline[0][1], 0],
    [pline[2][0] - pline[1][0], pline[2][1] - pline[1][1], 0]
  )[2];
  var clockWise = z > 0;
  if (!clockWise) {
    ratio2 = -ratio2;
  }

  var cp = centroid(pline);
  var pline2 = [];
  var pline3 = [];

  //////rotating
  for (var i = 0; i < pline.length; i++) {
    var midPt = new avPt(pline[i], pline[(i + 1) % pline.length], 0.5);
    var scPt = new avPt(midPt, cp, ratio1);
    var pt1 = pline[i];
    var pt2 = pline[(i + 1) % pline.length];
    var rPt = geometric.pointRotate(scPt, ratio2 * 90, cp);

    ctx.strokeStyle = "black";
    pline2.push(cp);
    pline2.push(rPt);
    pline2.push(pt2);
    polyLine(pline2, "black", false);
    Pls = Pls.concat([pline2]);

    pline3.push(midPt);
    pline3.push(rPt);
    polyLine(pline3, "black", false);
    Pls = Pls.concat([pline3]);

    pline2 = [];
    pline3 = [];
  }
  return Pls;
};

var gtM = function (pline, lnWidth, ratio) {
  var Pls = [[]];
  ctx.lineWidth = lnWidth;
  var cp = centroid(pline);
  var pline2 = [];

  for (var i = 0; i < pline.length; i += 2) {
    var pt1 = new avPt(pline[i], pline[(i + 1) % pline.length], ratio);
    var pt2 = pline[(i + 1) % pline.length];
    var pt3 = pline[(i + 2) % pline.length];
    var pt4 = new avPt(
      pline[(i + 2) % pline.length],
      pline[(i + 3) % pline.length],
      ratio
    );

    pline2.push(pt1);
    pline2.push(pt2);
    pline2.push(pt3);
    pline2.push(pt4);
    pline2.push(cp);

    polyLine(pline2, "black", false);
    Pls = Pls.concat([pline2]);
    pline2 = [];
  }
  return Pls;
};

var gtN = function (pline, lnWidth, ratio1, ratio2) {
  /////////////********************* */

  ctx.lineWidth = lnWidth;

  var cp = centroid(pline);
  var index = Math.floor(remap(ratio2, 0, 1, 0, pline.length - 1));
  var pt1 = avPt(pline[index], pline[(index + 1) % pline.length], 0.5);
  var pt2 = avPt(pt1, cp, 1 - ratio1);

  for (var i = 0; i < pline.length; i++) {
    if (i != index) {
      var pt4 = new avPt(pline[i], pline[(i + 1) % pline.length], 0.5);
      var pt3 = avPt(cp, pt4, ratio1);
      ctx.beginPath();
      ctx.moveTo(pt1[0], pt1[1]);
      ctx.bezierCurveTo(pt2[0], pt2[1], pt3[0], pt3[1], pt4[0], pt4[1]);

      ctx.stroke();
    }
  }
};

var gtO = function (pline, lnWidth, ratio) {
  //////////////************************** */

  var Pls = [[]];
  ctx.lineWidth = lnWidth;
  var cp = centroid(pline);

  for (var i = 0; i < pline.length; i++) {
    var pt1 = pline[i];

    var pt2 = new avPt(pt1, cp, 0.5);

    var v1 = [
      pline[(i + 1) % pline.length][0] - pline[i][0],
      pline[(i + 1) % pline.length][1] - pline[i][1],
    ];
    var pt3 = [pt2[0] + v1[0] * ratio, pt2[1] + v1[1] * ratio];
    ctx.beginPath();
    ctx.moveTo(pt1[0], pt1[1]);
    ctx.quadraticCurveTo(pt3[0], pt3[1], cp[0], cp[1]);
    ctx.strokeStyle = "black";
    ctx.stroke();
  }
  return pls;
};

var starPattern1 = function (pline, lnWidth, ratio1, ratio2) {
  ctx.lineWidth = lnWidth;

  if (ratio1 < 0.00001) {
    ratio1 = 0.00001;
  }
  if (ratio1 > 0.99999) {
    ratio1 = 0.99999;
  }

  if (ratio2 < 0.00001) {
    ratio2 = 0.00001;
  }
  if (ratio2 > 0.99999) {
    ratio2 = 0.99999;
  }

  var z = math.cross(
    [pline[1][0] - pline[0][0], pline[1][1] - pline[0][1], 0],
    [pline[2][0] - pline[1][0], pline[2][1] - pline[1][1], 0]
  )[2];
  var clockWise = z > 0;
  var cw;
  if (clockWise) {
    cw = +1;
  } else {
    cw = -1;
  }

  var pline2 = [];
  var pline3 = [];
  var pt1;
  var pt2;
  var extPt2;

  for (var i = 0; i < pline.length; i++) {
    var midPt = new avPt(pline[i], pline[(i + 1) % pline.length], 0.5);
    pt1 = new avPt(pline[i], midPt, ratio2);
    pt2 = geometric.pointRotate(pline[i], ratio1 * 90 * cw, pt1);
    extPt2 = extendLine([pt1, pt2], 4, 0)[1];
    pline2.push([pt1, extPt2]);

    pt1 = new avPt(pline[(i + 1) % pline.length], midPt, ratio2);
    pt2 = geometric.pointRotate(
      pline[(i + 1) % pline.length],
      ratio1 * -90 * cw,
      pt1
    );
    extPt2 = extendLine([pt1, pt2], 4, 0)[1];
    pline2.push([pt1, extPt2]);
  }

  var a = 1; //////////////////////////additional parameter 1,2,3
  var b = 2 * a + 1;

  var Pls = [];
  for (var i = b; i < pline2.length + b; i++) {
    var pt1_0 = pline2[i % pline2.length][0];
    var pt1_1 = pline2[i % pline2.length][1];
    var pt2_0;
    var pt2_1;

    if (i % 2 == 0) {
      pt2_0 = pline2[(i + b) % pline2.length][0];
      pt2_1 = pline2[(i + b) % pline2.length][1];
    } else {
      pt2_0 = pline2[(i - b) % pline2.length][0];
      pt2_1 = pline2[(i - b) % pline2.length][1];
    }
    var pt3 = math.intersect(pt1_0, pt1_1, pt2_0, pt2_1);

    pline3 = [pt1_0, pt3];
    ctx.strokeStyle = "black";
    polyLine(pline3, "black", false);
    Pls = Pls.concat([pline3]);

    pline3 = [];
  }
  return Pls;
};

var starPattern2 = function (pline, lnWidth, ratio1, ratio2) {
  ctx.lineWidth = lnWidth;

  if (ratio1 < 0.00001) {
    ratio1 = 0.00001;
  }
  if (ratio1 > 0.99999) {
    ratio1 = 0.99999;
  }

  if (ratio2 < 0.00001) {
    ratio2 = 0.00001;
  }
  if (ratio2 > 0.99999) {
    ratio2 = 0.99999;
  }

  var cp = centroid(pline);

  var z = math.cross(
    [pline[1][0] - pline[0][0], pline[1][1] - pline[0][1], 0],
    [pline[2][0] - pline[1][0], pline[2][1] - pline[1][1], 0]
  )[2];
  var clockWise = z > 0;
  var cw;
  if (clockWise) {
    cw = +1;
  } else {
    cw = -1;
  }

  var pline2 = [];
  var pline3 = [];
  var pt1;
  var pt2;
  var pt3;
  var pt4;

  var s = 0.2; //////////////////////////additional parameter 0-1
  var space = 0.6; //////////////////////////additional parameter 0-1
  var size = distance2P(pline[0], pline[1]) * s;

  for (var i = 0; i < pline.length; i++) {
    var midPt = new avPt(pline[i], pline[(i + 1) % pline.length], 0.5);
    pt1 = new avPt(pline[i], midPt, space);
    pt2 = geometric.pointRotate(
      pline[(i + 1) % pline.length],
      ratio1 * 90 * cw,
      pt1
    );
    var size1 = distance2P(pt1, pt2);
    var v1 = [
      ((pt2[0] - pt1[0]) / size1) * size,
      ((pt2[1] - pt1[1]) / size1) * size,
    ];
    pt3 = [pt1[0] + v1[0], pt1[1] + v1[1]];
    pt4 = geometric.pointRotate(cp, ratio2 * -90 * cw, pt3);
    extPt4 = extendLine([pt3, pt4], 4, 0)[1];

    pline2.push([pt1, pt3]);
    pline3.push([pt3, extPt4]);

    pt1 = new avPt(pline[(i + 1) % pline.length], midPt, space);
    pt2 = geometric.pointRotate(pline[i], ratio1 * -90 * cw, pt1);
    var size1 = distance2P(pt1, pt2);
    var v1 = [
      ((pt2[0] - pt1[0]) / size1) * size,
      ((pt2[1] - pt1[1]) / size1) * size,
    ];
    pt3 = [pt1[0] + v1[0], pt1[1] + v1[1]];
    pt4 = geometric.pointRotate(cp, ratio2 * 90 * cw, pt3);
    extPt4 = extendLine([pt3, pt4], 4, 0)[1];

    pline2.push([pt1, pt3]);
    pline3.push([pt3, extPt4]);
  }

  var Pls = [];
  var a = 1; //////////////////////////additional parameter 1,2,3
  var b = 2 * a + 1;
  for (var i = b; i < pline3.length + b; i++) {
    var pt1_0 = pline3[i % pline2.length][0];
    var pt1_1 = pline3[i % pline2.length][1];
    var pt2_0;
    var pt2_1;

    if (i % 2 == 0) {
      pt2_0 = pline3[(i + b) % pline2.length][0];
      pt2_1 = pline3[(i + b) % pline2.length][1];
    } else {
      pt2_0 = pline3[(i - b) % pline2.length][0];
      pt2_1 = pline3[(i - b) % pline2.length][1];
    }
    var pt4 = math.intersect(pt1_0, pt1_1, pt2_0, pt2_1);
    pline2[i % pline2.length].push(pt4);
    ctx.strokeStyle = "black";
    polyLine(pline2[i % pline2.length], "black", false);

    Pls = Pls.concat([pline2[i % pline2.length]]);
  }
  return Pls;
};

const gynoTypes = [
  gtA,
  gtB,
  gtC,
  gtD,
  gtE,
  gtF,
  gtG,
  gtH,
  gtI,
  gtJ,
  gtK,
  gtL,
  gtM,
  gtN,
  gtO,
  starPattern1,
  starPattern2,
];
