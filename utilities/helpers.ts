import { SQLiteDatabase } from "expo-sqlite";
import { deleteRoutine } from "./db-functions";
import { Alert } from "react-native";
import { router } from "expo-router";

export const deleteRoutineAlert = (db: SQLiteDatabase, id: string, title: string) => {
    Alert.alert('Delete Routine?', `Are you sure you want to delete ${title}?`, [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
            text: 'Delete', 
            onPress: () => {
                console.log('Delete Pressed')
                deleteRoutine(db, id);
                router.push('/');
            },
            style: 'destructive'
        },
    ]);
} 


export const dynamicFS = (length: number, min: number, max: number, total: number) => {
    const range = max - min;
    return max - (range * length / total);
}