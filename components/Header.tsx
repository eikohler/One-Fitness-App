import { View, Text, StyleSheet, Pressable } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { router } from 'expo-router';
import { colors } from '@/constants/Colors';

const Header = ({backTitle = ""}: any) => {

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.row}>

          {
            backTitle 
            ? (<Pressable style={styles.textIconWrapper} onPress={()=>router.back()}>
                <Ionicons name="chevron-back-sharp" size={15} color="#6363FF" />
                <Text style={styles.backText}>{backTitle}</Text>
              </Pressable>) 
            : (<Text style={styles.text}>ONE</Text>)
          }

          <View style={styles.textIconWrapper}>
            <Text style={styles.text}>WEEK    10</Text>
            <MaterialIcons name="bolt" style={{marginLeft: -1}} size={15} color="#6363FF" />
          </View>

        </View>
      </View>
    </View>    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.mainBG,
    paddingBottom: 20
  },
  wrapper: {
    width: "90%",
    marginHorizontal: "auto",
    paddingTop: 60,
    paddingBottom: 10,
    borderBottomColor: colors.headerText,
    borderBottomWidth: 1
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-between',
    width: '100%'
  },
  text: {
    color: colors.headerText,
    fontWeight: "900",
    fontStyle: "italic",
    letterSpacing: -2.2,
    fontSize: 16,
    textTransform: "uppercase"
  },
  backText: {
    color: colors.headerText,
    fontWeight: "700",
    fontSize: 16,
  },
  textIconWrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },
});

export default Header;