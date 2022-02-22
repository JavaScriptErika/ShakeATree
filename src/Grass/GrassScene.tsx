import React, { useState} from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';
import FavoriteIcon from './FavoriteIcon';
import Facts from './Facts';


const GrassScene = () => {
    return (
        <>
            <View style={styles.mainContainer}>
                <FavoriteIcon heading="Tap the tree for TreeCard facts &amp; save your favorites" />
                <Facts />
            </View>
           
        </>
    )
}

export default GrassScene

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#105157',
        flex: 2,
    }
})