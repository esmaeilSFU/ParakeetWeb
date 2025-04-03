trianglularGrid = function (cellSize, startP) {
  var p0 = startP;
  var p1 = geometric.pointTranslate(p0, 60, cellSize);
  var p2 = geometric.pointTranslate(p1, 180, cellSize);
  var p3 = geometric.pointTranslate(p0, 0, cellSize);
  var p4 = geometric.pointTranslate(p1, 60, cellSize);
  var p5 = geometric.pointTranslate(p2, 60, cellSize);

  this.lines = [
    [p0, p1, p2],
    [p0, p3, p1],
    [p1, p4, p5],
    [p1, p5, p2],
  ];

  this.translationX = [[cellSize, 0]];
  this.translationY = [0, 2 * cellSize * Math.sin(Math.PI / 3)];
  this.rotationX = 0;
};

squareGrid = function (cellsize, startP) {
  var p0 = startP;
  var p1 = geometric.pointTranslate(p0, 0, cellSize);
  var p2 = geometric.pointTranslate(p1, 90, cellSize);
  var p3 = geometric.pointTranslate(p0, 90, cellSize);

  this.lines = [[p0, p1, p2, p3]];
  this.translationX = [[cellsize, 0]];
  this.translationY = [0, cellsize];
  this.rotationX = 0;
};

hexagonalGrid = function (cellSize, startP) {
  var p0 = startP;
  var p1 = geometric.pointTranslate(p0, 0, cellSize);
  var p2 = geometric.pointTranslate(p1, 60, cellSize);
  var p3 = geometric.pointTranslate(p2, 120, cellSize);
  var p4 = geometric.pointTranslate(p3, 180, cellSize);
  var p5 = geometric.pointTranslate(p4, 240, cellSize);

  this.lines = [[p0, p1, p2, p3, p4, p5]];
  this.translationX = [
    [1.5 * cellSize, 0],
    [1.5 * cellSize, cellSize * Math.sin(Math.PI / 3)],
  ];
  this.translationY = [0, 2 * cellSize * Math.sin(Math.PI / 3)];
  this.rotationX = 0;
};

snubSquare = function (cellSize, startP) {
  var p0 = startP;
  var p1 = geometric.pointTranslate(p0, 0, cellSize);
  var p2 = geometric.pointTranslate(p1, 120, cellSize);
  var p3 = geometric.pointTranslate(p1, 30, cellSize);
  var p4 = geometric.pointTranslate(p2, 150, cellSize);
  var p5 = geometric.pointTranslate(p2, 90, cellSize);
  var p6 = geometric.pointTranslate(p2, 30, cellSize);
  var p7 = geometric.pointTranslate(p0, 150, cellSize);
  var p8 = geometric.pointTranslate(p0, -60, cellSize);

  this.lines = [
    [p0, p1, p2],
    [p2, p4, p5],
    [p2, p5, p6],
    [p0, p1, p8],
    [p0, p2, p4, p7],
    [p1, p3, p6, p2],
  ];
  this.translationX = [
    [0.5 * cellSize + cellSize * Math.sin(Math.PI / 3), 0],
    [
      0.5 * cellSize + cellSize * Math.sin(Math.PI / 3),
      0.5 * cellSize + cellSize * Math.sin(Math.PI / 3),
    ],
  ];
  this.translationY = [0, cellSize + 2 * cellSize * Math.sin(Math.PI / 3)];
  this.rotationX = 0;
};
/////////////////////

elongatedTrianglularGrid = function (cellSize, startP) {
  var p0 = startP;
  var p1 = geometric.pointTranslate(p0, 0, cellSize);
  var p2 = geometric.pointTranslate(p1, 90, cellSize);
  var p3 = geometric.pointTranslate(p2, 180, cellSize);
  var p4 = geometric.pointTranslate(p2, 60, cellSize);
  var p5 = geometric.pointTranslate(p3, 60, cellSize);

  this.lines = [
    [p0, p1, p2, p3],
    [p3, p2, p5],
    [p2, p4, p5],
  ];
  this.translationX = [
    [0.5 * cellSize, 0],
    [0.5 * cellSize, cellSize + cellSize * Math.sin(Math.PI / 3)],
  ];
  this.translationY = [0, 2 * cellSize + 2 * cellSize * Math.sin(Math.PI / 3)];
  this.rotationX = 0;
};

