import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { colors } from '@/constants/Colors';
import { Href, router } from 'expo-router';

export default function TabBar(props:any) {

    const active = props.navigation.getState().index;
    console.log("Active Page Index: ", active);

    const tabs: { title: string, icon: any, link: Href, actives: number[] }[] = [
        {
            title: 'Routines',
            icon: "calendar-text",
            link: "/",
            actives: [0, 1]
        },
        {
            title: 'Workouts',
            icon: "clipboard-list",
            link: "/",
            actives: []
        },
        {
            title: 'Exercises',
            icon: "weight-lifter",
            link: "/",
            actives: []
        }
    ]

    return (
        <View style={styles.wrapper}>

            {tabs.map((obj, i) => (

                <TouchableOpacity
                    accessibilityRole="button"
                    onPress={() => router.replace(obj.link)}
                    style={styles.tab}
                    key={`tab-${i}`}
                >
                    <MaterialCommunityIcons name={obj.icon} size={30} 
                    color={obj.actives.includes(active) ? colors.primaryText : colors.secondaryText} />
                    <Text style={[styles.label, { color: obj.actives.includes(active) ? colors.primaryText : colors.secondaryText }]}>
                        {obj.title}
                    </Text>
                </TouchableOpacity>

            ))}


        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: colors.tabBG,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingBottom: 40,
        paddingTop: 20,
        position: "absolute",
        bottom: 0,
        zIndex: 9
    },
    tab: {
        flex: 1,
        display: "flex",
        alignItems: "center",
        gap: 5
    },
    label: {
        textAlign: "center",
        textTransform: "uppercase",
        fontSize: 12
    }
});