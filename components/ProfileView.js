import { View, Text, ScrollView, Image } from 'react-native'
import { BIRTHDAY_SEASONS, DARK_MODE_COLOR, SUMMER_ICON, WHITE_COLOR } from '../constants'
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
        <View style={{ flex: 2, height: 100, padding: 10, flexDirection: 'row' }}>
          <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
            <Image
              style={{
                width: 50,
                height: 50,
              }}
              source={{
                uri: selectedVillager.imgUri,
              }}
            />
          </View>
          <View style={{ flex: 6, backgroundColor: 'yellow' }}></View>
          <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
            <Image
              style={{
                width: 50,
                height: 50,
                borderRadius: 15
              }}
              source={{
                uri: BIRTHDAY_SEASONS[selectedVillager.birthday?.season],
              }}
            />
            <Text style={{color: WHITE_COLOR, fontFamily: 'VT323', marginTop: 10}}>{`${selectedVillager.birthday.season} ${selectedVillager.birthday.day}`}</Text>
          </View>
        </View>
        <BlurView intensity={100} style={{ height: 50 }}>
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
