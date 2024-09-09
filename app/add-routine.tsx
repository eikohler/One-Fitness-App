import { View, StatusBar, Text, Pressable, StyleSheet, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { mainStyles } from '@/constants/Styles';
import Button from '@/components/Button';
import { SQLiteProvider, useSQLiteContext } from 'expo-sqlite';
import { initDB } from '@/utilities/db-functions';
import { colors } from '@/constants/Colors';
import { Link } from 'expo-router';
import { useState } from 'react';

const AddOptions = () => {
    const db = useSQLiteContext();

    const [title, setTitle] = useState<string>();
    const [notes, setNotes] = useState<string>();

    const saveRoutine = () => {
        // addRoutine(db, { title: title, last_note: "" });
        console.log('Test Save');
    }


    return (
        <>
            <View style={styles.optionButtonsWrapper}>
                <Link href={"/"} style={styles.optionButtons}>Cancel</Link>
                <Pressable onPress={() => saveRoutine()}>
                    <Text style={styles.optionButtons}>Save</Text>
                </Pressable>
            </View>

            <TextInput
                style={styles.input}
                onChangeText={setTitle}
                value={title}
                placeholder="Routine Name"
            />

            <TextInput
                style={styles.notesInput}
                multiline={true}
                numberOfLines={4}
                maxLength={100}
                onChangeText={setNotes}
                value={notes}
                placeholder="Notes"
            />
        </>
    )
}

export default function AddRoutine() {

    return (
        <SQLiteProvider databaseName="fitness.db" onInit={initDB}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View style={mainStyles.container}>
                    <StatusBar barStyle="light-content" />
                    <View style={mainStyles.wrapper}>

                        <AddOptions />

                        <View style={{ flexDirection: "row", justifyContent: "center" }}>
                            <Button text={'Add Workout'} url={"/add-routine"} />
                        </View>

                    </View>
                </View>
            </TouchableWithoutFeedback>
        </SQLiteProvider>
    );
}

const styles = StyleSheet.create({
    optionButtonsWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 20
    },
    optionButtons: {
        color: colors.primaryText,
        textTransform: "uppercase",
        fontSize: 18,
        letterSpacing: 1
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: colors.primaryText,
        paddingVertical: 10,
        color: colors.primaryText,
        fontSize: 22,
        fontWeight: "700",
        letterSpacing: 1,
        marginBottom: 30,
    },
    notesInput: {
        borderColor: colors.primaryText,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        color: colors.primaryText,
        letterSpacing: 0.5,
        marginBottom: 50,
        height: 100
    }
});