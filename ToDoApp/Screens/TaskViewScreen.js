import React,{useEffect, useState} from 'react';
import { ScrollView,KeyboardAvoidingView,TextInput,TouchableOpacity,Keyboard, View, Text, StyleSheet,Prompt, Alert} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FeedScreen = ({navigation}) => {

    // react hooks for managing states 
    const [task, setTask] = useState();
    const [taskItems, setTaskItems] = useState([]);
    const [deletedtaskItems, setDeletedTaskItems] = useState([]);

    // Using Async Local Storage to store the list of tasks that can be retrived even after restarting the app.
    const storeData = async (value) => {
      try {
        await AsyncStorage.setItem('tasklist', JSON.stringify(value))
      } catch (e) {
        //error storing the value
      }
    }

    const storeDeletedData = async (value) => {
      try {
        await AsyncStorage.setItem('DeletedTasklist', JSON.stringify(value))
      } catch (e) {
        //error storing the value
      }
    }

    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem('tasklist')
        if(value !== null){
          setTaskItems(JSON.parse(value))
        }
      } catch(e) {
        // error reading the value
      }
    }

    const getDeletedData = async () => {
      try {
        const value = await AsyncStorage.getItem('DeletedTasklist')
        if(value !== null){
          setDeletedTaskItems(JSON.parse(value))
        }
      } catch(e) {
        // error reading the value
      }
    }

    //onstart calling getData function to retrieve any previously stored values from the JSON file
    useEffect(()=>{
      getData()
      getDeletedData()
    },[])

    const addTask = () => {
        Keyboard.dismiss();
        if(task !== null && task !==''){
          setTaskItems([...taskItems, task]) // appending the task value to the the array
          storeData([...taskItems,task]) // storing the array in async storage
          //console.log([...taskItems,task])
          setTask(null); //resetting the task value to null
        }
        else{
          Alert.alert(  
            'Error',  
            'Task cannot be empty',  
        );  
        }
    }

    const deleteTask = (index) => {
      let task_temp = [...taskItems];
      //console.log(deletedtaskItems)
      //setDeletedTaskItems([...deletedtaskItems,taskItems[index]])
      task_temp.splice(index, 1);
      setTaskItems(task_temp) 
      //console.log(task_temp)
      storeData(task_temp) // overwriting the modified array in the async local storage after deletion of the task.
      //console.log([...deletedtaskItems,taskItems[index]])
      storeDeletedData([...deletedtaskItems,taskItems[index]])
    }

    // const updateTask = (index) =>{
    //   handleAddTask();
    //   completeTask(index);
    // }

    // const editTask = (index) => {
    //   return (
    //     <View style={styles.container}>
    //     <KeyboardAvoidingView style={styles.writeTaskWrapper}>
    //      <TextInput style={styles.input} placeholder={'Updated Task'} value={task} onChangeText={text => setTask(text)} />
    //      <TouchableOpacity onPress={() => updateTask(index)}>
    //        <View style={styles.addWrapper}>
    //          <Text style={styles.addText}>+</Text>
    //        </View>
    //      </TouchableOpacity>
    //    </KeyboardAvoidingView>
    //    </View>
    //   );
    // };

    return (
        <View style={mystyles.container}>
          <Text style={mystyles.title}>Manage all your hectic works with us at one go!!!</Text>
        <ScrollView contentContainerStyle={{flexGrow: 1,}} keyboardShouldPersistTaps='handled'
          style={{
            marginTop:15,
            marginBottom:80
          }}
        >
        <View style={mystyles.tasksList}>
          <View>
            {/* {adding individual task templates} */}
            {
              taskItems.map((item, index) => {
                return (
                  <View style={mystyles.del}>
                    <View style={mystyles.task_plate}>
                      <View style={mystyles.leftContainer}>
                        <View style={{ marginRight: 15 }}><Icon name="reader-outline" color={'#63A547'} size={20}/></View>
                        <Text style={{ fontSize:16, maxWidth: '80%' }}>{item}</Text>
                      </View>
                      <View style={mystyles.rightContainer}>
                      <TouchableOpacity><Icon name="create-outline" color={'#63A547'} size={20}/></TouchableOpacity>
                      </View>
                    </View>
                <TouchableOpacity style={{ borderColor: 'red', marginLeft:15 }} key={index} onPress={() => {deleteTask(index);getDeletedData();}}><Icon name="trash-outline" color={'red'} size={22}/></TouchableOpacity>
                  </View>
                )
              })
            }
          </View>
        </View>
        </ScrollView>

        {/* {restricting overlapping of keyboard while taking input from the user} */}
        <KeyboardAvoidingView  style={mystyles.inputContainer}>
         <TextInput style={mystyles.task_input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)} />
         <TouchableOpacity onPress={() => {getDeletedData(); addTask();}}>
           <Icon name="add-circle-outline" color={'#63A547'} size={50}/>
         </TouchableOpacity>
       </KeyboardAvoidingView>
       </View>
    );
};

export default FeedScreen;

const mystyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E8EAED',
    },
    tasksList: {
      paddingHorizontal: 20,
    },
    del:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'baseline',
    },
    title: {
      paddingTop: 30,
      paddingHorizontal: 20,
      fontSize: 24,
      fontWeight: 'bold',
    },
    inputContainer: {
      position: 'absolute',
      width: '100%',
      flexDirection: 'row',
      bottom:10,
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    task_input: {
      paddingVertical: 15,
      paddingHorizontal: 15,
      backgroundColor: '#FFF',
      borderRadius: 10,
      fontSize:16,
      borderColor: '#63A547',
      borderWidth: 2,
      width: 260,
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
    task_plate: {
      backgroundColor: '#FFF',
      width:"90%",
      borderRadius: 10,
      padding: 15,
      marginBottom: 20,
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
  });