;(function (w, d, s, l, i) {
  w[l] = w[l] || []
  w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' })
  var f = d.getElementsByTagName(s)[0]
  var j = d.createElement(s)
  var dl = l !== 'dataLayer' ? '&l=' + l : ''
  j.async = true
  j.src =
    'https://www.googletagmanager.com/gtm.js?id=' +
    i +
    dl +
    '&gtm_auth=B33RyIMrmvXRoP352_0zkw&gtm_preview=env-3&gtm_cookies_win=x'
  f.parentNode.insertBefore(j, f)
})(window, document, 'script', 'dataLayer', 'GTM-NZHDPTS')
