import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import FavoriteIcon from './FavoriteIcon';
import Facts from './Facts';
import {GrassSceneProps} from '../client'


const GrassScene = ({randomNumber, treeCardFacts, onIsFavoritedHandler, isFavorited, children}: GrassSceneProps) => {
    return (
        <>
            <View style={styles.mainContainer}>
                <FavoriteIcon 
                    randomNumber={randomNumber} 
                    treeCardFacts={treeCardFacts}
                    onIsFavoritedHandler={onIsFavoritedHandler}  
                    isFavorited={isFavorited}
                    heading="Tap the tree for TreeCard facts &amp; save your favorites" 
                />

                <Facts 
                    randomNumber={randomNumber} 
                    treeCardFacts={treeCardFacts} 
                />
                {children}
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