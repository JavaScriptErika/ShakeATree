import React, {useRef, useEffect} from 'react';
import { Animated, Easing } from 'react-native';
import {Path} from 'react-native-svg'
import {LeafShakeViewProps} from '../client'

const LeafShakeView = ({d, fill, randomNumber}:LeafShakeViewProps) => {

  const isMounted = useRef(false)
  let shakeValue =  useRef(new Animated.Value(0)).current;
  const AnimatedPath = Animated.createAnimatedComponent<any>(Path)

  const min = 0
  const max = 130
  const randomDelay = Math.floor(Math.random() * (max - min + 1) + min);

  const onPressShake = () => {
    Animated.sequence([
      Animated.timing(
          shakeValue,
        {
          toValue: -1,
          duration: 200,
          delay: randomDelay,
          useNativeDriver: true
        }
      ),
        Animated.timing(
          shakeValue,
        {
          toValue: 1,
          duration: 200,
          useNativeDriver: true
        }
      ),
      Animated.timing(
        shakeValue,
      {
        toValue: 0,
        duration: 200,
        easing: Easing.elastic(1.5),
        useNativeDriver: true
      }
      ),
    ]).start();
  }

    const shake = shakeValue.interpolate({
        inputRange: [-1, 0, 1],
        outputRange: ['-10', '0', '10']
    })

    useEffect(() => {
      isMounted.current ? onPressShake() : isMounted.current = true
    }, [randomNumber]);


  return (
    <AnimatedPath 
      style={{
        transform: [{translateX: shake}], 
      }} 
      d={d}
      fill={fill}
    />
  );
}
export default LeafShakeView