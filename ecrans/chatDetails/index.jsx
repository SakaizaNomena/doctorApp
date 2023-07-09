import { View, Text, FlatList } from 'react-native'
import React, {useEffect} from 'react'
import FakeConverstation from '../../fakeData/FakeConversation';
import Message from '../../composantes/messages';

const ChatDetails = ({route, navigation}) => {
    const {item} = route.params;
    useEffect(() => {
        navigation.setOptions({title: item.fullName})
    })
  return (
    <View>
      <FlatList data={FakeConverstation} keyExtractor={item => item.id} renderItem={
        ({item}) => {
            return <Message item={item} />
        }
      } />
    </View>
  )
}

export default ChatDetails