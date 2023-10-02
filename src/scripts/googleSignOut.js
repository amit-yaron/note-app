import { getAuth, signOut } from "firebase/auth"

const googleSignOut = () => {
    signOut(getAuth())
}

export default googleSignOut