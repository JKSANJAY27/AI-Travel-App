import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { useRouter } from 'expo-router'

export default function Login() {
  const router = useRouter();
  return (
    <View>
      <Image source={require('./../assets/images/login.jpg')}
      style={{
        width: 400,
        height: 400,
        marginTop: 200
      }} />
      <View style={styles.container}>
        <Text style={{
            fontSize: 30,
            fontFamily: 'outfit-bold',
            textAlign: 'center',
            marginTop: 10
        }}>AI Travel Planner</Text>
        <Text style={{
            fontFamily: 'outfit',
            fontSize: 17,
            textAlign: 'center',
            color: Colors.GRAY,
            marginTop: '20%'
        }}>Discover your next adventure effortlessly. Personalized itineraries at your fingertips. Travel smarter with AI-driven insights.</Text>
        <TouchableOpacity onPress={() => router.push('auth/sign-in')} style={styles.button}>
            <Text style={{color: Colors.WHITE, textAlign: 'center', fontFamily: 'outfit', fontSize: 17}}>Get Started</Text>    
        </TouchableOpacity>        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.WHITE,
        marginTop: -80,
        height: '100%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 25
    },
    button: {
        padding: 15,
        backgroundColor: Colors.PRIMARY,
        borderRadius: 99,
        marginTop: '20%'
    }
})