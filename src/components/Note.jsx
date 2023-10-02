import { faPenToSquare, faXmarkCircle } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Note(props) {
    return (
        <div className="flex flex-col p-2 m-2 max-w-sm rounded-lg shadow-lg border-2 border-gray-400">
            <div className="flex flex-row justify-between items-center -mt-2">
                <h1 className="text-xl font-bold my-2">{props.title}</h1>

                <div className="space-x-2">
                    <FontAwesomeIcon icon={faPenToSquare} />
                    <FontAwesomeIcon icon={faXmarkCircle} />
                </div>
            </div>
            <p className="text-base text-gray-700">{props.p}</p>n

            <div className="flex flex-row flex-wrap pt-4 space-x-1">
                {
                    props.tags.map(tag => {
                        return <div key={tag} className="inline-block bg-gray-200 rounded-full text-sm font-semibold py-1 px-1.5">#{tag}</div>
                    })
                }

            </div>
        </div>
    )
}

export default Note