rhombitrihexagonal = function (cellSize, startP) {
  var p0 = startP;
  var p1 = geometric.pointTranslate(p0, -30, cellSize);
  var p2 = geometric.pointTranslate(p1, 0, cellSize);
  var p3 = geometric.pointTranslate(p2, 30, cellSize);
  var p4 = geometric.pointTranslate(p3, 60, cellSize);
  var p5 = geometric.pointTranslate(p4, 90, cellSize);
  var p6 = geometric.pointTranslate(p5, 180, cellSize);
  var p7 = geometric.pointTranslate(p6, 150, cellSize);
  var p8 = geometric.pointTranslate(p7, 210, cellSize);
  var p9 = geometric.pointTranslate(p8, -90, cellSize);
  var p10 = geometric.pointTranslate(p1, 60, cellSize);
  var p11 = geometric.pointTranslate(p10, 30, cellSize);

  this.lines = [
    [p0, p1, p10, p9],
    [p1, p2, p10],
    [p2, p3, p11, p10],
    [p3, p4, p11],
    [p11, p4, p5, p6],
    [p9, p10, p11, p6, p7, p8],
  ];

  this.translationX = [
    [0.5 * cellSize + cellSize * Math.sin(Math.PI / 3), 0],
    [
      0.5 * cellSize + cellSize * Math.sin(Math.PI / 3),
      1.5 * cellSize + cellSize * Math.sin(Math.PI / 3),
    ],
  ];
  this.translationY = [0, 3 * cellSize + 2 * cellSize * Math.sin(Math.PI / 3)];
  this.rotationX = 0;
};

elongatedtriangular = function (cellSize, startP) {
  var p0 = startP;
  var p1 = geometric.pointTranslate(p0, 0, cellSize);
  var p2 = geometric.pointTranslate(p1, 30, cellSize);
  var p3 = geometric.pointTranslate(p2, 90, cellSize);
  var p4 = geometric.pointTranslate(p3, -150, cellSize);
  var p5 = geometric.pointTranslate(p4, 180, cellSize);

  this.lines = [
    [p0, p1, p4, p5],
    [p1, p2, p4],
    [p2, p3, p4],
  ];

  this.translationX = [
    [cellSize + cellSize * Math.sin(Math.PI / 3), 0],
    [cellSize + cellSize * Math.sin(Math.PI / 3), 0.5 * cellSize],
  ];
  this.translationY = [0, 1 * cellSize];
  this.rotationX = 0;
};

