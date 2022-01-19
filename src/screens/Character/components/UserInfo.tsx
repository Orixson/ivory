import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Circle from '../../../assets/team/OrangeCircle';
import Square from '../../../assets/team/OrangeSquare';
import Triangle from '../../../assets/team/OrangeTriangle';

type UserInfoType = { name: string; team: number; number: number };

const userInfo: FC<UserInfoType> = ({ name, team, number }) => {
  return (
    <View style={styles.userInfoContainer}>
      <Text style={styles.text}>{name}</Text>
      {team === 1 ? <Circle /> : team === 2 ? <Square /> : <Triangle />}
      <Text style={styles.text}>{number}</Text>
    </View>
  );
};

export default userInfo;

const styles = StyleSheet.create({
  userInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '80%',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
