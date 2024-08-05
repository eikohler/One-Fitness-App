import {Tabs} from "expo-router";
import Header from "../components/Header";
import TabBar from "../components/TabBar";

const TabsLayout = () => {
  return (
    <Tabs tabBar={props=><TabBar {...props} />}>
        <Tabs.Screen name="index" options={{title: "Routines", header: (props) => <Header {...props} />}} />
        <Tabs.Screen name="workouts/index" options={{title: "Workouts", header: (props) => <Header {...props} />}} />
        <Tabs.Screen name="exercises/index" options={{title: "Exercises", header: (props) => <Header {...props} />}} />
        <Tabs.Screen name="routines/[id]" options={{header: (props) => <Header {...props} />}} />
    </Tabs>
  );
}

export default TabsLayout;