import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Pressable, TouchableWithoutFeedback, Dimensions } from 'react-native';
import { colors } from '@/constants/Colors';
import { BlurView } from 'expo-blur';
import { useState } from 'react';
import { AutoSizeText, ResizeTextMode } from 'react-native-auto-size-text';
import { Ionicons } from '@expo/vector-icons';

const PageHeading = ({ title, list, settings, isFocused = false }: {
  title: string,
  list?: string[],
  settings: { title: string, func: ()=>void }[],
  isFocused?: boolean
}) => {

  const [showOptions, setShowOptions] = useState(false);
  const [seed, setSeed] = useState(1);

  const dimensions = Dimensions.get('window');

  const [windowWidth, setWindowWidth] = useState(dimensions.width - (dimensions.width * 0.1));

  useEffect(() => {
    Dimensions.addEventListener('change', ({ window }) => setWindowWidth(window.width - (window.width * 0.1)));
  });

  const resetComponents = () => setSeed(Math.random());

  useEffect(()=>{
    if(isFocused){ 
      setShowOptions(false);
      resetComponents();
    }
  }, [isFocused]);

  return (
    <>
      <TouchableWithoutFeedback onPress={()=>setShowOptions(false)}>
        <BlurView intensity={15} pointerEvents={showOptions ? "auto" : "none"}
            style={[{ opacity: showOptions ? 1 : 0 }, styles.overlay]}>          
        </BlurView>
      </TouchableWithoutFeedback>

      <View style={{ marginBottom: 30 }}>
        <View style={styles.row}>

          <AutoSizeText
            fontSize={30}
            style={styles.title}
            numberOfLines={2}
            minFontSize={16}
            mode={ResizeTextMode.min_font_size}
            key={seed}>
              {title}
          </AutoSizeText>

          <View style={styles.settingsWrapper}>
            <Pressable onPress={() => setShowOptions(!showOptions)}>
              <Ionicons name="ellipsis-horizontal" size={40} color={colors.primaryText} />
            </Pressable>

            <View pointerEvents={showOptions ? "auto" : "none"} style={[{ opacity: showOptions ? 1 : 0, width: windowWidth }, styles.settingsList]}>
              {settings?.map((obj, i) =>
                <Pressable key={"option" + i} onPress={obj.func}>
                  <Text style={styles.options}>{obj.title}</Text>
                </Pressable>
              )}
            </View>
          </View>

        </View>
        <View style={styles.row}>
          {list?.map((text, index) =>
            <Text style={styles.list} key={`headingList-${index}`}>{text}</Text>
          )}
        </View>
      </View>
    </>
  )

}

const styles = StyleSheet.create({
  row: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "flex-start",
    width: "90%",
    marginHorizontal: "auto",
    gap: 30
  },
  title: {
    color: colors.primaryText,
    fontWeight: "700",
    letterSpacing: 1,
    flex: 1,
  },
  list: {
    color: colors.primaryText,
    fontSize: 16,
    opacity: 0.7,
    marginTop: 5,
    letterSpacing: 0.5
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
    paddingTop: 110,
    alignItems: "flex-end"
  },
  settingsWrapper: {
    position: "relative",
    zIndex: 99,
  },
  settingsList: {
    position: "absolute",
    right: 0,
    top: 60,
    alignItems: "flex-end"
  },
  options: {
    color: colors.primaryText,
    fontSize: 24,
    marginBottom: 20,
    textAlign: "right"
  }
});

export default PageHeading