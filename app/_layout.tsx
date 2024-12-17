import Header from "@/components/Header";
import { colors } from "@/constants/Colors";
import { initDB } from "@/utilities/db-functions";
import {Stack} from "expo-router";
import { SQLiteProvider } from "expo-sqlite";
import { StatusBar } from "react-native";

const RootLayout = () => {
  return (
    <SQLiteProvider databaseName="fitness.db" onInit={initDB}>
      <StatusBar barStyle="light-content" />
      <Stack screenOptions={{contentStyle: { backgroundColor: colors.mainBG }}}>
          <Stack.Screen name="(modals)/create-routine" options={{ presentation: 'modal', headerShown: false }} />
          <Stack.Screen name="(modals)/edit-routine/[id]" options={{ presentation: 'modal', headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{header: props=><Header {...props}/>}} />          
      </Stack>
    </SQLiteProvider>
  );
}

export default RootLayout;