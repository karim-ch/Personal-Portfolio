!(function (d, t, s, c) {
  s = d.createElement(t)
  s.src = "https://widget.indemand.ly/launcher.js"
  s.onload = function () {
    indemandly = new Indemandly({ domain: "karim" })
  }
  c = d.getElementsByTagName(t)[0]
  c.parentNode.insertBefore(s, c)
})(document, "script")
