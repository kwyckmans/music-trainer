
import { browser } from '$app/environment';

let db: any = null;

export async function initializeDatabase() {
  if (!browser) {
    return null;
  }

  if (db) {
    return db;
  }

  const SQLite = await import('@sqlite.org/sqlite-wasm');
//   const sqlite = await SQLite.
  db = await SQLite.default();
  console.log('Database initialized');
  return db;
}

export async function closeDatabase() {
  if (!browser) {
    return;
  }

  if (db) {
    await db.close();
    db = null;
    console.log('Database closed');
  }
}

export async function getDatabase() {
  if (!browser) {
    return null;
  }

  if (!db) {
    await initializeDatabase();
  }
  return db;
}