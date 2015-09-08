var ranking = ranking || {};

(function() {
  ranking.list = m.prop([]);
  ranking.loaded = m.prop(false);

  ranking.controller = function() {
    this.username = m.prop(m.route.param('username') || '');

    m.request({
      method: 'GET',
      url: '/api/ranking/' + this.username(),
      background: true,
      initialValue: []
    }).then(function(value) {
      ranking.list(value);
      ranking.loaded(true);
      m.redraw()
    });

    ranking.list([]);
    ranking.loaded(false);
  };
})();
