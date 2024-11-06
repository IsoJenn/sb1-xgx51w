import { getDbConnection } from '../config/db.js';
import { logger } from '../utils/logger.js';

export async function queryDatabase(query) {
  try {
    const pool = await getDbConnection();
    const result = await pool.request().query(query);
    return result.recordset;
  } catch (error) {
    logger.error('Database query error:', error);
    throw new Error('Failed to execute database query');
  }
}

export async function getContextData(topic) {
  // Example function to get relevant data based on user's question
  const query = `
    SELECT TOP 5 *
    FROM your_table
    WHERE topic LIKE '%${topic}%'
  `;
  return await queryDatabase(query);
}