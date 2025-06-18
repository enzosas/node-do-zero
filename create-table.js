import { sql } from './db.js';

// sql`DROP TABLE IF EXISTS videos;`.then(() => {
//   console.log('Tabela apagada!');
// });

// async function createTable() {
//   try {
//     await sql`
//       CREATE TABLE IF NOT EXISTS videos (
//         title TEXT,
//         description TEXT,
//         duration INTEGER
//       );
//     `;
//     console.log('Tabela criada com sucesso!');
//   } catch (error) {
//     console.error('Erro ao criar tabela:', error);
//   } finally {
//     process.exit();
//   }
// }

// createTable();

sql`
  CREATE TABLE videos (
    id TEXT PRIMARY KEY,
    title TEXT,
    description TEXT,
    duration INTEGER
  );
`.then(() => {
  console.log('Tabela criada!');
});
