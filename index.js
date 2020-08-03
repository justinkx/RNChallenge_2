/**
 * @format
 */
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';
import AppNavigator from './App/Navigation/Navigator';

AppRegistry.registerComponent(appName, () => AppNavigator);
