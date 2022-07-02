import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import NavBar from './components/NavBar'
import VillagersView from './components/VillagersView'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProfileView from './components/ProfileView'
import Places from './components/Places'
import { DARK_MODE_COLOR, GREEN_COLOR, WHITE_COLOR } from './colors'
import { View } from 'react-native'
const Stack = createNativeStackNavigator()

export default function App({ navigation }) {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [currentView, setCurrentView] = useState('Villagers')
  const [selectedVillager, setSelectedVillager] = useState(null)



  const headerStyle = {
    headerStyle: {
      backgroundColor: DARK_MODE_COLOR,
    },
    headerTintColor: WHITE_COLOR,
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 20,
      color: 'white'
    },
    headerTitleAlign: 'left',
    headerShadowVisible: false
  }

  const setVillagerProfile = (villager) => {
    setSelectedVillager(villager)
  }

  return (
    <NavigationContainer>
      <StatusBar style={isDarkMode ? 'light' : 'dark'} />

      <Stack.Navigator>
        <Stack.Screen
          name='Villagers'
          options={{
            title: 'Villagers',
            ...headerStyle
          }}
        >
          {(props) => (
            <VillagersView
              {...props}
              currentView={currentView}
              dM={DARK_MODE_COLOR}
              isDarkMode={isDarkMode}
              setVillagerProfile={setVillagerProfile}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name='Profile' options={{
          ...headerStyle, title: selectedVillager?.name,
          headerTintColor: GREEN_COLOR
        }}>
          {(props) => (
            <ProfileView
              {...props}
              selectedVillager={selectedVillager}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name='Places' options={{
          ...headerStyle, title: 'Places',
          headerTintColor: GREEN_COLOR, headerLeft: () => null
        }}>
          {(props) => (
            <Places
              {...props}
              currentView={currentView}
              dM={DARK_MODE_COLOR}
              isDarkMode={isDarkMode}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
      <NavBar
        currentView={currentView}
        dM={DARK_MODE_COLOR}
        isDarkMode={isDarkMode}
      />
    </NavigationContainer>
  )
}
