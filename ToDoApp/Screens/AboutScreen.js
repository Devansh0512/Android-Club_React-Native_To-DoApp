import React,{useState,useEffect} from 'react';
import {ImageBackground,Linking,View,Text,Button,StyleSheet,Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const AboutScreen=({navigation})=>{
    return(
      <ImageBackground source={require('./about.png')} resizeMode="cover" style={styles.container}>
      <View>
        <Text style={styles.title}>About</Text>
        <Text style={styles.info}>
          This To-Do app is made using react native. The main function of the app is to manage and store particular tasks. The app provides different functionalities like tasks can be added, deleted. Also user has the access to deleted tasks in a separate screen provided. React Navigatiion is for navigation and Redux is used to manage the states. ASyncStorage is used to store all the task data in local storage.
        </Text>
        <Text style={{fontSize:22,marginHorizontal:30}}>Developer Contact: </Text>
        <Text style={{fontSize:22,marginHorizontal:40,paddingVertical:10,fontWeight:'bold'}}>Devansh Mehra</Text>
        <View style={styles.links}>
          <Icon name="logo-github" size={30} color="black" ></Icon>
          <Text style={styles.hyplink} onPress={() => Linking.openURL('https://github.com/Devansh0512')}>GitHub</Text>
        </View>
        <View style={styles.links}>
          <Icon name="mail" size={30} color="black" ></Icon>
          <Text style={styles.hyplink} onPress={() => Linking.openURL('mailto:devanshmehra108@gmail.com')}>Mail</Text>
        </View>
        <View style={styles.links}>
          <Icon name="logo-linkedin" size={30} color="#0077b5" ></Icon>
          <Text style={styles.hyplink} onPress={() => Linking.openURL('https://www.linkedin.com/in/devansh-mehra-485975157/')}>LinkedIn</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
  },
  title:{
    fontSize:50,
    fontWeight:'bold',
    textAlign: 'center',
  },
  info:{
    fontSize:20,
    marginVertical:20,
    marginHorizontal:30,
    textAlign: 'justify',
    marginBottom:30
  },
  hyplink: {
    color: '#064ea1',
    textDecorationLine: 'underline',
    fontSize: 20,
    paddingTop:3,
    paddingLeft:10
  },
  links:{
    display:'flex', 
    flexDirection:'row',
    marginHorizontal:40, 
    paddingVertical:5,
  }
  });