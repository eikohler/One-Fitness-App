import { View, StatusBar } from 'react-native';
import { mainStyles } from '@/constants/GlobalStyles';
import Button from '../../components/Button';

export default function Workouts() {

  return (
    <View style={mainStyles.container}>
      <StatusBar barStyle="light-content" />
      <View style={mainStyles.wrapper}>

        <View style={{flexDirection: "row", alignItems: "center"}}>
          <Button text={'Add Workout'}/>
        </View>

      </View>
    </View>
  );
}