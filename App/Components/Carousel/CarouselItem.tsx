import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  ImageBackground,
} from 'react-native';

const {width, height} = Dimensions.get('window');

type CarouselItemProps = {
  image: any;
};
const CarouselItem = ({image}: CarouselItemProps) => {
  return (
    <View
      style={{
        width: width - 100,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        resizeMethod={'resize'}
        resizeMode="stretch"
        style={{
          width: width - 100,
          height: height * 0.28,
        }}
        source={image}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default CarouselItem;
