const icons = {
    attempts:
        "https://oldschool.runescape.wiki/images/Invocations_-_attempts_icon.png?40250",
    timeLimit:
        "https://oldschool.runescape.wiki/images/Invocations_-_time_limit_icon.png?71b8d",
    helpfulSpirit:
        "https://oldschool.runescape.wiki/images/Invocations_-_helpful_spirit_icon.png?4b067",
    paths: "https://oldschool.runescape.wiki/images/Invocations_-_Walk_the_Path_icon.png?42fdf",
    pathLevel:
        "https://oldschool.runescape.wiki/images/Invocations_-_path_level_up_icon.png?4b067",
    prayer: "https://oldschool.runescape.wiki/images/Invocations_-_prayer_effectiveness_icon.png?42fdf",
    restorationFood:
        "https://oldschool.runescape.wiki/images/Invocations_-_On_a_Diet_icon.png?4b067",
    restorationPotion:
        "https://oldschool.runescape.wiki/images/Invocations_-_Dehydration_icon.png?4b067",
    restorationEnergy:
        "https://oldschool.runescape.wiki/images/Invocations_-_Overly_Draining_icon.png?4b067",
    kephri: "https://oldschool.runescape.wiki/images/Kephri_icon.png?0bd3f",
    zebak: "https://oldschool.runescape.wiki/images/Zebak_icon.png?7d15e",
    akkha: "https://oldschool.runescape.wiki/images/Akkha_icon.png?7d15e",
    baba: "https://oldschool.runescape.wiki/images/Ba-Ba_icon.png?0bd3f",
    wardens:
        "https://oldschool.runescape.wiki/images/Tumeken%27s_Warden_icon.png?d482b",
}

const categoriesWithOnlyOneActive = [
    "attempts",
    "timeLimit",
    "helpfulSpirit",
    "pathLevel",
]

const invocations = {
    "Try Again": {
        category: "attempts",
        raidLevelModifier: 5,
    },
    Persistence: {
        category: "attempts",
        raidLevelModifier: 10,
    },
    "Softcore Run": {
        category: "attempts",
        raidLevelModifier: 15,
    },
    "Hardcore Run": {
        category: "attempts",
        raidLevelModifier: 25,
    },
    "Walk for It": {
        category: "timeLimit",
        raidLevelModifier: 10,
    },
    "Jog for It": {
        category: "timeLimit",
        raidLevelModifier: 15,
    },
    "Run for It": {
        category: "timeLimit",
        raidLevelModifier: 20,
    },
    "Sprint for It": {
        category: "timeLimit",
        raidLevelModifier: 25,
    },
    "Need Some Help?": {
        category: "helpfulSpirit",
        raidLevelModifier: 15,
    },
    "Need Less Help?": {
        category: "helpfulSpirit",
        raidLevelModifier: 25,
    },
    "No Help Needed": {
        category: "helpfulSpirit",
        raidLevelModifier: 40,
    },
    "Walk the Path": {
        category: "paths",
        raidLevelModifier: 50,
    },
    Pathseeker: {
        category: "pathLevel",
        raidLevelModifier: 15,
    },
    Pathfinder: {
        category: "pathLevel",
        raidLevelModifier: 40,
    },
    Pathmaster: {
        category: "pathLevel",
        raidLevelModifier: 50,
    },
    "Quiet Prayers": {
        category: "prayer",
        raidLevelModifier: 20,
    },
    "Deadly Prayers": {
        category: "prayer",
        raidLevelModifier: 20,
    },
    "On a Diet": {
        category: "restorationFood",
        raidLevelModifier: 15,
    },
    Dehydration: {
        category: "restorationPotion",
        raidLevelModifier: 30,
    },
    "Overly Draining": {
        category: "restorationEnergy",
        raidLevelModifier: 15,
    },
    "Lively Larvae": {
        category: "kephri",
        raidLevelModifier: 5,
    },
    "More Overlords": {
        category: "kephri",
        raidLevelModifier: 15,
    },
    "Blowing Mud": {
        category: "kephri",
        raidLevelModifier: 10,
    },
    "Medic!": {
        category: "kephri",
        raidLevelModifier: 15,
    },
    "Aerial Assault": {
        category: "kephri",
        raidLevelModifier: 10,
    },
    "Not Just a Head": {
        category: "zebak",
        raidLevelModifier: 15,
    },
    "Arterial Spray": {
        category: "zebak",
        raidLevelModifier: 10,
    },
    "Blood Thinners": {
        category: "zebak",
        raidLevelModifier: 5,
    },
    "Upset Stomach": {
        category: "zebak",
        raidLevelModifier: 15,
    },
    "Double Trouble": {
        category: "akkha",
        raidLevelModifier: 20,
    },
    "Keep Back": {
        category: "akkha",
        raidLevelModifier: 10,
    },
    "Stay Vigilant": {
        category: "akkha",
        raidLevelModifier: 15,
    },
    "Feeling Special?": {
        category: "akkha",
        raidLevelModifier: 20,
    },
    "Mind the Gap!": {
        category: "baba",
        raidLevelModifier: 10,
    },
    "Gotta Have Faith": {
        category: "baba",
        raidLevelModifier: 10,
    },
    "Jungle Japes": {
        category: "baba",
        raidLevelModifier: 5,
    },
    "Shaking Things Up": {
        category: "baba",
        raidLevelModifier: 10,
    },
    Boulderdash: {
        category: "baba",
        raidLevelModifier: 10,
    },
    "Ancient Haste": {
        category: "wardens",
        raidLevelModifier: 10,
    },
    Acceleration: {
        category: "wardens",
        raidLevelModifier: 10,
    },
    Penetration: {
        category: "wardens",
        raidLevelModifier: 10,
    },
    Overclocked: {
        category: "wardens",
        raidLevelModifier: 10,
    },
    "Overclocked 2": {
        category: "wardens",
        raidLevelModifier: 10,
    },
    Insanity: {
        category: "wardens",
        raidLevelModifier: 50,
    },
}

export { icons, invocations, categoriesWithOnlyOneActive }
