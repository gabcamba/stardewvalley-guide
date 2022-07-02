import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import NavBar from './components/NavBar'
import VillagersView from './components/VillagersView'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProfileView from './components/ProfileView'
import Places from './components/Places'
import { DARK_MODE_COLOR, GREEN_COLOR, WHITE_COLOR } from './colors'
import { useFonts } from 'expo-font'

const Stack = createNativeStackNavigator()

export default function App({ navigation }) {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [selectedVillager, setSelectedVillager] = useState(null)

  let [fontsLoaded] = useFonts({
    'VT323': require('./assets/fonts/munro.ttf'),
  });

  const headerStyle = {
    headerStyle: {
      backgroundColor: DARK_MODE_COLOR,
    },
    headerTintColor: WHITE_COLOR,
    headerTitleStyle: {
      fontFamily: 'VT323',
      fontWeight: 'bold',
      fontSize: 25,
      color: 'white'
    },
    headerShadowVisible: false,
    headerBackTitleStyle: {
      fontFamily: 'VT323'
    }
  }

  const setVillagerProfile = (villager) => {
    setSelectedVillager(villager)
  }

  if (!fontsLoaded) {
    return null
  }

  return (
    <NavigationContainer>
      <StatusBar style={'light'} />
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
              dM={DARK_MODE_COLOR}
              isDarkMode={isDarkMode}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
      <NavBar
        dM={DARK_MODE_COLOR}
        isDarkMode={isDarkMode}
      />
    </NavigationContainer>
  )
}
