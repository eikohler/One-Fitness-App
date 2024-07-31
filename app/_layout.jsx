import { Stack, Link } from 'expo-router';
import { StyleSheet, Text, View, Image } from 'react-native';

const Header = (props) => {

  const {options, menuItems} = props;

  return (
    <View style={headerStyles.wrapper}>
      <View style={[headerStyles.row, {justifyContent: 'space-between', width: '100%'}]}>
        <View style={headerStyles.streak}>
          <Text style={headerStyles.week}>WEEK    10</Text>
          <Image
            style={headerStyles.bolt}
            source={require('../assets/Bolt.png')}
          />
        </View>
        <View style={[headerStyles.row, {gap: 10}]}>
          {menuItems.map((itemObj) => (
            <Link key={itemObj.name} href={itemObj.name === "index" ? "/" : `/${itemObj.name}`}
            style={itemObj.title === options.headerTitle ? [headerStyles.title, {color: "#6363FF"}] : headerStyles.title}>
              {itemObj.title}
            </Link>
          ))}
        </View>
      </View>
    </View>
  );
}

const headerStyles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "flex-end",
    width: "100%",
    height: 100,
    paddingHorizontal: 20,
    paddingBottom: 10,
    backgroundColor: "#0D0D46",
    borderBottomColor: "rgba(99, 99, 255, 0.3)",
    borderBottomWidth: 1,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    color: "rgba(99, 99, 255, 0.6)",
    textTransform: "uppercase",  
  },
  week: {
    color: "#6363FF",    
    fontWeight: "900",
    fontStyle: "italic",
    letterSpacing: -2.2,
    fontSize: 18
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

  const menuItems = [
    {name: "index", title: "Routines"}, 
    {name: "workouts", title: "Workouts"}, 
    {name: "exercises", title: "Exercises"}
  ];

  return (
    <Stack>
      {menuItems.map((itemObj) => (
        <Stack.Screen key={itemObj.name} name={itemObj.name} options={{
          headerTitle: `${itemObj.title}`, 
          header: (props) => <Header menuItems={menuItems} {...props} />,
          contentStyle: {
            backgroundColor: "#1A1A1A",
          }
        }} />
      ))}
    </Stack>
  )
}

export default RootLayout;