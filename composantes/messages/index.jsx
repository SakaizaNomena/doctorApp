import { View, Text } from 'react-native'
import React from 'react'
import Messages from '../../ecrans/Messages'
import MessageStyles from './MessageStyle'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)
const Message = ({item}) => {
    const isMine = ()=> {
        return item.user.id === 1;
    }
  return (
    <View style={[MessageStyles.container, 
        {
            backgroundColor: isMine() ? '#DCF8C5' : '#fff',
            alignSelf: isMine() ? 'flex-end' : 'flex-start'
        }]}>
      <Text>{item.message}</Text>
      <Text>{dayjs(item.createdAt).fromNow(true)}</Text>
    </View>
  )
}

export default Message