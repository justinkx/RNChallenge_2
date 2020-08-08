import React, {useRef, useState, useEffect} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Animated,
  Dimensions,
  FlatList,
  useWindowDimensions,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {SharedStackParams} from '../../Navigation/Navigator';
import {RouteProp} from '@react-navigation/native';
import {colors} from '../../Theme/index';
import {recentViewed, Furniture} from '../../Assets/Api/furniture';
import DetailsHeader from './DetailsHeader';
import {Rating} from 'react-native-ratings';
import {SharedElement} from 'react-navigation-shared-element';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import ColorPicker from '../../Components/ColorPicker';
import QuantityPicker from '../../Components/QuantityPicker';
import AddToBagButton from '../../Components/AddToBagButton';
import RecentlyViewed from '../../Components/RecentlyViewed';
import Cart from '../Cart/Cart';
import Modal from 'react-native-modal';

type DetailNavigationProp = StackNavigationProp<SharedStackParams, 'Details'>;
type DetailRouteProps = RouteProp<SharedStackParams, 'Details'>;
type Props = {
  navigation: DetailNavigationProp;
  route: DetailRouteProps;
};
const DetailsPage = ({navigation, route}: Props) => {
  const {id, index, selected, shareId} = route.params;
  const [furnitureColor, setColor] = useState(colors[`furniture${index % 4}`]);
  const {width, height} = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const [quandity, setQuandity] = useState(0);
  const [addToBagQuandity, setBagQuandity] = useState(0);
  const [showCart, setCart] = useState(false);
  return (
    <View
      style={[
        styles.safeAreaView,
        {
          paddingTop: insets.top,
        },
      ]}>
      <Modal
        style={{
          padding: 0,
          margin: 0,
        }}
        useNativeDriver={true}
        onBackButtonPress={() => setCart(false)}
        onBackdropPress={() => setCart(false)}
        animationOut={'slideOutDown'}
        animationIn={'slideInUp'}
        isVisible={showCart}>
        <Cart closeCart={() => setCart(false)} />
      </Modal>
      <DetailsHeader
        goToCart={() => setCart(true)}
        quandity={addToBagQuandity}
        shared={shareId}
        id={id}
        images={selected.images}
        headerColor={furnitureColor}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        style={{
          flex: 1,
        }}
        contentContainerStyle={[styles.content]}>
        <View style={[styles.Details]}>
          <View style={[styles.row]}>
            <View style={[styles.nameContainer]}>
              <SharedElement id={`${shareId}-${selected.name}-${id}`}>
                <Text style={[styles.name]} allowFontScaling={false}>
                  {selected.name}
                </Text>
              </SharedElement>

              <Text
                style={{
                  fontSize: 12,
                  marginTop: 5,
                  color: '#616161',
                }}
                allowFontScaling={false}>
                {selected.desc}
              </Text>
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
                <Text style={[styles.rating]}>{selected.rating}</Text>
              </View>
            </View>
            <SharedElement id={`${shareId}-${selected.price}-${id}`}>
              <Text
                style={[
                  styles.name,
                  {
                    color: colors.segment,
                  },
                ]}
                allowFontScaling={false}>
                {selected.price} $
              </Text>
            </SharedElement>
          </View>
          <ColorPicker
            style={{marginTop: 25}}
            defaultColorIndex={index % 4}
            onColorSelect={(color: string) => setColor(color)}
            colors={[
              colors.furniture0,
              colors.furniture1,
              colors.furniture2,
              colors.furniture3,
            ]}
          />
          <QuantityPicker
            style={{
              marginTop: 25,
            }}
            onQuantityChange={(value: number) => setQuandity(value)}
          />
          <View
            style={{
              width: '100%',
              alignItems: 'center',
              marginTop: 40,
            }}>
            <AddToBagButton
              addToCart={() => {
                if (quandity > 0) {
                  setBagQuandity(quandity);
                }
              }}
            />
          </View>
          <Text style={[styles.recentlyViewed]}>RECENTLY VIEWED</Text>
        </View>
        <ScrollView bounces horizontal showsHorizontalScrollIndicator={false}>
          {recentViewed().map((item: Furniture, index: number) => (
            <RecentlyViewed index={index} furniture={item} key={item.id} />
          ))}
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default DetailsPage;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  Details: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingHorizontal: 25,
    paddingTop: 25,
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
  },
  nameContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '55%',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  ratingView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 5,
  },
  rating: {
    marginLeft: 6,
    fontSize: 10,
    fontWeight: '600',
    color: '#757575',
  },
  recentlyViewed: {
    marginBottom: 20,
    marginTop: 30,
    fontWeight: 'bold',
    fontSize: 19,
    color: 'black',
  },
});
