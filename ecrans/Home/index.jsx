import { View, Text, StyleSheet, ScrollView, Image, FlatList } from 'react-native'
import React from 'react'
import HomeStyle from './HomeStyle';
import { FakeActivity } from '../../fakeData/fakeActivity';

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
        <FlatList data={FakeActivity} keyExtractor={item => item.id} renderItem={({item}) => {
            return(
                <View>
                    <Text>
                        {item.mainText}
                    </Text>
                </View>
            )
        }} horizontal={true} />

        {/* Fin des listes des activites */}
    </ScrollView>
  )
}

export default Home;