import React from 'react';
import { View,Button, StyleSheet } from 'react-native';
import {DrawerContentScrollView,DrawerItem} from '@react-navigation/drawer'
import {
    Avatar,Title,Caption,
    Paragraph,Drawer,Text,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export function DrawerContent(props){
    return(
        <View style={{flex : 1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                   <View style={styles.userInfoSection}>
                       <View style={{flexDirection:'row',marginTop:15}}>
                            <Avatar.Image
                                source={{
                                    uri:'https://instagram.fnag6-1.fna.fbcdn.net/v/t51.2885-19/s320x320/26157992_159656174668114_8152239671775068160_n.jpg?_nc_ht=instagram.fnag6-1.fna.fbcdn.net&_nc_ohc=cB1Qg-a32lcAX-yFCoC&edm=ABfd0MgBAAAA&ccb=7-4&oh=9eb37a87fd9e2dfbfa37b59c84558a01&oe=60F95375&_nc_sid=7bff83'
                                }}
                                size={50}
                           />
                           <View style={{marginLeft:15,flexDirection:'column'}}>
                               <Title style={styles.title}>Devansh Mehra</Title>
                               <Caption style={styles.caption}>devansh0512</Caption>
                           </View>
                      </View>
                   </View>
                   <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({color,size}) => (
                                <Icon name="home-outline" color={color} size={size} />
                            )}
                            label="Home"
                            onPress={() => {props.navigation.navigate('Home')}}
                        />
                        <DrawerItem
                            icon={({color,size}) => (
                                <Icon name="bookmark-outline" color={color} size={size} />
                            )}
                            label="Task History"
                            onPress={() => {props.navigation.navigate('History')}}
                        />
                        <DrawerItem
                            icon={({color,size}) => (
                                <Icon name="information-outline" color={color} size={size} />
                            )}
                            label="About"
                            onPress={() => {props.navigation.navigate('About')}}
                        />
                        <DrawerItem
                            icon={({color,size}) => (
                                <Icon name="exit-to-app" color={color} size={size} />
                            )}
                            label="Sign Out"
                        />
                   </Drawer.Section>
                </View>
            </DrawerContentScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });