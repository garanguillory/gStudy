
module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/gStudy'
  },
  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL
  }
};

