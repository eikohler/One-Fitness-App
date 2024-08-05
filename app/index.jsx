import { StyleSheet, Text, View, StatusBar, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';

export default function App() {

  const routines = [
    {
      title: "Workout Routine 1.0",
      days: 4,
      exercises: 24
    },
    {
      title: "Workout Routine 2.0",
      days: 2,
      exercises: 12
    },
    {
      title: "Workout Routine 3.0",
      days: 3,
      exercises: 18
    },
  ];

  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.row}>
            <Text style={styles.title}>Routines</Text>
            <Ionicons name="ellipsis-horizontal" size={40} color={"#BCC2E1"} />
          </View>
          
          <View style={routineStyles.container}>
            {routines.map((routine, index)=>        
              <Pressable key={`routine-${index}`} onPress={()=>router.push(`routines/${index}`)}>
                <Text style={routineStyles.title}>{routine.title}</Text>
                <View style={routineStyles.infoWrapper}>
                  <Text style={routineStyles.info}>{routine.days} Days</Text>
                  <Text style={routineStyles.info}>{routine.exercises} Exercises</Text>
                </View>            
              </Pressable>    
            )}        
          </View>  

          <View style={buttonStyles.container}>
            <View style={buttonStyles.wrapper}>
              <Text style={buttonStyles.text}>Add Routine</Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {        
    backgroundColor: "#0D0D0D",
    height: "100%"
  },
  wrapper: {
    width: "90%",
    marginHorizontal: "auto"
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 30
  },
  title: {
    color: "#BCC2E1",
    fontSize: 32,
    fontWeight: "700",
    letterSpacing: 1.5,    
  }
});

const routineStyles = StyleSheet.create({
  container: {
    display: "flex",
    gap: 35
  },
  infoWrapper: {
    backgroundColor: "#2A2A2D",
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 8,    
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  info: {
    color: "#BCC2E1",
    fontSize: 16,
    letterSpacing: 1.2,
    fontWeight: "500"
  },
  title: {
    color: "#BCC2E1",
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 1,
    marginBottom: 8
  }
});

const buttonStyles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    marginTop: 40
  },
  wrapper: {
    padding: 10,
    borderRadius: 6,
    borderColor: "#BCC2E1",
    borderWidth: 1,
    minWidth: 200,
  },
  text: {
    color: "#BCC2E1",
    fontSize: 16,
    textTransform: "uppercase",
    letterSpacing: 1,
    textAlign: "center"
  }
});