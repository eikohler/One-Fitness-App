import { View, Text, Pressable } from 'react-native';
import { slimListItemStyles } from '../styles/global';
import { router } from 'expo-router';

const SlimListItem = ({ title, list, url, index }) => {
    return (
        <Pressable key={`${title}-${index}`} onPress={() => router.push(url)} >
            <Text style={slimListItemStyles.title}>{title}</Text>
            <View style={slimListItemStyles.infoWrapper}>
                {list !== undefined && list.map((text, i)=>
                    <Text style={slimListItemStyles.info} key={`${text}-${i}`}>{text}</Text>
                )}
            </View>
        </Pressable>
    )
}

export default SlimListItem;