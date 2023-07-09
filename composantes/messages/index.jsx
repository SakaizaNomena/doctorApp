import { View, Text } from 'react-native'
import React from 'react'
import Messages from '../../ecrans/Messages'
import MessageStyles from './MessageStyle'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { COLORS } from '../../outils/constantes'
dayjs.extend(relativeTime)
const Message = ({item}) => {
    const isMine = ()=> {
        return item.user.id === 1;
    }
  return (
    <View style={[MessageStyles.container, 
        {
            backgroundColor: isMine() ? COLORS.main : '#fff',
            alignSelf: isMine() ? 'flex-end' : 'flex-start'
        }]}>
      <Text style={{color: isMine() ? '#fff': 'null'}}>{item.message}</Text>
      <Text style={{color: isMine() ? '#ffA2D0': 'null'}}>{dayjs(item.createdAt).fromNow(true)}</Text>
    </View>
  )
}

export default Message