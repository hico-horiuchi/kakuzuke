var top = top || {};
var ranking = ranking || {};

var extractStatus = function(xhr, xhrOptions) {
  var isJson = "\"[{".indexOf(xhr.responseText.charAt(0)) !== -1;
  return isJson ? xhr.responseText : JSON.stringify(xhr.responseText);
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
