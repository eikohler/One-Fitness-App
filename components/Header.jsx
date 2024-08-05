import { View, Text, StyleSheet, Pressable } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { router } from 'expo-router';

const Header = ({options}) => {

  return (
    <View style={headerStyles.container}>
      <View style={headerStyles.wrapper}>
        <View style={headerStyles.row}>

          {
            options.backTitle 
            ? (<Pressable style={headerStyles.backBtn} onPress={()=>router.back()}>
                <Ionicons name="chevron-back-sharp" style={headerStyles.backArrow} size={15} color="#6363FF" />
                <Text style={headerStyles.backText}>{options.backTitle}</Text>
              </Pressable>) 
            : (<Text style={headerStyles.text}>ONE</Text>)
          }

          <View style={headerStyles.streak}>
            <Text style={headerStyles.text}>WEEK    10</Text>
            <MaterialIcons name="bolt" style={headerStyles.bolt} size={15} color="#6363FF" />
          </View>

        </View>
      </View>
    </View>
  );
}

const headerStyles = StyleSheet.create({
  container: {
    backgroundColor: "#0D0D0D",
    paddingBottom: 20
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "flex-end",
    width: "90%",
    marginHorizontal: "auto",
    paddingTop: 60,
    paddingBottom: 5,
    borderBottomColor: "#6363FF",
    borderBottomWidth: 1
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-between',
    width: '100%'
  },
  text: {
    color: "#6363FF",
    fontWeight: "900",
    fontStyle: "italic",
    letterSpacing: -2.2,
    fontSize: 16,
    textTransform: "uppercase"
  },
  backText: {
    color: "#6363FF",
    fontWeight: "700",
    fontSize: 16,
  },
  backBtn: {
    display: "flex",
    flexDirection: 'row',
    alignItems: 'center'
  },
  bolt:{
    marginLeft: -1
  },
  streak: {
    flexDirection: "row",
    alignItems: "center",    
  }
});

export default Header;