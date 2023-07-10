import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
import ProfilesStyle from './ProfilesStyle'
import FakeSetting from '../../fakeData/FakeSetting'
import SettingItem from '../../composantes/settingItem'

const Profiles = () => {
  return (
    <View style={ProfilesStyle.container}>
      {/* Header */}
        <View style={ProfilesStyle.header}>
           <Image style={ProfilesStyle.profileImg} source={require('../../assets/users/logo.png')} />
           <View style={ProfilesStyle.userInfo}>
              <Text>
                  Sakaiza Nomena
              </Text>
              <Text>sakaizanomena@gmail.com</Text>
              <Text>+261326175344</Text>
           </View>
        </View>
      {/* Fin header */}
           <FlatList data={FakeSetting} keyExtractor={item => item.id} renderItem={({item})=>{
              return <SettingItem item={item} />
           }} />
      <Text>Profiles</Text>
    </View>
  )
}

export default Profiles