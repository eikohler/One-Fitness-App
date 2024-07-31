import { StyleSheet, Text, View } from 'react-native';

export default function Exercises() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Exercises</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: "#BCC2E1"
    }
});
