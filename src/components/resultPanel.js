import React from "react"
import { icons } from "../data/raidLevel"

const getIconFor = raidLevel => {
    if (raidLevel < 150) return icons.beginner
    if (raidLevel >= 300) return icons.expert
    return icons.normal
}

const ResultPanel = ({ raidLevel }) => {
    return (
        <div className="resultPanel">
            <h1>Raid Level</h1>
            <h2>{raidLevel}</h2>
            <img src={getIconFor(raidLevel)} className="icon" />
        </div>
    )
}

export default ResultPanel
