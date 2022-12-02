import { useEffect, useState } from "react"
import "./App.css"
import InvocationList from "./components/invocationList"
import ResultPanel from "./components/resultPanel"

function App() {
    const [raidLevel, setRaidLevel] = useState(0)

    return (
        <div className="App">
            <header className="App-header">
                <InvocationList setRaidLevel={setRaidLevel} />
                <ResultPanel raidLevel={raidLevel} />
            </header>
        </div>
    )
}

export default App
