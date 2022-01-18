import { useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { RootNavigatorScreenProps } from '../../navigation';

import UserInfo from './components/UserInfo';
import ChooseCharacter from './components/ChooseCharacter';
import SelectedCharacters from './components/SelectedCharacters';

const { width } = Dimensions.get('window');

interface CharacterScreenProps extends RootNavigatorScreenProps<'Character'> {}

function useForceUpdate() {
  const [value, setValue] = useState(0); // integer state
  return () => setValue((value) => value + 1); // update the state to force render
}

export const CharacterScreen: React.FC<CharacterScreenProps> = ({ navigation }) => {
  const [selectedCharacters, setSelectedCharacters] = useState([]);
  const route = useRoute();
  const forceUpdate = useForceUpdate();

  return (
    <SafeAreaView style={styles.container}>
      <UserInfo name={route.params.name} team={route.params.team} number={route.params.number} />
      <ChooseCharacter
        selectedCharacters={selectedCharacters}
        setSelectedCharacters={setSelectedCharacters}
        forceUpdate={forceUpdate}
      />
      <SelectedCharacters
        forceUpdate={forceUpdate}
        selectedCharacters={selectedCharacters}
        setSelectedCharacters={setSelectedCharacters}
      />
      <TouchableOpacity
        style={
          selectedCharacters.length !== 0 ? styles.nextButtonActive : styles.nextButtonInactive
        }
        onPress={() => {}}
      >
        <Text style={styles.nextButtonTextActive}>Done</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  userInfoContainer: {
    flexDirection: 'row',
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  nextButtonActive: {
    width: width * 0.6,
    height: width * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EE6E45',
    borderRadius: 50,
    marginTop: 50,
  },
  nextButtonInactive: {
    width: width * 0.6,
    height: width * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(175, 171, 170, 0.4)',
    borderRadius: 50,
    marginTop: 50,
  },
  nextButtonTextActive: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  nextButtonTextInactive: {
    fontSize: 16,
    color: 'rgba(84, 84, 84, 0.3)',
    fontWeight: 'bold',
  },
});

export default CharacterScreen;
