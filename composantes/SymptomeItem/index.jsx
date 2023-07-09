import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import SymptomeItemStyle from './SymptomeItemStyle'

const SymptomeItem = ({item}) => {
  return (
    <TouchableOpacity>
        <View style={SymptomeItemStyle.item}>
            <Image style={SymptomeItemStyle.itemImg} source={require('./../../assets/desies/lovepik-a-sick-man-png-image_400174330_wh860.png')} />
            <Text>
                {item.labelle}
            </Text>
        </View>
    </TouchableOpacity>
  )
}

export default SymptomeItem