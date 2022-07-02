import CharacterRow from './CharacterRow'
import { characters } from '../assets/characterCollection'

export default function Characters(props) {
  return characters.map((characterRow, index) => (
    <CharacterRow
      key={index}
      navigation={props.navigation}
      darkMode={props.darkMode}
      row={characterRow}
      setVillagerProfile={props.setVillagerProfile}

    />
  ))
}
