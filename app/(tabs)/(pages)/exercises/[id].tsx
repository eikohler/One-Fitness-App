import { useLocalSearchParams } from 'expo-router';
import { View, StatusBar, Text } from 'react-native';
import { mainStyles } from '@/constants/GlobalStyles';

const ExercisePage = () => {
  const { id } = useLocalSearchParams();

  return (
    <View style={mainStyles.container}>
      <StatusBar barStyle="light-content" />
      <View style={mainStyles.wrapper}>
        <Text style={{color: "#FFF"}}>Exercise Page: {id}</Text>
      </View>
    </View>
  )
}

export default ExercisePage;