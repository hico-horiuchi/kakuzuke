var top = top || {};
var ranking = ranking || {};

var extractStatus = function(xhr, xhrOptions) {
  return xhr.status !== 200 ? xhr.status : xhr.responseText;
};

var animationDelay = function(time) {
  var delay = String(time * 0.1) + 's';

  return {
    '-moz-animation-delay': delay,
    '-webkit-animation-delay': delay,
    '-o-animation-delay': delay,
    '-ms-animation-delay': delay,
    'animation-delay': delay
  };
};

(function(window) {
  'use strict';

  m.route(document.getElementById('app-body'), '/', {
    '/ranking/:username': ranking,
    '/': top
  });

  document.getElementById('app-title').onclick = function(e) {
    e.preventDefault();
    m.route('/');
  }
})(window);
