import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import FavoriteScreen from '../screens/FavoriteScreen';
import PokemonScreen from '../screens/PokemonScreen';

const Stack = createNativeStackNavigator();

const FavoriteNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Favorite' component={FavoriteScreen} options={{ title: 'Favoritos', headerTitleAlign: 'center' }} />
      <Stack.Screen
        name='Pokemon'
        component={PokemonScreen}
        options={{
          title: '',
          headerTransparent: true
        }}
      />
    </Stack.Navigator>
  )
}

export default FavoriteNavigation