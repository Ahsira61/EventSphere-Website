import Database from "better-sqlite3";
import path from "node:path";
import fs from "node:fs";

const dataDir = path.resolve("data");
fs.mkdirSync(dataDir, {recursive:true});
const db = new Database(path.join(dataDir, "eventsphere.db"));

db.pragma("journal_mode = WAL");
db.exec(`
  CREATE TABLE IF NOT EXISTS inquiries (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    event_type TEXT NOT NULL,
    event_date TEXT,
    guests INTEGER,
    message TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  );
`);

export default db;
