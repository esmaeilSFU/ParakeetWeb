var avPt = function (pt1, pt2, ratio) {
  ratio = Number(ratio);
  var Avpt = [
    ratio * pt1[0] + (1 - ratio) * pt2[0],
    ratio * pt1[1] + (1 - ratio) * pt2[1],
  ];
  return Avpt;
};

var polyLine = function (pts, color = "black", closed = false) {
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.moveTo(pts[0][0], pts[0][1]);
  for (var i = 1; i < pts.length; i++) {
    ctx.lineTo(pts[i][0], pts[i][1]);
  }
  if (closed) {
    ctx.lineTo(pts[0][0], pts[0][1]);
  }
  ctx.stroke();
};

function remap(value, low1, high1, low2, high2) {
  return low2 + ((high2 - low2) * (value - low1)) / (high1 - low1);
}

var extendLine = function (line, amplitude, M = 0) {
  var pt1 = line[0];
  var pt2 = line[1];
  var line2;
  if (M == 0) {
    var v = [pt2[0] - pt1[0], pt2[1] - pt1[1]];
    var pt3 = [pt2[0] + amplitude * v[0], pt2[1] + amplitude * v[1]];
    line2 = [pt1, pt3];
  } else if (M == 1) {
    var v = [pt1[0] - pt2[0], pt1[1] - pt2[1]];
    var pt3 = [pt1[0] + amplitude * v[0], pt1[1] + amplitude * v[1]];
    line2 = [pt3, pt2];
  } else {
    var v1 = [pt1[0] - pt2[0], pt1[1] - pt2[1]];
    var pt3 = [pt1[0] + amplitude * v1[0], pt1[1] + amplitude * v1[1]];
    var v2 = [pt2[0] - pt1[0], pt2[1] - pt1[1]];
    var pt4 = [pt2[0] + amplitude * v2[0], pt2[1] + amplitude * v2[1]];
    line2 = [pt3, pt4];
  }
  return line2;
};

var distance2P = function (pt1, pt2) {
  var da = Math.abs(pt1[0] - pt2[0]);
  var db = Math.abs(pt1[1] - pt2[1]);
  var D = Math.sqrt(Math.pow(da, 2) + Math.pow(db, 2));
  return D;
};

var centroid = function (points) {
  var v1 = 0;
  var v2 = 0;
  for (var i = 0; i < points.length; i++) {
    v1 += points[i][0] / points.length;
    v2 += points[i][1] / points.length;
  }
  return [v1, v2];
};

var mirroredSubdivideQuad = function (pline) {
  var cnt = centroid(pline);
  var newpls2 = [];
  // pline.shift();
  for (var i = 0; i < pline.length; i++) {
    var newpls1 = [];
    if (i % 2 == 0) {
      var p0 = pline[i];
      var p1 = avPt(pline[i], pline[(i + 1) % pline.length], 0.5);
      var p2 = cnt;
      var p3 = avPt(
        pline[i],
        pline[(i - 1 + pline.length) % pline.length],
        0.5
      );
    } else {
      var p0 = pline[i];
      var p1 = avPt(
        pline[i],
        pline[(i - 1 + pline.length) % pline.length],
        0.5
      );
      var p2 = cnt;
      var p3 = avPt(pline[i], pline[(i + 1) % pline.length], 0.5);
    }
    newpls1.push(p0);
    newpls1.push(p1);
    newpls1.push(p2);
    newpls1.push(p3);
    newpls2.push(newpls1);
  }
  return newpls2;
};

Math.seed = function (min, max, n) {
  return function () {
    n = Math.sin(n) * 10000;
    var r = n - Math.floor(n);
    return Math.floor(r * (max - min)) + min;
  };
};

function circularShift(input, shift) {
  var l = input.length;
  result = [];
  for (var i = 0; i < l; i++) {
    result[(i + shift) % l] = input[i];
  }

  return result;
}

//////////////////////////////////////////////////////clipperr

function offset(clipper_paths, offsetDistance) {
  ///convert offseted pathes to offseted polylines.

  ClipperLib.Clipper.SimplifyPolygons(clipper_paths);
  ClipperLib.Clipper.CleanPolygons(clipper_paths);
  var co = new ClipperLib.ClipperOffset(1, 0.25); //(miterLimit, arcTolerance)
  //ClipperLib.EndType = {etOpenSquare:0, etOpenRound:1, etOpenButt:2, etClosedPolygon:3, etClosedLine:4 };
  //ClipperLib.JoinType = {jtSquare:0,  jtRound:1,  jtMiter:2};
  co.AddPaths(clipper_paths, 1, 1);
  var offsetted_paths = new ClipperLib.Paths();
  co.Execute(offsetted_paths, offsetDistance);

  return offsetted_paths;
}

function polylineToClipper(polylines) {
  ///convert polylines to clipper  .
  var clipper_paths = [];
  for (var i = 0; i < polylines.length; i++) {
    clipper_paths[i] = [];
    for (var j = 0; j < polylines[i].length; j++) {
      clipper_paths[i][j] = { X: polylines[i][j][0], Y: polylines[i][j][1] };
    }
  }
  return clipper_paths;
}

