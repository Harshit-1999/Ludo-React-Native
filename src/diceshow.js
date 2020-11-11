import React from 'react';
import {View, Image, StyleSheet, Button} from 'react-native';


const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
      justifyContent: "center",
      alignItems: "center"
    },
    dice: {
      width: 50,
      height: 50,
    },
    logo: {
      width: 66,
      height: 58,
    },
  });
class Diceroll extends React.Component{
   constructor(props){
       super(props)
       this.state={src:require('../assets/one.png')}
   }
     roll(){
         console.log("dice rolled");
         this.setState({
             src:require('../assets/five.png')
         })
     }
    render(){
        return(
            <View style={styles.container}>
                <Image style={styles.dice} source={this.props.src}/>

                 
            </View>
        )
    }
}