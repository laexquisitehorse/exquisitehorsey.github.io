function home() {
  var win = window.open()
  var url = "index.html"
  var iframe = win.document.createElement('iframe')
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.border = "none";
  iframe.src = url
  win.document.body.appendChild(iframe)
}

function youtube() {
  var win = window.open()
  var url = "proxy.html"
  var iframe = win.document.createElement('iframe')
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.border = "none";
  iframe.src = url
  win.document.body.appendChild(iframe)
}