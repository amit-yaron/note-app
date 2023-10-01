import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faUser } from '@fortawesome/free-regular-svg-icons'

function Navbar() {
    return (
        <div className="flex justify-between flex-row px-14 pt-6 wrap items-center">
            <h1 className="text-4xl font-black bg-gradient-to-r from-slate-600 to-gray-800 bg-clip-text text-transparent">Notes App</h1>

            <h1 className='text-2xl font-bold text-gray-700'>Hello, {"{name}"}</h1>
            <div className='flex flex-row justify-between space-x-4'>
                <FontAwesomeIcon icon={faMoon} size='2x' className='bg-gray-200 hover:bg-gray-400 p-4 rounded-full' />
                <FontAwesomeIcon icon={faUser} size='2x' className='bg-gray-200 hover:bg-gray-400 p-4 rounded-full' />
            </div>
        </div>
    )
}

export default Navbar