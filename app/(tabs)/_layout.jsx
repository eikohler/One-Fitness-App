import {Tabs} from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';

const tabOptions = (iconName, label = "") => {
    let options = {
        headerShown: false, 
        tabBarStyle: {
            backgroundColor: "#0D0D46",
            borderTopColor: "#0D0D46",
            height: 110,
            paddingTop: 10,
            paddingBottom: 40,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20
        },
        tabBarIcon: ({color, size}) => (
            <Ionicons name={iconName} size={30} color={color} />
        ),
        tabBarLabelStyle: {            
            fontSize: 12,
            textTransform: "uppercase",
            letterSpacing: 1
        },
    }

    if(label) options['tabBarLabel'] = label;

    return options;
}

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "#BCC2E1", tabBarInactiveTintColor: "#646794" }}>
        <Tabs.Screen name="index" options={tabOptions("calendar", "Routines")} />
        <Tabs.Screen name="workouts" options={tabOptions("list-sharp")} />
        <Tabs.Screen name="exercises" options={tabOptions("barbell-sharp")} />
    </Tabs>
  );
}

export default TabsLayout;