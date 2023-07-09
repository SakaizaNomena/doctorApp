import { Text, TouchableOpacity, Image, View } from 'react-native'
import React from 'react'
import ChatListStyle from './ChatListStyle'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

const ChatLists = ({item, navigation}) => {
  return (
   <TouchableOpacity style={ChatListStyle.chatContainer} onPress={()=>navigation.navigate('ChatDetails', {item})} >
        <Image style={ChatListStyle.chatImg} source={{uri: 'https://plus.unsplash.com/premium_photo-1661758890104-b1047cca7206?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'}} />
        <View style={ChatListStyle.chatInfo}>
            <View style={ChatListStyle.date_name}>
                <Text style={ChatListStyle.chatName}>{item.fullName}</Text>
                <Text style={ChatListStyle.chatDate}>{dayjs(item.date).fromNow(true)}</Text>
            </View>
            <Text style={ChatListStyle.last_msg}>{item.lastMessage}</Text>
        </View>
   </TouchableOpacity>
  )
}

export default ChatLists