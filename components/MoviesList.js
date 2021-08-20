import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { Logout } from './Logout';
import { Logo } from './Logo';
import { Footer } from './Footer';
import { AddMovies } from './AddMovies';

export function MoviesList(props){
    const [user, setUser]=useState()

    const navigation = useNavigation()

    navigation.setOptions({
        headerRight:()=>(
            <Logout handler={signOut} />
        )
    })
    
    useEffect( () => {
        if( props.auth ) {
          setUser( props.auth )
        }
        else {
          setUser(null)
        }
        navigation.setOptions({
          headerRight: props => <Logout {...props} handler={signOut}/>
        })
      })
    
    
      const Greeting = () => {
        if(!user) {
          return null
        }
        else{
          return <Text>{user.email}</Text>
        }
      }
    const signOut=() =>{
        props.signout().then((result)=>{
            if(result === true ){
                navigation.reset({ index: 0, routes: [{ name: "Signin" }] })
            }
        })
       .catch((error)=> console.log(error))
    }
    const Renderer = ({list}) => (

      
          <View>
            <Text style={ListStyle.listText}>{list.id}</Text>
            </View>
    )
   
    return(
        <View style={ListStyles.page}> 
            <Greeting />
            <TouchableOpacity onPress={ signOut}>
            </TouchableOpacity>
            <Text style={ListStyles.headTitle}>Movies List</Text>
            <Logo/>
            <FlatList     data={ props.read } 
            renderList={ Renderer} 
            keyExtractor={ list => list.id.toString()}/>
            <Footer/>
        </View>
    )
}
const ListStyles= StyleSheet.create({

    page:{
        fontSize: 26,
        backgroundColor: '#faf7c7',
        height:1000,
    },
    headTitle:{
        fontSize: 26,
        textAlign:'center',
        marginTop:20,
        marginBottom:20,
        color: '#263e47',
    },
   
})