import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const FavoriteIcon = ({heading, randomNumber, treeCardFacts, onIsFavoritedHandler, isFavorited}) => {

    let currentFact = treeCardFacts.filter((fact, index) => index === randomNumber)
 
    return (
        <View style={styles.iconContainer}> 
            <Text style={styles.heading}>{heading}</Text>
            <TouchableOpacity  onPress={() => onIsFavoritedHandler(!currentFact[0].favorited)}>
                <Ionicons 
                    name={isFavorited ? "md-heart" : "md-heart-outline"} 
                    size={32} 
                    color="#fff4df" 
                />
            </TouchableOpacity >
        </View>
    )
}

export default FavoriteIcon


const styles = StyleSheet.create({
    heading : {
        color: '#fff4df',
        fontSize: 18,
        width: 280
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingTop: 15,
    },
})