snubTrihexagonal = function (cellSize, startP) {
  var p0 = startP;
  var p1 = geometric.pointTranslate(p0, 0, cellSize);
  var p2 = geometric.pointTranslate(p1, 0, cellSize);
  var p3 = geometric.pointTranslate(p2, -60, cellSize);
  var p4 = geometric.pointTranslate(p3, 0, cellSize);
  var p5 = geometric.pointTranslate(p4, 0, cellSize);
  var p6 = geometric.pointTranslate(p5, 60, cellSize);
  var p7 = geometric.pointTranslate(p6, 0, cellSize);
  var p8 = geometric.pointTranslate(p7, 0, cellSize);
  var p9 = geometric.pointTranslate(p8, 60, cellSize);
  var p26 = geometric.pointTranslate(p9, 120, cellSize);
  var p10 = geometric.pointTranslate(p26, 180, cellSize);
  var p11 = geometric.pointTranslate(p10, 180, cellSize);
  var p12 = geometric.pointTranslate(p11, 180, cellSize);
  var p13 = geometric.pointTranslate(p12, 180, cellSize);
  var p14 = geometric.pointTranslate(p13, 120, cellSize);
  var p15 = geometric.pointTranslate(p14, 180, cellSize);
  var p16 = geometric.pointTranslate(p15, 180, cellSize);
  var p17 = geometric.pointTranslate(p16, -120, cellSize);
  var p18 = geometric.pointTranslate(p17, -60, cellSize);
  var p19 = geometric.pointTranslate(p18, 0, cellSize);
  var p20 = geometric.pointTranslate(p19, 0, cellSize);
  var p21 = geometric.pointTranslate(p20, -60, cellSize);
  var p22 = geometric.pointTranslate(p21, 60, cellSize);
  var p23 = geometric.pointTranslate(p22, 0, cellSize);
  var p24 = geometric.pointTranslate(p23, 0, cellSize);
  var p25 = geometric.pointTranslate(p17, 0, cellSize);
  var p27 = geometric.pointTranslate(p17, 120, cellSize);
  var p28 = geometric.pointTranslate(p17, 180, cellSize);
  var p29 = geometric.pointTranslate(p28, 120, cellSize);
  var p30 = geometric.pointTranslate(p28, 180, cellSize);

  this.lines = [
    [p0, p1, p18],
    [p18, p1, p19],
    [p1, p2, p19],
    [p19, p2, p20],
    [p20, p2, p21],
    [p20, p21, p22],
    [p2, p3, p21],
    [p21, p3, p4],
    [p4, p5, p6, p23, p22, p21],
    [p23, p6, p24],
    [p24, p6, p7],
    [p7, p8, p9, p26, p10, p24],
    [p12, p23, p11],
    [p23, p24, p11],
    [p11, p24, p10],
    [p22, p23, p12],
    [p13, p22, p12],
    [p20, p22, p13],
    [p19, p20, p13, p14, p15, p25],
    [p18, p19, p25],
    [p17, p18, p25],
    [p17, p25, p16],
    [p16, p25, p15],
    [p27, p17, p16],
    [p27, p28, p17],
    [p28, p29, p27],
    [p29, p30, p28],
  ];

  this.translationX = [[7 * cellSize, 0]];
  this.translationY = [0.5 * cellSize, 3 * cellSize * Math.sin(Math.PI / 3)];
  this.rotationX = 0;
};

trihexagonal = function (cellSize, startP) {
  var p0 = startP;
  var p1 = geometric.pointTranslate(p0, 0, cellSize);
  var p2 = geometric.pointTranslate(p1, 0, cellSize);
  var p3 = geometric.pointTranslate(p2, 60, cellSize);
  var p4 = geometric.pointTranslate(p3, 120, cellSize);
  var p5 = geometric.pointTranslate(p4, 180, cellSize);
  var p6 = geometric.pointTranslate(p5, 180, cellSize);
  var p7 = geometric.pointTranslate(p6, -60, cellSize);

  this.lines = [
    [p0, p1, p7],
    [p7, p5, p6],
    [p1, p2, p3, p4, p5, p7],
  ];

  this.translationX = [[2 * cellSize, 0]];
  this.translationY = [0, 2 * cellSize * Math.sin(Math.PI / 3)];
  this.rotationX = 0;
};

truncatedHexagonal = function (cellSize, startP) {
  var p0 = [
    startP[0] + 0.5 * cellSize + cellSize * Math.sin(Math.PI / 3),
    startP[1],
  ];
  var p1 = geometric.pointTranslate(p0, 0, cellSize);
  var p2 = geometric.pointTranslate(p1, 30, cellSize);
  var p3 = geometric.pointTranslate(p2, 60, cellSize);
  var p4 = geometric.pointTranslate(p3, 90, cellSize);
  var p5 = geometric.pointTranslate(p4, 120, cellSize);
  var p6 = geometric.pointTranslate(p5, 150, cellSize);
  var p7 = geometric.pointTranslate(p6, 180, cellSize);
  var p8 = geometric.pointTranslate(p7, 210, cellSize);
  var p9 = geometric.pointTranslate(p8, 240, cellSize);
  var p10 = geometric.pointTranslate(p9, -90, cellSize);
  var p11 = geometric.pointTranslate(p10, -60, cellSize);
  var p12 = geometric.pointTranslate(p2, 0, cellSize);
  var p13 = geometric.pointTranslate(p5, 0, cellSize);

  this.lines = [
    [p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11],
    [p2, p12, p3],
    [p5, p4, p13],
  ];

  this.translationX = [
    [cellSize + cellSize * Math.sin(Math.PI / 3), 0],
    [
      1 * cellSize + 1 * cellSize * Math.sin(Math.PI / 3),
      1.5 * cellSize + 2 * cellSize * Math.sin(Math.PI / 3),
    ],
  ];
  this.translationY = [0, 3 * cellSize + 4 * cellSize * Math.sin(Math.PI / 3)];
  this.rotationX = 0;
};

