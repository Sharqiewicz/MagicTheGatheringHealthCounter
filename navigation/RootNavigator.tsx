import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as React from 'react'

import { AddPlayersScreen } from '../screens/AddPlayersScreen'
import { BattleScreen } from '../screens/BattleScreen'

import { RootStackParamList, RootStackScreenName } from './routes.types'

const Stack = createNativeStackNavigator<RootStackParamList>()

export const RootNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={RootStackScreenName.AddPlayer}
      component={AddPlayersScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name={RootStackScreenName.Battle}
      component={BattleScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
)
