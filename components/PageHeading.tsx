import { View, Text, StyleSheet } from 'react-native';
import { colors } from '@/constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';

const PageHeading = ({title, list}) => {

  return (
    <View style={styles.container}>
        <View style={styles.row}>
            <View>
                <Text style={[styles.title, {fontSize: title.length > 15 ? 22 : 30}]}>
                    {title}
                </Text>                                      
            </View>
            <Ionicons name="ellipsis-horizontal" size={40} color={colors.primaryText} />
        </View>
        {list !== undefined && list.map((text, index) =>
            <Text style={styles.list} key={`headingList-${index}`}>{text}</Text>
        )}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 30
    },
    row: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: "row",
    },
    title: {
      color: colors.primaryText,
      fontWeight: "700",
      letterSpacing: 1.5,    
    },
    list: {
      color: colors.primaryText,
      fontSize: 16,
      opacity: 0.7,
      marginTop: 5
    }
});

export default PageHeading