import React, { useRef } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Swiper from 'react-native-swiper';

import { RootNavigatorScreenProps } from '../../navigation';

import Logo from '../../assets/main/logo.svg';
import Start from '../../assets/main/start.svg';
import Ellipse from '../../assets/main/ellipse.svg';

import Clown from '../../assets/avatars/clown.svg';
import Unicorn from '../../assets/avatars/unicorn.svg';
import Lion from '../../assets/avatars/lion.svg';
import Eggplant from '../../assets/avatars/eggplant.svg';
import Palm from '../../assets/avatars/palm.svg';
import Banana from '../../assets/avatars/banana.svg';

interface InitialScreenProps extends RootNavigatorScreenProps<'Initial'> {}

export const InitialScreen: React.FC<InitialScreenProps> = ({ navigation }) => {
  const ref = useRef({
    avatar: 0,
  });
  const setIndex = (index: number) => {
    ref.current.avatar = index;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginTop: 50 }}>
        <Logo />
      </View>
      <Swiper
        onIndexChanged={(index) => setIndex(index)}
        style={styles.wrapper}
        height={300}
        containerStyle={{ justifyContent: 'center', alignItems: 'center' }}
        showsButtons
        loop
        showsPagination={false}
        nextButton={<Text style={styles.arrow}>›</Text>}
        prevButton={<Text style={styles.arrow}>‹</Text>}
      >
        <View testID="Hello" style={styles.slider}>
          <Unicorn />
          <Ellipse />
          <Text style={styles.text}>Magic unicorn</Text>
        </View>
        <View testID="Beautiful" style={styles.slider}>
          <Lion />
          <Ellipse />
          <Text style={styles.text}>Tiger extrovert</Text>
        </View>
        <View testID="Simple" style={styles.slider}>
          <Clown />
          <Ellipse />
          <Text style={styles.text}>Common clown</Text>
        </View>
        <View testID="Beautiful" style={styles.slider}>
          <Eggplant />
          <Ellipse />
          <Text style={styles.text}>Clockwork eggplant</Text>
        </View>
        <View testID="Beautiful" style={styles.slider}>
          <Palm />
          <Ellipse />
          <Text style={styles.text}>Maldivian palm</Text>
        </View>
        <View testID="Beautiful" style={styles.slider}>
          <Banana />
          <Ellipse />
          <Text style={styles.text}>Cute banana</Text>
        </View>
      </Swiper>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate('Team', {
            avatar: ref.current.avatar,
          })
        }
      >
        <Start />
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
  wrapper: {
    marginTop: 50,
    height: 250,
  },
  slider: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  button: {
    marginBottom: 50,
    shadowColor: '#EE6E45',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 2,
    shadowRadius: 30,
    elevation: 5,
  },
  arrow: {
    fontSize: 50,
    color: '#EE6E45',
  },
});

export default InitialScreen;
