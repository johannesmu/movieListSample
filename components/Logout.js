import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, {useState, useEffect} from 'react';

export function Logout(props){

    const PressHandler =()=>{
        props.handler()

    }
    return(
        <TouchableOpacity style ={styles.button} onPress={PressHandler}>
            <Text> Sign Out</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        color:'#263e47',
        fontSize:15,
        marginRight:20

    }
})