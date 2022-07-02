import { View, ScrollView } from 'react-native'
import Characters from './Characters'
import { DARK_MODE_COLOR, WHITE_COLOR } from '../constants'
const CharacterView = ({ navigation, isDarkMode, setVillagerProfile }) => {
  return (
    <View
      style={{
        flex: 7,
        backgroundColor: isDarkMode ? DARK_MODE_COLOR : WHITE_COLOR,
      }}
    >
      <ScrollView>
        <Characters
          navigation={navigation}
          darkMode={isDarkMode}
          setVillagerProfile={setVillagerProfile}
        />
      </ScrollView>
    </View>
  )
}

export default CharacterView