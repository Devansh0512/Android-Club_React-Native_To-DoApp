import React,{useState,useEffect} from 'react';
import {ImageBackground,ScrollView,View,Text,Button,StyleSheet,Pressable} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AboutScreen=({navigation})=>{
    // navigation.setOptions({
    //   headerRight:()=>(
    //     <Button title="Save" onPress={()=>{
    //       navigation.replace('Home');
    //     }}/>
    //   )
    // })
    const [taskItems1, setTaskItems1] = useState([]);
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem('tasklist')
        if(value !== null){
          setTaskItems1(JSON.parse(value))
        }
      } catch(e) {
        // error reading the value
      }
    }
      
    useEffect(()=>{
      getData()
    },[])

    return(
      <ImageBackground source={require('./Landing.png')} resizeMode="cover" style={styles.bg}>
        <View style={styles.container}>
          <Text style={styles.title}>Welcome to the To-Do App {'\n'}</Text>
          <Text style={{ paddingBottom: 40,fontSize: 20 }}>Have a hectic work schedule?{'\n\n'}Manage your tasks and organise them easily with our To-Do app.</Text>
          <Pressable style={styles.button} onPress={() => navigation.navigate('TaskView')}>
              <IonIcon name="arrow-forward-circle-outline" size={26} color="white" /><Text style={{fontSize: 16, color: 'white',}}>  Get Started</Text>
          </Pressable>
          <Text style={styles.activeTitle}>Task Summary </Text>
          <Text style={styles.active}>The number of tasks pending or active are : <Text style={{color:'green'}}> {taskItems1.length}</Text></Text>
          <Pressable style={styles.activebutton} onPress={() => getData()}>
              <IonIcon name="refresh-outline" size={26} color="white" /><Text style={{fontSize: 16, color: 'white',}}>  Refresh</Text>
          </Pressable>
        </View>
      </ImageBackground>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
    bg: {
      flex: 1,
      justifyContent:"center"
    },
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
    button: {
        paddingVertical: 10,
        width:200,
        backgroundColor: '#9A4B24',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    active: {
        marginTop:40,
        alignSelf:'center',
        fontSize: 24,
        fontWeight: "bold"
    },
    activeTitle: {
      marginTop:70,
      alignSelf:'center',
      fontSize: 34,
      fontWeight: "bold"
    },
    activebutton: {
      paddingVertical: 10,
      marginTop:20,
      width:200,
      backgroundColor: 'green',
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row'
  },
  });