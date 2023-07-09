import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper'
import ChatInputStyle from './ChatInputStyle'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const ChatInput = () => {
  return (
    <View style= {ChatInputStyle.container}>
        <TextInput style={ChatInputStyle.input} placeholder='Message ici ...' />
        <TouchableOpacity>
            <MaterialCommunityIcons name='send' style={ChatInputStyle.send} size={24} />
        </TouchableOpacity>
    </View>
  )
}

export default ChatInput