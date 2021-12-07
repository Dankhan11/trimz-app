import react, { useState } from 'react';
import React from 'react';
import { TextInput, ViewBase, StyleSheet,Button } from 'react-native';
import {View ,Text} from 'react-native'
import ButtonWithBackGround from '../components/button';
import axios from 'axios';





function SignUpScreen() {
const [UserName,SetUsername] = useState()
const [Email,SetEmail] = useState()
const [Password,SetPassword] = useState()

function enterData(){
    axios.post("http://localhost:4000/api/signup",{
        UserName,
        Email,
        Password,
    })

};

    return (
        <View style = {styles.view}>
            <Text>this will be a signup page</Text>
            <TextInput
            style = {styles.inputs}
            placeholder = "Username"
            onChangeText={(val)=> SetUsername(val)}     
           />
            <TextInput
            keyboardType='numeric'
            style = {styles.inputs}
            placeholder = "Email"
            onChangeText={(val1)=> SetEmail(val1)}
            />
            <TextInput
            style = {styles.inputs}
            placeholder = "Password"
            secureTextEntry
            onChangeText={(val2)=> SetPassword(val2)}
            />

            <ButtonWithBackGround 
            text = "Enter"
            color = "black"
            onPress = {enterData}>    
            </ButtonWithBackGround>

            <ButtonWithBackGround 
            text = "Go Back"
            color = "black">    
            
            </ButtonWithBackGround>


            

            <Text>name:{UserName}, Password:{Password}, Email:{Email}</Text>

            
        </View>
    );
}

export default SignUpScreen;

const styles = StyleSheet.create({
    inputs:{
        
        alignItems:'center',
        borderColor:'black',
        borderWidth:1,
        //paddingTop:50,
        paddingBottom:15,
        //paddingLeft:65,
        //paddingRight:65,
        width:200,
        height:50,
        textAlign:'center',
       
    },
    view:{
        flex:0,
        flexDirection:'column',
        alignItems:'center'
    }
})
