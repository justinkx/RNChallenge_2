import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  useWindowDimensions,
  Image,
} from 'react-native';
import {Furniture} from '../Assets/Api/furniture';
import {colors} from '../Theme/index';

type SegmentFurnitureItemProps = {
  item: Furniture;
  index: number;
};
const SegmentFurnitureItem = ({item, index}: SegmentFurnitureItemProps) => {
  const {width, height} = useWindowDimensions();
  return (
    <View
      style={[
        styles.container,
        {
          height: height * 0.23,
        },
      ]}>
      <View
        style={{
          width: height * 0.2,
          height: height * 0.15,
          backgroundColor: 'white',
          bottom: 0,
          position: 'absolute',
          right: -height * 0.1,
          borderRadius: height * 0.45,
          transform: [{scaleX: 1.4}],
        }}
      />
      <TouchableOpacity style={[styles.clickable]}>
        <View
          style={[
            styles.textContainer,
            {
              width: width * 0.4,
            },
          ]}>
          <Text numberOfLines={2} style={[styles.name]}>
            {item.name}
          </Text>
          <Text numberOfLines={2} style={[styles.desc]}>
            {item.desc}
          </Text>
          <Text style={[styles.price]}>{item.price}$</Text>
        </View>
        <View
          style={[
            {
              width: width * 0.6 - 20,
              height: height * 0.2,
              flexDirection: 'row',
              justifyContent: 'flex-end',
              paddingRight: 20,
            },
          ]}>
          <Image
            resizeMode={'contain'}
            style={{
              width: width * 0.5,
              height: height * 0.2,
            }}
            source={item.images[0]}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SegmentFurnitureItem;

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
    position: 'relative',
  },
  clickable: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingLeft: 20,
    width: '100%',
  },
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: '100%',
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  desc: {
    fontSize: 14,
    color: '#93918c',
    marginBottom: 8,
    paddingRight: 10,
    marginTop: 2,
  },
  price: {
    color: colors.button,
    fontWeight: 'bold',
    fontSize: 14,
  },
});
