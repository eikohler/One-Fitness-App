import { View, Text } from 'react-native'
import { buttonStyles } from '../styles/global'

const Button = ({text}) => {
  return (    
    <View style={buttonStyles.wrapper}>
        <Text style={buttonStyles.text}>{text}</Text>
    </View>
  )
}

export default Button