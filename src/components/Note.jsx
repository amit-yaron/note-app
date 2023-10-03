import { faXmarkCircle } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { deleteDoc, doc } from "firebase/firestore"
import { useContext } from "react"
import { DBContext } from "../firebase"

function Note(props) {
    const db = useContext(DBContext)

    const deleteNote = async () => {
        const docRef = doc(db, "notes", props.id)
        await deleteDoc(docRef)

        window.location.reload()
    }


    return (
        <div className="flex flex-col p-2 m-2 rounded-lg shadow-lg bg-gray-50 h-min w-fit">
            <div className="flex flex-row justify-between items-center -mt-2">
                <h1 className="text-xl font-bold my-2">{props.title}</h1>

                <div className="space-x-2 pl-4">
                    <FontAwesomeIcon icon={faXmarkCircle} onClick={deleteNote} />
                </div>
            </div>

            <p className="text-base text-gray-700">{props.p}</p>

            <div className="flex flex-row flex-wrap pt-10">
                {props.tags.map(tag => {
                    return <div key={tag} className="bg-gray-200 shadow-md rounded-full text-sm font-semibold py-1 px-1.5 mt-2 mr-2">#{tag}</div>
                })}
            </div>
        </div>
    )
}

export default Note