import React, { FC } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Circle from '../../../assets/team/OrangeCircle';
import Square from '../../../assets/team/OrangeSquare';
import Triangle from '../../../assets/team/OrangeTriangle';
import { orange, white } from '../../../constants/colors';

type ChooseTeamType = {
  selectedTeam: number | undefined;
  setSelectedTeam: (value: number) => void;
};

const ChooseTeam: FC<ChooseTeamType> = ({ selectedTeam, setSelectedTeam }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Choose your team</Text>
      <View style={styles.teamContainer}>
        <TouchableOpacity
          style={selectedTeam === 0 ? styles.choosenTeamButton : styles.teamButton}
          onPress={() => setSelectedTeam(0)}
        >
          <Circle color={selectedTeam === 0 ? white : orange} />
        </TouchableOpacity>

        <TouchableOpacity
          style={selectedTeam === 1 ? styles.choosenTeamButton : styles.teamButton}
          onPress={() => setSelectedTeam(1)}
        >
          <Square color={selectedTeam === 1 ? white : orange} />
        </TouchableOpacity>

        <TouchableOpacity
          style={selectedTeam === 2 ? styles.choosenTeamButton : styles.teamButton}
          onPress={() => setSelectedTeam(2)}
        >
          <Triangle color={selectedTeam === 2 ? white : orange} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChooseTeam;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  teamContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '90%',
  },
  teamButton: {
    height: 100,
    width: 90,
    justifyContent: 'center',
    alignItems: 'center',
  },
  choosenTeamButton: {
    height: 100,
    width: 90,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: orange,
    borderRadius: 10,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
