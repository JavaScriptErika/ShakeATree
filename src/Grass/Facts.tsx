import React, { useState} from 'react';
import { StyleSheet, Text, View, Animated, ScrollView } from 'react-native';
import FavoriteIcon from './FavoriteIcon';


const Facts = () => {
    return (
        <>
            <ScrollView>
                <Text>“Maybe, just to play a little, we'll put a little tree here. If you didn't have baby clouds, you wouldn't have big clouds. A beautiful little sunset.”</Text>
            </ScrollView>
            
        </>
    )
}

export default Facts

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 2,
        backgroundColor: '#105157',
        justifyContent: 'space-around',
        paddingTop: 15,
    },
    heading : {
        color: '#fff4df',
        fontSize: 20,
    },
    icon : {
        color: '#fff4df',
    }
})