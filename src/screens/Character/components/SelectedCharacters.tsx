import React, { FC } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Svg from 'react-native-svg';

import Remove from '../../../assets/character/remove.svg';

type SelectedCharactersType = {
  selectedCharacters: string[];
  setSelectedCharacter: (value: object[]) => void;
};

const SelectedCharacters: FC<SelectedCharactersType> = ({
  selectedCharacters,
  setSelectedCharacters,
  forceUpdate,
}) => {
  const removeCharacter = (itemIndex: number) => {
    selectedCharacters.splice(itemIndex, 1);
    setSelectedCharacters(selectedCharacters);
    forceUpdate();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Your character</Text>
      <FlatList
        data={selectedCharacters}
        renderItem={({ item, index }) => (
          <TouchableOpacity style={styles.characterButton} onPress={() => removeCharacter(index)}>
            <View style={styles.remove}>
              <Remove width={20} height={20} />
            </View>
            <Svg height="55%" width="55%" viewBox="0 0 50 50">
              {item.pic}
            </Svg>
          </TouchableOpacity>
        )}
        numColumns={3}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
};

export default SelectedCharacters;

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  characterButton: {
    width: 60,
    height: 50,
    marginVertical: 5,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(252, 252, 252, 1)',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  remove: {
    marginLeft: 30,
    top: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
