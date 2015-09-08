var top = top || {};
var ranking = ranking || {};

(function(window) {
  m.route(document.getElementById('app-body'), '/', {
    '/ranking/:username': ranking,
    '/': top
  });

  document.getElementById('app-title').onclick = function(e) {
    e.preventDefault();
    m.route('/');
  }
})(window);