function clipperToPolyline(clipper_paths) {
  ///convert clipper to polylines.
  var polylines = [];
  for (var i = 0; i < clipper_paths.length; i++) {
    polylines[i] = [];
    for (var j = 0; j < clipper_paths[i].length; j++) {
      polylines[i][j] = [];
      polylines[i][j] = polylines[i][j].concat(clipper_paths[i][j].X);
      polylines[i][j] = polylines[i][j].concat(clipper_paths[i][j].Y);
    }
  }
  return polylines;
}

function clipperToSVG(clipper_paths, scale) {
  ///convert clipper to svg.
  var path = clipper_paths;
  var svgpath = "",
    i,
    j;
  if (!scale) scale = 1;
  for (i = 0; i < path.length; i++) {
    for (j = 0; j < path[i].length; j++) {
      if (!j) svgpath += "M";
      else svgpath += "L";
      svgpath += path[i][j].X / scale + ", " + path[i][j].Y / scale;
    }
    svgpath += "Z";
  }
  if (svgpath == "") svgpath = "M0,0";
  return svgpath;
}

function polylineToSVG(polyline, scale) {
  ///convert clipper to svg.
  var path = polyline;
  var svgpath = "",
    i,
    j;
  if (!scale) scale = 1;
  for (i = 0; i < path.length; i++) {
    for (j = 0; j < path[i].length; j++) {
      if (!j) svgpath += "M";
      else svgpath += "L";
      svgpath += path[i][j][0] / scale + ", " + path[i][j][1] / scale;
    }
    svgpath += "Z";
  }
  if (svgpath == "") svgpath = "M0,0";
  return svgpath;
}

function union(subjectPath) {
  var subj_paths = [];
  var clip_paths = [];

  subj_paths[0] = [];
  for (var i = 0; i < subjectPath[0].length; i++) {
    subj_paths[0][i] = { X: subjectPath[0][i].X, Y: subjectPath[0][i].Y };
  }

  for (var j = 1; j < subjectPath.length; j++) {
    clip_paths[0] = [];
    for (var k = 0; k < subjectPath[j].length; k++) {
      clip_paths[0][k] = { X: subjectPath[j][k].X, Y: subjectPath[j][k].Y };
    }

    ClipperLib.Clipper.SimplifyPolygons(subj_paths);
    ClipperLib.Clipper.SimplifyPolygons(clip_paths);
    ClipperLib.Clipper.CleanPolygons(subj_paths);
    ClipperLib.Clipper.CleanPolygons(clip_paths);

    var cpr = new ClipperLib.Clipper();
    cpr.AddPaths(subj_paths, ClipperLib.PolyType.ptSubject, true);
    cpr.AddPaths(clip_paths, ClipperLib.PolyType.ptClip, true);
    var subject_fillType = ClipperLib.PolyFillType.pftNonZero;
    var clip_fillType = ClipperLib.PolyFillType.pftNonZero;

    var solution_paths = new ClipperLib.Paths();
    cpr.Execute(
      ClipperLib.ClipType.ctUnion,
      solution_paths,
      subject_fillType,
      clip_fillType
    );

    subj_paths = [];
    subj_paths = solution_paths;
  }

  return subj_paths;
}

function difference(subjectPath, clipPath) {
  var subj_paths = subjectPath;
  var clip_paths = clipPath;

  ClipperLib.Clipper.SimplifyPolygons(subj_paths);
  ClipperLib.Clipper.SimplifyPolygons(clip_paths);
  ClipperLib.Clipper.CleanPolygons(subj_paths);
  ClipperLib.Clipper.CleanPolygons(clip_paths);

  var cpr = new ClipperLib.Clipper();
  cpr.AddPaths(subj_paths, ClipperLib.PolyType.ptSubject, true);
  cpr.AddPaths(clip_paths, ClipperLib.PolyType.ptClip, true);
  var subject_fillType = ClipperLib.PolyFillType.pftNonZero;
  var clip_fillType = ClipperLib.PolyFillType.pftNonZero;

  var solution_paths = new ClipperLib.Paths();
  cpr.Execute(
    ClipperLib.ClipType.ctDifference,
    solution_paths,
    subject_fillType,
    clip_fillType
  );

  return solution_paths;
}

function lightening(clipper_path, tolerance) {
  // var tolerance = 0.1;
  clipper_path = ClipperLib.JS.Lighten(clipper_path, tolerance);
  return clipper_path;
}

function intersection(subjectPath, clipPath) {
  var subj_paths = subjectPath;
  var clip_paths = clipPath;

  ClipperLib.Clipper.SimplifyPolygons(subj_paths);
  ClipperLib.Clipper.SimplifyPolygons(clip_paths);
  ClipperLib.Clipper.CleanPolygons(subj_paths);
  ClipperLib.Clipper.CleanPolygons(clip_paths);

  var cpr = new ClipperLib.Clipper();
  cpr.AddPaths(subj_paths, ClipperLib.PolyType.ptSubject, true);
  cpr.AddPaths(clip_paths, ClipperLib.PolyType.ptClip, true);
  var subject_fillType = ClipperLib.PolyFillType.pftNonZero;
  var clip_fillType = ClipperLib.PolyFillType.pftNonZero;

  var solution_paths = new ClipperLib.Paths();
  cpr.Execute(
    ClipperLib.ClipType.ctIntersection,
    solution_paths,
    subject_fillType,
    clip_fillType
  );

  return solution_paths;
}
