import { View, StatusBar } from 'react-native';
import { mainStyles } from '@/constants/GlobalStyles';
import Button from '../../components/Button';

export default function Exercises() {

  return (
    <View style={mainStyles.container}>
      <StatusBar barStyle="light-content" />
      <View style={mainStyles.wrapper}>

        <View style={{flexDirection: "row", alignItems: "center"}}>
          <Button text={'Add Exercise'}/>
        </View>

      </View>
    </View>
  );
}