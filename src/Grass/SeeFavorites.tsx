import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {RootStackProps} from '../client'

const SeeFavorites = ({route}:RootStackProps) => {

    const {treeCardFacts} = route.params

    const favoritedFacts = treeCardFacts.filter(fact => fact.favorited === true)
    console.log(favoritedFacts.length)

    if(favoritedFacts.length > 0) {
        return (
            <View style={styles.container}>
                <FlatList 
                    data={favoritedFacts}
                    renderItem={({item: {quote, id}}) => (
                        <View style={styles.card}> 
                            <Text style={styles.cardText}>
                                {quote}
                            </Text>
                        </View>
                    )}
                />
            </View>
        )
    } else {
        return (
            <View style={styles.noShowContainer}>
               <Ionicons 
                    name="md-leaf"
                    size={32} 
                    color="#3a9a63" 
                />
               <Text>No current favorites to show</Text>
            </View>
        )
    }

}

export default SeeFavorites

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fefcfd',
        flex: 1,
    },
    card: {
        backgroundColor: '#e5f1ea',
        padding: 12,
        marginVertical: 10,
        borderRadius: 20,
        width: '90%',
        alignSelf: 'center'
    },
    cardText: {
        color: '#135658',
        fontSize: 25,
    },
    noShowContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    }
})