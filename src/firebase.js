import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDvIuvqadWTaPZ_ReaVi0yhdeIMTge9nsg",
  authDomain: "slack-clone-2c7bc.firebaseapp.com",
  projectId: "slack-clone-2c7bc",
  storageBucket: "slack-clone-2c7bc.appspot.com",
  messagingSenderId: "750191615651",
  appId: "1:750191615651:web:c4388faf2be0fe21a16916"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
