import { View, Text, ScrollView, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import HomeStyle from './HomeStyle';
import { FakeActivity } from '../../fakeData/fakeActivity';
import ActivityItem from '../../composantes/activityItems';
import { FakeSymptome } from '../../composantes/SymptomeItem/FakeSymptome';
import SymptomeItem from '../../composantes/SymptomeItem';

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

        {/* Symptome */}
        <View style={HomeStyle.symptomeTitle}>
            <Text>
                Quel symptome avez-vous ?
            </Text>
        </View>
        <FlatList
            data={FakeSymptome}
            showsHorizontalScrollIndicator={false} 
            style={HomeStyle.scrollableList}
            keyExtractor={item => item.id} 
            renderItem={({item}) => {
            return(
                <SymptomeItem item={item} />
            )
        }} horizontal={true} />
        {/* Fin liste des symptomes */}
        <View style={HomeStyle.title_space_between}>
            <Text style={HomeStyle.doctor_title}>
                Nos docteurs
            </Text>
            <TouchableOpacity>
                <Text style={HomeStyle.link}>
                    Afficher tous
                </Text>
            </TouchableOpacity>
        </View>
        {/* Doctor lists */}

        {/* Fin doctor lists */}
    </ScrollView>
  )
}

export default Home;