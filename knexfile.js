// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3', // driver to use
    connection: {
      filename: './data/carsdb.db3', //db to use
    },
    useNullAsDefault: true, //just required for sqlite3
    migrations: {
      directory: './data/migrations', //migrations
    },
    seeds: {
      directory: './data/seeds', //seeds
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
