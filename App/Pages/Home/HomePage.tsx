import React, {useRef, useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Animated,
  useWindowDimensions,
} from 'react-native';
import {colors} from '../../Theme/index';
import HomeHeader from '../../Components/HomeHeader';
import {
  furnitures,
  exploreFurniture,
  Furniture,
  segmentItems,
  SegmentItem,
} from '../../Assets/Api/furniture';
import ExploreItem from '../../Components/ExploreItem';
import SegmentButton from '../../Components/SegmentButton';
import SegmentFurnitureItem from '../../Components/SegmentFurnitureItem';

const HomePage = () => {
  const {width, height} = useWindowDimensions();
  const PADDING_TOP = width / 2.2 + 50;
  const exploreItems = exploreFurniture();
  console.log('exploreItems', exploreItems);
  const scrollY = useRef(new Animated.Value(0)).current;
  const animatedHeight = scrollY.interpolate({
    inputRange: [0, 300],
    outputRange: [PADDING_TOP + 60, 60],
    extrapolate: 'clamp',
  });
  const [allFurnitures, setFurnitures] = useState(furnitures);
  const [selectedSegment, setSegment] = useState(segmentItems[0]);
  const [segmentFurnitures, setSegmentFurnitures] = useState([]);
  useEffect(() => {
    const _segmentFurnitures = allFurnitures.filter(
      (furniture: Furniture) => furniture.type === selectedSegment.type,
    );
    setSegmentFurnitures(_segmentFurnitures);
  }, [selectedSegment]);
  return (
    <>
      <StatusBar
        backgroundColor={colors.backgroundColor}
        barStyle="dark-content"
      />
      <SafeAreaView></SafeAreaView>
      <SafeAreaView style={[styles.safeAreaView]}>
        <Animated.View
          style={{
            height: animatedHeight,
            overflow: 'hidden',
          }}>
          <HomeHeader />
          <View style={[styles.exploreContainer]}>
            <Text style={[styles.explore]} allowFontScaling={false}>
              Explore
            </Text>
            <ScrollView
              horizontal
              bounces
              showsHorizontalScrollIndicator={false}>
              {exploreItems.map((item: Furniture, index: number) => (
                <ExploreItem index={index + 1} item={item} key={item.id} />
              ))}
            </ScrollView>
          </View>
        </Animated.View>
        <View style={[styles.categorySegment]}>
          <ScrollView
            bounces
            bouncesZoom
            showsHorizontalScrollIndicator={false}
            horizontal>
            {segmentItems.map((item: SegmentItem, index: number) => (
              <SegmentButton
                activeSegment={selectedSegment.name}
                onSelect={(seg: SegmentItem) => {
                  setSegment(seg);
                }}
                index={index + 1}
                segmentItem={item}
                key={item.type}
              />
            ))}
          </ScrollView>
        </View>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          bounces={false}
          bouncesZoom={false}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    y: scrollY,
                  },
                },
              },
            ],
            {useNativeDriver: false},
          )}
          style={styles.scrollView}>
          {segmentFurnitures.map((furniture: Furniture, index: number) => (
            <SegmentFurnitureItem
              item={furniture}
              key={furniture.id}
              index={index + 1}
            />
          ))}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  safeAreaView: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  exploreContainer: {
    paddingLeft: 10,
  },
  explore: {
    fontSize: 22,
    paddingLeft: 25,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  categorySegment: {
    height: 80,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
});
