import { View, Text } from 'react-native';
import { headingStyles, colors } from '../styles/global';
import Ionicons from '@expo/vector-icons/Ionicons';

const PageHeading = ({title, list}) => {

  return (
    <View style={headingStyles.container}>
        <View style={headingStyles.row}>
            <View>
                <Text style={[headingStyles.title, {fontSize: title.length > 15 ? 22 : 30}]}>
                    {title}
                </Text>                                      
            </View>
            <Ionicons name="ellipsis-horizontal" size={40} color={colors.primaryText} />
        </View>
        {list !== undefined && list.map((text, index) =>
            <Text style={headingStyles.list} key={`headingList-${index}`}>{text}</Text>
        )}
    </View>
  )
}



export default PageHeading