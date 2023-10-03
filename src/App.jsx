import { useAuthState } from "react-firebase-hooks/auth"
import Navbar from "./components/Navbar"
import Notes from './components/Notes'
import { getAuth } from "firebase/auth"


const App = () => {
    const [signedIn] = useAuthState(getAuth())

    return (
        <>
            <Navbar />
            {signedIn ? <Notes /> :
                <h1 className="text-center pt-12 text-3xl font-black">Sign in to use notes</h1>}
        </>
    )
}

export default App
