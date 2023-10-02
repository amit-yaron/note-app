import Note from "./Note"
import { DBContext } from '../firebase'
import { useContext, useEffect, useState } from "react"
import { collection, query, where, getDocs } from "firebase/firestore";
import NewNote from "./NewNote";
import { getAuth } from "firebase/auth";

function Notes() {
    const db = useContext(DBContext);
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const querySnapshot = await getDocs(query(collection(db, "notes")), where("uid", "==", getAuth().currentUser.uid))
            const notesData = [];
            querySnapshot.forEach((doc) => {
                notesData.push({
                    id: doc.id,
                    title: doc.get('title'),
                    p: doc.get('p'),
                    tags: doc.get('tags'),
                });
            });
            setNotes(notesData);
        };

        fetchData();
    }, [db])

    return (
        <div className="flex flex-row justify-start pt-10 flex-wrap px-12">
            <NewNote />
            {notes.map((note) => (
                <Note key={note.id} title={note.title} p={note.p} tags={note.tags} />
            ))}
        </div>
    )
}

export default Notes