var top = top || {};

(function() {
  'use strict';

  top.view = function(ctrl) {
    document.title = 'kakuzuke';

    return [
      m('.row'),
      m('.col-md-6', [
        m('.jumbotron.text-center.text-kakuzuke.p-y-lg', [
          m('i.fa.fa-github.fa-4x.m-r-md.animated.infinite.bounceLeft'),
          m('i.fa.fa-plus.fa-3x.m-r-md'),
          m('i.fa.fa-list-ol.fa-4x.animated.infinite.bounceRight')
        ])
      ]),
      m('.col-md-6', [
        m('h4', [
          'GitHub current streak runking of your followees by ',
          m('a.link-kakuzuke[href=http://golang.org/][target=_blank]', 'Golang'),
          ' & ',
          m('a.link-kakuzuke[href=https://lhorie.github.io/mithril/][target=_blank]', 'Mithril.js'),
          ' .'
        ]),
        m('h6.m-t-md', 'Please enter your GitHub username.'),
        m('.input-group', [
          m('.input-group-addon', [
            m('i.fa.fa-github-alt')
          ]),
          m('input#username.form-control.form-control-sm[type=text][placeholder=GitHub username]', {
            onkeypress: function(e) {
              if (e.keyCode == 13) {
                m.route('/ranking/' + document.getElementById('username').value);
              }
            }
          })
        ])
      ])
    ];
  };
})();
