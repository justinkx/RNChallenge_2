import React, {useRef, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  Image,
  TouchableOpacity,
  Animated,
  Easing,
} from 'react-native';
import {colors} from '../../Theme/index';
import Carousel from '../../Components/Carousel/Carousel';
import {useNavigation} from '@react-navigation/native';
import {SharedElement} from 'react-navigation-shared-element';
import {SafeAreaView} from 'react-native-safe-area-context';

type Props = {
  headerColor: string;
  images: Array<any>;
  id: string;
  shared: string;
  quandity?: number;
};
const DetailsHeader = ({
  headerColor,
  images,
  id,
  shared,
  quandity = 0,
}: Props) => {
  const {width, height} = useWindowDimensions();
  const navigation = useNavigation();
  const shakeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    shakeAnimation();
  }, [quandity]);
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
  };
  return (
    <View>
      <View
        style={{
          width: width * 0.5,
          height: width * 0.5,
          backgroundColor: headerColor,
          top: -width * 0.1,
          position: 'absolute',
          left: -width * 0.25,
          borderRadius: (width * 0.6) / 2,
          transform: [{scaleX: 2.5}, {scaleY: 2.2}],
        }}
      />

      <View style={[styles.header]}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            style={{
              width: 22,
              height: 22,
            }}
            source={require('../../Assets/Icons/back.png')}
          />
        </TouchableOpacity>
        <View
          style={{
            width: 70,
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <TouchableOpacity style={[styles.likeBtn]}>
            <Animated.View
              style={[
                styles.badge,
                {
                  transform: [{translateX: shakeAnim}],
                },
              ]}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 5,
                  textAlign: 'center',
                  fontWeight: 'bold',
                }}>
                {quandity}
              </Text>
            </Animated.View>
            <Image
              style={{
                width: 15,
                height: 15,
              }}
              source={require('../../Assets/Icons/cart.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.likeBtn]}>
            <Image
              style={{
                width: 15,
                height: 15,
              }}
              source={require('../../Assets/Icons/like.png')}
            />
          </TouchableOpacity>
        </View>
      </View>

      <Carousel
        id={id}
        shared={shared}
        activeColor={headerColor}
        backgroundColor={'transparent'}
        offset={75}
        height={height * 0.26}
        images={images}
      />
    </View>
  );
};

export default DetailsHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
    paddingHorizontal: 10,
    zIndex: 1000,
  },
  likeBtn: {
    width: 30,
    height: 30,
    backgroundColor: 'white',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    width: 10,
    height: 10,
    borderRadius: 10 / 2,
    backgroundColor: 'red',
    top: 0,
    left: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
