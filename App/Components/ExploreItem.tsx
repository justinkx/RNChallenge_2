import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  useWindowDimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Furniture} from '../Assets/Api/furniture';
import {colors} from '../Theme/index';
import {SharedElement} from 'react-navigation-shared-element';

type ExploreItemProps = {
  item: Furniture;
  index: number;
  onClick: Function;
};
const ExploreItem = ({item, index, onClick}: ExploreItemProps) => {
  const {width} = useWindowDimensions();

  return (
    <TouchableOpacity
      onPress={() => onClick(item, index)}
      activeOpacity={0.6}
      style={[
        styles.container,
        {
          width: width * 0.4,
          height: width * 0.45,
        },
      ]}>
      <View
        style={{
          flex: 1,
          width: width * 0.4,
          height: width * 0.45,
          backgroundColor: colors[`furniture${index % 4}`],
          position: 'absolute',
          borderRadius: 15,
        }}
      />

      <View
        style={{
          width: '100%',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
        <SharedElement
          style={{
            width: width * 0.4 - 40,
            height: width * 0.3,
          }}
          id={`explore-image-${item.id}`}>
          <Image
            style={{
              width: width * 0.4 - 40,
              height: width * 0.3,
              resizeMode: 'contain',
            }}
            source={item.images[0]}
          />
        </SharedElement>
      </View>

      <View
        style={{
          paddingBottom: 5,
        }}>
        <SharedElement id={`explore-${item.name}-${item.id}`}>
          <Text numberOfLines={1} style={[styles.name]}>
            {item.name}
          </Text>
        </SharedElement>
        <SharedElement id={`explore-${item.price}-${item.id}`}>
          <Text style={[styles.price]}>{item.price} $</Text>
        </SharedElement>
      </View>
    </TouchableOpacity>
  );
};

export default ExploreItem;

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    marginHorizontal: 5,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    margin: 10,
  },
  name: {
    color: 'white',
    fontSize: 15,
    paddingRight: 10,
  },
  price: {
    fontSize: 14,
    color: 'white',
  },
});
