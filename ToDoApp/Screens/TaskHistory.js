import React,{useEffect, useState} from 'react';
import { ScrollView,KeyboardAvoidingView,TextInput,TouchableOpacity,Keyboard, View, Text, StyleSheet,Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TaskHistory = ({navigation}) => {

    // react hooks for managing states 
    const [tempTask, setTempTask] = useState([]); 

    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem('DeletedTasklist')
        if(value !== null){
          setTempTask(JSON.parse(value))
          //console.log(tempTask)
        }
      } catch(e) {
        // error reading the value
      }
    }

    //onstart calling getData function to retrieve any previously stored values from the JSON file
    useEffect(()=>{
      getData()
    },[])

    // const deleteTask = (index) => {
    //   let task_temp = [...tempTask];
    //   task_temp.splice(index, 1);
    //   setTempTask(task_temp) 
    //   storeData(tempTask)
    //   console.log(task_temp)
    // }

    return (
        <View style={mystyles.container}>
          <Text style={mystyles.title}>All the Deleted Tasks are as follows: </Text>
        <ScrollView contentContainerStyle={{flexGrow: 1,}} keyboardShouldPersistTaps='handled'
          style={{
            marginTop:25,
            marginBottom:80
          }}
        >
        <View style={mystyles.tasksList}>
          <View>
            {/* {adding individual task templates} */}
            {
              tempTask.map((item,index) => {
                return (
                  <View style={mystyles.task_plate}>
                    <View style={mystyles.leftContainer}>
                      <View style={{ marginRight: 15 }}><Icon name="reader-outline" color={'#63A547'} size={20}/></View>
                      <Text style={{ fontSize:16, maxWidth: '80%' }}>{item}</Text>
                    </View>
                  </View>
                )
              })
            }
          </View>
        </View>
        </ScrollView>
        <View style={mystyles.btns}>
        <Pressable style={mystyles.activebutton1} onPress={() => getData()}>
              <IonIcon name="refresh-outline" size={26} color="white" /><Text style={{fontSize: 16, color: 'white',}}>  Refresh</Text>
          </Pressable>
        <Pressable style={mystyles.activebutton} onPress={() => navigation.navigate('Home')}>
              <IonIcon name="ios-home" size={26} color="white" /><Text style={{fontSize: 16, color: 'white',}}>  Return to Home</Text>
        </Pressable>
        </View>
       </View>
    );
};

export default TaskHistory;

const mystyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E8EAED',
    },
    tasksList: {
      paddingHorizontal: 20,
    },
    title: {
      paddingTop: 30,
      paddingHorizontal: 20,
      fontSize: 24,
      fontWeight: 'bold',
    },
    leftContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      flexWrap: 'wrap'
    },
    rightContainer: {
      flexDirection:'row',
      alignItems:'center',
    },
    del:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'baseline',
    },
    task_plate: {
      backgroundColor: '#FFF',
      borderRadius: 10,
      width:"88%",
      padding: 15,
      marginBottom: 20,
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
    activebutton: {
      paddingVertical: 10,
      marginTop:20,
      bottom:50,
      width:180,
      backgroundColor: '#9A4B24',
      borderRadius: 10,
      alignSelf:'center',
      alignItems:'center',
      justifyContent: 'center',
      flexDirection: 'row'
    },
    activebutton1: {
      paddingVertical: 10,
      marginRight:20,
      marginTop:20,
      bottom:50,
      width:150,
      backgroundColor: 'green',
      borderRadius: 10,
      alignSelf:'center',
      alignItems:'center',
      justifyContent: 'center',
      flexDirection: 'row'
    },
    btns:{
      flexDirection:'row',
      justifyContent:'center',
      paddingHorizontal:20,

    },
  });