import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Furniture} from '../Assets/Api/furniture';
import {colors} from '../Theme/index';

type Props = {
  furniture: Furniture;
  index: number;
};
const RecentlyViewed = ({furniture, index}: Props) => {
  const {width, height} = useWindowDimensions();

  return (
    <View
      style={[
        styles.container,
        {
          width: width * 0.55,
          height: height * 0.17,
          backgroundColor: `${colors[`furniture${index % 4}`]}45`,
        },
      ]}>
      <ImageBackground
        resizeMode={'stretch'}
        style={{
          width: width * 0.45,
          height: height * 0.1,
          opacity: 0.7,
        }}
        source={furniture.images[0]}></ImageBackground>
      <View
        style={[
          styles.banner,
          {
            height: height * 0.07,
          },
        ]}>
        <View style={[styles.row]}>
          <View
            style={[
              styles.column,
              {
                width: '60%',
              },
            ]}>
            <Text numberOfLines={2} style={[styles.name]}>
              {furniture.name}
            </Text>
            <Text numberOfLines={2} style={[styles.desc]}>
              {furniture.desc}
            </Text>
          </View>
          <View
            style={[
              styles.column,
              {
                paddingLeft: 20,
                alignItems: 'flex-end',
              },
            ]}>
            <Text style={[styles.name]}>{furniture.price} $</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity
                style={[
                  styles.likeBtn,
                  {
                    marginRight: 5,
                  },
                ]}>
                <Image
                  style={{
                    width: 10,
                    height: 10,
                  }}
                  source={require('../Assets/Icons/cart.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity style={[styles.likeBtn]}>
                <Image
                  style={{
                    width: 10,
                    height: 10,
                  }}
                  source={require('../Assets/Icons/like.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default RecentlyViewed;

const styles = StyleSheet.create({
  container: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    marginLeft: 20,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  banner: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    position: 'absolute',
    width: '100%',
    bottom: 0,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    zIndex: 1000,
    padding: 5,
  },
  column: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 10,
    color: 'white',
    marginBottom: 4,
  },
  desc: {
    color: 'white',
    fontSize: 8,
  },
  likeBtn: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
