import TabBar from '@/components/TabBar';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{animation: "shift"}} tabBar={props=><TabBar {...props} />}>
        <Tabs.Screen name="index" options={{ headerShown: false }} />
        <Tabs.Screen name="routines/[id]" options={{ headerShown: false }} />
    </Tabs>
  );
}