import { View, StatusBar, Text } from 'react-native';
import { mainStyles } from '@/constants/Styles';
import Button from '@/components/Button';
import SlimList from "@/components/SlimList";
import { SQLiteProvider, useSQLiteContext } from 'expo-sqlite';
import { useEffect, useState } from 'react';
import { initDB, getWorkouts, addWorkout, deleteWorkout } from '@/utilities/db-functions';
import { ListData, Workout } from '@/constants/Interfaces';
import { Href } from 'expo-router';
import PageHeading from '@/components/PageHeading';

const WorkoutsList = () => {
  const db = useSQLiteContext();

  const [workouts, setWorkouts] = useState<Workout[]>([]);

  const [listData, setListData] = useState<ListData[]>([]);

  useEffect(()=>{   
    // const date = new Date();
    // const last_date = date.toISOString();
    // addWorkout(db, { title: "Chest and Back", last_date: last_date, last_note: "Chest was good" });
    
    // deleteWorkout(db, "1");

    getWorkouts(db)
      .then((res)=>{ if(res) setWorkouts(res); })
      .catch((err)=>console.log(err));
  }, []);

  useEffect(()=>{
    let newListData:ListData[] = [];
    
    workouts.map((obj)=>{      
      newListData.push({title: obj.title, info: ["ID:"+obj.workout_id, "Date:"+obj.last_date, obj.last_note], url: `/workouts/${obj.workout_id}` as Href });
    });

    setListData(newListData);

  }, [workouts]);

  return (
    <>
      {workouts.length === 0 ? (
        <Text style={{color: "#fff"}}>No Workouts to Load</Text>
      ) : (
        <SlimList data={listData} />
      )}
    </>
  );
}

export default function Workouts() {
  
  return (
    <SQLiteProvider databaseName="fitness.db" onInit={initDB}>
      <View style={mainStyles.container}>
        <StatusBar barStyle="light-content" />
        <View style={mainStyles.wrapper}>

          <PageHeading title={'Workouts'} />

          <WorkoutsList />

          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Button text={'Add Workout'} />
          </View>

        </View>
      </View>
    </SQLiteProvider>
  );
}