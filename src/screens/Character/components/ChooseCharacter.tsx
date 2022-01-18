import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Energy from '../../../assets/character/energy.svg';
import Smart from '../../../assets/character/smart.svg';
import Leader from '../../../assets/character/leader.svg';
import Calmness from '../../../assets/character/calmness.svg';
import Speed from '../../../assets/character/speed.svg';
import Wisdom from '../../../assets/character/wisdom.svg';

const ChooseCharacter = ({ selectedCharacters, setSelectedCharacters, forceUpdate }) => {
  const characters = [
    { pic: <Energy />, title: 'Energy' },
    { pic: <Smart />, title: 'Smart' },
    { pic: <Leader />, title: 'Leader' },
    { pic: <Calmness />, title: 'Calmness' },
    { pic: <Speed />, title: 'Speed' },
    { pic: <Wisdom />, title: 'Wisdom' },
  ];

  const onPress = (item: object) => {
    let result = selectedCharacters.map(({ title }) => title);
    console.log('result', result);
    if (!result.includes(item.title)) {
      selectedCharacters.push(item);
      setSelectedCharacters(selectedCharacters);
      forceUpdate();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Choose your character</Text>
      <FlatList
        data={characters}
        style={{ marginTop: 25 }}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.characterButton} onPress={() => onPress(item)}>
            {item.pic}
            <Text style={styles.titleText}>{item.title}</Text>
          </TouchableOpacity>
        )}
        numColumns={3}
        keyExtractor={(item) => item.title}
      />
    </View>
  );
};

export default ChooseCharacter;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
  characterButton: {
    width: 70,
    marginHorizontal: 20,
    marginVertical: 10,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(252, 252, 252, 1)',
  },
  titleText: {
    marginTop: 10,
    fontWeight: 'bold',
  },
});
