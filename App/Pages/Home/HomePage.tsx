import React,{useRef} from 'react'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Animated,
  } from 'react-native';
import {colors} from '../../Theme/index';
import HomeHeader from '../../Components/HomeHeader';
import {furnitures,exploreFurniture} from '../../Assets/Api/furniture';

const PADDING_TOP = 220;

const HomePage = () => {
    const exploreItems = exploreFurniture();
    console.log('exploreItems',exploreItems)
    const scrollY = useRef(new Animated.Value(0)).current;
    const animatedHeight = scrollY.interpolate({
        inputRange: [0, 150 ],
        outputRange: [ PADDING_TOP, 56],
        extrapolate: 'clamp',
      });
    return (
        <>
        <StatusBar backgroundColor={colors.backgroundColor} barStyle="dark-content" />
        <SafeAreaView></SafeAreaView>
        <SafeAreaView style={[styles.safeAreaView]}>
            <Animated.View>
            <HomeHeader />
            <ScrollView horizontal
            bounces
            pagingEnabled
            showsHorizontalScrollIndicator={false}>

            </ScrollView>
            </Animated.View>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
           
            
            
          </ScrollView>
        </SafeAreaView>
      </>
    )
}

export default HomePage

const styles = StyleSheet.create({
    scrollView: {
        flex: 1
    },
    safeAreaView: {
        flex: 1,
        backgroundColor: colors.backgroundColor
    }
  });
  