import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
const firebaseConfig = {
  apiKey: 'AIzaSyAxrJ-29s7cR3I6xtGN5Djmbq1QAIxp-n0',
  authDomain: 'movie-web-54dbd.firebaseapp.com',
  projectId: 'movie-web-54dbd',
  storageBucket: 'movie-web-54dbd.firebasestorage.app',
  messagingSenderId: '250767173486',
  appId: '1:250767173486:web:7c94d1e7dd1baaad20037f',
  measurementId: 'G-K9R357SJZ5'
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)