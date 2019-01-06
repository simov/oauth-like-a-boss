
# OAuth Like a BOSS

> _Once And For All_

## How

1. Create [OAuth App] on GitHub, and set its _Authorization callback URL_ to `http://localhost:3000/connect/github/callback`
2. Replace all instances of `APP_ID` and `APP_SECRET` in `grant/config.json` and in `server/app.go` with your actual [OAuth App] credentials
3. Load the `chrome` folder as _Unpacked Extension_ in Chrome
4. Execute `cd grant/; npm i; node app.js`
5. Execute `go run server/app.go`


## Login

Chapter | Login
:--- | :---
_The Usual Stuff_ | Navigate to http://localhost:3000/login, pick a scope and click the Login button
_Login From Another Host_ | Navigate to https://simov.github.io/oauth-like-a-boss/ and click the Login button
_Login From Browser Extension_ | Click the extension button to the right of the browser's address bar
_Login From Another Language_ | Navigate to http://localhost:4000/login

> _In all cases take a look at the console to see the access token_

  [OAuth App]: https://github.com/settings/applications/new
