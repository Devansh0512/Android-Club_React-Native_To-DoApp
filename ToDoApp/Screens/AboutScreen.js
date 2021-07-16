import React,{useState,useEffect} from 'react';
import {ImageBackground,ScrollView,View,Text,Button,StyleSheet,Pressable} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';

const AboutScreen=({navigation})=>{
    return(
        <View style={styles.container}>
          <Text style={styles.title}>Welcome to the To-Do App {'\n'}</Text>
          <Text style={{ paddingBottom: 40,fontSize: 20 }}>Have a hectic work schedule?{'\n\n'}Manage your tasks and organise them easily with our To-Do app.</Text>
        </View>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal:30,
      alignItems: 'center', 
    },
    title: {
        paddingTop:60,
        alignSelf:'center',
        fontSize: 24,
        fontWeight: "bold"
    },
  });