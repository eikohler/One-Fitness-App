import React from 'react';
import { View, Text, Pressable, StyleSheet, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { mainStyles } from '@/constants/Styles';
import Button from '@/components/Button';
import { useSQLiteContext } from 'expo-sqlite';
import { getRoutinesCount, getSingleRoutine, initDB, updateRoutine } from '@/utilities/db-functions';
import { colors } from '@/constants/Colors';
import { router, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { Routine } from '@/constants/Interfaces';
import { dynamicFS } from '@/utilities/helpers';

export default function EditRoutine() {

    const db = useSQLiteContext();
    
    const titleMax = 30, titleMin = 16, titleTotal = 100;
    const [titleFS, setTitleFS] = useState(30);

    const [routinesCount, setRoutinesCount] = useState<number>();
    const [routine, setRoutine] = useState<Routine | undefined | null>(undefined);
    const [title, setTitle] = useState<string>();
    const [notes, setNotes] = useState<string>();
    const urlParams = useLocalSearchParams() as {id: string};

    useEffect(() => {
        getRoutinesCount(db)
            .then((res) => { if (res) setRoutinesCount(res.count + 1); })
            .catch((err) => console.log(err));
    }, []);

    useEffect(()=>{
        if(urlParams.id && !routine){
            getSingleRoutine(db, urlParams.id)
                .then((res) => {
                    if(res) setRoutine(res);                    
                })
                .catch((err) => console.log(err));
        }
    }, [urlParams]);

    useEffect(()=>{
        if(routine){
            setTitle(routine.title);
            setNotes(routine.last_note);
            setTitleFS(dynamicFS(routine.title.length, titleMin, titleMax, titleTotal));
        }
    }, [routine]);

    const saveRoutine = () => {
        if(routine){
            updateRoutine(db, { title: title ? title : `Routine ${routinesCount}.0`, last_note: notes ? notes : "", id: routine.routine_id })
                .then((res) => {
                    router.back();
                })
                .catch((err) => console.log(err));
        }
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>

            <View style={mainStyles.container}>

                <View style={mainStyles.wrapper}>
                    <View style={styles.optionButtonsWrapper}>
                        <Pressable onPress={() => router.back()}>
                            <Text style={styles.optionButtons}>Cancel</Text>
                        </Pressable>
                        <Pressable onPress={() => saveRoutine()}>
                            <Text style={styles.optionButtons}>Save</Text>
                        </Pressable>
                    </View>
        
                    <TextInput
                        style={[styles.input, {fontSize: titleFS}]}
                        onChangeText={(text)=>{
                            setTitle(text);
                            setTitleFS(dynamicFS(text.length, titleMin, titleMax, titleTotal));
                        }}
                        value={title}
                        placeholder={`Routine ${routinesCount}.0`} 
                        maxLength={titleTotal}
                    />
        
                    <TextInput
                        style={styles.notesInput}
                        multiline={true}
                        numberOfLines={4}
                        maxLength={100}
                        onChangeText={setNotes}
                        value={notes}
                        placeholder="Description"
                    />
                </View>                

            </View>

        </TouchableWithoutFeedback>
    );
}


const styles = StyleSheet.create({
    optionButtonsWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
        marginBottom: 20
    },
    optionButtons: {
        color: colors.primaryText,
        textTransform: "uppercase",
        fontSize: 20,
        letterSpacing: 1
    },
    input: {
        paddingVertical: 10,
        color: colors.primaryText,
        fontWeight: "700",
        letterSpacing: 1,
        marginBottom: 5,
        marginTop: 10
    },
    notesInput: {
        borderColor: colors.primaryText,
        borderWidth: 1,
        borderRadius: 6,
        padding: 10,
        fontSize: 16,
        color: colors.primaryText,
        letterSpacing: 0.5,
        marginBottom: 50,
        height: 100
    }
});