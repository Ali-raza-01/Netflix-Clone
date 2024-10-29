import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";


const firebaseConfig = {
  apiKey: "AIzaSyAbbHzy8MDqi7wfyED4Hy5iCWrAbCkyIic",
  authDomain: "user-auth-fd886.firebaseapp.com",
  projectId: "user-auth-fd886",
  storageBucket: "user-auth-fd886.appspot.com",
  messagingSenderId: "1014457936333",
  appId: "1:1014457936333:web:352d07df2cb94cc602fc84",
  measurementId: "G-1RWQE3LFTZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, 'netflix'), {
      uid: user.uid,
      name,
      authProvider: 'local',
      email,
    })
    console.log('user added in db and auth ==>')
  } catch (err) {
    console.log(err)
    toast.error(err.code.split('/')[1].split('-').join(""));

  }
}


const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password)

  } catch (err) {
    console.log(err)
    toast.error(err.code.split('/')[1].split('-').join(""));


  }
}

const logout = () => {
  signOut(auth)
}

export { auth, db, signup, login, logout }