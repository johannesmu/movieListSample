import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { Logout } from './Logout';
import { Logo } from './Logo';
import { Footer } from './Footer';

export function AddMovies(props){
    const [user, setUser]=useState()
    const [title, setTitle] = useState()
    const [genre, setGenre] = useState()
    const [duration, setDuration] = useState()
    const [sinopse, setSinopse] = useState()
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
    const handleSubmit =() =>{
        if(title && genre && duration && sinopse){
        let movies = new Object()
        movies.title=title
        movies.genre=genre
        movies.duration=duration
        movies.sinopse = sinopse
        props.add(movies).then((result)=> console.log(result))
        .catch((error)=> console.log(error))
        }
        else{
            console.log('no data')
        }
    }
    
   
    return(
        <View style={AddStyles.page} > 
            <Greeting />
            <TouchableOpacity onPress={ signOut}>
            </TouchableOpacity>
            <Text style={AddStyles.headTitle}> Add Movie</Text>
            <Logo/>
            <Text style={AddStyles.headTitle}> Add your Movies to the list</Text>
            <Text style={AddStyles.text}> Insert the movie title</Text>
            <TextInput  onChangeText= {(val) => setTitle(val)} style={AddStyles.input}/>
            <Text style={AddStyles.text}> Insert the genre</Text>
            <TextInput onChangeText= {(val) => setGenre(val)} style={AddStyles.input}/>
            <Text style={AddStyles.text}> Insert the duration</Text>
            <TextInput onChangeText={(val) => setDuration(val)} style={AddStyles.input}/>
            <Text style={AddStyles.text}> Insert the sinopse</Text>
            <TextInput onChangeText={(val) => setSinopse(val)} style={AddStyles.input}/>
            <TouchableOpacity onPress={handleSubmit} style={AddStyles.addButton}>
              <Text  style={AddStyles.textButton}>Add</Text>
            </TouchableOpacity>
            <Footer />
        </View>
    )
}
const AddStyles= StyleSheet.create({
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
    input:{
        fontSize: 20,
        textAlign:'center',
        margin:5,
        marginLeft:40,
        marginRight:40,
        padding:10,
        color: '#263e47',
        backgroundColor:'#f9e693',
        borderRadius: 5,
        borderWidth: 2,
        borderColor:'#f9e693',

    },
    text:{
        fontSize:20,
        padding:5,
        color: '#263e47',
        textAlign:'center'
    },
    addButton:{
        
        backgroundColor:"#ed344c",
        padding:15,
        margin:10,
        marginLeft:40,
        marginHorizontal:40,
        textAlign:'center',
        borderRadius: 5,
        borderWidth: 2,
        borderColor:"#ed344c"

    },
    textButton:{
        color:'#263e47',
        textAlign:'center',
        fontSize:20
        
    },

   
})