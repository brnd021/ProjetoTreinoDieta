import { conectar } from '../config/database.js';

export async function initDatabase() {
    const db = await conectar();

    await db.exec(`
         CREATE TABLE IF NOT EXISTS roles(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL
        );

        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL,
            birth_date DATE, 
            gender TEXT, 
            height REAL,
            role_id INTEGER,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (role_id) REFERENCES roles(id)
        );
        
        CREATE TABLE IF NOT EXISTS food(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            valor_energetico REAL NOT NULL,
            carboidratos REAL NOT NULL,
            acucar REAL NOT NULL,
            proteinas REAL NOT NULL,
            gorduras_totais REAL NOT NULL,
            fibras REAL NOT NULL,
            sodio REAL NOT NULL,
            add_by INTEGER,
            FOREIGN KEY (add_by) REFERENCES users(id)
        );

        CREATE TABLE IF NOT EXISTS exercises(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            muscle_group TEXT NOT NULL,
            equipment TEXT,
            difficulty TEXT,
            add_by INTEGER,
            FOREIGN KEY (add_by) REFERENCES users(id)
        );

        CREATE TABLE IF NOT EXISTS evaluations (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER,
            weight REAL,
            arm REAL,
            leg REAL,
            waist REAL,
            chest REAL,
            hip REAL,
            body_fat REAL,
            imc REAL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users(id)
        );

        `)
}
