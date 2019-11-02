/*
** create by https://github.com/d1y
** Most of them are their own personal collections. If you like, give me a star🍓.
** repo: https://github.com/d1y/dotav
** If you have any good porn sites, you can ask questions or email me.
** mail: chenhonzhou@gmail.com
*/

const CnSites = require('./xo')

module.exports = [
  {
    site: 'https://pronhub.com',
    name: 'pronhub',
    desc: '世界上最大的色情网站',
    city: 'Canada',
    favicon: 'https://ci.phncdn.com/www-static/favicon.ico',
    logo: 'https://ci.phncdn.com/www-static/images/pornhub_logo_straight.png',
    lang: [
      'English',
      'Deutsch',
      'Français',
      'Español',
      'Italiano',
      'Português',
      'Polski',
      'Русский',
      '日本語',
      'Dutch',
      'Czech',
      '中文(简体)'
    ],
    types: [
      'videos'
    ],
    openApi: false,
    isFree: true, // TODO: Some are charged
    ads: true,
    blocked: true // Is the Chinese network accessible?
  },
  {
    site: 'https://xvideos.com',
    name: 'xvideos',
    desc: '逛完Pronhub就逛Xvideos',
    city: '',
    favicon: 'https://www.xvideos.com/favicon-32x32.png',
    logo: 'https://www.xvideos.com/apple-touch-icon.png',
    lang: [
      'English'
    ],
    types: [
      'videos'
    ],
    openApi: false,
    isFree: true,
    ads: true,
    blocked: true
  },
  {
    site: 'https://spankbang.com',
    name: 'spankbang',
    desc: '车很稳',
    city: '',
    favicon: 'https://spankbang.com/favicon.ico',
    logo: 'https://static.spankbang.com/static_desktop/Images/logo_desktop_v4@2x.png',
    lang: [
      'English'
    ],
    types: [
      'videos'
    ],
    openApi: false,
    isFree: true,
    ads: true,
    blocked: true
  },
  {
    site: 'https://youpron.com',
    name: 'youpron',
    desc: 'Pronhub 替代品',
    city: '',
    favicon: 'https://fs.ypncdn.com/cb/bundles/youpornwebfront/images/favicon.ico',
    logo: 'https://fs.ypncdn.com/cb/bundles/youpornwebfront/images/l_youporn_black.png',
    lang: [
      'English'
    ],
    types: [
      'videos'
    ],
    openApi: false,
    isFree: true,
    ads: true,
    blocked: true
  },
  {
    site: 'https://redtube.com',
    name: 'redtube',
    desc: '仿Youtube',
    city: '',
    favicon: 'https://ei.rdtcdn.com/www-static/cdn_files/redtube/icons/favicon.ico',
    logo: 'https://ei.rdtcdn.com/www-static/cdn_files/redtube/images/pc/logo/redtube_logo.png',
    lang: [
      'English'
    ],
    types: [
      'videos'
    ],
    openApi: false,
    isFree: true,
    ads: true,
    blocked: true
  },
  {
    site: 'https://avgle.com',
    name: 'Avgle',
    desc: '广告较少, 很良心, 免费',
    city: '台湾',
    favicon: 'https://avgle.com/favicon.ico',
    logo: 'https://avgle.com/images/logo/logo.png',
    lang: [
      'English',
      'Français',
      'Deutsch',
      'Dutch',
      'Español',
      'Italiano',
      'বাংলা',
      '简体中文',
      '繁体中文',
      '日本语'
    ],
    types: [
      'videos'
    ],
    openApi: true,
    apiDoc: 'https://avgle.github.io/doc',
    isFree: true,
    ads: true,
    blocked: true
  },
  {
    site: 'https://javzw.com',
    name: 'JAV中文网',
    desc: '国内良心车站, 广告少, 就是速度不咋地',
    city: '',
    favicon: 'https://cdn.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.3/dist/ico/favicon.ico',
    logo: 'https://cdn.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.3/dist/ico/apple-touch-icon-precomposed.png',
    lang: [
      '简体中文'
    ],
    types: [
      'videos'
    ],
    openApi: false,
    isFree: true,
    ads: true,
    blocked: false
  },
  {
    site: 'https://theporn.xyz/',
    back_site: [
      'https://theporn.cc'
    ],
    name: 'Thepron',
    desc: '国内仅存的车站之一',
    city: '',
    favicon: 'https://theporn.xyz/static/favicon.ico',
    logo: 'https://theporn.xyz/static/logo-tp.png',
    lang: [
      'English',
      '繁体中文',
      '简体中文'
    ],
    openApi: true,
    apiDoc: 'https://github.com/theporn/theporn.api/wiki',
    isFree: true,
    ads: true,
    blocked: false
  },
  ...CnSites
]