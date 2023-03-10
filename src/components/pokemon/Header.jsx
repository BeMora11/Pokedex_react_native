import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import getColorByPokemonType from '../../utils/getColorByPokemonType'
import { SafeAreaView } from 'react-native-safe-area-context'
import { capitalize } from 'lodash'

const Header = (props) => {
  const { name, order, imagen, type } = props
  const color = getColorByPokemonType(type);
  const bgStyles = [{
    backgroundColor: color,
    ...styles.bg
  }]

  return (
    <>
      <View style={bgStyles} />
      <SafeAreaView style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.name}>{capitalize(name)}</Text>
          <Text style={styles.order}>#{`${order}`.padStart(3, 0)}</Text>
        </View>
        <View style={styles.contentImg}>
          <Image
            source={{ uri: imagen }}
            style={styles.image}
          />
        </View>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  bg: {
    width: '100%',
    height: 400,
    position: 'absolute',
    borderBottomEndRadius: 300,
    borderBottomStartRadius: 300,
    transform: [{ scaleX: 2 }]
  },
  content: {
    marginHorizontal: 20,
    marginTop: 30
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 40
  },
  name: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 27
  },
  order: {
    color: '#fff',
    fontWeight: 'bold'
  },
  contentImg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    top: 30,
    backgroundColor: ''
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: 'contain'
  }
})

export default Header