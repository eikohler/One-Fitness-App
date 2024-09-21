import { colors } from '@/constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Href, router } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function SettingsButton({settings}: {settings: {title: string, link: Href}[]}) {
    return (
        <View style={{position: "relative"}}>
            <Ionicons name="ellipsis-horizontal" size={40} color={colors.primaryText} />
            <View style={styles.wrapper}>
                {settings.map((obj, index)=>
                    <Pressable style={styles.wrapper} onPress={() => router.push(obj.link)}>
                        <Text style={styles.link}>{obj.title}</Text>
                    </Pressable>
                )}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        position: "absolute",
        bottom: -10,
        right: 0,        
    },
    link: {
        color: colors.primaryText
    }
});