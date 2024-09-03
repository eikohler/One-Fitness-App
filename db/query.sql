-- CREATE TABLE routines (
--     routine_id INTEGER PRIMARY KEY,
--     title VARCHAR(100) NOT NULL,
--     last_note VARCHAR(100)
-- );

-- CREATE TABLE workouts (
--     workout_id INTEGER PRIMARY KEY,
--     title VARCHAR(100) NOT NULL,
--     last_date DATETIME,
--     last_note VARCHAR(100)
-- );

-- CREATE TABLE exercises (
--     exercise_id INTEGER PRIMARY KEY,
--     title VARCHAR(100) NOT NULL UNIQUE,
--     ex_description VARCHAR(100)
-- );

-- CREATE TABLE routine_workouts (
--     routine_workout_id INTEGER PRIMARY KEY,
--     routine_id INTEGER,
--     workout_id INTEGER,
--     FOREIGN KEY (routine_id) REFERENCES routines (routine_id),
--     FOREIGN KEY (workout_id) REFERENCES workouts (workout_id)
-- );

-- CREATE TABLE workout_exercises (
--     workout_exercise_id INTEGER PRIMARY KEY,
--     workout_id INTEGER, 
--     exercise_id INTEGER,
--     sets_count INTEGER NOT NULL,
--     reps_count INTEGER NOT NULL,
--     last_note VARCHAR(100),
--     FOREIGN KEY (workout_id) REFERENCES workouts (workout_id),
--     FOREIGN KEY (exercise_id) REFERENCES exercises (exercise_id)
-- );

-- CREATE TABLE ex_sets (
--     set_id INTEGER PRIMARY KEY,
--     exercise_id INTEGER,
--     set_value INTEGER NOT NULL,
--     FOREIGN KEY (exercise_id) REFERENCES exercises (exercise_id)
--     UNIQUE(exercise_id, set_value)
-- );

-- CREATE TABLE ex_reps (
--     reps_id INTEGER PRIMARY KEY,
--     set_id INTEGER,
--     reps_value INTEGER NOT NULL,
--     reps_weight FLOAT NOT NULL,
--     reps_rir INTEGER NOT NULL,
--     note VARCHAR(100),
--     date_completed DATETIME DEFAULT CURRENT_TIMESTAMP,
--     FOREIGN KEY (set_id) REFERENCES ex_sets (set_id)
--     UNIQUE(set_id, reps_value)
-- );


-- INSERT INTO routines (title) VALUES ("Workout Routine 1.0");

-- INSERT INTO workouts (title) VALUES ("Chest, Shoulders and Back");

-- INSERT INTO exercises (title) VALUES ("Bench Press");

-- INSERT INTO routine_workouts (routine_id, workout_id) VALUES (1, 1);

-- INSERT INTO workout_exercises (workout_id, exercise_id, sets_count, reps_count) VALUES (1, 1, 4, 10);

-- INSERT INTO ex_sets (exercise_id, set_value) VALUES (1, 1);
-- INSERT INTO ex_sets (exercise_id, set_value) VALUES (1, 2);
-- INSERT INTO ex_sets (exercise_id, set_value) VALUES (1, 3);
-- INSERT INTO ex_sets (exercise_id, set_value) VALUES (1, 4);

-- INSERT INTO ex_reps (set_id, reps_value, reps_weight, reps_rir) VALUES (1, 10, 90, 2);
-- INSERT INTO ex_reps (set_id, reps_value, reps_weight, reps_rir) VALUES (2, 10, 95, 1);
-- INSERT INTO ex_reps (set_id, reps_value, reps_weight, reps_rir) VALUES (3, 10, 100, 0);
-- INSERT INTO ex_reps (set_id, reps_value, reps_weight, reps_rir) VALUES (4, 10, 105, -1);