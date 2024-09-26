import { View, Text, StyleSheet, Pressable } from 'react-native';
import { colors } from '@/constants/Colors';
import { Href, router } from 'expo-router';
import { BlurView } from 'expo-blur';
import SettingsButton from './SettingsButton';
import { useState } from 'react';

const PageHeading = ({ title, list, settings }: {
  title: string,
  list?: string[],
  settings: { title: string, link: Href }[]
}) => {

  const [showOptions, setShowOptions] = useState(false);

  return (
    <>
      <BlurView intensity={15} pointerEvents={showOptions ? "auto" : "none"}
        style={[{ opacity: showOptions ? 1 : 0 }, styles.overlay]}>

        <View style={styles.wrapper}>

          <Pressable onPress={() => setShowOptions(!showOptions)}>
            <SettingsButton />
          </Pressable>

          {settings?.map((obj, i) =>
            <Pressable key={"option" + i} onPress={() => router.push(obj.link)}>
              <Text style={styles.options}>{obj.title}</Text>
            </Pressable>
          )}
        </View>
      </BlurView>

      <View style={{ marginBottom: 30 }}>
        <View style={styles.row}>
          <View>
            <Text style={[styles.title, { fontSize: title.length > 15 ? 22 : 30 }]}>
              {title}
            </Text>
          </View>

          <Pressable onPress={() => setShowOptions(!showOptions)}>
            <SettingsButton />
          </Pressable>

        </View>
        {list?.map((text, index) =>
          <Text style={styles.list} key={`headingList-${index}`}>{text}</Text>
        )}
      </View>
    </>
  )

}

const styles = StyleSheet.create({
  row: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",
    marginHorizontal: "auto"
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
  },

  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    zIndex: 9
  },
  wrapper: {
    width: "90%",
    marginHorizontal: "auto",
    textAlign: "right",
    paddingTop: 110,
    alignItems: "flex-end",
  },
  options: {
    color: colors.primaryText,
    fontSize: 24,
    marginTop: 10
  }
});

export default PageHeading