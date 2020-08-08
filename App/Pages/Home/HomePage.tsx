import React, {useRef, useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Animated,
  Dimensions,
  FlatList,
  ActivityIndicator,
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
import {SharedStackParams} from '../../Navigation/Navigator';
import {StackNavigationProp} from '@react-navigation/stack';

const {width, height} = Dimensions.get('window');
const PADDING_TOP = width / 2.2 + 70;

type HomeNavigationProp = StackNavigationProp<SharedStackParams, 'Details'>;
type Props = {
  navigation: HomeNavigationProp;
};
const HomePage = ({navigation}: Props) => {
  const exploreItems = exploreFurniture();
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

      <View style={[styles.safeAreaView]}>
        <SafeAreaView></SafeAreaView>
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
                <ExploreItem
                  onClick={(item: Furniture, index: number) =>
                    navigation.push('Details', {
                      id: item.id,
                      index: index,
                      selected: item,
                      shareId: 'explore',
                    })
                  }
                  index={index + 1}
                  item={item}
                  key={item.id}
                />
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
        <FlatList
          contentInsetAdjustmentBehavior="automatic"
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          data={segmentFurnitures}
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
          style={styles.scrollView}
          keyExtractor={(item: Furniture) => item.id}
          renderItem={({item, index}) => (
            <SegmentFurnitureItem
              onClick={(item: Furniture, index: number) =>
                navigation.push('Details', {
                  id: item.id,
                  selected: item,
                  index: index,
                  shareId: 'furniture',
                })
              }
              item={item}
              index={index + 1}
            />
          )}
          ListEmptyComponent={() => (
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                height: 200,
                alignItems: 'center',
              }}>
              <ActivityIndicator color={colors.button} />
            </View>
          )}
        />
      </View>
    </>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    height: height,
  },
  safeAreaView: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  exploreContainer: {
    paddingLeft: 10,
    marginBottom: 10,
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
