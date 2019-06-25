import Firebase from 'firebase';
let config = {
    apiKey: "AIzaSyA_yA2APEx8E7WdgJlUlyEzYdLNciBGRt4",
    authDomain: "ckpro-e2ce8.firebaseapp.com",
    databaseURL: "https://ckpro-e2ce8.firebaseio.com",
    projectId: "ckpro-e2ce8",
    storageBucket: "ckpro-e2ce8.appspot.com",
    messagingSenderId: "47779657362",
    appId: "1:47779657362:web:8d4b11c6e33fadc4"
}
let app = Firebase.initializeApp(config);
export const firebaseDb = app.database();