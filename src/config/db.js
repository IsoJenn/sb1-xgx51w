import sql from 'mssql';
import { logger } from '../utils/logger.js';

const config = {
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  options: {
    encrypt: true,
    trustServerCertificate: true
  }
};

export async function getDbConnection() {
  try {
    const pool = await sql.connect(config);
    return pool;
  } catch (err) {
    logger.error('Database connection error:', err);
    throw new Error('Failed to connect to database');
  }
}