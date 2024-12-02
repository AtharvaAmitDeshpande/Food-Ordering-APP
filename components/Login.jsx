import { View, Text, Image, TouchableOpacity} from 'react-native';
import { StyleSheet } from 'react-native';

import React from 'react';
// Replace with your actual Colors import or define the Color object here
//import { Colors } from 'react-native/Libraries/NewAppScreen'; 
import { Color } from '@/constants/Colors'; 
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useRouter } from 'expo-router';

export default function Login() {
    const router=useRouter();
  return (
    <View>
      <Image 
        source={require('./../assets/images/logo.jpg')} 
        style={{
          width:'100%',
          height:450,
        }} 
      />
        <View style={styles.container}>
            <Text style={{
            fontSize: 30,
            fontFamily: 'outfit-bold', 
            textAlign:'center',
            marginTop:15
            }}>
            FOOD ORDER APP
            </Text>
            <Text style={{
                fontFamily:'outfit',
                fontSize:17,
                textAlign:'center',
                color:Colors.GRAY,
                marginTop:20
            }}>Order your favourite food from the canteen without a husel and worry.</Text>
            <TouchableOpacity style={styles.button}
                onPress={()=>router.push('auth/sign-in')}
            >
                <Text style={{color:Colors.white,
                    textAlign:'center',
                    fontFamily:'outfit',
                    fontSize:17
                }}>GET STARTED</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: Color.white, // Ensure Color.white is properly imported
        marginTop: -20,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        height:'100%',
        padding: 25

    },
    button:{
        padding:15,
        backgroundColor:Color.primary,
        borderRadius:99,
        marginTop:'20%'
    }
})
