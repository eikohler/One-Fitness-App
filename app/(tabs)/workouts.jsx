import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default function Workouts() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <Text style={styles.text}>Workouts</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#0D0D0D"
    },
    text: {
        color: "#BCC2E1"
    }
});
