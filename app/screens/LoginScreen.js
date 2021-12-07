import React, { useState } from 'react';
import { Text,StyleSheet,View, Pressable, Image ,Button, SafeAreaView, TouchableHighlight , Alert, TextInput , KeyboardAvoidingView} from 'react-native';
import ButtonWithBackGround from '../components/button';

const axios = require("axios")

const MasterLogin = ('DK9120')
const MasterPassword = ('b4rb3rmAn')

function LoginScreen(){
    const [email,SetEmail] = useState()
    const [password,SetPassword]= useState()


function requestFromServer(){
    axios.get("http://localhost:4000/api/test").then(res=>{
        console.log(res)
    })
}

    return (
        <KeyboardAvoidingView
        styles = {styles.container}
        behavior ='padding'
        >
        <View style = {styles.view} >
        

        
            <TextInput
            styles = {styles.input}
            
             placeholder  = "email"
             //value = {}
             //onChangeText = {text =>}
             style = {styles.input}
             onChangeText={(val1)=> SetPassword(val1)}
             /> 
             <TextInput
             placeholder  = "Password"
             //value = {}
             //onChangeText = {text =>}
            // onChangeText = {(val) => setName}
             style = {styles.input}
             secureTextEntry
             onChangeText={(val2)=> SetPassword(val2)}
             /> 
            
           
            <ButtonWithBackGround 
            text = "Enter"
            color= "black"
           />
            <ButtonWithBackGround  text = "Sign Up"
             color= "black" />
             
             <Button 
             title = "dasda"
             onPress={requestFromServer} />
            
        <Text>{email},{password}</Text>
        </View>
        </KeyboardAvoidingView>
    );
}

export default LoginScreen;


const styles = StyleSheet.create({
    container:{
        
       
        //alignItems:'center',
        //textAlign:'center'

        

    },
    input:{
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


