import { View, Text, StyleSheet } from 'react-native';
import { colors } from '@/constants/Colors';

interface Props{
  text: string
}

const Button = (props: Props) => {

  const { text } = props;

  return (    
    <View style={styles.wrapper}>
        <Text style={styles.text}>{text}</Text>
    </View>
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