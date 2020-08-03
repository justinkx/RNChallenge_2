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

type ExploreItemProps = {
  item: Furniture;
  index: number;
};
const ExploreItem = ({item, index}: ExploreItemProps) => {
  const {width, height} = useWindowDimensions();

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={[
        styles.container,
        {
          width: width * 0.4,
          height: width * 0.45,
          backgroundColor: colors[`furniture${index % 4}`],
        },
      ]}>
      <View
        style={{
          width: '100%',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
        <Image
          style={{
            width: width * 0.4 - 40,
            height: width * 0.3,
            resizeMode: 'contain',
          }}
          source={item.images[0]}
        />
      </View>

      <View
        style={{
          paddingBottom: 5,
        }}>
        <Text numberOfLines={1} style={[styles.name]}>
          {item.name}
        </Text>
        <Text style={[styles.price]}>{item.price} $</Text>
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
