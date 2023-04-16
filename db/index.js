import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase('jounal.db')

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql('CREATE TABLE IF NOT EXISTS journal (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, description TEXT NOT NULL, image TEXT NOT NULL)',
      [],
      () => {resolve()},
      (_, err) => {reject(err)})
    })
  })
  return promise
}

export const insertJournal = (
  title,
  description,
  image,
) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO journal (title, description, image) VALUES (?, ?, ?)',
        [title, description, image],
        (_, result) => resolve(result),
        (_, err) => reject(err),
      )
    })
  })
  return promise
}

export const fetchJournal = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM journal;',
        [],
        (_, result) => resolve(result),
        (_, err) => reject(err),
      )
    })
  })
  return promise
}