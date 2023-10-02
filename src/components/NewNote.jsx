import { faCircleCheck, faTrashCan } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { addDoc, collection } from "firebase/firestore"
import { useContext, useState } from "react"
import { DBContext } from "../firebase"
import { getAuth } from 'firebase/auth'

function NewNote() {
    const [currTag, setCurrTag] = useState('')
    const db = useContext(DBContext)

    const [mTitle, setMTitle] = useState('')
    const [mP, setMP] = useState('')
    const [tags, setTags] = useState([])

    const tagAdd = (e) => {
        if (e.key == 'Enter') {
            setTags(prevTags => [...prevTags, e.target.value])
            setCurrTag('')
        }
    }

    const addNote = async () => {
        await addDoc(collection(db, 'notes'), {
            title: mTitle,
            p: mP,
            tags: tags,
            uid: getAuth().currentUser.uid
        })
        window.location.reload()
    }

    const clearForm = () => {
        setTags([])
        setMP('')
        setMTitle('')
    }


    return (
        <div className="flex flex-col p-2 m-2 max-w-sm rounded-lg shadow-lg border-2 border-gray-400">
            <div className="flex flex-row justify-between items-center -mt-2">
                <input type="text" value={mTitle} onChange={e => setMTitle(e.target.value)} className="text-xl font-bold my-2 outline-none" placeholder="Your Title" />

                <div className="space-x-2">
                    <FontAwesomeIcon icon={faTrashCan} onClick={clearForm} />
                    <FontAwesomeIcon icon={faCircleCheck} onClick={addNote} />
                </div>
            </div>
            <textarea value={mP} onChange={e => setMP(e.target.value)} className="text-base outline-none text-gray-700" placeholder="Your Note" />

            <div className="flex flex-row flex-wrap pt-4 space-x-1">
                {
                    tags.map(tag => {
                        return <div key={tag} className="inline-block bg-gray-200 rounded-full text-sm font-semibold py-1 px-1.5">#{tag}</div>
                    })
                }
                <input placeholder="Add Tag" value={currTag} onChange={e => setCurrTag(e.target.value)} onKeyUp={tagAdd} className="inline-block outline-none bg-gray-200 w-28 rounded-full text-sm font-semibold py-1 pl-1.5" />
            </div>
        </div >
    )
}

export default NewNote