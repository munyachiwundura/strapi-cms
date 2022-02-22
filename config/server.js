module.exports = ({ env }) => ({
  host: env('MY_HEROKU_URL', '0.0.0.0'),
  // port: env.int('PORT', 1337),
  port: env.int(process.env.PORT , 8080),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
