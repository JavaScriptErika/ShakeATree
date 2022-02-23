import React, {useState} from 'react';
import TreeSvg from './TreeSvg';
import GrassScene from '../Grass/GrassScene';
import { data } from '../Grass/treeCardData';
import { View, Button, StyleSheet } from 'react-native';

const TreeScene = ({navigation, route}) => {

    const [randomNumber, setrandomNumber] = useState(0);
    const [treeCardFacts, setTreeCardFacts] = useState(data);
    const [isFavorited, setIsFavorited] = useState(false);

    const onPressTreeHandler = () => {
        const randomIndex = Math.floor(Math.random() * data.length);
        setrandomNumber(randomIndex)
        setIsFavorited(treeCardFacts[randomIndex].favorited)
    }

    const onIsFavoritedHandler = (isHearted) => {
      setIsFavorited(() => isHearted)
      const favoritedFacts = [...treeCardFacts]
      favoritedFacts[randomNumber] = {...favoritedFacts[randomNumber], favorited: isHearted}
      setTreeCardFacts(favoritedFacts)
  }

    return (  
      <>

        <TreeSvg 
          onPressTreeHandler={onPressTreeHandler} 
          randomNumber={randomNumber} 
        />

        <GrassScene 
          randomNumber={randomNumber} 
          treeCardFacts={treeCardFacts} 
          onIsFavoritedHandler={onIsFavoritedHandler} 
          isFavorited={isFavorited} 
        >
          <View style={styles.buttonContainer}> 
            <Button color="#33BC84" title='See Favorites' onPress={() => navigation.navigate('Your Favorites', {treeCardFacts})}/>
          </View>
          
        </GrassScene>



      </>
    )
}

export default TreeScene;

const styles = StyleSheet.create({
  buttonContainer: {
      alignItems: 'flex-end',
      marginVertical: 15,
      marginRight: 25
  },
})