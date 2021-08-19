import React from 'react';
import { StyleSheet, View, Image } from 'react-native';



export function Logo( props ) {
  return(
    <View style={styles.header}>
      <Image style={styles.headerLogo} source={require('../assets/logoBinge.png')} />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
  
    padding: 30,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
 
  },
  headerLogo:{
    paddingLeft: 10,
    width: 45,
    height: 80,
  },


})