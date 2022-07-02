import { View, Text, ScrollView } from 'react-native'
import { DARK_MODE_COLOR } from '../colors'
import Characters from './Characters'
import NavBar from './NavBar'
import { useEffect } from 'react'

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
        <View style={{ flex: 1, backgroundColor: 'skyblue', height: 50 }}>
          <Text style={{ fontSize: 35, fontWeight: 'bold' }}>Nav</Text>

        </View>
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
