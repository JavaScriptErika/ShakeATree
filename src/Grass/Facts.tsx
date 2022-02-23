import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import {FactProps} from '../client'

const Facts = ({randomNumber, treeCardFacts}:FactProps) => {

    return (
        <>
            <ScrollView style={styles.container}>
                <Text style={styles.quote}>
                    {treeCardFacts[randomNumber].quote}
                </Text>
            </ScrollView>
        </>
    )
}

export default Facts

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        paddingHorizontal: 20,
        alignSelf: 'stretch',
    },
    quote : {
        color: '#fff4df',
        fontSize: 22,
        padding: 9,
        paddingBottom: 30,
        borderRadius: 7,
        backgroundColor: "#093135"

    },
    icon : {
        color: '#fff4df',
    }
})