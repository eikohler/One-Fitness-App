import { View, StatusBar, Text } from 'react-native';
import { mainStyles } from '@/constants/Styles';
import Button from '@/components/Button';
import SlimList from "@/components/SlimList";
import { SQLiteProvider, useSQLiteContext } from 'expo-sqlite';
import { useEffect, useState } from 'react';
import { initDB, getExercises, addExercise, deleteExercise } from '@/utilities/db-functions';
import { ListData, Exercise } from '@/constants/Interfaces';
import { Href } from 'expo-router';
import PageHeading from '@/components/PageHeading';

const ExercisesList = () => {
  const db = useSQLiteContext();

  const [exercises, setExercises] = useState<Exercise[]>([]);

  const [listData, setListData] = useState<ListData[]>([]);

  useEffect(()=>{    

    // addExercise(db, { title: "Squats", ex_description: "Push bar through legs" });

    // deleteExercise(db, "2");

    getExercises(db)
      .then((res)=>{ if(res) setExercises(res); })
      .catch((err)=>console.log(err));
  }, []);

  useEffect(()=>{
    let newListData:ListData[] = [];
    
    exercises.map((obj)=>{      
      newListData.push({title: obj.title, info: ["ID:"+obj.exercise_id, obj.ex_description], url: `/exercises/${obj.exercise_id}` as Href });
    });

    setListData(newListData);

  }, [exercises]);

  return (
    <>
      {exercises.length === 0 ? (
        <Text style={{color: "#fff"}}>No Exercises to Load</Text>
      ) : (
        <SlimList data={listData} />
      )}
    </>
  );
}

export default function Exercises() {
  
  return (
    <SQLiteProvider databaseName="fitness.db" onInit={initDB}>
      <View style={mainStyles.container}>
        <StatusBar barStyle="light-content" />
        <View style={mainStyles.wrapper}>

          <PageHeading title={'Exercises'} />

          <ExercisesList />

          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Button text={'Add Exercise'} url={"/add-routine"} />
          </View>

        </View>
      </View>
    </SQLiteProvider>
  );
}