module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var __indent = [];
buf.push('<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="utf-8">\n    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">\n    <title>hbanger</title>\n    <link rel="favicon.ico" href="favicon.ico">\n    <link rel="stylesheet" href="/css/app.css">\n    <script>\n      window.brunch = window.brunch || {};\n      window.brunch[\'auto-reload\'] = {enabled: true};\n    </script>\n    <script src="/js/vendor.js"></script>\n    <script src="/js/app.js"></script>\n  </head>\n  <body>\n    <div class="splash">\n      <div class="video">\n        <div class="splashbg"></div>\n        <div class="dot"></div>\n      </div>\n      <div class="center-cont">\n        <div class="logo"></div>\n        <div class="social"><a href="https://www.facebook.com/pages/Hedbanger/263170540498734?fref=ts" target="_blank" class="fb"></a><a href="http://twitter.com/HedbangerBarber" target="_blank" class="tw"></a><a href="http://instagram.com/hedbangerbarbershopbar" target="_blank" class="in"></a></div>\n        <div class="newsletter-cont">\n          <form name="subscriber_form" action="http://www.mynewsletterbuilder.com/tools/ext_subscribe" method="post" target="_blank" class="getnews">\n            <input type="hidden" name="mnb_success_url" value="">\n            <input type="hidden" name="mnb_error_url" value="">\n            <input type="hidden" name="mnb_uid" value="2227092">\n            <input type="hidden" name="mnb_cat_override" value="add">\n            <input type="hidden" name="mnb_notify" value="">\n            <input type="hidden" name="mnb_nlid" value="">\n            <div align="left"><span style="float: right;"></span>\n            </div>\n            <input type="text" name="mnb_fields[email]" placeholder="type email" class="email">\n            <input type="hidden" name="mnb_req_fields[email]" value="Email">\n            <input type="hidden" name="mnb_cats[]" value="436691">\n            <div class="newsbtn">\n              <p>get news</p>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </body>\n</html>');
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