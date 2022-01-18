import { useRoute } from '@react-navigation/native';
import React, { useRef, useState } from 'react';
import { StyleSheet, Text, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// import DropDownPicker from 'react-native-dropdown-picker';

import { RootNavigatorScreenProps } from '../../navigation';
import ChooseTeam from './components/ChooseTeam';
import NameInput from './components/NameInput';
import DropDownPicker from './components/Dropdown';

const { width } = Dimensions.get('window');

interface TeamScreenProps extends RootNavigatorScreenProps<'Team'> {}

export const TeamScreen: React.FC<TeamScreenProps> = ({ navigation }) => {
  const [selectedTeam, setSelectedTeam] = useState(0);
  const [name, onChangeName] = React.useState('');
  const [number, setNumber] = React.useState();
  const route = useRoute();

  return (
    <SafeAreaView style={styles.container}>
      <ChooseTeam selectedTeam={selectedTeam} setSelectedTeam={setSelectedTeam} />
      <NameInput onChangeName={onChangeName} name={name} />
      <DropDownPicker number={number} setNumber={setNumber} />
      <TouchableOpacity
        style={selectedTeam && name && number ? styles.nextButtonActive : styles.nextButtonInactive}
        disabled={!(selectedTeam && name && number)}
        onPress={() =>
          navigation.navigate('Character', {
            avatar: route.params.avatar,
            team: selectedTeam,
            name: name,
            number: number,
          })
        }
      >
        <Text style={styles.nextButtonTextActive}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default TeamScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  input: {
    height: 40,
    width: width * 0.8,
    margin: 12,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#EE6E45',
    padding: 10,
  },
  text: {
    fontSize: 30,
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
