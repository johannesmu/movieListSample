import React from 'react';
import { StyleSheet, View, Text } from 'react-native';



export function Footer( props ) {
  return(
    <View style={styles.header}>
        
      <Text>Have fun! </Text>
      
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