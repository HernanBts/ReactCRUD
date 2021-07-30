import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCe_DLHxqC_IwiGx0htRB2epfmhV7vfRBw",
    authDomain: "react-native-crud-ffd0e.firebaseapp.com",
    projectId: "react-native-crud-ffd0e",
    storageBucket: "react-native-crud-ffd0e.appspot.com",
    messagingSenderId: "193383284843",
    appId: "1:193383284843:web:b30f3ceee8771de3bf712e"
  }

  export const firebaseApp = firebase.initializeApp(firebaseConfig)