import { faRightToBracket, faMoon, faRightFromBracket, faPlus } from '@fortawesome/free-solid-svg-icons'
import NavbarButton from './NavbarButton'
import { useAuthState } from 'react-firebase-hooks/auth'
import { getAuth } from 'firebase/auth'
import googleSignIn from '../scripts/googleSignIn'
import googleSignOut from '../scripts/googleSignOut'

function Navbar() {
    const auth = getAuth()
    const [signedIn] = useAuthState(auth)

    return (
        <div className="flex justify-between flex-row lg:px-14 md:px-8 lg:pt-6 sm:pt-4 items-center">
            <h1 className="text-4xl font-black bg-gradient-to-r from-slate-600 to-gray-800 bg-clip-text text-transparent">Notes</h1>

            <div className='flex flex-row justify-between space-x-4'>
                <NavbarButton icon={faPlus} title='Create Note' />
                <NavbarButton icon={faMoon} title='Toggle Dark Mode' />

                {signedIn ? <NavbarButton icon={faRightFromBracket} title='Sign Out' onClick={googleSignOut} /> :
                    <NavbarButton icon={faRightToBracket} title='Sign In' onClick={googleSignIn} />}
            </div>
        </div>
    )
}

export default Navbar