import React from 'react';
import {StyleSheet, TouchableOpacity, View, Image} from 'react-native';

type Props = {
  onClose: Function;
};
const CartHeader = ({onClose}: Props) => {
  return (
    <View style={[styles.container]}>
      <TouchableOpacity onPress={() => onClose()}>
        <Image
          style={[
            styles.icon,
            {
              marginLeft: 0,
            },
          ]}
          source={require('../../Assets/Icons/close.png')}
        />
      </TouchableOpacity>
      <View style={[styles.end]}>
        <TouchableOpacity>
          <Image
            style={[styles.icon]}
            source={require('../../Assets/Icons/search.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={[styles.icon]}
            source={require('../../Assets/Icons/notification.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartHeader;

const styles = StyleSheet.create({
  container: {
    height: 50,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  end: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  icon: {
    width: 25,
    height: 25,
    marginLeft: 10,
  },
});