truncatedSquare = function (cellSize, startP) {
  var p0 = [startP[0] + cellSize * Math.sin(Math.PI / 4), startP[1]];
  var p1 = geometric.pointTranslate(p0, 0, cellSize);
  var p2 = geometric.pointTranslate(p1, 45, cellSize);
  var p3 = geometric.pointTranslate(p2, 90, cellSize);
  var p4 = geometric.pointTranslate(p3, 135, cellSize);
  var p5 = geometric.pointTranslate(p4, 180, cellSize);
  var p6 = geometric.pointTranslate(p5, 225, cellSize);
  var p7 = geometric.pointTranslate(p6, -90, cellSize);
  var p8 = geometric.pointTranslate(p3, 45, cellSize);
  var p9 = geometric.pointTranslate(p4, 45, cellSize);

  this.lines = [
    [p0, p1, p2, p3, p4, p5, p6, p7],
    [p3, p8, p9, p4],
  ];

  this.translationX = [[cellSize + 2 * cellSize * Math.sin(Math.PI / 4), 0]];
  this.translationY = [0, cellSize + 2 * cellSize * Math.sin(Math.PI / 4)];
  this.rotationX = 0;
};

truncatedTrihexagonal = function (cellSize, startP) {
  var p0 = [
    startP[0] + 0.5 * cellSize + cellSize * Math.sin(Math.PI / 3),
    startP[1],
  ];
  var p1 = geometric.pointTranslate(p0, 0, cellSize);
  var p2 = geometric.pointTranslate(p1, 30, cellSize);
  var p3 = geometric.pointTranslate(p2, 60, cellSize);
  var p4 = geometric.pointTranslate(p3, 90, cellSize);
  var p5 = geometric.pointTranslate(p4, 120, cellSize);
  var p6 = geometric.pointTranslate(p5, 150, cellSize);
  var p7 = geometric.pointTranslate(p6, 180, cellSize);
  var p8 = geometric.pointTranslate(p7, 210, cellSize);
  var p9 = geometric.pointTranslate(p8, 240, cellSize);
  var p10 = geometric.pointTranslate(p9, -90, cellSize);
  var p11 = geometric.pointTranslate(p10, -60, cellSize);
  var p12 = geometric.pointTranslate(p9, 180, cellSize);
  var p13 = geometric.pointTranslate(p10, 180, cellSize);
  var p14 = geometric.pointTranslate(p12, 120, cellSize);
  var p15 = geometric.pointTranslate(p9, 120, 2 * cellSize);
  var p16 = geometric.pointTranslate(p8, 120, cellSize);
  var p17 = geometric.pointTranslate(p1, -60, cellSize);
  var p18 = geometric.pointTranslate(p2, -60, cellSize);
  var p19 = geometric.pointTranslate(p18, 0, cellSize);
  var p20 = geometric.pointTranslate(p2, 0, 2 * cellSize);
  var p21 = geometric.pointTranslate(p3, 0, cellSize);
  var p22 = geometric.pointTranslate(p19, -30, cellSize);
  var p23 = geometric.pointTranslate(p20, -30, cellSize);

  this.lines = [
    [p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11],
    [p13, p10, p9, p12],
    [p12, p9, p8, p16, p15, p14],
    [p1, p17, p18, p2],
    [p2, p18, p19, p20, p21, p3],
    [p19, p22, p23, p20],
  ];

  this.translationX = [
    [1.5 * cellSize + cellSize * Math.sin(Math.PI / 3), 0],
    [
      1.5 * cellSize + 1 * cellSize * Math.sin(Math.PI / 3),
      1.5 * cellSize + 3 * cellSize * Math.sin(Math.PI / 3),
    ],
  ];
  this.translationY = [0, 3 * cellSize + 6 * cellSize * Math.sin(Math.PI / 3)];
  this.rotationX = 0;
};

