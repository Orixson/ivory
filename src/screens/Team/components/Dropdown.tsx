import React, { FC, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { orange, white } from '../../../constants/colors';

type DropDownMenuType = {
  number?: number;
  setNumber: (value: number) => void;
};

const DropDownMenu: FC<DropDownMenuType> = ({ number, setNumber }) => {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const arr = initArray();
    setItems(arr);
  }, []);

  const myArray = [];
  const count = 45;

  function initArray() {
    for (let i = 1; i < count + 1; i++) {
      let newElement = {};
      newElement.label = i;
      newElement.value = i;
      myArray.push(newElement);
    }
    return myArray;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Choose your number</Text>
      <DropDownPicker
        open={open}
        value={number}
        items={items}
        setOpen={setOpen}
        setValue={setNumber}
        setItems={setItems}
        placeholder=""
        style={{
          marginTop: 20,
          width: 200,
          alignItems: 'center',
          alignSelf: 'center',
          justifyContent: 'center',
          borderColor: white,
          backgroundColor: 'rgba(252, 252, 252, 1)',
        }}
        containerStyle={{
          width: 200,
          borderColor: orange,
        }}
        textStyle={{
          color: orange,
          borderColor: orange,
          textAlign: 'center',
          fontSize: 14,
        }}
        labelStyle={{ marginLeft: 30 }}
        dropDownContainerStyle={{
          borderColor: white,
          justifyContent: 'center',
        }}
        arrowIconStyle={{ tintColor: 'rgba(238, 110, 69, 0.3)' }}
        tickIconStyle={{ tintColor: orange }}
        selectedItemContainerStyle={{
          backgroundColor: orange,
          borderRadius: 10,
        }}
        selectedItemLabelStyle={{ marginLeft: 30, color: white, backgroundColor: orange }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default DropDownMenu;
