import { Sequelize } from 'sequelize';
import dotenv from 'dotenv'

dotenv.config()

const sequelize = new Sequelize('test-db', 'user', 'pass', {
  dialect: 'sqlite',
  host: './dev.sqlite',
})

export default sequelize;