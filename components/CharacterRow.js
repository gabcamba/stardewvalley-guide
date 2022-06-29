import { View, TouchableOpacity, StyleSheet, Image, Text } from 'react-native'
export default function CharacterRow(props) {
  return (
    <View style={styles.row}>
      {props.row.map((rowItem) => (
        <TouchableOpacity
          key={rowItem.name}
          onPress={() => props.setSelectedCharacter(rowItem)}
          style={{
            ...styles.characterItem,
            backgroundColor: props.darkMode ? styles.dark : styles.light,
          }}
        >
          <Image
            style={styles.imgSize}
            source={{
              uri: rowItem.imgUri,
            }}
          />
          <Text style={{...styles.name, color: props.darkMode ? 'white' : 'black'}}>{rowItem.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  characterItem: {
    flex: '3',
    marginLeft: 10,
    marginRight: 10,
    height: 100,
    width: 100,
    margin: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dark: '#212121',
  light: '#f2f2f2',
  imgSize: {
    width: 50,
    height: 50,
  },
  row: {
    flexDirection: 'row',
    marginLeft: 5,
    marginRight: 5,
    // padding: 50
  },
  name: {
    fontWeight: 'bold',
    fontSize: 17,
    marginTop: 5
  }
})
