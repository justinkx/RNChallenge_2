import React from 'react';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import HomePage from '../Pages/Home/HomePage';
import DetailsPage from '../Pages/Details/DetailsPage';
import { NavigationContainer } from '@react-navigation/native';

type SharedStackParams = {
    Home: undefined;
    Details: undefined;
  };
  const { Navigator, Screen } = createSharedElementStackNavigator<SharedStackParams>();
const AppNavigator = () => {
    return (
        <NavigationContainer>
        <Navigator keyboardHandlingEnabled mode={'card'} headerMode={'none'} initialRouteName="Home">
            <Screen name="Home" component={HomePage} />
            <Screen name="Details" component={DetailsPage} />
        </Navigator>
        </NavigationContainer>
    )
}
export default AppNavigator;