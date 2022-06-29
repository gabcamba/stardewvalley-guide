import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { Ionicons, Octicons } from '@expo/vector-icons'

export default function NavBar({
  isDarkMode,
  dM,
  currentView,
  setCurrentView,
}) {
  const styles = StyleSheet.create({
    navView: {
      flex: 0.7,
      flexDirection: 'row',
      justifyContent: 'space-around',
      backgroundColor: isDarkMode ? dM : 'white',
      borderRadius: 20,
    },
    navItem: {
      width: '33%',
      alignItems: 'center',
      justifyContent: 'center',
    },
  })

  return (
    <View style={styles.navView}>
      <TouchableOpacity
        onPress={() => setCurrentView('Villagers')}
        style={styles.navItem}
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
        style={styles.navItem}
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
        style={styles.navItem}
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
  )
}
