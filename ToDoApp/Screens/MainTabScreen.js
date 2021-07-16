import React from 'react';
import { createStackNavigator,TransitionPresets,CardStyleInterpolators } from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import   Icon   from 'react-native-vector-icons/Ionicons';
import HomeScreen from './HomeScreen';
import TaskViewScreen from './TaskViewScreen';
import { findNodeHandle } from 'react-native';

const HomeStack = createStackNavigator();
const TaskViewStack=createStackNavigator();
const Tab=createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#FFF"
      barStyle={{ }}
      shifting="true"
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#009387',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="TaskView"
        component={TaskViewStackScreen}
        options={{
          tabBarLabel: 'Tasks',
          tabBarColor: '#9c5ab8',
          tabBarIcon: ({ color }) => (
            <Icon name="reader-outline" color={color} size={26}/>
          ),
        }}
      />
    </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen=({navigation}) =>(
    <HomeStack.Navigator 
      screenOptions={{
        headerStyle:{
          backgroundColor:'#009387'
        },
        headerTintColor:'black',
        headerTitleStyle:{
          fontWeight: 'bold',
        },
        gestureEnabled: true,
        gestureDirection: "horizontal",
        // function for sliding screen effect animation that comes in IOS
        ...TransitionPresets.SlideFromRightIOS //Alternate for the below transitionspec and cardStyleInterpolator 
        //  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        //  transitionSpec: {
        //    open: config,
        //    close: closeConfig
        //  }
      }}
      headerMode="float"
      animation="fade"
    >
    <HomeStack.Screen name="Home" component={HomeScreen} options={{
        headerLeft:()=>(
          <Icon.Button name='ios-menu' size={25} backgroundColor="#009387" onPress={()=>{navigation.openDrawer()}}></Icon.Button>
        )
      }} 
    />
    </HomeStack.Navigator>
);  

const TaskViewStackScreen=({navigation}) =>(
    <TaskViewStack.Navigator 
      screenOptions={{
        headerStyle:{
          backgroundColor:'#9c5ab8'
        },
        headerTintColor:'black',
        headerTitleStyle:{
          fontWeight: 'bold',
        },
        gestureEnabled: true,
        gestureDirection: "horizontal",
        // function for sliding screen effect animation that comes in IOS
        ...TransitionPresets.SlideFromRightIOS //Alternate for the below transitionspec and cardStyleInterpolator 
        //  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        //  transitionSpec: {
        //    open: config,
        //    close: closeConfig
        //  }
      }}
      headerMode="float"
      animation="fade"
    >
    <TaskViewStack.Screen name="Todo List" component={TaskViewScreen} options={{
        headerLeft:()=>(
          <Icon.Button name='ios-menu' size={25} backgroundColor="#9c5ab8" onPress={()=>{navigation.openDrawer()}}></Icon.Button>
        )
      }} 
    />
    </TaskViewStack.Navigator>
);