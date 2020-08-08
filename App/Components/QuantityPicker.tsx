import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {colors} from '../Theme/index';
import {animate} from '../Utils/Animation';

type Props = {
  onQuantityChange: Function;
  style: {};
};
const QuantityPicker = ({onQuantityChange, style}: Props) => {
  const [quandity, setQuandity] = useState(0);
  useEffect(() => {
    onQuantityChange(quandity);
  }, [quandity]);
  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.title]}>Quandity</Text>
      <TouchableOpacity
        onPress={() => {
          if (quandity !== 0) {
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
  );
};

export default QuantityPicker;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
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
    fontSize: 17,
    fontWeight: 'bold',
    color: colors.segment,
    marginHorizontal: 13,
    width: 20,
    textAlign: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    width: '30%',
  },
  icon: {width: 10, height: 10},
});
