import dotenv from 'dotenv';
import { mongoMigrateCli } from 'mongo-migrate-ts';
dotenv.config();


const DB_CONNECTION = process.env.DB_CONNECTION_STRING || 'mongodb://localhost:27017';
const DB_NAME = process.env.DB_NAME || 'tedu-courses';

mongoMigrateCli({
  uri: DB_CONNECTION,
  database: DB_NAME,
  migrationsDir: __dirname,
  migrationsCollection: 'migrations_collection'
});