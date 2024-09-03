import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { colors } from '@/constants/Colors';

const TabBar = ({ state, descriptors, navigation }: any) => {

    const icons:any = {
        'index': (props: any) => <MaterialCommunityIcons name="calendar-text" size={30} color={colors.secondaryText} {...props} />,
        'workouts': (props: any) => <MaterialCommunityIcons name="clipboard-list" size={30} color={colors.secondaryText} {...props} />,
        'exercises': (props: any) => <MaterialCommunityIcons name="weight-lifter" size={30} color={colors.secondaryText} {...props} />
    }

    const hiddenTabs = [
        '(pages)'
    ];

    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                {state.routes.map((route: any, index: any) => {
                    const { options } = descriptors[route.key];
                    const label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                                ? options.title
                                : route.name;

                    if (route.name.includes(hiddenTabs)) return null;

                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name, route.params);
                        }
                    };

                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                    };

                    return (
                        <TouchableOpacity
                            accessibilityRole="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            style={styles.tab}
                            key={`tab-${index}`}
                        >
                            {icons[route.name]({ color: isFocused ? colors.primaryText : colors.secondaryText })}
                            <Text style={[styles.label, { color: isFocused ? colors.primaryText : colors.secondaryText }]}>
                                {label}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.mainBG,
    },
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
        paddingTop: 20
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

export default TabBar