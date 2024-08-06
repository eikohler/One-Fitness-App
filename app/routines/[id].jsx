import { useLocalSearchParams } from 'expo-router';
import { View, StatusBar } from 'react-native';
import PageHeading from '../../components/PageHeading';
import { mainStyles, listStyles } from '../../styles/global';
import SlimListItem from '../../components/SlimListItem';

const RoutinePage = () => {
  const { id } = useLocalSearchParams();
  const routines = [
    {
      title: "Workout Routine 1.0",
      setCounts: [
        {
          exercise: "Chest",
          count: 19
        },
        {
          exercise: "Biceps",
          count: 10
        },
        {
          exercise: "Back",
          count: 16
        },
        {
          exercise: "Legs",
          count: 12
        }
      ],
      workouts: [
        {
          title: "Chest, Shoulders and Back",
          exercises: 6,
          sets: 21,
          date: "July 22"
        },
        {
          title: "Chest, Shoulders and Back",
          exercises: 6,
          sets: 21,
          date: "July 22"
        },
        {
          title: "Chest, Shoulders and Back",
          exercises: 6,
          sets: 21,
          date: "July 22"
        }
      ]
    }
  ];

  const headingList = routines[id].setCounts.map((obj) => `${obj.exercise}: ${obj.count} Sets`);

  return (
    <View style={mainStyles.container}>
      <StatusBar barStyle="light-content" />
      <View style={mainStyles.wrapper}>
        <PageHeading title={routines[id].title} list={headingList} />     

        <View style={listStyles.container}>
          {routines[id].workouts.map((workout, index) => {
            const infoList = [`${workout.exercises} Exercises`, `${workout.sets} Sets`, workout.date];
            return (<SlimListItem title={workout.title} list={infoList} url={`/`} index={index} />)
          })}
        </View>

      </View>
    </View>
  )
}

export default RoutinePage;