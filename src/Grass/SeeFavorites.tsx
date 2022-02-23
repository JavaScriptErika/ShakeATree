import React, {useState} from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';

const SeeFavorites = ({route}) => {

    const {treeCardFacts} = route.params
    
    const favoritedFacts = treeCardFacts.filter(fact => fact.favorited === true)
    console.log(favoritedFacts)
    return (
        <View>

        </View>
    )
}

export default SeeFavorites