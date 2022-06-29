import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, StyleSheet } from 'react-native'
import { useState } from 'react'
import NavBar from './components/NavBar'
import CharacterView from './components/CharacterView'
import Header from './components/Header'

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
  })

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar style={isDarkMode ? 'light' : 'dark'} />
      <Header
        currentView={currentView}
        dM={dM}
        isDarkMode={isDarkMode}
        setProfileView={setProfileView}
        setIsDarkMode={setIsDarkMode}
        selectedCharacter={selectedCharacter}
        f
        setCurrentView={setCurrentView}
      />
      <CharacterView
        currentView={currentView}
        dM={dM}
        isDarkMode={isDarkMode}
        setProfileView={setProfileView}
      />
      <NavBar
        currentView={currentView}
        setCurrentView={setCurrentView}
        dM={dM}
        isDarkMode={isDarkMode}
      />
    </SafeAreaView>
  )
}
