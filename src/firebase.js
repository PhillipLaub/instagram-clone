import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBHgBLI_T779r6iehZlV8IQz-63g1mgUJ4",
  authDomain: "instagram-clone-c75fd.firebaseapp.com",
  projectId: "instagram-clone-c75fd",
  storageBucket: "instagram-clone-c75fd.appspot.com",
  messagingSenderId: "149579720005",
  appId: "1:149579720005:web:1d3f95c6f2d1a791710a2c",
  measurementId: "G-3DSM0W9YPY",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
