import React from 'react';
import {View, Image,TouchableHighlight, StyleSheet, Button} from 'react-native';


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
class Dice extends React.Component{
   constructor(props){
       super(props)
       this.state={src:require('../assets/1.png')}
   }
     roll(){
         var num=1+Math.floor(Math.random() * 10)%6;
         console.log("dice rolled");
         this.setState({
             src:require('../assets/'+num.toString()+'.png')
         })
     }
    render(){
        return(
            <View style={styles.container}>
                <TouchableHighlight onPress={() => this.roll()}>
                    <Image style={styles.dice} source={this.state.src}/>
                    </TouchableHighlight>
            </View>
        )
    }
}
export default Dice;