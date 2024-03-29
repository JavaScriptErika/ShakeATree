import React from 'react';
import { StyleSheet } from 'react-native';
import Svg, {Path} from 'react-native-svg'
import { LinearGradient } from "expo-linear-gradient";
import { leafData } from '../../data/leafData';
import LeafShakeView from '../../animations/LeafShakeView';
import {TreeSvgProps} from '../../client'

const TreeSvg = ({onPressTreeHandler, randomNumber}:TreeSvgProps) => {

    return ( 
        <LinearGradient colors={['#ffeeea', '#ffeeea', '#ffbbac']} style={styles.container}> 
            <Svg viewBox="0 0 230.24 329.74" onPress={onPressTreeHandler}>
                {leafData.map(leaf => <LeafShakeView key={leaf.d} d={leaf.d} fill={leaf.fill} randomNumber={randomNumber} />) }
                <Path fill="#572b10" d="M150 242c13.32-41.47 38.47-77.63 38.47-77.63l-3.47-2.13s-19.23 35.1-28.11 30.31 18.25-84 18.25-84l-3.45-2.13s-24.17 78.17-38.47 113.26c-7.26 17.83-20.71 22.87-31.07-18.61-4.79-19.07-19.26-65.94-19.26-65.94l-3.4 1.59s11.83 36.21 13.75 61.15c.5 6.38-4.8 1.06-9.73-8-6.92-12.65-13.91-23.37-13.91-23.37l-2 3.19s32.06 53.7 35 97.31c2.73 40.27-11.84 62.74-11.84 62.74h62.14S136.64 283.48 150 242Z" />
            </Svg>
        </LinearGradient>
    )
}

export default TreeSvg;

const styles = StyleSheet.create({
  container: {
    paddingTop: 90,
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  }
});