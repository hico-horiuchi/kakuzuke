var top = top || {};
var ranking = ranking || {};

var extractStatus = function(xhr, xhrOptions) {
  return xhr.status !== 200 ? String(xhr.status) : xhr.responseText;
};

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
