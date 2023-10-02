import { GoogleAuthProvider, getAuth, signInWithRedirect } from "firebase/auth";

const provider = new GoogleAuthProvider();

const googleSignIn = () => {
    signInWithRedirect(getAuth(), provider)
}

export default googleSignIn