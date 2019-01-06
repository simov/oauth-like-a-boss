
var express = require('express')
var session = require('express-session')
var parser = require('body-parser')
var grant = require('grant-express')


express()
  .use(session({secret: 'dev.to', saveUninitialized: true, resave: true}))
  .use(parser.urlencoded({extended: true}))
  .use(grant(require('./config.json')))
  .get('/login', (req, res) => {
    res.writeHead(200, {'content-type': 'text/html'})
    res.end(`
      <!DOCTYPE html>
      <form action="/connect/github" method="POST">
        <p>Grant read/write access to:</p>
        <label>
          <input type="radio" group="scope" name="scope" value="repo" />
          public and private repositories</label>
        <label>
          <input type="radio" group="scope" name="scope" value="public_repo" />
          public repositories only</label>
        <button>Login</button>
      </form>
    `)
  })
  .get('/hello', (req, res) => {
    var {access_token} = req.session.grant.response
    console.log(access_token)
    res.end('nice!')
  })
  .listen(3000)
