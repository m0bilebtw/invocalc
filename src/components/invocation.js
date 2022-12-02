import React from "react"

const Invocation = ({ name, icon, raidLevelModifier, active, toggle }) => {
    const toggleThisInvo = () => {
        toggle(name)
    }

    return (
        <div
            className={`invocation ${active ? "active" : ""}`}
            onClick={toggleThisInvo}>
            <img src={icon} className="icon" />
            <h3 className="name">{name}</h3>
            <h4 className="modifier">{raidLevelModifier}</h4>
        </div>
    )
}

export default Invocation
