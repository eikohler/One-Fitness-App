import { View, StatusBar, Text, Pressable, StyleSheet, TextInput } from 'react-native';
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

    return (
        <>
            <View style={styles.optionButtonsWrapper}>
                <Link href={"/"} style={styles.optionButtons}>Cancel</Link>
                <Pressable>
                    <Text style={styles.optionButtons}>Save</Text>
                </Pressable>
            </View>

            <TextInput
                style={styles.input}
                onChangeText={setTitle}
                value={title}
                placeholder="Routine Name"
            />
        </>
    )
}

export default function AddRoutine() {

    return (
        <SQLiteProvider databaseName="fitness.db" onInit={initDB}>
            <View style={mainStyles.container}>
                <StatusBar barStyle="light-content" />
                <View style={mainStyles.wrapper}>

                    <AddOptions />

                    <View style={{ flexDirection: "row", justifyContent: "center" }}>
                        <Button text={'Add Workout'} url={"/add-routine"} />
                    </View>

                </View>
            </View>
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
        letterSpacing: 1.5,
        marginBottom: 50,
    }
});