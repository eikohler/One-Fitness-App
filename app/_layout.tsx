import Header from "@/components/Header";
import {Stack} from "expo-router";

const RootLayout = () => {
  return (
    <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="add-routine" options={{ header: (props) => <Header {...props} /> }} />
    </Stack>
  );
}

export default RootLayout;