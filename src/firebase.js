import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCThbm_9wfJyKrKH6P4O_glGaIG1jylHL4',
  authDomain: 'yarn-note-app.firebaseapp.com',
  projectId: 'yarn-note-app',
  storageBucket: 'yarn-note-app.appspot.com',
  messagingSenderId: '256826531601',
  appId: '1:256826531601:web:cd51e9f0dd3809a4b9f6b0',
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
