import * as ImagePicker from 'expo-image-picker'

import { Alert, Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

import Button from './Button'
import { COLORS } from '../constants/Colors'

const ImageSelector = ({onImage}) => {
  const [pickedUri, setPickedUri] = useState()

  const verifyPermissions = async () => {
    const {status} = await ImagePicker.requestCameraPermissionsAsync()
    if(status !== 'granted') {
      Alert.alert('Camera access permission was denied')
      return false
    }
    return true
  }

  const handleTakeImage = async () => {
    const isCameraOk = await verifyPermissions()
    if(!isCameraOk) return
    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16,9],
      quality: 0.8,
    })
    setPickedUri(image.assets[0].uri)
    onImage(image.assets[0].uri)
  }

  return (
    <View style={styles.container}>
      <View style={styles.preview}>
        { !pickedUri
          ? (<Text>No picture taken...</Text>)
          : (<Image style={styles.image} source={{uri: pickedUri}} />)
        }
      </View>
      <View style={{flexDirection: 'row'}}>
        <Button onPress={handleTakeImage} text="Take a picture" />
      </View>
    </View>
  )
}

export default ImageSelector

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  preview: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: COLORS.secondary,
    borderWidth: 2,
    borderRadius: 5,
  },
  image: {
    width: '100%',
    height: '100%',
  },
})