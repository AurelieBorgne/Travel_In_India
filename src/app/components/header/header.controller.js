(function() {
  'use strict';

  angular
    .module('travelInIndia')
    .controller('HeaderCtrl', HeaderCtrl);

  /** @ngInject */
  function HeaderCtrl() {
    var header = this;

    /* anim header */
    var triangle1 = $('#greenPathL');
    var triangle2 = $('#pinkPathL');
    var txtIndia = $('#txtIndia');
    TweenMax.to(triangle1, 0, { alpha:0, x: 80});
    TweenMax.to(triangle2, 0, { alpha:0, x: 80});
    TweenMax.to(txtIndia, 0, { alpha:0});

    var ganesh = $('#ganesh');
    TweenMax.to(ganesh, 0, {y:190});

    var lotus = $('#lotus');
    TweenMax.to(lotus, 0, {y:-90});

    var line2 = $('#pinkPath');
    TweenMax.to(line2, 0, {alpha: 0, y:5});

    var line1 = document.getElementById('greenPath');
    var segLine1 = new Segment(line1);

    segLine1.draw('0%', '0%', 0);
    var begin = '0%';
    var end = '100%';

    var dline1 = document.getElementById('greenPathO');
    var segDLine1 = new Segment(dline1);
    TweenMax.to(dline1, 0, {alpha:0});

    segDLine1.draw('0%', '0%', 0);
    var begin = '0%';
    var end = '100%';

    var dline2 = document.getElementById('pinkPathO1');
    var segDLine2 = new Segment(dline2);
    TweenMax.to(dline2, 0, {alpha:0});

    segDLine2.draw('0%', '0%', 0);
    var begin = '0%';
    var end = '100%';

    var dline3 = document.getElementById('pinkPathO2');
    var segDLine3 = new Segment(dline3);
    TweenMax.to(dline3, 0, {alpha:0});

    segDLine3.draw('0%', '0%', 0);
    var begin = '0%';
    var end = '100%';

    TweenMax.to(line1, 1.25, {strokeDasharray: segLine1.strokeDasharray(begin, end), ease:Sine.easeInOut});
    TweenMax.to(line2, 0.15, {alpha: 1, delay:0.5});
    
    TweenMax.to(line2, 0.75, {y: 0, ease:Bounce.easeOut, delay:0.5});

    TweenMax.to(ganesh, 0.45, { y: 50, ease:Sine.easeIn, delay:0.75});
    TweenMax.to(ganesh, 0.35, { y: 0, ease:Bounce.easeOut, delay:1.2});

    TweenMax.to(lotus, 0.45, { y: -50, ease:Sine.easeIn, delay:0.75});
    TweenMax.to(lotus, 0.75, { y: 0, ease:Bounce.easeOut, delay:1.2});

    TweenMax.to(triangle1, 0.15, { alpha:1, delay:1.22});
    TweenMax.to(triangle1, 0.5, { x: 0, ease:Sine.easeInOut, delay:1.22 });
    TweenMax.to(triangle2, 0.15, { alpha:1, delay:1.52});
    TweenMax.to(triangle2, 0.45, { x: 0, ease:Back.easeOut, delay:1.52 });
    TweenMax.to(txtIndia, 0.25, { alpha:1, delay:2, ease:Sine.easeOut});

    TweenMax.to(dline1, 0.15, {alpha:1, delay:1.25});
    TweenMax.to(dline1, 1, {strokeDasharray: segDLine1.strokeDasharray(begin, end), ease:Sine.easeInOut, delay:1.25});

    TweenMax.to(dline2, 0.15, {alpha:1, delay:1.3});
    TweenMax.to(dline2, 1, {strokeDasharray: segDLine2.strokeDasharray(begin, end), ease:Sine.easeInOut, delay:1.3});

    TweenMax.to(dline3, 0.15, {alpha:1, delay:1.3});
    TweenMax.to(dline3, 1, {strokeDasharray: segDLine3.strokeDasharray(begin, end), ease:Sine.easeInOut, delay:1.3});

    var triangle = $('#triangle');
    TweenMax.to(triangle, 0, {alpha:0, x:-60});

    TweenMax.to(triangle, 0.25, {alpha:1, delay: 1});
    TweenMax.to(triangle, 0.75, {x:0, delay: 1, ease:Sine.easeInOut});

    var cube1 = $('#cube1');
    TweenMax.to(cube1, 0, {alpha:0, x:30, y:-15});

    TweenMax.to(cube1, 0.25, {alpha:1, delay: 1.75});
    TweenMax.to(cube1, 0.35, {x:0, y:0, delay: 1.75, ease:Back.easeOut});

    var cube2 = $('#cube2');
    TweenMax.to(cube2, 0, {alpha:0, x:-30, y:25});

    TweenMax.to(cube2, 0.25, {alpha:1, delay: 1.75});
    TweenMax.to(cube2, 0.35, {x:0, y:0, delay: 1.75, ease:Back.easeOut});

    var cube3 = $('#cube3');
    TweenMax.to(cube3, 0, {alpha:0, x:-35, y:5});

    TweenMax.to(cube3, 0.25, {alpha:1, delay: 1.75});
    TweenMax.to(cube3, 0.35, {x:0, y:0, delay: 1.75, ease:Back.easeOut});

    var cube4 = $('#cube4');
    TweenMax.to(cube4, 0, {alpha:0, x:-35, y:5});

    TweenMax.to(cube4, 0.25, {alpha:1, delay: 1.75});
    TweenMax.to(cube4, 0.35, {x:0, y:0, delay: 1.75, ease:Back.easeOut});

  }
})();
