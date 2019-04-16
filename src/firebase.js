import { initializeApp } from 'firebase'

const app = initializeApp({
  apiKey: "AIzaSyDZXaU_ng1zOu_HDyCJFc2CvriTzfSdv0I",
  authDomain: "big2tiny-38f5a.firebaseapp.com",
  databaseURL: "https://big2tiny-38f5a.firebaseio.com",
  projectId: "big2tiny-38f5a",
  storageBucket: "big2tiny-38f5a.appspot.com",
  messagingSenderId: "709284831928"
})

export const db = app.database()
export const namesRef = db.ref('names')
export const postsRef = db.ref('posts')
export const choresRef = db.ref('chores')
export const songsRef = db.ref('songs')
export const savedSongsRef = db.ref('savedSongs')
