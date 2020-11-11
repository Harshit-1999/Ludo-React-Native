import React from 'react';
import {View, Image,TouchableHighlight, StyleSheet, Button} from 'react-native';
const styles=StyleSheet.create({
    white:{
        width:'30px',
        height:'30px',
        backgroundColor:'blue'
        
    },
    black:{
        top:'10px',
        left:'10px',
        width:'30px',
        height:'30px',
        backgroundColor:'grey'
    }
})
export default class Block extends React.Component{
    render(){
        return(
            <View>
                <View style={styles.white}></View>
                <View style={styles.black}></View>
                
            </View>
        )
    }
}