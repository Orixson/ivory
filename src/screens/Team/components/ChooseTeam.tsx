import React, { FC } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Circle from '../../../assets/team/OrangeCircle';
import Square from '../../../assets/team/OrangeSquare';
import Triangle from '../../../assets/team/OrangeTriangle';

type ChooseTeamType = {
  selectedTeam: number;
  setSelectedTeam: (value: number) => void;
};

const ChooseTeam: FC<ChooseTeamType> = ({ selectedTeam, setSelectedTeam }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Choose your team</Text>
      <View style={styles.teamContainer}>
        <TouchableOpacity
          style={selectedTeam === 1 ? styles.choosenTeamButton : styles.teamButton}
          onPress={() => setSelectedTeam(1)}
        >
          <Circle color={selectedTeam === 1 ? '#fff' : '#EE6E45'} />
        </TouchableOpacity>

        <TouchableOpacity
          style={selectedTeam === 2 ? styles.choosenTeamButton : styles.teamButton}
          onPress={() => setSelectedTeam(2)}
        >
          <Square color={selectedTeam === 2 ? '#fff' : '#EE6E45'} />
        </TouchableOpacity>

        <TouchableOpacity
          style={selectedTeam === 3 ? styles.choosenTeamButton : styles.teamButton}
          onPress={() => setSelectedTeam(3)}
        >
          <Triangle color={selectedTeam === 3 ? '#fff' : '#EE6E45'} />
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
    flexDirection: 'row',
  },
  teamButton: {
    height: 70,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  choosenTeamButton: {
    height: 70,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EE6E45',
    borderRadius: 10,
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
