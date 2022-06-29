import { StatusBar } from 'expo-status-bar'
import {
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native'
import { useState } from 'react'
import { Ionicons, Octicons } from '@expo/vector-icons'
import Characters from './components/Characters'
import ProfileView from './components/ProfileView'

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [currentView, setCurrentView] = useState('Villagers')
  const [selectedCharacter, setSelectedCharacter] = useState(null)

  const setProfileView = (character) => {
    setCurrentView('Profile')
    setSelectedCharacter(character)
  }
  const dM = '#2c2c2c'
  return (
    <SafeAreaView
      style={{ flex: 10, backgroundColor: isDarkMode ? dM : 'white' }}
    >
      <StatusBar style={isDarkMode ? 'light' : 'dark'} />
      <View
        style={{
          paddingLeft: 10,
          flex: 0.7,
          backgroundColor: isDarkMode ? dM : '#ffffff',
          zIndex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 40,
            flex: 8,
            color: isDarkMode ? 'white' : 'black',
            marginLeft: 5,
          }}
        >
          {currentView === 'Profile' ? (
            <View>
              <TouchableOpacity
                style={{ marginRight: 5 }}
                onPress={() => setCurrentView('Villagers')}
              >
                <Ionicons name='ios-chevron-back' size={28} color='#006ee6' />
              </TouchableOpacity>
            </View>
          ) : null}

          {currentView === 'Profile' ? selectedCharacter.name : currentView}
        </Text>
        <TouchableOpacity
          onPress={() => setIsDarkMode(!isDarkMode)}
          style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}
        >
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 25 }}>
            {isDarkMode ? (
              <Ionicons name='sunny-outline' size={35} color='white' />
            ) : (
              <Ionicons name='ios-moon-outline' size={28} color='black' />
            )}
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 7,
          backgroundColor: isDarkMode ? dM : '#ffffff',
        }}
      >
        <ScrollView>
          {currentView === 'Profile' ? <ProfileView /> : null}
          {currentView === 'Villagers' ? (
            <Characters
              setSelectedCharacter={setProfileView}
              darkMode={isDarkMode}
            />
          ) : null}
        </ScrollView>
      </View>
      <View
        style={{
          flex: 0.7,
          flexDirection: 'row',
          justifyContent: 'space-around',
          backgroundColor: isDarkMode ? dM : 'white',
          borderRadius: 20,
        }}
      >
        <TouchableOpacity
          onPress={() => setCurrentView('Villagers')}
          style={{
            width: '33%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <View>
            <Ionicons
              name='ios-people'
              size={24}
              color={
                currentView === 'Villagers' || currentView === 'Profile'
                  ? '#006ee6'
                  : isDarkMode
                  ? 'white'
                  : 'black'
              }
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setCurrentView('Locations')}
          style={{
            width: '33%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <View>
            <Ionicons
              name='location-sharp'
              size={22}
              color={isDarkMode ? 'white' : 'black'}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setCurrentView('Crafting')}
          style={{
            width: '33%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <View>
            <Octicons
              name='package'
              size={22}
              color={isDarkMode ? 'white' : 'black'}
            />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
