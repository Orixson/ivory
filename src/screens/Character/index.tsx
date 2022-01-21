import { useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { RootNavigatorScreenProps } from '../../navigation';

import UserInfo from './components/UserInfo';
import ChooseCharacter from './components/ChooseCharacter';
import SelectedCharacters from './components/SelectedCharacters';

import { teamTransform } from './utils/utils';
import { baseUrl } from '../../constants/baseUrl';
import { orange, white } from '../../constants/colors';

const { width } = Dimensions.get('window');

interface CharacterScreenProps extends RootNavigatorScreenProps<'Character'> {}

function useForceUpdate() {
  const [value, setValue] = useState(0); // integer state
  return () => setValue((value) => value + 1); // update the state to force render
}

export const CharacterScreen: React.FC<CharacterScreenProps> = ({ navigation }) => {
  const [selectedCharacters, setSelectedCharacters] = useState([]);
  // const [userId, setUserId] = useState('');
  const route = useRoute();
  const forceUpdate = useForceUpdate();

  const sendUserData = async () => {
    try {
      const characters = selectedCharacters.map((item) => item.title.toLowerCase());

      const team = teamTransform(route.params.team);

      const body = {
        name: route.params.name,
        number: `${route.params.number}`,
        team: team,
        logoId: route.params.avatar,
        characters: characters,
      };

      const res = await fetch(`${baseUrl}/game-users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      console.log(data);
      // setUserId(data._id);
    } catch (error) {
      console.error('There was an error!', error);
    }
    // if (userId) {
    //   const res = await fetch(`${baseUrl}/game-users/${userId}`, {
    //     method: 'GET',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //   });
    //   const data = await res.json();
    //   console.log('data GET user', data);
    // }
  };

  const onPressDone = () => {
    sendUserData();
    navigation.push('Initial');
  };

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
        disabled={selectedCharacters.length === 0}
        onPress={onPressDone}
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
    backgroundColor: white,
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
    backgroundColor: orange,
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
    color: white,
    fontWeight: 'bold',
  },
  nextButtonTextInactive: {
    fontSize: 16,
    color: 'rgba(84, 84, 84, 0.3)',
    fontWeight: 'bold',
  },
});

export default CharacterScreen;