twoUniformTilingA = function (cellSize, startP) {
  var p0 = startP;
  var p1 = geometric.pointTranslate(p0, -30, cellSize);
  var p2 = geometric.pointTranslate(p1, 0, cellSize);
  var p3 = geometric.pointTranslate(p2, 30, cellSize);
  var p4 = geometric.pointTranslate(p3, 60, cellSize);
  var p5 = geometric.pointTranslate(p4, 90, cellSize);
  var p6 = geometric.pointTranslate(p5, 120, cellSize);
  var p7 = geometric.pointTranslate(p6, 150, cellSize);
  var p8 = geometric.pointTranslate(p7, 180, cellSize);
  var p9 = geometric.pointTranslate(p8, 210, cellSize);
  var p10 = geometric.pointTranslate(p9, 240, cellSize);
  var p11 = geometric.pointTranslate(p10, -90, cellSize);
  var p13 = geometric.pointTranslate(p1, 90, cellSize);
  var p14 = geometric.pointTranslate(p2, 90, cellSize);
  var p15 = geometric.pointTranslate(p4, 150, cellSize);
  var p16 = geometric.pointTranslate(p7, -90, cellSize);
  var p17 = geometric.pointTranslate(p8, -90, cellSize);
  var p18 = geometric.pointTranslate(p10, -30, cellSize);
  var p19 = geometric.pointTranslate(p0, 180, cellSize);
  var p20 = geometric.pointTranslate(p9, 180, cellSize);

  this.lines = [
    [p1, p2, p14, p13],
    [p2, p3, p14],
    [p3, p4, p15, p14],
    [p15, p4, p5],
    [p15, p5, p6, p16],
    [p16, p6, p7],
    [p17, p16, p7, p8],
    [p17, p8, p9],
    [p18, p17, p9, p10],
    [p10, p11, p18],
    [p18, p11, p0, p13],
    [p0, p1, p13],
    [p13, p14, p15, p16, p17, p18],
    [p11, p19, p0],
    [p20, p10, p9],
  ];

  this.translationX = [
    [1 * cellSize + 1 * cellSize * Math.sin(Math.PI / 3), 0],
    [
      1 * cellSize + 1 * cellSize * Math.sin(Math.PI / 3),
      1.5 * cellSize + 2 * cellSize * Math.sin(Math.PI / 3),
    ],
  ];
  this.translationY = [0, 3 * cellSize + 4 * cellSize * Math.sin(Math.PI / 3)];
  this.rotationX = 0;
};

