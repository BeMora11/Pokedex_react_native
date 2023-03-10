import { View, Text, StyleSheet, Button, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const NoLogged = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.content}>
      <Text style={[styles.text, { marginBottom: 32 }]}>Para ver esta pantalla tienes que iniciar sesión</Text>
      <Pressable style={styles.btn} onPress={() => navigation.navigate('Account')}>
        <Text style={styles.btnText}>Iniciar sesión</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    marginVertical: 50,
    paddingHorizontal: 20
  },
  text: {
    textAlign: 'center',
    marginBottom: 10
  },
  btn: {
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 12
  },
  btnText: {
    color: '#fff',
    fontWeight: '600'
  }
});

export default NoLogged