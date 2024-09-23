import { View, Text, StyleSheet } from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { colors } from '@/constants/Colors';

export default function Header() {

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.row}>
          <Text style={styles.text}>ONE</Text>
          <View style={styles.textIconWrapper}>
            <Text style={styles.text}>WEEK    10</Text>
            <MaterialIcons name="bolt" style={{marginLeft: -1}} size={15} color={colors.headerText} />
          </View>
        </View>
      </View>
    </View>    
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
    position: "relative",
    zIndex: 99
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