import { View, Text, ScrollView } from 'react-native'
import { DARK_MODE_COLOR } from '../colors'
import { useEffect } from 'react'
import { BlurView } from 'expo-blur'

export default function ProfileView({ selectedVillager }) {
  useEffect(() => {
    console.log(selectedVillager)
  }, [])

  return (
    <View style={{
      backgroundColor: DARK_MODE_COLOR,
      flex: 1
    }}>
      <ScrollView stickyHeaderIndices={[1]}>
        <View style={{ flex: 2, backgroundColor: 'lightblue', height: 100 }}>
          <Text style={{ fontSize: 35, fontWeight: 'bold' }}>Hero</Text>
        </View>
        <BlurView intensity={100} style={{height: 50, backgroundColor: 'skyblue'}}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>NAV</Text>
      </BlurView>
        <View style={{ flex: 10, backgroundColor: 'powderblue' }}>
          <Text style={{ fontSize: 35, fontWeight: 'bold' }}>Content</Text>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Lorem Ipsum</Text>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Lorem Ipsum</Text>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Lorem Ipsum</Text>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Lorem Ipsum</Text>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Lorem Ipsum</Text>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Lorem Ipsum</Text>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Lorem Ipsum</Text>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Lorem Ipsum</Text>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Lorem Ipsum</Text>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Lorem Ipsum</Text>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Lorem Ipsum</Text>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Lorem Ipsum</Text>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Lorem Ipsum</Text>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Lorem Ipsum</Text>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Lorem Ipsum</Text>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Lorem Ipsum</Text>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Lorem Ipsum</Text>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Lorem Ipsum</Text>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Lorem Ipsum</Text>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Lorem Ipsum</Text>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Lorem Ipsum</Text>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Lorem Ipsum</Text>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Lorem Ipsum</Text>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Lorem Ipsum</Text>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Lorem Ipsum</Text>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Lorem Ipsum</Text>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Lorem Ipsum</Text>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Lorem Ipsum</Text>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Lorem Ipsum</Text>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Lorem Ipsum</Text>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Lorem Ipsum</Text>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Lorem Ipsum</Text>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Lorem Ipsum</Text>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Lorem Ipsum</Text>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Lorem Ipsum</Text>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Lorem Ipsum</Text>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Lorem Ipsum</Text>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Lorem Ipsum</Text>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Lorem Ipsum</Text>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Lorem Ipsum</Text>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Lorem Ipsum</Text>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Lorem Ipsum</Text>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Lorem Ipsum</Text>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Lorem Ipsum</Text>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Lorem Ipsum</Text>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Lorem Ipsum</Text>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Lorem Ipsum</Text>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Lorem Ipsum</Text>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Lorem Ipsum</Text>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Lorem Ipsum</Text>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Lorem Ipsum</Text>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Lorem Ipsum</Text>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Lorem Ipsum</Text>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Lorem Ipsum</Text>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Lorem Ipsum</Text>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Lorem Ipsum</Text>



        </View>
      </ScrollView>

    </View>
  )
}
