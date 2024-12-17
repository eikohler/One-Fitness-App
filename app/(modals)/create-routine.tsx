import React, { useEffect } from 'react';
import { View, Text, Pressable, StyleSheet, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { mainStyles } from '@/constants/Styles';
import { useSQLiteContext } from 'expo-sqlite';
import { addRoutine, getRoutinesCount, initDB } from '@/utilities/db-functions';
import { colors } from '@/constants/Colors';
import { router } from 'expo-router';
import { useState } from 'react';


export default function CreateRoutine() {

    const db = useSQLiteContext();
    
    const [routinesCount, setRoutinesCount] = useState<number>();
    const [title, setTitle] = useState<string>();
    const [notes, setNotes] = useState<string>();

    useEffect(() => {
        getRoutinesCount(db)
            .then((res) => { if (res) setRoutinesCount(res.count + 1); })
            .catch((err) => console.log(err));
    }, []);

    const saveRoutine = () => {
        addRoutine(db, { title: title ? title : `Routine ${routinesCount}.0`, last_note: notes ? notes : "" })
            .then((res) => {
                router.back();
                router.push(`/routines/${res?.lastInsertRowId}`);
            })
            .catch((err) => console.log(err));
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
                        style={styles.input}
                        onChangeText={setTitle}
                        value={title}
                        placeholder={`Routine ${routinesCount}.0`}
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
        fontSize: 30,
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