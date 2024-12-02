import { View, Text ,TextInput,StyleSheet, TouchableOpacity, ToastAndroid} from 'react-native';
import React, { useState } from 'react';
import { useNavigation, useRouter } from 'expo-router';
import { useEffect } from 'react';
import { Color } from './../../../constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../config/firebaseconfig';

export default function SignIn() {
  const navigation=useNavigation();
  const router=useRouter();
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  useEffect(()=>{
    navigation.setOptions({
      headerShown:false
    })
  },[])

  const onSignIN=()=>{

    if(!email&&!password)
    {
      ToastAndroid.show("Please enter email and password",ToastAndroid.BOTTOM);
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    router.replace('/order');

    console.log(user);
    // ...
  })
  
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage,errorCode)
    if(errorCode=='auth/invalid-email'){
      ToastAndroid.show("Invalid Email",ToastAndroid.LONG);
    }
  });
  }
  return (
    <View style={{
      padding:25,
      paddingTop:40,
      backgroundColor:'#fff',
      height:'100%'
    }}>
      <TouchableOpacity onPress={()=>router.back()}>
        <Ionicons name="arrow-back-circle" size={35} color="black" />
      </TouchableOpacity>
      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:30,
        marginTop:30
      }}>Let's Sign You In</Text>
      <Text style={{
        fontFamily:'outfit',
        fontSize:30,
        color:'#808080',
        marginTop:20
      }}>Welcome Back</Text>
      <Text style={{
        fontFamily:'outfit-medium',
        fontSize:30,
        color:'#A9A9A9',
        marginTop:20
      }}>You've been missed!</Text>
      <View style={{
        marginTop:50
      }}>
        <Text style={{
          fontFamily:'outfit'
        }}>Email</Text>
        <TextInput
        style={styles.input}
        onChangeText={(value)=>setEmail(value)}
         placeholder='Enter Email'/>
      </View>
      <View style={{
        marginTop:50
      }}>
        <Text style={{
          fontFamily:'outfit'
        }}>Password</Text>
        <TextInput
        secureTextEntry={true}
        style={styles.input}
        onChangeText={(value)=>setPassword(value)}
         placeholder='Enter Password'/>
      </View>

      <TouchableOpacity onPress={onSignIN} style={{
        padding:15,
        backgroundColor:'#000',
        borderRadius:15,
        marginTop:50
      }}>
          <Text style={{
            color:Color.white,
            textAlign:'center'
          }}> Sign In </Text>
      </TouchableOpacity>

      <TouchableOpacity 
          onPress={()=>router.replace('auth/sign-up')}
        style={{
        padding:15,
        backgroundColor:Color.white,
        borderRadius:15,
        marginTop:30,
        borderWidth:1,
        fontFamily:'outfit'
      }}>
          <Text style={{
            color:Color.primary,
            textAlign:'center'
          }}> Create Account </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles=StyleSheet.create({
  input:{
    padding:15,
    borderWidth:1,
    borderRadius:15,
    borderColor:'#808080',
    fontFamily:'outfit'
  }
})