import { View, StatusBar } from 'react-native';
import PageHeading from '../components/PageHeading';
import { mainStyles, buttonStyles, listStyles } from '../styles/global';
import Button from '../components/Button';
import SlimListItem from '../components/SlimListItem';

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
    <View style={mainStyles.container}>
      <StatusBar barStyle="light-content" />
      <View style={mainStyles.wrapper}>

        <PageHeading title={'Routines'} />

        <View style={listStyles.container}>
          {routines.map((routine, index) => {
            const infoList = [`${routine.days} Days`, `${routine.exercises} Exercises`];
            return (<SlimListItem title={routine.title} list={infoList} url={`routines/${index}`} index={index} />)
          })}
        </View>

        <View style={buttonStyles.container}>
          <Button text={'Add Routine'}/>
        </View>

      </View>
    </View>
  );
}