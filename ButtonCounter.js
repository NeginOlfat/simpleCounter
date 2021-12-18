import React from "react";
import { Pressable, Text, StyleSheet,View } from "react-native";

const ButtonCounter= (props) => {
    return(
       <View>
            <Pressable 
             style={(props.text=="+")? additiveButton : (props.count==0)? disableButton : reducerButton}
             onPress={() => {
                if (props.text=="+"){
                    props.onCountPress(props.count + 1)
                }
                else if(props.text=="-" && props.count!=0) {
                    props.onCountPress(props.count - 1)
                }
                
             }}
            > 
            <Text style={styles.textButton}>{props.text}</Text>
        </Pressable>
       </View>
    )
}
const styles=StyleSheet.create({
    reducerButton:{
        borderRadius:30,
        backgroundColor: '#FF5252',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth:2,
        width: 60,
        height:60,
        borderColor: '#e7e7e7'

    },
    additiveButton:{
        borderRadius:30,
        backgroundColor: '#4CAF50',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth:2,
        width: 60,
        height:60,
        borderColor: '#e7e7e7'

    },
    textButton:{
        fontSize:40,
        color: '#fff'
    },
    disableButton:{
        backgroundColor: 'rgba(255, 82, 82, 0.6)',
        borderRadius: 30,
        borderWidth: 2,
        borderColor: '#e7e7e7',
        height: 60,
        width: 60,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

const {reducerButton, additiveButton, textButton, disableButton}=styles;

export default ButtonCounter;