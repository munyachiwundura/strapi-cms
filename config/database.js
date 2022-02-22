const parse = require('pg-connection-string').parse;
const path = require('path');

module.exports = ({ env }) => {

  if (env('NODE_ENV') === 'production') {
    const config = parse(process.env.DATABASE_URL)
    return {
      defaultConnection: 'default',
      connections: {
        default: {
          connector: 'bookshelf',
          settings: {
            client: 'postgres',
            host: config.host,
            port: config.port,
            database: config.database,
            username: config.user,
            password: config.password
          },
          options: {
            ssl: false
          }
        }
      }
    }
  }

return {
  defaultConnection: {
    client: 'sqlite',
    connection: {
      filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
    },
    useNullAsDefault: true,
  },
}};
