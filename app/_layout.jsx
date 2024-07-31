import { Stack } from 'expo-router';
import { StyleSheet, Text, View, Image } from 'react-native';

const HeaderTitle = () => {
  return (
    <View style={styles.headerWrapper}>
      <View style={styles.headerStreak}>
        <Text style={styles.headerWeek}>WEEK      10</Text>
        <Image
          style={styles.headerBolt}
          source={require('../assets/Bolt.png')}
        />
      </View>
      <Text style={styles.headerTitle}>Chest, Shoulders and Back</Text>
    </View>
  );
}

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{
        headerStyle: {
          backgroundColor: "#0D0D46",
        },
        contentStyle: {
          borderTopColor: "rgba(99, 99, 255, 0.3)",
          borderTopWidth: 1,
          backgroundColor: "#1A1A1A",
          color: "#BCC2E1"
        },
        headerTitle: (props) => <HeaderTitle {...props} />
      }} />
    </Stack>
  )
}

const styles = StyleSheet.create({
  headerWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "94%"
  },
  headerTitle: {
    color: "rgba(99, 99, 255, 0.6)",
    textTransform: "uppercase",  
  },
  headerWeek: {
    color: "#6363FF",    
    fontWeight: "900",
    fontStyle: "italic",
    letterSpacing: -2.2
  },
  headerBolt: {
    width: 7,
    height: 12
  },
  headerStreak: {
    flexDirection: "row",
    alignItems: "center",
    gap: 1
  }
});

export default RootLayout;