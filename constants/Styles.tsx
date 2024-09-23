import { StyleSheet } from 'react-native';
import { colors } from './Colors';

export const mainStyles = StyleSheet.create({
    container: {        
      backgroundColor: colors.mainBG,
      height: "100%"
    },
    wrapper: {
      width: "90%",
      marginHorizontal: "auto"
    },
    scrollList: {
      paddingBottom: 30
    }
});