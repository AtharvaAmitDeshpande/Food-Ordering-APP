import { View, Text,StyleSheet,TextInput,TouchableOpacity, ToastAndroid} from 'react-native'
import {React,useEffect,useState} from 'react'
import { useNavigation,useRouter} from 'expo-router'
import { Color, Colors } from './../../../constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {auth} from './../../../config/firebaseconfig';

export default function SignUP () {
  const navigation=useNavigation();
  const router=useRouter();
const [email,setEmail]=useState();
const[password,setPassword]=useState();
const[fullName,setFullName]=useState();


  useEffect(()=>{
    navigation.setOptions({
      headerShown:false
    })
  },[]);

  const onCreateAccount=()=>{
if(!email&&!password&&!fullName)
{

  ToastAndroid.show('Please enter all details',ToastAndroid.BOTTOM);
  return;
}

    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode,errorMessage);
    // ..
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
      }}> Create New Account </Text>
      <View style={{
        marginTop:50
      }}>
        <Text style={{
          fontFamily:'outfit'
        }}>Full Name</Text>
        <TextInput
        style={styles.input}
         placeholder='Enter Full Name'
         onChangeText={(value)=>setFullName(value)}
         />
      </View>

    <View style={{
        marginTop:20
      }}>
        <Text style={{
          fontFamily:'outfit'
        }}>Email</Text>
        <TextInput
        style={styles.input}
         placeholder='Enter Email'
         onChangeText={(value)=>setEmail(value)}
         />
      </View>
      <View style={{
        marginTop:20
      }}>
        <Text style={{
          fontFamily:'outfit'
        }}>Password</Text>
        <TextInput
        secureTextEntry={true}
        style={styles.input}
         placeholder='Enter Password'
         onChangeText={(value)=>setPassword(value)}
         />
      </View>

      <TouchableOpacity onPress={onCreateAccount} style={{
        padding:15,
        backgroundColor:'#000',
        borderRadius:15,
        marginTop:50
      }}>
          <Text style={{
            color:Color.white,
            textAlign:'center'
          }}> Create Account </Text>
      </TouchableOpacity>

      <TouchableOpacity 
          onPress={()=>router.replace('auth/sign-in')}
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
          }}> SignIn </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  input:{
    padding:15,
    borderWidth:1,
    borderRadius:15,
    borderColor:'#808080',
    fontFamily:'outfit'
  }
})