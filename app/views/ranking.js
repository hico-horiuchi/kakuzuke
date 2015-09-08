var ranking = ranking || {};

(function() {
  ranking.view = function(ctrl) {
    document.title = ctrl.username() + ' | kakuzuke';

    return !ranking.loaded() ? ranking.loading() : ranking.list().map(function(user) {
      return m('.card', {
        class: user.me ? 'bg-kakuzuke' : ''
      }, [
        m('.card-block.p-a-sm.inline-block', [
          m('.p-a-sm.inline-block', [
            m('img.img-circle[width=60px][height=60px]', {
              src: user.avatar_url,
              alt: user.login
            })
          ]),
          m('.p-a-sm.inline-block', [
            m('a.h4.card-title.link-kakuzuke.bold.m-y-sm.m-r-sm.inline-block', {
              href: '/ranking/' + user.login,
              config: m.route
            }, user.login),
            m('a.link-muted[target=_blank]', {
              href: 'https://github.com/' + user.login
            }, m('i.fa.fa-github-alt')),
            m('h6', [
              m('span.text-muted.m-r-sm', 'Current streak'),
              user.current_streak + ' days'
            ])
          ])
        ])
      ]);
    });
  };

  ranking.loading = function() {
    return m('.p-y-lg.text-center.text-kakuzuke', [
      m('i.fa.fa-refresh.fa-spin.fa-5x')
    ]);
  }
})();
