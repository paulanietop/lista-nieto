import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'

import { Button } from '../components'
import { COLORS } from '../constants/Colors'
import ImageSelector from '../components/ImageSelector'
import { addJournal } from '../store/actions/journals.action'
import { useDispatch } from 'react-redux'

const NewFormScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageValue, setImageValue] = useState('')

  const isDataComplete = () => {
    return title !== '' && description !== '' && imageValue !== '';
  }

  const handleNewJournal = () => {
    if(isDataComplete) {
      console.log(title, description, imageValue)
      dispatch(addJournal(title, description, imageValue))
      navigation.navigate('PhotoJournal')
    }
  }

  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.inputTitle}>Title</Text>
        <TextInput 
          style={styles.input}
          placeholder="Add title"
          value={title}
          onChangeText={text => setTitle(text)}
        />
        <Text style={styles.inputTitle}>Description</Text>
        <TextInput 
          style={styles.input}
          placeholder="Add description"
          value={description}
          onChangeText={text => setDescription(text)}
        />
      </View>
      <ImageSelector onImage={image=>setImageValue(image)}/>
      <Button 
        text='Save' 
        style={styles.button}
        onPress={handleNewJournal}
      />
    </ScrollView>
  )
}

export default NewFormScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  inputTitle: {
    fontSize: 18,
    fontFamily: 'raleway',
    marginBottom: 15,
  },
  input: {
    borderColor: COLORS.secondary,
    borderRadius: 5,
    borderWidth: 2,
    fontFamily: 'raleway',
    fontSize: 16,
    padding: 10,
    marginBottom: 20,
  },
  button: {
    marginBottom: 40
  }
})