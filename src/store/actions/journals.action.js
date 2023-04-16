export const ADD_JOURNAL = 'ADD_JOURNAL'
export const LOAD_JOURNAL = 'LOAD_JOURNAL'

import * as FileSystem from 'expo-file-system'

import { fetchJournal, insertJournal } from '../../../db'

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
      const result = await insertJournal(title, description, Path)
      console.log(result)
      dispatch({ type: ADD_JOURNAL, payload: {id: result.insertId, title, description, image: Path}})
    }
}

export const loadJournal = () => {
  return async dispatch => {
    try {
      const result = await fetchJournal()
      console.log(result)
      dispatch({type: LOAD_JOURNAL, journals: result.rows._array})
    }
    catch (error) {
      throw error
    }
  }
}