import { faPenToSquare, faXmarkCircle } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Note() {
    return (
        <div className="flex flex-col p-2 m-2 max-w-sm rounded-lg shadow-lg border-2 border-gray-400">
            <div className="flex flex-row justify-between items-center -mt-2">
                <h1 className="text-xl font-bold my-2">Header</h1>

                <div className="space-x-2">
                    <FontAwesomeIcon icon={faPenToSquare} />
                    <FontAwesomeIcon icon={faXmarkCircle} />
                </div>
            </div>
            <p className="text-base text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <div className="flex flex-row flex-wrap pt-4 space-x-1">
                <div className="inline-block bg-gray-200 rounded-full text-sm py-1 px-1.5 font-semibold text-gray-700">#important</div>
                <div className="inline-block bg-gray-200 rounded-full text-sm font-semibold py-1 px-1.5 text-gray-700">#italy</div>
                <div className="inline-block bg-gray-200 rounded-full text-sm font-semibold py-1 px-1.5 text-gray-700">#work</div>
            </div>
        </div>
    )
}

export default Note