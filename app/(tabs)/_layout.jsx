import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

export default function TabLayout() {
  return (
    <View>
      <Tabs screenoptions={{
        headerShown:false
      }}>
        <Tabs.Screen name='myorder'/>
        <Tabs.Screen name='order'/>
        <Tabs.Screen name='profile'/>

      </Tabs>
    </View>
  )
}