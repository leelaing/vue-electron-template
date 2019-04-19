import { initializeApp } from 'firebase'

const app = initializeApp({
  apiKey: "AIzaSyDZXaU_ng1zOu_HDyCJFc2CvriTzfSdv0I",
  authDomain: "big2tiny-38f5a.firebaseapp.com",
  databaseURL: "https://big2tiny-38f5a.firebaseio.com",
  projectId: "big2tiny-38f5a",
  storageBucket: "big2tiny-38f5a.appspot.com",
  messagingSenderId: "709284831928"
})

app.firestore().enablePersistence()
  .catch(function (err) {
    if (err.code == 'failed-precondition') {
      // Multiple tabs open, persistence can only be enabled
      // in one tab at a a time.
      // ...
    } else if (err.code == 'unimplemented') {
      // The current browser does not support all of the
      // features required to enable persistence
      // ...
    }
  })

export const auth = app.auth()
export const rtdb = app.database()
export const db = app.firestore()
