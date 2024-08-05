import { Stack } from 'expo-router';
import { StyleSheet, Text, View, Image } from 'react-native';

const Header = () => {
  return (
    <View style={headerStyles.container}>
      <View style={headerStyles.wrapper}>
        <View style={headerStyles.row}>
          <Text style={headerStyles.text}>ONE</Text>
          <View style={headerStyles.streak}>
            <Text style={headerStyles.text}>WEEK    10</Text>
            <Image style={headerStyles.bolt} source={require('../assets/Bolt.png')} />
          </View>        
        </View>
      </View>
    </View>
  );
}

const headerStyles = StyleSheet.create({
  container: {
    backgroundColor: "#0D0D0D",    
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
    fontSize: 16
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
    <Stack screenOptions={{ animation: 'none', contentStyle: { backgroundColor: '#0D0D0D', paddingTop: 30 } }}>
      <Stack.Screen name="(tabs)" options={{ header: (props) => <Header {...props} />}} />
    </Stack>        
  )
}

export default RootLayout;