import { View, Text, FlatList } from 'react-native'
import React, {useEffect} from 'react'
import FakeConverstation from '../../fakeData/FakeConversation';
import Message from '../../composantes/messages';
import ChatInput from '../chatInput/ChatInput';

const ChatDetails = ({route, navigation}) => {
    const {item} = route.params;
    useEffect(() => {
        navigation.setOptions({title: item.fullName})
    })
  return (
    <View style={{flex: 1}}>
      <FlatList data={FakeConverstation} keyExtractor={item => item.id} renderItem={
        ({item}) => {
            return <Message item={item} />
        }
    } />
    <ChatInput />
    </View>
  )
}

export default ChatDetails