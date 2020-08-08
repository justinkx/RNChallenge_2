import React, {useState} from 'react';
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
import {Rating, AirbnbRating} from 'react-native-ratings';
import Modal from 'react-native-modal';
import Carousel from './Carousel/Carousel';
import {SharedElement} from 'react-navigation-shared-element';

type SegmentFurnitureItemProps = {
  item: Furniture;
  index: number;
  onClick: Function;
};
const SegmentFurnitureItem = ({
  item,
  index,
  onClick,
}: SegmentFurnitureItemProps) => {
  const {width, height} = useWindowDimensions();
  const [showModal, setModal] = useState(false);
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
      <TouchableOpacity
        onPress={() => onClick(item, index)}
        style={[styles.clickable]}>
        <View
          style={[
            styles.textContainer,
            {
              width: width * 0.4,
            },
          ]}>
          <SharedElement style={{}} id={`furniture-${item.name}-${item.id}`}>
            <Text numberOfLines={2} style={[styles.name]}>
              {item.name}
            </Text>
          </SharedElement>

          <Text numberOfLines={2} style={[styles.desc]}>
            {item.desc}
          </Text>
          <SharedElement id={`furniture-${item.price}-${item.id}`}>
            <Text style={[styles.price]}>{item.price}$</Text>
          </SharedElement>
          <View style={[styles.ratingView]}>
            <Rating
              type="star"
              ratingCount={5}
              imageSize={15}
              ratingColor={'gray'}
              ratingBackgroundColor={'gray'}
              showRating={false}
              tintColor={colors.backgroundColor}
              readonly
            />
            <Text style={[styles.rating]}>{item.rating}</Text>
          </View>
          <View style={[styles.bagContainer]}>
            <TouchableOpacity style={[styles.bagItem]}>
              <Image
                resizeMode={'contain'}
                style={[styles.bagIcon]}
                source={require('../Assets/Icons/cart.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.bagItem,
                {
                  marginLeft: 20,
                },
              ]}>
              <Image
                resizeMode={'contain'}
                style={[styles.bagIcon]}
                source={
                  index % 2 === 0
                    ? require('../Assets/Icons/like.png')
                    : require('../Assets/Icons/unlike.png')
                }
              />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => setModal(true)}
          style={[
            {
              width: width * 0.6 - 20,
              height: height * 0.2,
              flexDirection: 'row',
              justifyContent: 'flex-end',
              paddingRight: 20,
            },
          ]}>
          <SharedElement id={`furniture-image-${item.id}`}>
            <Image
              resizeMethod={'scale'}
              resizeMode={'stretch'}
              style={{
                width: width * 0.5,
                height: height * 0.2,
              }}
              source={item.images[0]}
            />
          </SharedElement>
        </TouchableOpacity>
      </TouchableOpacity>
      <Modal
        onBackdropPress={() => {
          setModal(false);
        }}
        onBackButtonPress={() => {
          setModal(false);
        }}
        useNativeDriver={true}
        animationIn={'zoomIn'}
        animationOut={'zoomOut'}
        isVisible={showModal}>
        <Carousel offset={100} images={item.images} />
      </Modal>
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
    color: 'black',
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
  ratingView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  rating: {
    marginLeft: 5,
    fontSize: 8,
    fontWeight: '600',
    color: 'black',
  },
  bagContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  bagItem: {
    width: 35,
    height: 35,
    borderRadius: 35 / 2,
    backgroundColor: 'white',
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
  },
  bagIcon: {
    width: 20,
    height: 20,
  },
});
