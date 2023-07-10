import {Text, TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import SetingItemStyle from './SetingItemStyle'

const SettingItem = ({item}) => {
  return (
    <TouchableOpacity style={SetingItemStyle.container}>
        <Text>{item.libelle}</Text>
        <AntDesign name='arrowright' size={20} color='grey' />
    </TouchableOpacity>
  )
}
 
export default SettingItem