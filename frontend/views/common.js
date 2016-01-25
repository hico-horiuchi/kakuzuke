var common = common || {};

(function() {
  'use strict';

  common.loading = function() {
    return m('.p-y-3.text-xs-center.text-kakuzuke', [
      m('i.fa.fa-refresh.fa-spin.fa-5x')
    ]);
  };

  common.error = function(status) {
    var statusIcons = {
      404: 'trash',
      500: 'bug'
    };

    return m('.p-y-3.text-xs-center.text-muted', [
      m('i.fa.fa-5x.m-b-05', {
        class: 'fa-' + statusIcons[status]
      }),
      m('h4', status)
    ]);
  };
})();
