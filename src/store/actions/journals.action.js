export const ADD_JOURNAL = 'ADD_JOURNAL'

import * as FileSystem from 'expo-file-system'

export const addJournal = (title, description, image) => {
  return async dispatch => {
      const fileName = image.split('/').pop()
      const Path = FileSystem.documentDirectory + fileName

      try {
        FileSystem.moveAsync({
          from: image,
          to: Path
        })
      } catch (err) {
        console.log(err.message)
        throw err
      }
      dispatch({ type: ADD_JOURNAL, payload: {title, description, image: Path}})
    }
}