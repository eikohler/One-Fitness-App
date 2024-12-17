import { View, ScrollView } from 'react-native';
import { mainStyles } from '@/constants/Styles';
import Button from '@/components/Button';
import SlimList from "@/components/SlimList";
import { useSQLiteContext } from 'expo-sqlite';
import { useEffect, useState } from 'react';
import { getRoutines } from '@/utilities/db-functions';
import { ListData, Routine } from '@/constants/Interfaces';
import { Href, router } from 'expo-router';
import PageHeading from '@/components/PageHeading';
import Header from '@/components/Header';
import { useIsFocused } from '@react-navigation/native';

export default function Routines() {

  const db = useSQLiteContext();

  const [routines, setRoutines] = useState<Routine[] | undefined>(undefined);

  const [listData, setListData] = useState<ListData[]>([]);

  const isFocused = useIsFocused();

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(()=>{
    if(isFocused) fetchData();
  }, [isFocused])

  const fetchData = () =>{
    getRoutines(db)
      .then((res) => { if (res) setRoutines(res); })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    
    if(routines){
      let newListData: ListData[] = [];
      routines.map((obj) => {
        newListData.push({ 
          title: obj.title, 
          info: [obj.last_note], 
          url: `/routines/${obj.routine_id}` as Href 
        });
      });
      setListData(newListData);
    }

  }, [routines]);

  return (
    <View style={mainStyles.container}>

      <PageHeading title={'Routines'} isFocused={isFocused} 
      settings={[{ title: "Create Routine", func: ()=>router.push("/create-routine") }]} />

      <ScrollView contentContainerStyle={routines?.length ? {} : {height: "80%", justifyContent: "center"}}>
        <View style={mainStyles.wrapper}>        
          {routines?.length ? (<SlimList data={listData} />)
          : (<View style={{ flexDirection: "row", justifyContent: "center" }}>
              <Button text={'Create Routine'} url={"/create-routine"} />
            </View>)}
        </View>
      </ScrollView>

    </View>
  );
}