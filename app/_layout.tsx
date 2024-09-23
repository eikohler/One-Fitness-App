import {Stack} from "expo-router";

const RootLayout = () => {
  return (
    <Stack>
        {/* <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> */}
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="add-routine" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: "modal", headerShown: false }} />
    </Stack>
  );
}

export default RootLayout;