module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var __indent = [];
buf.push('<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="utf-8">\n    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">\n    <title>hbanger</title>\n    <link rel="favicon.ico" href="favicon.ico">\n    <link rel="stylesheet" href="/css/app.css">\n    <script>\n      window.brunch = window.brunch || {};\n      window.brunch[\'auto-reload\'] = {\n          enabled: true\n      };\n    </script>\n    <script src="/js/vendor.js"></script>\n    <script src="/js/app.js"></script>\n  </head>\n  <body>\n    <div class="splash">\n      <div class="video">\n        <video id="video" src="/img/girl_bike.mp4" autoplay preload="auto" loop></video>\n        <div class="dot"></div>\n      </div>\n      <div class="center-cont">\n        <div class="logo"></div>\n        <div class="social"><a href="" target="_blank" class="fb"></a><a href="" target="_blank" class="tw"></a><a href="" target="_blank" class="in"></a></div>\n      </div>\n    </div>\n  </body>\n</html>');
}
return buf.join("");
};
module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var __indent = [];
}
return buf.join("");
};

//# sourceMappingURL=templates.js.map