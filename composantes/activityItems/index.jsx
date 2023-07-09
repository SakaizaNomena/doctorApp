import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import HomeStyle from '../../ecrans/Home/HomeStyle'
import HospitalSVG from '../../assets/hospital/undraw_medicine_b-1-ol.svg'
import { ActivityItemStyle } from './activityItemStyle'

const ActivityItem = ({item}) => {
  return (
        <TouchableOpacity style={ActivityItemStyle.scrollableItem}>
            <HospitalSVG width={50} height={50} />
            <Text style={ActivityItemStyle.mainText}>
                {item.mainText}
            </Text>
            <Text style={ActivityItemStyle.subText}>
                {item.subText}
            </Text>
       </TouchableOpacity>
  )
}

export default ActivityItem