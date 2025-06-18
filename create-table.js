import { sql } from './db.js';

async function createTable() {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS videos (
        title TEXT,
        description TEXT,
        duration INTEGER
      );
    `;
    console.log('Tabela criada com sucesso!');
  } catch (error) {
    console.error('Erro ao criar tabela:', error);
  } finally {
    process.exit();
  }
}

createTable();
