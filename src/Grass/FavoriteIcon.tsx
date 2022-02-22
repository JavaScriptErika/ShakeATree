import React, { useState} from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const FavoriteIcon = ({heading}) => {
    const [isFavorited, setIsFavorited] = useState(false)

    return (
        <View style={styles.iconContainer}> 
            <Text style={styles.heading}>{heading}</Text>
            <Ionicons 
                onPress={() => setIsFavorited(prevState => !prevState)} 
                name={isFavorited ? "md-heart" : "md-heart-outline"} 
                size={32} 
                color="#fff4df" 
            />
        </View>
    )
}

export default FavoriteIcon


const styles = StyleSheet.create({
    heading : {
        color: '#fff4df',
        fontSize: 20,
        width: 280
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingTop: 15,
    },
})