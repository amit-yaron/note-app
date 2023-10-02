import { useAuthState } from "react-firebase-hooks/auth"
import Navbar from "./components/Navbar"
import Notes from './components/Notes'
import { getAuth } from "firebase/auth"


const App = () => {
    const [signedIn] = useAuthState(getAuth())

    return (
        <>
            <Navbar />
            {signedIn ? <Notes /> : <></>}
        </>
    )
}

export default App
