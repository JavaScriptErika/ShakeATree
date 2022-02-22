import React, { useState} from 'react';
import Svg, {Path } from 'react-native-svg'
import { leafData } from './leafData';
import LeafShakeView from '../animations/LeafShakeView';

const Tree = () => {
    const [treeTap, setTreeTap] = useState(0)
    const onPressHandler = () => setTreeTap((prevTap) => prevTap+=1)

    return (     
        <Svg viewBox="0 0 230.24 329.74" onPress={onPressHandler}>
            {leafData.map(leaf => <LeafShakeView key={leaf.d} d={leaf.d} fill={leaf.fill} treeTap={treeTap} />) }
            <Path fill="#572b10" d="M150 242c13.32-41.47 38.47-77.63 38.47-77.63l-3.47-2.13s-19.23 35.1-28.11 30.31 18.25-84 18.25-84l-3.45-2.13s-24.17 78.17-38.47 113.26c-7.26 17.83-20.71 22.87-31.07-18.61-4.79-19.07-19.26-65.94-19.26-65.94l-3.4 1.59s11.83 36.21 13.75 61.15c.5 6.38-4.8 1.06-9.73-8-6.92-12.65-13.91-23.37-13.91-23.37l-2 3.19s32.06 53.7 35 97.31c2.73 40.27-11.84 62.74-11.84 62.74h62.14S136.64 283.48 150 242Z" />
        </Svg>
    )
}

export default Tree;