console.log("SERVER IS RUNNING.");

const { auth } = require('express-openid-connect');

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'secret',
  baseURL: 'https://joehawkens.github.io/index.html',
  clientID: 'hynsEG2zks4qUJ0Et8MN1Azt1r9NIEn5',
  issuerBaseURL: 'https://dev-gc9an4sn.us.auth0.com'
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});
