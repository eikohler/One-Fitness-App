import {Tabs} from "expo-router";

const tabOptions = {
    headerShown: false, 
    tabBarStyle: {
        backgroundColor: "#0D0D46",
        borderTopColor: "#0D0D46",
        height: 100
    },
}

const TabsLayout = () => {
  return (
    <Tabs>
        <Tabs.Screen name="index" options={tabOptions} />
        <Tabs.Screen name="workouts" options={tabOptions} />
        <Tabs.Screen name="exercises" options={tabOptions} />
    </Tabs>
  );
}

export default TabsLayout;