import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  useWindowDimensions,
  StyleSheet,
  Dimensions,
  FlatList,
  Animated,
} from 'react-native';
import CarouselItem from './CarouselItem';

const {width, height: Height} = Dimensions.get('window');

type CarouselProps = {
  images: Array<any>;
  height?: number;
  offset?: number;
  backgroundColor?: string;
  activeColor?: string;
  shared?: string;
  id?: string;
};
const Carousel = ({
  images,
  height = Height * 0.4,
  offset = 100,
  backgroundColor = 'white',
  activeColor = 'gray',
  shared = '',
  id = '',
}: CarouselProps) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  let position = Animated.divide(scrollX, width);
  const flatList = useRef(null);
  if (images) {
    return (
      <View
        style={{
          height: height,
          justifyContent: 'center',
          backgroundColor: backgroundColor,
          alignItems: 'center',
          marginHorizontal: 20,
          padding: 10,
          borderRadius: 8,
        }}>
        <FlatList
          bouncesZoom
          data={images}
          ref={flatList}
          keyExtractor={(item, index) => 'key' + index}
          horizontal
          pagingEnabled
          scrollEnabled
          snapToAlignment="center"
          scrollEventThrottle={16}
          decelerationRate={'fast'}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <CarouselItem
                id={id}
                index={index}
                shared={shared}
                offset={offset}
                height={height * 0.7}
                image={item}
              />
            );
          }}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {contentOffset: {x: scrollX}},
              },
            ],
            {useNativeDriver: false},
          )}
        />

        <View style={styles.dotView}>
          {images.map((_, i) => {
            let opacity = position.interpolate({
              inputRange: [i - 1, i, i + 1],
              outputRange: [0.2, 1, 0.2],
              extrapolate: 'clamp',
            });
            return (
              <Animated.View
                key={i}
                style={{
                  opacity,
                  height: 10,
                  width: 10,
                  backgroundColor: activeColor,
                  margin: 8,
                  borderRadius: 5,
                }}
              />
            );
          })}
        </View>
      </View>
    );
  }

  return null;
};

const styles = StyleSheet.create({
  dotView: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 15,
  },
});

export default Carousel;
