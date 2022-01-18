import React from 'react';
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import { CharacterScreen, InitialScreen, TeamScreen } from '../screens';

type RootNavigatorParams = {
  Character: { avatar: number; team: number; name: string; number?: number };
  Initial: undefined;
  Team: { avatar: number };
};

const Stack = createNativeStackNavigator<RootNavigatorParams>();

const RootNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Initial"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Character" component={CharacterScreen} />
        <Stack.Screen name="Initial" component={InitialScreen} />
        <Stack.Screen name="Team" component={TeamScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export interface RootNavigatorScreenProps<RouteName extends keyof RootNavigatorParams> {
  route: RouteProp<RootNavigatorParams, RouteName>;
  navigation: NativeStackNavigationProp<RootNavigatorParams, RouteName>;
}

export default RootNavigator;
