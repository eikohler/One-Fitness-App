import React from 'react';
import { View, ScrollView } from 'react-native';
import { mainStyles } from '@/constants/Styles';
import Button from '@/components/Button';
import { useSQLiteContext } from 'expo-sqlite';
import { useEffect, useState } from 'react';
import { getSingleRoutine } from '@/utilities/db-functions';
import { Routine } from '@/constants/Interfaces';
import { router, useLocalSearchParams } from 'expo-router';
import PageHeading from '@/components/PageHeading';
import Header from '@/components/Header';
import { deleteRoutineAlert } from '@/utilities/helpers';
import { useIsFocused } from '@react-navigation/native';

export default function Routines() {

  const db = useSQLiteContext();

  const isFocused = useIsFocused();

  const [routine, setRoutine] = useState<Routine | undefined | null>(undefined);
  const urlParams = useLocalSearchParams() as {id: string};  

  useEffect(()=>{
    if(isFocused) fetchData();
  }, [isFocused]);

  useEffect(()=>{
      if(urlParams.id && !routine) fetchData();
    }, [urlParams]);
    
  const fetchData = () => {
    getSingleRoutine(db, urlParams.id)
        .then((res) => { 
          if(res) setRoutine(res);
        })
        .catch((err) => console.log(err));      
  }

  return (
      <View style={mainStyles.container}>

        <Header />        

        {routine && (<>
          <PageHeading title={routine.title} isFocused={isFocused}
          settings={[
            { title: "Edit Routine", func: ()=>router.push(`/edit-routine/${routine.routine_id}`) },
            { title: "Delete Routine", func: ()=>deleteRoutineAlert(db, routine.routine_id.toString(), routine.title) },
          ]}
          list={[routine.last_note]} />

          <ScrollView contentContainerStyle={{height: "80%", justifyContent: "center"}}>
            <View style={mainStyles.wrapper}>
              <View style={{ flexDirection: "row", justifyContent: "center" }}>
                <Button text={'Add Workout'} url={`/edit-routine/${routine.routine_id}`} />
              </View>      
            </View>
          </ScrollView>
        </>)}

      </View>
  );
}