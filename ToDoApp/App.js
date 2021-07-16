/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 
 import React from 'react';
 import type {Node} from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Settings,
   Button,
   Easing,
   Text,
   useColorScheme,
   View,
 } from 'react-native';
 
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 
 import { NavigationContainer } from '@react-navigation/native';
 import { createDrawerNavigator } from '@react-navigation/drawer';
 
 import { getFocusedRouteNameFromRoute, useIsFocused} from '@react-navigation/core';
 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 
 import { LogBox } from 'react-native';
 
 import Icon from 'react-native-vector-icons/Ionicons';
 import {DrawerContent} from './Screens/DrawerContent';
 import MainTabScreen from './Screens/MainTabScreen';
 import TaskHistory from './Screens/TaskHistory';
 
 LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
 LogBox.ignoreAllLogs();
 
 const Drawer =createDrawerNavigator();
 
 const App: () => React$Node = () => {
  return (
     <NavigationContainer>
       <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>} >
         <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
         <Drawer.Screen name="History" component={TaskHistory} />
       </Drawer.Navigator>
     </NavigationContainer>
   );
 };
 
 const styles = StyleSheet.create({
   scrollView: {
     backgroundColor: Colors.lighter,
   },
   engine: {
     position: 'absolute',
     right: 0,
   },
   body: {
     backgroundColor: Colors.white,
   },
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
     color: Colors.black,
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
     color: Colors.dark,
   },
   highlight: {
     fontWeight: '700',
   },
   footer: {
     color: Colors.dark,
     fontSize: 12,
     fontWeight: '600',
     padding: 4,
     paddingRight: 12,
     textAlign: 'right',
   },
 });
 
 export default App;