import { View, StatusBar, Text } from 'react-native';
import { mainStyles } from '@/constants/GlobalStyles';
import Button from '../../components/Button';
import { SQLiteProvider, useSQLiteContext, type SQLiteDatabase } from 'expo-sqlite';
import { useEffect, useState } from 'react';

interface Routine{
  routine_id: number
  title: string
  last_note: string
}

const initDB = async (db: SQLiteDatabase) => {
  try {
    await db.execAsync(`
      PRAGMA journal_mode = WAL;
      CREATE TABLE IF NOT EXISTS routines (
        routine_id INTEGER PRIMARY KEY,
        title VARCHAR(100) NOT NULL,
        last_note VARCHAR(100)
      );  
    `)
    console.log("DB initialized");
  } catch (err) {
    console.log("Error while initializing DB: ", err);
  }
}

const Content = () => {
  const db = useSQLiteContext();

  const [routines, setRoutines] = useState<Routine[]>([]);
  
  const getRoutines = async () => {
    try {
      const allRows:Routine[] = await db.getAllAsync('SELECT * FROM routines');
      setRoutines(allRows);
    } catch(err) {
      console.log("Error while loading routines: ", err);
    }
  }

  const addRoutine = async (newRoutine: {title: string; last_note: string}) => {
    try {
      const query = await db.prepareAsync(`INSERT INTO routines (title, last_note) VALUES (?, ?)`);
      await query.executeAsync(newRoutine.title, newRoutine.last_note);
      await getRoutines();
    } catch (err) {
      console.log("Error while adding routine: ", err);
    }
  }

  useEffect(()=>{
    // addRoutine({title: "Workout Routine 1.0", last_note: "Good workout week"});
    getRoutines();
  }, []);

  return (
    <View>
      {routines.length === 0 ? (
        <Text style={{color: "#fff"}}>No Routines to Load</Text>
      ) : (
        <>
          {routines.map((obj, index) => {
            return (
              <Text style={{color: "#fff"}} key={`routine-${index}`}>
                {obj.routine_id} - {obj.title} - {obj.last_note}
              </Text>
            )
          })}
        </>
      )}
    </View>
  );
}

export default function Routines() {
  return (
    <SQLiteProvider databaseName="fitness.db" onInit={initDB}>
      <View style={mainStyles.container}>
        <StatusBar barStyle="light-content" />
        <View style={mainStyles.wrapper}>

          <Content />

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Button text={'Add Routine'} />
          </View>

        </View>
      </View>
    </SQLiteProvider>
  );
}