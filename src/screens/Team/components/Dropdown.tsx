import React, { FC, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

type DropDownMenuType = {
  number?: number;
  setNumber: (value: number) => void;
};

const DropDownMenu: FC<DropDownMenuType> = ({ number, setNumber }) => {
  const [open, setOpen] = useState(false);

  const [items, setItems] = useState([
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
    { label: '4', value: '4' },
  ]);

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
          borderRadius: 50,
          justifyContent: 'center',
          borderColor: '#EE6E45',
        }}
        containerStyle={{
          width: 200,
          borderColor: '#EE6E45',
        }}
        textStyle={{
          color: '#EE6E45',
          borderColor: '#EE6E45',
          textAlign: 'center',
        }}
        labelStyle={{ marginLeft: 30 }}
        dropDownContainerStyle={{
          borderColor: '#fff',
          justifyContent: 'center',
        }}
        modalContentContainerStyle={{ color: '#fff' }}
        arrowIconStyle={{ tintColor: 'rgba(238, 110, 69, 0.3)' }}
        tickIconStyle={{ tintColor: '#EE6E45' }}
        selectedItemContainerStyle={{
          backgroundColor: '#EE6E45',
          borderRadius: 10,
        }}
        selectedItemLabelStyle={{ marginLeft: 30, color: '#fff', backgroundColor: '#EE6E45' }}
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
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default DropDownMenu;
