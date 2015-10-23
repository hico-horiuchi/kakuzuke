var components = components || {};

(function() {
  'use strict';

  components.loading = function() {
    return m('.p-y-lg.text-center.text-kakuzuke', [
      m('i.fa.fa-refresh.fa-spin.fa-5x')
    ]);
  };

  components.error = function(status) {
    var statusIcons = {
      404: 'trash',
      500: 'bug'
    };

    return m('.p-y-lg.text-center.text-muted', [
      m('i.fa.fa-5x.m-b-sm', {
        class: 'fa-' + statusIcons[status]
      }),
      m('h4', status)
    ]);
  };
})();