twoUniformTilingB = function (cellSize, startP) {
  var p0 = startP;
  var p1 = geometric.pointTranslate(p0, -30, cellSize);
  var p2 = geometric.pointTranslate(p1, 0, cellSize);
  var p3 = geometric.pointTranslate(p2, 30, cellSize);
  var p4 = geometric.pointTranslate(p3, 60, cellSize);
  var p5 = geometric.pointTranslate(p4, 90, cellSize);
  var p6 = geometric.pointTranslate(p5, 120, cellSize);
  var p7 = geometric.pointTranslate(p6, 150, cellSize);
  var p8 = geometric.pointTranslate(p7, 180, cellSize);
  var p9 = geometric.pointTranslate(p8, 210, cellSize);
  var p10 = geometric.pointTranslate(p9, 240, cellSize);
  var p11 = geometric.pointTranslate(p10, -90, cellSize);
  var p12 = geometric.pointTranslate(p4, -30, cellSize);
  var p13 = geometric.pointTranslate(p12, 30, cellSize);
  var p14 = geometric.pointTranslate(p13, 90, cellSize);
  var p15 = geometric.pointTranslate(p5, 30, cellSize);
  var p16 = geometric.pointTranslate(p15, 60, cellSize);
  var p17 = geometric.pointTranslate(p16, 90, cellSize);
  var p18 = geometric.pointTranslate(p17, 180, cellSize);
  var p19 = geometric.pointTranslate(p18, 150, cellSize);
  var p20 = geometric.pointTranslate(p19, 120, cellSize);
  var p21 = geometric.pointTranslate(p20, -150, cellSize);
  var p22 = geometric.pointTranslate(p21, 150, cellSize);
  var p23 = geometric.pointTranslate(p22, -120, cellSize);
  var p24 = geometric.pointTranslate(p23, -150, cellSize);
  var p25 = geometric.pointTranslate(p24, -90, cellSize);
  var p26 = geometric.pointTranslate(p25, -120, cellSize);
  var p27 = geometric.pointTranslate(p18, -90, cellSize);
  var p28 = geometric.pointTranslate(p7, 90, cellSize);
  var p29 = geometric.pointTranslate(p8, 90, cellSize);

  this.lines = [
    [p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11],
    [p4, p12, p13, p14, p15, p5],
    [p5, p15, p27, p6],
    [p7, p6, p27, p18, p19, p28],
    [p28, p19, p20, p21],
    [p29, p28, p21],
    [p8, p7, p28, p29],
    [p29, p21, p22, p23],
    [p25, p9, p8, p29, p23, p24],
    [p26, p10, p9, p25],

    [p15, p16, p27],
    [p27, p16, p17, p18],
  ];

  this.translationX = [
    [1 * cellSize + 2 * cellSize * Math.sin(Math.PI / 3), 0],
    [
      1 * cellSize + 2 * cellSize * Math.sin(Math.PI / 3),
      3 * cellSize + 2 * cellSize * Math.sin(Math.PI / 3),
    ],
  ];
  this.translationY = [0, 6 * cellSize + 4 * cellSize * Math.sin(Math.PI / 3)];
  this.rotationX = 0;
};

twoUniformTilingC = function (cellSize, startP) {
  var p0 = startP;
  var p1 = geometric.pointTranslate(p0, -30, cellSize);
  var p2 = geometric.pointTranslate(p1, 0, cellSize);
  var p3 = geometric.pointTranslate(p2, 30, cellSize);
  var p4 = geometric.pointTranslate(p3, 60, cellSize);
  var p5 = geometric.pointTranslate(p4, 90, cellSize);
  var p6 = geometric.pointTranslate(p5, 120, cellSize);
  var p7 = geometric.pointTranslate(p6, 150, cellSize);
  var p8 = geometric.pointTranslate(p7, 180, cellSize);
  var p9 = geometric.pointTranslate(p8, 210, cellSize);
  var p10 = geometric.pointTranslate(p9, 240, cellSize);
  var p11 = geometric.pointTranslate(p10, -90, cellSize);
  var p13 = geometric.pointTranslate(p1, 90, cellSize);
  var p14 = geometric.pointTranslate(p2, 90, cellSize);
  var p15 = geometric.pointTranslate(p4, 150, cellSize);
  var p16 = geometric.pointTranslate(p7, -90, cellSize);
  var p17 = geometric.pointTranslate(p8, -90, cellSize);
  var p18 = geometric.pointTranslate(p10, -30, cellSize);
  var p19 = geometric.pointTranslate(p11, 150, cellSize);
  var p20 = geometric.pointTranslate(p8, 150, cellSize);

  this.lines = [
    [p1, p2, p14, p13],
    [p2, p3, p14],
    [p3, p4, p15, p14],
    [p15, p4, p5],
    [p15, p5, p6, p16],
    [p16, p6, p7],
    [p17, p16, p7, p8],
    [p17, p8, p9],
    [p18, p17, p9, p10],
    [p10, p11, p18],
    [p18, p11, p0, p13],
    [p0, p1, p13],
    [p13, p14, p15, p16, p17, p18],
    [p19, p11, p10],
    [p20, p9, p8],
  ];

  this.translationX = [
    [1.5 * cellSize + 2 * cellSize * Math.sin(Math.PI / 3), 0],
    [
      1.5 * cellSize + 2 * cellSize * Math.sin(Math.PI / 3),
      1 * cellSize + 1 * cellSize * Math.sin(Math.PI / 3),
    ],
  ];
  this.translationY = [0, 2 * cellSize + 2 * cellSize * Math.sin(Math.PI / 3)];
  this.rotationX = 0;
};

