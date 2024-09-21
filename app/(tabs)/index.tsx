import { View, StatusBar, Text, ScrollView } from 'react-native';
import { mainStyles } from '@/constants/Styles';
import Button from '@/components/Button';
import SlimList from "@/components/SlimList";
import { SQLiteProvider, useSQLiteContext } from 'expo-sqlite';
import { useEffect, useState } from 'react';
import { initDB, getRoutines, addRoutine, deleteRoutine } from '@/utilities/db-functions';
import { ListData, Routine } from '@/constants/Interfaces';
import { Href } from 'expo-router';
import PageHeading from '@/components/PageHeading';
import SettingsButton from '@/components/SettingsButton';

const RoutinesList = () => {
  const db = useSQLiteContext();

  const [routines, setRoutines] = useState<Routine[]>([]);

  const [listData, setListData] = useState<ListData[]>([]);

  useEffect(()=>{    

    // addRoutine(db, { title: "Workout Routine 1.0", last_note: "Need better form" });    

    getRoutines(db)
      .then((res)=>{ if(res) setRoutines(res); })
      .catch((err)=>console.log(err));
  }, []);

  useEffect(()=>{
    let newListData:ListData[] = [];
    
    routines.map((obj)=>{      
      newListData.push({title: obj.title, info: ["ID:"+obj.routine_id, obj.last_note], url: `/routines/${obj.routine_id}` as Href });
    });

    setListData(newListData);

  }, [routines]);

  return (
    <ScrollView style={mainStyles.container}>
      {routines.length === 0 ? (
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Button text={'Add Routine'} url={"/add-routine"} />
        </View>
      ) : (
        <SlimList data={listData} />
      )}
    </ScrollView>
  );
}

export default function Routines() {
  
  return (
    <SQLiteProvider databaseName="fitness.db" onInit={initDB}>
      <View style={mainStyles.container}>
        <StatusBar barStyle="light-content" />
        <View style={mainStyles.wrapper}>

          <PageHeading title={'Routines'}>
            <SettingsButton settings={[{title: "Add Routine", link: "/add-routine"}]} />
          </PageHeading>

          <RoutinesList />          

        </View>
      </View>
    </SQLiteProvider>
  );
}