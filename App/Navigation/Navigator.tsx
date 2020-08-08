import React, {useEffect} from 'react';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import HomePage from '../Pages/Home/HomePage';
import DetailsPage from '../Pages/Details/DetailsPage';
import {NavigationContainer} from '@react-navigation/native';
import {Furniture} from '../Assets/Api/furniture';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {enableAnimation} from '../Utils/Animation';

export type SharedStackParams = {
  Home: undefined;
  Details: {
    id: string;
    index: number;
    selected?: Furniture;
    shareId: string;
  };
};
const {Navigator, Screen} = createSharedElementStackNavigator<
  SharedStackParams
>();
const AppNavigator = () => {
  useEffect(() => {
    enableAnimation();
  }, []);
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Navigator
          keyboardHandlingEnabled
          mode={'card'}
          headerMode={'none'}
          initialRouteName="Home">
          <Screen name="Home" component={HomePage} />
          <Screen
            name="Details"
            component={DetailsPage}
            sharedElementsConfig={(route) => {
              const {id, selected, shareId} = route.params;
              return [
                {
                  id: `${shareId}-image-${id}`,
                  animation: 'move',
                  resize: 'clip',
                  align: 'auto',
                },
                {
                  id: `${shareId}-${selected.name}-${id}`,
                  animation: 'move',
                  resize: 'clip',
                  align: 'auto',
                },
                {
                  id: `${shareId}-${selected.price}-${id}`,
                  animation: 'move',
                  resize: 'clip',
                  align: 'auto',
                },
              ];
            }}
          />
        </Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
export default AppNavigator;
