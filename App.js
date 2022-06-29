import { StatusBar } from 'expo-status-bar'
import {
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import { useState } from 'react'
import { Ionicons, Octicons } from '@expo/vector-icons'
import Characters from './components/Characters'
import ProfileView from './components/ProfileView'
import NavBar from './components/NavBar'

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [currentView, setCurrentView] = useState('Villagers')
  const [selectedCharacter, setSelectedCharacter] = useState(null)

  const setProfileView = (character) => {
    setCurrentView('Profile')
    setSelectedCharacter(character)
  }
  const dM = '#2c2c2c'

  const styles = StyleSheet.create({
    safeAreaView: { flex: 10, backgroundColor: isDarkMode ? dM : 'white' },
    headerView: {
      paddingLeft: 10,
      flex: 0.7,
      backgroundColor: isDarkMode ? dM : '#ffffff',
      zIndex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    headerText: {
      fontWeight: 'bold',
      fontSize: 40,
      flex: 8,
      color: isDarkMode ? 'white' : 'black',
      marginLeft: 5,
    },
    darkModeBtn: { flex: 2, justifyContent: 'center', alignItems: 'center' },
  })

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar style={isDarkMode ? 'light' : 'dark'} />
      <View style={styles.headerView}>
        <Text style={styles.headerText}>
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
          style={styles.darkModeBtn}
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
      <NavBar
        currentView={currentView}
        setCurrentView={setCurrentView}
        dM={dM}
        isDarkMode={isDarkMode}
      />
    </SafeAreaView>
  )
}
