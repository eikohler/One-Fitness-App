import { View, StyleSheet, Pressable, Text } from 'react-native';
import { colors } from '@/constants/Colors';
import { router } from 'expo-router';
import { ListData } from '@/constants/Interfaces';

const SlimList = ({ data }: { data: ListData[] }) => {

  return (
    <View style={styles.container}>
      {data.map((obj, index) => (
          <Pressable key={`item-${index}`} onPress={() => router.push(obj.url)}>
            <Text style={styles.title}>{obj.title}</Text>
            <View style={styles.infoWrapper}>
              {obj.info.map((info, index) => 
                <Text style={styles.info} key={`info-${index}`}>{info}</Text>
              )}
            </View>
          </Pressable>        
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    gap: 35,
    marginBottom: 35
  },

  infoWrapper: {
    backgroundColor: colors.infoWrapperBG,
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 8,
    display: "flex",
    flexWrap: "wrap",
    gap: 10,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  info: {
    color: colors.primaryText,
    fontSize: 16,
    letterSpacing: 1,
    fontWeight: "500"
  },
  title: {
    color: colors.primaryText,
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 1,
    marginBottom: 8
  }
});

export default SlimList;