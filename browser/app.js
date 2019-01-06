
var login = () => {
  localStorage.setItem('redirect', location.href)
  var callback = encodeURIComponent(location.origin + location.pathname)
  location.href = `http://localhost:3000/connect/github/stars?callback=${callback}`
}

var qs = new URLSearchParams(location.search)

if (qs.get('access_token')) {
  localStorage.setItem('token', qs.get('access_token'))
  location.href = localStorage.getItem('redirect')
  localStorage.removeItem('redirect')
}

console.log(localStorage.getItem('token') || 'No token found!')

window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('button').addEventListener('click', login)
})
