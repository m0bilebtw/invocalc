import { invocations } from "./invocations"
import { categoriesWithOnlyOneActive } from "./invocations"

const calculateRaidLevel = activeInvocations => {
    return Object.keys(activeInvocations)
        .filter(key => activeInvocations[key])
        .map(key => invocations[key].raidLevelModifier)
        .reduce((accumulator, current) => accumulator + current, 0)
}

const calculateNewActivatedInvocations = name => {
    return current => {
        const newState = { ...current }
        const invocationToActivate = invocations[name]
        if (
            categoriesWithOnlyOneActive.includes(invocationToActivate.category)
        ) {
            Object.keys(invocations)
                .filter(
                    key =>
                        invocations[key].category ===
                        invocationToActivate.category
                )
                .forEach(key => (newState[key] = false))
        }
        newState[name] = !current[name]
        return newState
    }
}

export { calculateRaidLevel, calculateNewActivatedInvocations }
