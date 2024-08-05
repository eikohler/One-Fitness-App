import { Stack, Link } from 'expo-router';
import { StyleSheet, Text, View, Image } from 'react-native';

const Header = () => {
  return (
    <View style={headerStyles.wrapper}>
      <View style={[headerStyles.row, {justifyContent: 'space-between', width: '100%'}]}>
        <Text style={headerStyles.text}>ONE</Text>
        <View style={headerStyles.streak}>
          <Text style={headerStyles.text}>WEEK    10</Text>
          <Image style={headerStyles.bolt} source={require('../assets/Bolt.png')} />
        </View>        
      </View>
      <View style={headerStyles.underline}></View>
    </View>
  );
}

const headerStyles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "flex-end",
    flexWrap: "wrap",
    width: "100%",
    paddingTop: 50,
    paddingHorizontal: 15,
    backgroundColor: "#0D0D0D",
  },
  underline: {
    flex: "0 0 100%",
    height: 1,
    width: "100%",
    backgroundColor: "#6363FF",
    marginTop: 5
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    color: "#BCC2E1",
    textTransform: "uppercase",  
    paddingVertical: 10,
    paddingHorizontal: 5
  },
  text: {
    color: "#6363FF",    
    fontWeight: "900",
    fontStyle: "italic",
    letterSpacing: -2.2,    
  },
  bolt: {
    width: 7,
    height: 12
  },
  streak: {
    flexDirection: "row",
    alignItems: "center",
    gap: 1
  }
});

const RootLayout = () => {

  return (
    <Stack screenOptions={{ animation: 'none' }}>
      <Stack.Screen name="(tabs)" options={{header: (props) => <Header {...props} />}} />
    </Stack>
  )
}

export default RootLayout;