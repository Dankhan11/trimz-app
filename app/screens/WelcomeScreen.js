import React from 'react';
import {  StyleSheet,View, Pressable, Image ,Button, SafeAreaView, TouchableHighlight , Alert} from 'react-native';
import ButtonWithBackGround from '../components/button';




//will initially display the welcome screen to then 
const WelcomeScreen = ({navigation}) =>{
const onPressHandler = () => {
    navigation.navigate('Login')
    
}
//navigates to a sign up page with the press of the sign up button 
const onSignUpPress = () => {
    navigation.navigate('SignUp')
}

// creates buttons with 
    return (
        <SafeAreaView style = {styles.background}>
            <Image
            style = {styles.image}
             source = {require('../assets/trimz.png')}/>
            

   
            <ButtonWithBackGround
                 color = "black" 
                text = "Login" 
                onPress = {onPressHandler}
             />
                          
 
                        
             <ButtonWithBackGround
                 color = "black" 
                 text = "Sign Up" 
                onPress = {onSignUpPress}
                          />
    

         </SafeAreaView>
            
    )
};

export default WelcomeScreen;
// styles sheet for both the background and images overall welcome screen 
const styles = StyleSheet.create({
    background:{
                flex:1,
                backgroundColor: "grey",
                alignItems:'center'
        

    },
    image:{
            
            resizeMode:"contain",
            width:'50%',
            height:'50%',
            borderRadius:500,
           
            alignItems:'center',
            

        

    },
    loginButton:{
                    alignItems:'center',
                    height: 40,
                    width:150,
                    flexDirection: 'column',
                    borderRadius:10,
                    backgroundColor : "grey",
                   
                    marginTop :'5%',
                    color:"white",
                    alignItems:'center'

    }

    
})

