import React, { useRef, useEffect } from 'react';
import Svg, {Path, G} from 'react-native-svg'
import { Animated, Text, View } from 'react-native';
import { leafData } from './leafData';

const Leaves = () => {

    return (
        leafData.map( leaf => leaf)
    )
}

export default Leaves