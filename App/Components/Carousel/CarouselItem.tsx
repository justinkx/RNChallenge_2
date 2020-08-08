import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  ImageBackground,
} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';

const {width, height} = Dimensions.get('window');

type CarouselItemProps = {
  image: any;
  height: number;
  offset?: number;
  shared?: string;
  id?: string;
  index: number;
};
const CarouselItem = ({
  image,
  height,
  offset = 100,
  shared = '',
  id = '',
  index,
}: CarouselItemProps) => {
  return (
    <View
      style={{
        width: width - offset,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {shared.length > 0 && index === 0 ? (
        <SharedElement
          style={{
            maxWidth: width - offset,
            maxHeight: height,
          }}
          id={`${shared}-image-${id}`}>
          <Image
            resizeMethod={'scale'}
            resizeMode="stretch"
            style={{
              width: width - offset,
              height: height,
            }}
            source={image}
          />
        </SharedElement>
      ) : (
        <Image
          resizeMethod={'scale'}
          resizeMode="stretch"
          style={{
            width: width - offset,
            height: height,
          }}
          source={image}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({});

export default CarouselItem;
