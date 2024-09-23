import {Tabs} from "expo-router";
import Header from "@/components/Header";

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "routines", header: (props) => <Header {...props} /> }} />
      <Tabs.Screen name="workouts" options={{ header: (props) => <Header {...props} /> }} />
      <Tabs.Screen name="exercises" options={{ header: (props) => <Header {...props} /> }} />
      <Tabs.Screen name="(pages)/routines/[id]" options={{ header: (props) => <Header {...props} /> }} />
      <Tabs.Screen name="(pages)/workouts/[id]" options={{ header: (props) => <Header {...props} /> }} />
      <Tabs.Screen name="(pages)/exercises/[id]" options={{ header: (props) => <Header {...props} /> }} />
    </Tabs>
  );
}

export default TabsLayout;