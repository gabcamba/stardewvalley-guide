import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Ionicons, Octicons } from '@expo/vector-icons'

export const Header = ({
  isDarkMode,
  dM,
  currentView,
  setIsDarkMode,
  selectedCharacter,
  setCurrentView,
}) => {
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
    darkModeBtnIcon: { color: 'white', fontWeight: 'bold', fontSize: 25 },
  })
  return (
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
        <Text style={styles.darkModeBtnIcon}>
          {isDarkMode ? (
            <Ionicons name='sunny-outline' size={35} color='white' />
          ) : (
            <Ionicons name='ios-moon-outline' size={28} color='black' />
          )}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Header
