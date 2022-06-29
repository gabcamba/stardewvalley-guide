import CharacterRow from './CharacterRow'
import { characters } from '../assets/characterCollection'

export default function Characters(props) {
  return characters.map((characterRow) => (
    <CharacterRow
      setSelectedCharacter={props.setSelectedCharacter}
      darkMode={props.darkMode}
      row={characterRow}
    />
  ))
}
