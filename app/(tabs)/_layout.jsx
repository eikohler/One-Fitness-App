import {Tabs} from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';

const tabOptions = (iconName) => {
    return {
        headerShown: false, 
        tabBarStyle: {
            backgroundColor: "#0D0D46",
            borderTopColor: "#0D0D46",
            height: 110,
            paddingTop: 10,
            paddingBottom: 40
        },
        tabBarIcon: ({color, size}) => (
            <Ionicons name={iconName} size={size} color="#BCC2E1" />
        ),
        tabBarLabelStyle: {
            color: "#BCC2E1",
            fontSize: 14,
            textTransform: "uppercase",
            letterSpacing: 1
        },
    }
}

const TabsLayout = () => {
  return (
    <Tabs>
        <Tabs.Screen name="index" options={tabOptions("calendar-outline")} />
        <Tabs.Screen name="workouts" options={tabOptions("list-outline")} />
        <Tabs.Screen name="exercises" options={tabOptions("barbell-outline")} />
    </Tabs>
  );
}

export default TabsLayout;