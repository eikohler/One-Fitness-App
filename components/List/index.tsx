import { View, StyleSheet } from 'react-native';
import SlimListItem from './Item/Slim';

const List = ({ data }) => {

  return (
    <View style={styles.container}>
      {data.map((obj, index) => {
        return (
          <SlimListItem key={`list-item-${index}`} data={obj} />
        )
      })}
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    gap: 35,
    marginBottom: 35
  },
});

export default List