
chrome.browserAction.onClicked.addListener(() => {
  chrome.tabs.create({url: 'http://localhost:3000/connect/github/extension'})
})
