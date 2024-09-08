import { Text, StyleSheet, Pressable } from 'react-native';
import { colors } from '@/constants/Colors';
import { Href, router } from 'expo-router';

const Button = ({text, url}: {text: string, url: Href}) => {

  return (    
    <Pressable style={styles.wrapper} onPress={() => router.push(url)}>
        <Text style={styles.text}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
  },
  wrapper: {
    padding: 10,
    borderRadius: 6,
    borderColor: colors.primaryText,
    borderWidth: 1,
    minWidth: 200,
  },
  text: {
    color: colors.primaryText,
    fontSize: 16,
    textTransform: "uppercase",
    letterSpacing: 1,
    textAlign: "center"
  }
});

export default Button;