
var qs = new URLSearchParams(location.search)

if (qs.get('access_token')) {
  chrome.storage.sync.set({token: qs.get('access_token')})
}

chrome.storage.sync.get('token', (token) => {
  console.log(Object.keys(token).length ? token : 'No token found!')
})
