/* eslint-disable */
const path = require('path')

module.exports = {
  type: 'mysql',
  migrationsRun: process.env.NODE_ENV === 'production',
  synchronize: process.env.NODE_ENV === 'development',
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  host: 'database',
  entities: [
    path.join(__dirname, 'src', 'entities', '*.ts')
  ],
  migrations: [
    path.join(__dirname, 'src', 'migrations', '*.ts')
  ],
  cli: {
    migrationsDir: "src/migrations",
    entitiesDir: "src/entities"
  }
}
