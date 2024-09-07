import { type SQLiteDatabase } from 'expo-sqlite';

interface Routine {
    routine_id: number
    title: string
    last_note: string
}

export const initDB = async (db: SQLiteDatabase) => {
    try {
        await db.execAsync(`
        PRAGMA journal_mode = WAL;
        CREATE TABLE IF NOT EXISTS routines (
          routine_id INTEGER PRIMARY KEY,
          title VARCHAR(100) NOT NULL,
          last_note VARCHAR(100)
        );  

        CREATE TABLE IF NOT EXISTS workouts (
            workout_id INTEGER PRIMARY KEY,
            title VARCHAR(100) NOT NULL,
            last_date DATETIME,
            last_note VARCHAR(100)
        );

        CREATE TABLE IF NOT EXISTS exercises (
            exercise_id INTEGER PRIMARY KEY,
            title VARCHAR(100) NOT NULL UNIQUE,
            ex_description VARCHAR(100)
        );

        CREATE TABLE IF NOT EXISTS routine_workouts (
            routine_workout_id INTEGER PRIMARY KEY,
            routine_id INTEGER,
            workout_id INTEGER,
            FOREIGN KEY (routine_id) REFERENCES routines (routine_id),
            FOREIGN KEY (workout_id) REFERENCES workouts (workout_id)
        );

        CREATE TABLE IF NOT EXISTS workout_exercises (
            workout_exercise_id INTEGER PRIMARY KEY,
            workout_id INTEGER, 
            exercise_id INTEGER,
            sets_count INTEGER NOT NULL,
            reps_count INTEGER NOT NULL,
            last_note VARCHAR(100),
            FOREIGN KEY (workout_id) REFERENCES workouts (workout_id),
            FOREIGN KEY (exercise_id) REFERENCES exercises (exercise_id)
        );

        CREATE TABLE IF NOT EXISTS ex_sets (
            set_id INTEGER PRIMARY KEY,
            exercise_id INTEGER,
            set_value INTEGER NOT NULL,
            FOREIGN KEY (exercise_id) REFERENCES exercises (exercise_id)
            UNIQUE(exercise_id, set_value)
        );

        CREATE TABLE IF NOT EXISTS ex_reps (
            reps_id INTEGER PRIMARY KEY,
            set_id INTEGER,
            reps_value INTEGER NOT NULL,
            reps_weight FLOAT NOT NULL,
            reps_rir INTEGER NOT NULL,
            note VARCHAR(100),
            date_completed DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (set_id) REFERENCES ex_sets (set_id)
            UNIQUE(set_id, reps_value)
        );
      `)
        console.log("DB initialized");
    } catch (err) {
        console.log("Error while initializing DB: ", err);
    }
}


export const getRoutines = async (db: SQLiteDatabase) : Promise<Routine[] | undefined> => {
    try {
        return await db.getAllAsync('SELECT * FROM routines');
    } catch (err) {
        console.log("Error while loading routines: ", err);
    }
}

export const addRoutine = async (db: SQLiteDatabase, newRoutine: { title: string; last_note: string }) : Promise<Routine[] | undefined> => {
    try {
        const query = await db.prepareAsync(`INSERT INTO routines (title, last_note) VALUES (?, ?)`);
        await query.executeAsync(newRoutine.title, newRoutine.last_note);
        return await getRoutines(db);        
    } catch (err) {
        console.log("Error while adding routine: ", err);
    }
}