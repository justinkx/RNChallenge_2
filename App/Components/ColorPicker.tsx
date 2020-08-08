import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {animate} from '../Utils/Animation';

type Props = {
  colors: Array<any>;
  style: {};
  onColorSelect: Function;
  defaultColorIndex: number;
};
const ColorPicker = ({
  colors,
  style,
  onColorSelect,
  defaultColorIndex,
}: Props) => {
  const [activeColor, setColor] = useState(colors[defaultColorIndex]);

  return (
    <View style={[styles.container, style]}>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          color: 'black',
          width: '30%',
        }}>
        Color
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
        {colors.map((color: string, index: number) => (
          <TouchableOpacity
            onPress={() => {
              setColor(color);
              animate();
              onColorSelect(color);
            }}
            key={index}
            style={[
              styles.colorBtn,
              {
                padding: activeColor === color ? 4 : 0,
                width: activeColor === color ? 30 : 24,
                height: activeColor === color ? 30 : 24,
                borderRadius: activeColor === color ? 30 / 2 : 24 / 2,
              },
            ]}>
            <View
              style={{
                width: activeColor === color ? 22 : 24,
                height: activeColor === color ? 22 : 24,
                borderRadius: activeColor === color ? 11 : 12,
                backgroundColor: color,
              }}></View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default ColorPicker;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
  },
  colorBtn: {
    marginRight: 13,
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
});
