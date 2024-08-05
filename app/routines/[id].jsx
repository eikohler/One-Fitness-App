import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const RoutinePage = () => {
    const {id} = useLocalSearchParams();
    const routines = [
        {
          title: "Workout Routine 1.0",
          days: 4,
          exercises: 24,      
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
                        <Text style={styles.title}>{routines[id].title}</Text>
                        <Ionicons name="ellipsis-horizontal" size={40} color={"#BCC2E1"} />
                    </View>                                        
                </View>
            </View>
        </>
    )
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

export default RoutinePage;