import React, {useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Animated,
  Easing,
} from 'react-native';
import {animate} from '../Utils/Animation';
import {colors} from '../Theme/index';

type Props = {
  addToCart: Function;
};
const AddToBagButton = ({addToCart}: Props) => {
  const shakeAnim = useRef(new Animated.Value(0)).current;
  const shakeAnimation = () => {
    Animated.sequence([
      Animated.timing(shakeAnim, {
        toValue: 3,
        duration: 100,
        easing: Easing.cubic,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnim, {
        toValue: -3,
        duration: 100,
        easing: Easing.cubic,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnim, {
        toValue: 3,
        duration: 100,
        easing: Easing.cubic,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnim, {
        toValue: 0,
        duration: 100,
        easing: Easing.cubic,
        useNativeDriver: true,
      }),
    ]).start();
    addToCart();
  };
  return (
    <TouchableOpacity
      onPress={shakeAnimation}
      activeOpacity={0.7}
      style={[styles.container]}>
      <Animated.Image
        resizeMethod={'resize'}
        resizeMode={'contain'}
        style={{
          width: 25,
          height: 25,
          transform: [{translateY: shakeAnim}],
        }}
        source={require('../Assets/Icons/bag.png')}
      />
      <Text style={[styles.Add]}>Add To Bag</Text>
    </TouchableOpacity>
  );
};

export default AddToBagButton;

const styles = StyleSheet.create({
  container: {
    width: 250,
    height: 48,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: colors.button,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.32,
    shadowRadius: 3.46,
    elevation: 5,
  },
  Add: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 20,
  },
});
