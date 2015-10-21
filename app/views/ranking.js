var ranking = ranking || {};

(function() {
  'use strict';

  ranking.view = function(ctrl) {
    document.title = ctrl.username() + ' | kakuzuke';

    if (!ranking.loaded()) {
      return ranking.loading();
    }

    if (ranking.status() !== '') {
      return ranking.error();
    }

    return ranking.show();
  };

  ranking.loading = function() {
    return m('.p-y-lg.text-center.text-kakuzuke', [
      m('i.fa.fa-refresh.fa-spin.fa-5x')
    ]);
  }

  ranking.error = function() {
    return m('.p-y-lg.text-center.text-muted', [
      m('i.fa.fa-bug.fa-5x.m-b-sm'),
      m('h4', ranking.status())
    ]);
  }

  ranking.show = function() {
    return ranking.list().map(function(user, rank) {
      return m('.card.animated.fadeInUp', {
        class: user.me ? 'bg-kakuzuke' : '',
        style: animationDelay(rank)
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
            }, [
              m('i.fa.fa-github-alt')
            ]),
            m('h6', [
              m('span.text-muted.m-r-sm', 'Current streak'),
              user.current_streak + ' days'
            ])
          ])
        ])
      ]);
    })
  };
})();
