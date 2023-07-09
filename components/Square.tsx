import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const title = "Je suis un quaré";
const Square = (props) => {
    
    return ( 
        <View style={[{backgroundColor: props.color}, styles.square]} />

     );
}

const styles = StyleSheet.create({
    square: {
        width: 50,
        height: 50
    }
})
export default Square;