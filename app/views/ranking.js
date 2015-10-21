var components = components || {};
var ranking = ranking || {};

(function() {
  'use strict';

  ranking.view = function(ctrl) {
    document.title = ctrl.username() + ' | kakuzuke';

    if (!ranking.loaded()) {
      return components.loading();
    }

    if (ranking.status() !== 200) {
      return components.error(ranking.status());
    }

    return ranking.show();
  };

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
