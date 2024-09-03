import { View, Text, Pressable, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { colors } from '@/constants/Colors';

const SlimListItem = ({ data }) => {
  return (
    <Pressable onPress={() => router.push(data.url)}>
      <Text style={styles.title}>{data.title}</Text>
      <View style={styles.infoWrapper}>
        {data.info.map((info, index) =>
          <Text style={styles.info} key={`info-${index}`}>{info}</Text>
        )}
      </View>
    </Pressable>
  )
}

export const styles = StyleSheet.create({
  infoWrapper: {
    backgroundColor: colors.infoWrapperBG,
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 8,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  info: {
    color: colors.primaryText,
    fontSize: 16,
    letterSpacing: 1.2,
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

export default SlimListItem;