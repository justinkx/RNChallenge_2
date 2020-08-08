import React, {useRef, useState, useEffect} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  Animated,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colors} from '../../Theme/index';
import CartHeader from './CartHeader';
import {Furniture, cartItems} from '../../Assets/Api/furniture';
import CartItem from '../../Components/CartItem';
import {animate} from '../../Utils/Animation';

type Props = {
  closeCart: Function;
};
const Cart = ({closeCart}: Props) => {
  const insets = useSafeAreaInsets();
  const [cart, setCart] = useState([]);
  const {width, height} = useWindowDimensions();
  useEffect(() => {
    const _cart = cartItems();
    setCart(_cart);
  }, []);
  return (
    <View
      style={[
        styles.safeAreaView,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
        },
      ]}>
      <CartHeader onClose={() => closeCart()} />
      <View style={{flex: 1}}>
        <Text style={[styles.title]}>My Bag</Text>
        <Animated.ScrollView
          contentContainerStyle={{
            paddingHorizontal: 30,
            paddingTop: 10,
          }}>
          {cart &&
            cart.map((furniture: Furniture, index: number) => (
              <CartItem
                deleteItem={(id) => removeItem(id)}
                onQuandityChange={(id: string, quandity: number) =>
                  quandityChange(id, quandity)
                }
                item={furniture}
                key={furniture.id}
                index={index}
              />
            ))}
        </Animated.ScrollView>
        <View style={[styles.footer]}>
          <View
            style={{
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}>
            <Text style={[styles.tPrice]}>Total Price</Text>
            <Text style={[styles.price]}>{totalCartValue()} $</Text>
          </View>
          <TouchableOpacity style={[styles.checkoutBtn]}>
            <Text style={[styles.checkout]}>Checkout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
  function quandityChange(id: string, quandity: number) {
    let newCartItems = cart.map((item) => {
      if (item.id === id) {
        item.quandity = quandity;
      }
      return item;
    });
    setCart(newCartItems);
  }
  function totalCartValue() {
    let cartValue = 0;
    cart.map((item: Furniture) => {
      cartValue = cartValue + item.price * item.quandity;
    });
    return cartValue;
  }
  function removeItem(id) {
    const newCart = cart.filter((cart: Furniture) => cart.id !== id);
    setCart(newCart);
    animate();
  }
};

export default Cart;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
    marginVertical: 20,
    paddingHorizontal: 30,
  },
  footer: {
    paddingVertical: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 25,
    alignItems: 'center',
  },
  checkoutBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.button,
    borderRadius: 6,
    width: 200,
    height: 40,
  },
  checkout: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  tPrice: {
    color: 'black',
    fontSize: 15,
    fontWeight: '600',
  },
  price: {
    color: colors.segment,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
