import React, { useEffect, useState } from "react"
import { icons, invocations } from "../data/invocations"
import {
    calculateRaidLevel,
    calculateNewActivatedInvocations,
} from "../data/utils"
import Invocation from "./invocation"

const InvocationList = ({ setRaidLevel }) => {
    const [activeInvocations, setActiveInvocations] = useState({})

    const toggleInvocation = name => {
        setActiveInvocations(calculateNewActivatedInvocations(name))
    }

    useEffect(() => {
        setRaidLevel(calculateRaidLevel(activeInvocations))
    }, [activeInvocations])

    return (
        <div className="invocationList">
            {Object.keys(invocations).map((name, index) => {
                const item = invocations[name]
                return (
                    <Invocation
                        key={index}
                        name={name}
                        icon={icons[item.category]}
                        raidLevelModifier={item.raidLevelModifier}
                        active={activeInvocations[name]}
                        toggle={toggleInvocation}
                    />
                )
            })}
        </div>
    )
}

export default InvocationList
