import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {SegmentItem} from '../Assets/Api/furniture';
import {colors} from '../Theme/index';
type SegmentButtonProps = {
  segmentItem: SegmentItem;
  index: number;
  onSelect: Function;
  activeSegment?: string;
};
const SegmentButton = ({
  segmentItem,
  index,
  onSelect,
  activeSegment,
}: SegmentButtonProps) => {
  return (
    <View style={[styles.segment]}>
      <TouchableOpacity
        activeOpacity={0.6}
        style={[
          styles.button,
          {
            backgroundColor:
              segmentItem.name === activeSegment
                ? colors.segment
                : 'transparent',
          },
        ]}
        onPress={() => {
          onSelect(segmentItem);
        }}>
        <Text
          style={[
            styles.name,
            {
              color: segmentItem.name === activeSegment ? 'white' : '#b9b9b9',
            },
          ]}>
          {segmentItem.name}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SegmentButton;

const styles = StyleSheet.create({
  segment: {
    marginHorizontal: 10,
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    height: 30,
    borderRadius: 25,
    paddingHorizontal: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontWeight: 'bold',
  },
});
