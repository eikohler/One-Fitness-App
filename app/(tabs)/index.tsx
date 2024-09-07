import { View, StatusBar, Text } from 'react-native';
import { mainStyles } from '@/constants/Styles';
import Button from '@/components/Button';
import SlimList from "@/components/SlimList";
import { SQLiteProvider, useSQLiteContext } from 'expo-sqlite';
import { useEffect, useState } from 'react';
import { initDB, getRoutines, addRoutine } from '@/utilities/db-functions';
import { ListData } from '@/constants/Interfaces';
import { Href } from 'expo-router';

interface Routine{
  routine_id: number
  title: string
  last_note: string
}

const RoutinesList = () => {
  const db = useSQLiteContext();

  const [routines, setRoutines] = useState<Routine[]>([]);

  const [listData, setListData] = useState<ListData[]>([]);

  useEffect(()=>{
    // addRoutine({title: "Workout Routine 1.0", last_note: "Good workout week"});
    getRoutines(db)
      .then((res)=>{ if(res) setRoutines(res); })
      .catch((err)=>console.log(err));
  }, []);

  useEffect(()=>{
    let newListData:ListData[] = [];
    
    routines.map((obj)=>{      
      newListData.push({title: obj.title, info: [], url: `/routines/${obj.routine_id}` as Href });
    });

    setListData(newListData);

  }, [routines]);

  return (
    <View>
      {routines.length === 0 ? (
        <Text style={{color: "#fff"}}>No Routines to Load</Text>
      ) : (
        <>
          <SlimList data={listData} />
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

          <RoutinesList />

          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Button text={'Add Routine'} />
          </View>

        </View>
      </View>
    </SQLiteProvider>
  );
}