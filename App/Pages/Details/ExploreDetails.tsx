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
  useWindowDimensions,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {SharedStackParams} from '../../Navigation/Navigator';
import {RouteProp} from '@react-navigation/native';
import {colors} from '../../Theme/index';
import {furnitures, Furniture} from '../../Assets/Api/furniture';
import DetailsHeader from './DetailsHeader';
import {Rating, AirbnbRating} from 'react-native-ratings';
import {SharedElement} from 'react-navigation-shared-element';

type DetailNavigationProp = StackNavigationProp<SharedStackParams, 'Details'>;
type DetailRouteProps = RouteProp<SharedStackParams, 'Details'>;
type Props = {
  navigation: DetailNavigationProp;
  route: DetailRouteProps;
};
const ExploreDetailsPage = ({navigation, route}: Props) => {
  const {id, index, selected} = route.params;
  const [furnitureColor, setColor] = useState(colors[`furniture${index % 4}`]);
  const {width, height} = useWindowDimensions();
  return (
    <View style={[styles.safeAreaView]}>
      <SharedElement id={`explore-${selected.id}`}>
        <DetailsHeader
          shared={'explore'}
          id={id}
          images={selected.images}
          headerColor={furnitureColor}
        />
      </SharedElement>
      <View style={[styles.content]}>
        <View style={[styles.Details]}>
          <View style={[styles.row]}>
            <View style={[styles.nameContainer]}>
              <Text style={[styles.name]} allowFontScaling={false}>
                {selected.name}
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  marginTop: 5,
                  color: 'gray',
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
          </View>
        </View>
      </View>
    </View>
  );
};

export default ExploreDetailsPage;

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
    paddingHorizontal: 20,
    paddingTop: 25,
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
    fontSize: 8,
    fontWeight: '600',
    color: 'black',
  },
});
