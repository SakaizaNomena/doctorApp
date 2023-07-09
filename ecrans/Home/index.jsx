import { View, Text, ScrollView, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import HomeStyle from './HomeStyle';
import { FakeActivity } from '../../fakeData/fakeActivity';
import ActivityItem from '../../composantes/activityItems';

const Home = () => {
  return (
    <ScrollView>
        {/* Debut de hearder */}
        <View style={HomeStyle.header}>
            <Text style={HomeStyle.userName}>
                Djessa soudesaid
            </Text>
            <Image source={require('../../assets/users/logo.png')} style={HomeStyle.profile_image} />
        </View>
        {/* fin de header */}
        {/* LIst des activites */}
        <FlatList
            data={FakeActivity}
            showsHorizontalScrollIndicator={false} 
            style={HomeStyle.scrollableList}
            keyExtractor={item => item.id} 
            renderItem={({item}) => {
            return(
                <ActivityItem item={item} />
            )
        }} horizontal={true} />

        {/* Fin des listes des activites */}
    </ScrollView>
  )
}

export default Home;