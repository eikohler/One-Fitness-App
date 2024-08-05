import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const TabBar = ({ state, descriptors, navigation }) => {

    const focusColor = '#BCC2E1';
    const idleColor = '#646794';

    const icons = {
        'index': (props) => <MaterialCommunityIcons name="calendar-text" size={30} color={idleColor} {...props} />,
        'workouts/index': (props) => <MaterialCommunityIcons name="clipboard-list" size={30} color={idleColor} {...props} />,
        'exercises/index': (props) => <MaterialCommunityIcons name="weight-lifter" size={30} color={idleColor} {...props} />
    }

    return (
        <View style={tabStyles.container}>
            <View style={tabStyles.wrapper}>
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                                ? options.title
                                : route.name;

                    if (['_sitemap', '+not-found', 'routines/[id]'].includes(route.name)) return null;

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
                            style={tabStyles.tab}
                            key={`tab-${index}`}
                        >
                            {icons[route.name]({ color: isFocused ? focusColor : idleColor })}
                            <Text style={[tabStyles.label, { color: isFocused ? focusColor : idleColor }]}>
                                {label}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        </View>
    )
}

const tabStyles = StyleSheet.create({
    container: {
        backgroundColor: "#0D0D0D",
    },
    wrapper: {
        backgroundColor: "#0D0D46",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingBottom: 40,
        paddingTop: 20,
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