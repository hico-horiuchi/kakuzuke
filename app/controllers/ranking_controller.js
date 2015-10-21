var ranking = ranking || {};

(function() {
  'use strict';

  ranking.list = m.prop([]);
  ranking.loaded = m.prop(false);
  ranking.status = m.prop('');

  ranking.controller = function() {
    this.username = m.prop(m.route.param('username') || '');

    m.request({
      method: 'GET',
      url: '/api/ranking/' + this.username(),
      background: true,
      initialValue: [],
      extract: extractStatus
    }).then(function(value) {
      ranking.list(value);
      ranking.loaded(true);
      m.redraw();
    }, function(error) {
      ranking.status(error);
      ranking.loaded(true);
      m.redraw();
    });

    ranking.list([]);
    ranking.loaded(false);
    ranking.status('');
  };
})();
