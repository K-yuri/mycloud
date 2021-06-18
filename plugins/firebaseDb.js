import firebase from 'firebase/app';
import 'firebase/database';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyDVPerHjZIJeBli_U_naMrf4mRig8qsT3I',
    authDomain: 'cloud-clothes.firebaseapp.com',
    databaseURL: 'https://cloud-clothes-default-rtdb.firebaseio.com',
    projectId: 'cloud-clothes',
    storageBucket: 'cloud-clothes.appspot.com',
    messagingSenderId: '371062655392',
    appId: '1:371062655392:web:2fb3438a59030dd439fcc5',
    measurementId: 'G-PCNMMGQ2P0',
};

if (firebase.apps.length == 0) firebase.initializeApp(firebaseConfig);
export default firebase.database();