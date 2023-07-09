import React from 'react'
import { FlatList, Text, View } from 'react-native'
import FakeChats from '../../fakeData/FakeChats'
import ChatLists from '../../composantes/chatLists'

const Messages = () => {
  return (
    <FlatList 
        data={FakeChats}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => {
          return <ChatLists item={item} />
        }}    
    />
  )
}

export default Messages