twoUniformTilingD = function (cellSize, startP) {
  var p0 = startP;
  var p1 = geometric.pointTranslate(p0, -30, cellSize);
  var p2 = geometric.pointTranslate(p1, 0, cellSize);
  var p3 = geometric.pointTranslate(p2, 30, cellSize);
  var p4 = geometric.pointTranslate(p3, 60, cellSize);
  var p5 = geometric.pointTranslate(p4, 90, cellSize);
  var p6 = geometric.pointTranslate(p5, 150, cellSize);
  var p7 = geometric.pointTranslate(p6, 120, cellSize);
  var p8 = geometric.pointTranslate(p7, 90, cellSize);
  var p9 = geometric.pointTranslate(p8, 180, cellSize);
  var p10 = geometric.pointTranslate(p9, -90, cellSize);
  var p11 = geometric.pointTranslate(p10, -120, cellSize);
  var p12 = geometric.pointTranslate(p11, -150, cellSize);
  var p13 = geometric.pointTranslate(p12, -90, cellSize);
  var p14 = geometric.pointTranslate(p0, 30, cellSize);
  var p15 = geometric.pointTranslate(p14, 0, cellSize);
  var p16 = geometric.pointTranslate(p13, 30, cellSize);
  var p17 = geometric.pointTranslate(p16, 0, cellSize);
  var p18 = geometric.pointTranslate(p17, 0, cellSize);
  var p19 = geometric.pointTranslate(p17, 90, cellSize);

  this.lines = [
    [p0, p1, p14],
    [p1, p2, p15, p14],
    [p15, p2, p3],
    [p15, p3, p4, p18],
    [p18, p4, p5],
    [p15, p18, p17],
    [p14, p15, p17],
    [p14, p17, p16],
    [p0, p14, p16, p13],
    [p18, p5, p6],
    [p17, p18, p6, p19],
    [p16, p17, p19, p11],
    [p12, p16, p11],
    [p13, p16, p12],
    [p19, p6, p7],
    [p19, p19, p7],
    [p11, p19, p10],
    [p10, p7, p8, p9],
  ];

  this.translationX = [
    [1.5 * cellSize + 1 * cellSize * Math.sin(Math.PI / 3), 0],
    [
      1.5 * cellSize + 1 * cellSize * Math.sin(Math.PI / 3),
      1.5 * cellSize + 1 * cellSize * Math.sin(Math.PI / 3),
    ],
  ];
  this.translationY = [0, 3 * cellSize + 2 * cellSize * Math.sin(Math.PI / 3)];
  this.rotationX = 0;
};

twoUniformTilingE = function (cellSize, startP) {
  var p0 = startP;
  var p1 = geometric.pointTranslate(p0, -30, cellSize);
  var p2 = geometric.pointTranslate(p1, 0, cellSize);
  var p3 = geometric.pointTranslate(p2, 30, cellSize);
  var p4 = geometric.pointTranslate(p3, 60, cellSize);
  var p5 = geometric.pointTranslate(p4, 90, cellSize);
  var p6 = geometric.pointTranslate(p5, 120, cellSize);
  var p7 = geometric.pointTranslate(p6, 150, cellSize);
  var p8 = geometric.pointTranslate(p7, 180, cellSize);
  var p9 = geometric.pointTranslate(p8, 210, cellSize);
  var p10 = geometric.pointTranslate(p9, 240, cellSize);
  var p11 = geometric.pointTranslate(p10, -90, cellSize);
  var p12 = geometric.pointTranslate(p8, 150, cellSize);
  var p13 = geometric.pointTranslate(p12, 120, cellSize);
  var p14 = geometric.pointTranslate(p13, -120, cellSize);
  var p15 = geometric.pointTranslate(p14, -150, cellSize);
  var p16 = geometric.pointTranslate(p15, -30, cellSize);

  this.lines = [
    [p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11],
    [p16, p10, p9],
    [p9, p8, p12],
    [p14, p12, p13],
    [p14, p15, p16],
    [p16, p9, p12, p14],
  ];

  this.translationX = [
    [2 * cellSize + 2 * cellSize * Math.sin(Math.PI / 3), 0],
  ];
  this.translationY = [0, 2 * cellSize + 2 * cellSize * Math.sin(Math.PI / 3)];
  this.rotationX = 0;
};

