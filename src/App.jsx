import Navbar from "./components/Navbar"
import Note from "./components/Note"

function App() {

    return (
        <>
            <Navbar />

            <div className="flex flex-row justify-start pt-10 flex-wrap px-12">
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />

            </div>
        </>
    )
}

export default App
