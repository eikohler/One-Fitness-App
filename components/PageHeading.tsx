import { View, Text, StyleSheet } from 'react-native';
import { colors } from '@/constants/Colors';

const PageHeading = ({title, list, children}: {
  title: string, 
  list?: string[],
  children?: JSX.Element
}) => {

  return (
    <View style={{marginBottom: 30}}>
        <View style={styles.row}>
            <View>
                <Text style={[styles.title, {fontSize: title.length > 15 ? 22 : 30}]}>
                    {title}
                </Text>                                      
            </View>

            {children}
        </View>
        {list?.map((text, index) =>
            <Text style={styles.list} key={`headingList-${index}`}>{text}</Text>
        )}
    </View>
  )

}

const styles = StyleSheet.create({
    row: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: "row",
    },
    title: {
      color: colors.primaryText,
      fontWeight: "700",
      letterSpacing: 1,    
    },
    list: {
      color: colors.primaryText,
      fontSize: 16,
      opacity: 0.7,
      marginTop: 5
    }
});

export default PageHeading