twoUniformTilingF = function (cellSize, startP) {
  var p0 = startP;
  var p1 = geometric.pointTranslate(p0, -30, cellSize);
  var p2 = geometric.pointTranslate(p1, 0, cellSize);
  var p3 = geometric.pointTranslate(p2, 30, cellSize);
  var p4 = geometric.pointTranslate(p3, 60, cellSize);
  var p5 = geometric.pointTranslate(p4, 90, cellSize);
  var p6 = geometric.pointTranslate(p5, 120, cellSize);
  var p7 = geometric.pointTranslate(p6, 150, cellSize);
  var p8 = geometric.pointTranslate(p7, 180, cellSize);
  var p9 = geometric.pointTranslate(p8, 210, cellSize);
  var p10 = geometric.pointTranslate(p9, 240, cellSize);
  var p11 = geometric.pointTranslate(p10, -90, cellSize);
  var p12 = geometric.pointTranslate(p7, 90, cellSize);
  var p13 = geometric.pointTranslate(p8, 90, cellSize);
  var p14 = geometric.pointTranslate(p13, 150, cellSize);
  var p15 = geometric.pointTranslate(p14, -150, cellSize);
  var p16 = geometric.pointTranslate(p15, -90, cellSize);
  var p17 = geometric.pointTranslate(p16, -120, cellSize);
  var p18 = geometric.pointTranslate(p17, -150, cellSize);
  var p19 = geometric.pointTranslate(p18, -90, cellSize);
  var p20 = geometric.pointTranslate(p19, -30, cellSize);
  var p21 = geometric.pointTranslate(p20, -60, cellSize);
  var p22 = geometric.pointTranslate(p20, 90, cellSize);
  var p23 = geometric.pointTranslate(p9, 90, cellSize);

  this.lines = [
    [p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11],
    [p8, p7, p12, p13],
    [p23, p8, p13],
    [p23, p13, p14],
    [p23, p14, p15],
    [p16, p23, p15],
    [p16, p9, p23],
    [p17, p10, p9, p16],
    [p17, p22, p10],
    [p18, p22, p17],
    [p19, p22, p18],
    [p9, p8, p23],
    [p19, p20, p22],
    [p20, p11, p22],
    [p22, p11, p10],
    [p20, p21, p0, p11],
  ];

  this.translationX = [
    [1.5 * cellSize + 3 * cellSize * Math.sin(Math.PI / 3), 0],
    [
      1.5 * cellSize + 3 * cellSize * Math.sin(Math.PI / 3),
      1.5 * cellSize + 1 * cellSize * Math.sin(Math.PI / 3),
    ],
  ];
  this.translationY = [0, 3 * cellSize + 2 * cellSize * Math.sin(Math.PI / 3)];
  this.rotationX = 0;
};

const tilings = [
  trianglularGrid,
  squareGrid,
  hexagonalGrid,
  snubSquare,
  elongatedTrianglularGrid,
  rhombitrihexagonal,
  elongatedtriangular,
  snubTrihexagonal,
  trihexagonal,
  truncatedHexagonal,
  truncatedSquare,
  truncatedTrihexagonal,
  twoUniformTilingA,
  twoUniformTilingB,
  twoUniformTilingC,
  twoUniformTilingD,
  twoUniformTilingE,
  twoUniformTilingF,
];
