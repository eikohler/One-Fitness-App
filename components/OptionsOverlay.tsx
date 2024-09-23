import { Text, StyleSheet, View } from 'react-native'
import React from 'react'
import { BlurView } from 'expo-blur'
import { colors } from '@/constants/Colors';
import { type Href } from 'expo-router';
import SettingsButton from './SettingsButton';

export default function OptionsOverlay({ settings }: { settings: { title: string, link: Href }[] }) {
    return (
        <BlurView intensity={15} style={[{ opacity: 0 }, styles.overlay]}>
            <View style={styles.wrapper}>
                <SettingsButton />                
                {settings?.map((obj, i) =>
                    <Text key={"option" + i} style={styles.options}>{obj.title}</Text>
                )}
            </View>
        </BlurView>
    )
}

const styles = StyleSheet.create({
    overlay: {
        backgroundColor: "rgba(0,0,0,0.5)",
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
        zIndex: 9
    },
    wrapper: {
        width: "90%",
        marginHorizontal: "auto",
        textAlign: "right",
        paddingTop: 112,
        alignItems: "flex-end",
    },
    options: { 
        color: colors.primaryText,
        fontSize: 24
    }
});