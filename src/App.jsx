import Navbar from "./components/Navbar"
import Note from "./components/Note"
import { DBContext } from './firebase'
import { useContext, useEffect, useState } from "react"
import { collection, getDocs } from "firebase/firestore";

const App = () => {
    const db = useContext(DBContext);
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const querySnapshot = await getDocs(collection(db, "notes"));
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
        <>
            <Navbar />

            <div className="flex flex-row justify-start pt-10 flex-wrap px-12">
                {notes.map((note) => (
                    <Note key={note.id} title={note.title} p={note.p} tags={note.tags} />
                ))}
            </div>
        </>
    )
}

export default App
