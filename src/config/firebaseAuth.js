import firebaseApp from "./firebaseConfig";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { getSingleDoc } from "./firebaseFirestore";

const auth = getAuth(firebaseApp);
auth.languageCode = "en";

const firebaseLogin = async (email, password) => {
  try {
    let userCredentials = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    let user = userCredentials.user;
    return user;
  } catch (error) {
    console.log("ERROR IN LOGIN : " + error);
  }
};

const firebaseLogout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.log("Error in logging out ", error);
    window.alert("Something went wrong, Please try again later !");
  }
};

const firebaseGetUser = async (updateUser, setLoading) => {
  try {
    const auth = getAuth();
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        let details = await getSingleDoc("eventsUsers2023", user.uid);
        if (!details) {
          details = null;
        }
        updateUser({ user, details });
      }
      setLoading(false);
    });
  } catch (error) {
    console.log("ERROR IN Fetching user: " + error);
  }
};

export { firebaseLogin, firebaseLogout, firebaseGetUser };
