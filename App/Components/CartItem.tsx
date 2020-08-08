import React, {useState, memo, useEffect, useRef, useLayoutEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  useWindowDimensions,
  Animated,
} from 'react-native';
import {Furniture} from '../Assets/Api/furniture';
import {colors} from '../Theme/index';
import {animate} from '../Utils/Animation';

type Props = {
  item: Furniture;
  index: number;
  onQuandityChange: Function;
  deleteItem?: Function;
};
const CartItem = ({item, index, onQuandityChange, deleteItem}: Props) => {
  const {width, height} = useWindowDimensions();
  const [quandity, setQuandity] = useState(1);
  const animatedValue = useRef(new Animated.Value(0.5)).current;
  const firstUpdate = useRef(true);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
    } else {
      onQuandityChange(item.id, quandity);
    }
  }, [quandity]);
  useEffect(() => {
    animateItem();
  }, []);
  function animateItem() {
    Animated.timing(animatedValue, {
      toValue: 0.5,
      duration: 510,
      useNativeDriver: true,
    }).start(() => {});
  }
  const removeItem = () => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 510,
      useNativeDriver: true,
    }).start(() => {
      deleteItem(item.id);
    });
  };
  const translate_Animation_Object = animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [-width, 0, width],
  });
  const opacity_Animation_Object = animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 1, 0],
  });
  return (
    <Animated.View
      style={[
        styles.container,
        {
          height: height * 0.18,
          transform: [{translateX: translate_Animation_Object}],
          opacity: opacity_Animation_Object,
        },
      ]}>
      <View style={[styles.Row]}>
        <View
          style={[
            styles.Column,
            {
              backgroundColor: `${colors[`furniture${index % 4}`]}60`,
              justifyContent: 'center',
              alignItems: 'center',
            },
          ]}>
          <View
            style={[
              styles.banner,
              {
                backgroundColor: colors[`furniture${index % 4}`],
              },
            ]}
          />
          <Image
            resizeMethod={'resize'}
            resizeMode={'contain'}
            style={{
              width: width * 0.35,
              height: width * 0.3,
            }}
            source={item.images[0]}
          />
        </View>
        <View
          style={[
            styles.Column,
            {
              padding: 10,
            },
          ]}>
          <View style={[styles.nameRow]}>
            <Text
              numberOfLines={2}
              allowFontScaling={false}
              style={[styles.name]}>
              {item.name}
            </Text>
            <TouchableOpacity onPress={() => removeItem()}>
              <Image
                style={[styles.closeBtn]}
                source={require('../Assets/Icons/cart-close.png')}
              />
            </TouchableOpacity>
          </View>
          <Text
            numberOfLines={2}
            allowFontScaling={false}
            style={[styles.desc]}>
            {item.desc}
          </Text>
          <Text
            style={[styles.price]}
            numberOfLines={1}
            allowFontScaling={false}>
            {item.price * item.quandity} $
          </Text>
          <View
            style={{
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              position: 'absolute',
              bottom: 0,
              paddingBottom: 10,
            }}>
            {/* quantity picker */}
            <TouchableOpacity
              onPress={() => {
                if (quandity !== 1) {
                  animate();
                  setQuandity((prev) => prev - 1);
                }
              }}
              style={[styles.quandityBtn]}>
              <Image
                style={[styles.icon]}
                source={require('../Assets/Icons/minus.png')}
              />
            </TouchableOpacity>
            <Text style={[styles.quandity]}>{quandity}</Text>
            <TouchableOpacity
              onPress={() => {
                animate();
                setQuandity((prev) => prev + 1);
              }}
              style={[styles.quandityBtn]}>
              <Image
                style={[styles.icon]}
                source={require('../Assets/Icons/plus.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Animated.View>
  );
};

export default memo(CartItem, (prev, next) => prev.item.id !== next.item.id);

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    marginBottom: 30,
    backgroundColor: 'white',
  },
  Row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    overflow: 'hidden',
    height: '100%',
  },
  Column: {
    width: '50%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    height: '100%',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    position: 'relative',
  },
  banner: {
    position: 'absolute',
    height: '50%',
    width: '100%',
    bottom: 0,
    borderBottomLeftRadius: 10,
    left: 0,
  },
  nameRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 6,
    width: '90%',
  },
  closeBtn: {
    width: 20,
    height: 20,
  },
  desc: {
    fontSize: 13,
    color: '#546e7a',
    marginBottom: 8,
  },
  price: {
    color: colors.segment,
    fontSize: 15,
    fontWeight: 'bold',
  },
  icon: {width: 10, height: 10},
  quandityBtn: {
    width: 26,
    height: 26,
    borderRadius: 26 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.32,
    shadowRadius: 3.46,
    backgroundColor: 'white',
    elevation: 5,
  },
  quandity: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginHorizontal: 13,
    width: 20,
    textAlign: 'center',
  },
});
