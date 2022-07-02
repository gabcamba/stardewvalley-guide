import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { Ionicons, Octicons } from '@expo/vector-icons'
import { DARK_MODE_COLOR, WHITE_COLOR } from '../colors'

export default function NavBar({
  isDarkMode,
  dM,
  currentView,
  setCurrentView,
  navigation
}) {
  const styles = StyleSheet.create({
    navView: {
      // flex: 0.7,
      flexDirection: 'row',
      justifyContent: 'space-around',
      backgroundColor: DARK_MODE_COLOR,
      // borderRadius: 20,
      height: 100
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
        onPress={() => navigation.reset({
          index: 0,
          routes: [{ name: 'Villagers' }],
        })}
        style={styles.navItem}
      >
        <View>
          <Ionicons
            name='ios-people'
            size={24}
            color={WHITE_COLOR}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.reset({
          index: 0,
          routes: [{ name: 'Places' }],
        })}
        style={styles.navItem}
      >
        <View>
          <Ionicons
            name='location-sharp'
            size={22}
            color={WHITE_COLOR}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.reset({
          index: 0,
          routes: [{ name: 'Villagers' }],
        })}
        style={styles.navItem}
      >
        <View>
          <Octicons
            name='package'
            size={22}
            color={WHITE_COLOR}
          />
        </View>
      </TouchableOpacity>
    </View>
  )
}
