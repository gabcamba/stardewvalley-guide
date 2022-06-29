import { View, ScrollView } from 'react-native'
import Characters from './Characters'
import ProfileView from './ProfileView'
const CharacterView = ({isDarkMode, currentView, dM, setProfileView}) => {
  return (
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
  )
}

export default CharacterView