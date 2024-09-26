import { View, StatusBar, ScrollView, Text } from 'react-native';
import { mainStyles } from '@/constants/Styles';
import Button from '@/components/Button';
import SlimList from "@/components/SlimList";
import { SQLiteProvider, useSQLiteContext } from 'expo-sqlite';
import { useEffect, useState } from 'react';
import { initDB, getRoutines, addRoutine, deleteRoutine } from '@/utilities/db-functions';
import { ListData, Routine } from '@/constants/Interfaces';
import { Href } from 'expo-router';
import PageHeading from '@/components/PageHeading';
import Header from '@/components/Header';
import TabBar from '@/components/TabBar';

const RoutinesList = () => {
  const db = useSQLiteContext();

  const [routines, setRoutines] = useState<Routine[]>([]);

  const [listData, setListData] = useState<ListData[]>([]);

  useEffect(() => {

    // addRoutine(db, { title: "Workout Routine 1.0", last_note: "Need better form" });    
    // deleteRoutine(db, "5");

    getRoutines(db)
      .then((res) => { if (res) setRoutines(res); })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    let newListData: ListData[] = [];

    routines.map((obj) => {
      newListData.push({ 
        title: obj.title, 
        info: ["ID:" + obj.routine_id, obj.last_note], 
        url: `/routines/${obj.routine_id}` as Href 
      });
    });

    setListData(newListData);

  }, [routines]);

  return (
    <ScrollView>
      <View style={mainStyles.wrapper}>
        {routines.length === 0 ? (
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Button text={'Create Routine'} url={"/add-routine"} />
          </View>
        ) : (
          <>
            <SlimList data={listData} />            
          </>
        )}
      </View>
    </ScrollView>
  );
}

export default function Routines() {

  return (
    <SQLiteProvider databaseName="fitness.db" onInit={initDB}>

      <View style={mainStyles.container}>

        <Header />

        <PageHeading title={'Routines'} 
        settings={[{ title: "Add Routine", link: "/add-routine" }]} />

        <RoutinesList />

      </View>

      <TabBar active={'Routines'} />

      <StatusBar barStyle="light-content" />
    </SQLiteProvider>
  );
}