import React, { FC } from 'react';
import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native';
import { orange } from '../../../constants/colors';

const { width } = Dimensions.get('window');

type NameInputType = {
  name: string;
  onChangeName: (name: string) => void;
};

const NameInput: FC<NameInputType> = ({ name, onChangeName }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Enter your name</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeName}
        value={name}
        placeholder="Name"
        placeholderTextColor="rgba(238, 110, 69, 0.3)"
      />
    </View>
  );
};

export default NameInput;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  input: {
    height: 40,
    width: width * 0.8,
    margin: 12,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: orange,
    padding: 10,
    color: orange,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
