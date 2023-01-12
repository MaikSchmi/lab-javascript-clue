// ITERATION 1

// Suspects Array

const suspectsArray = [
    {
        firstName: "Maik",
        lastName: "Schmidt",
        occupation: "Student",
        age: 31,
        description: "Currently doing an Ironhack Bootcamp in Web Development. Likes Pingpong.",
        image: "<InsertImageHere>",
        color: "Black"
    },
    {
        firstName: "Andy",
        lastName: "Schmidt",
        occupation: "Caretaker",
        age: 34,
        description: "Amazing description",
        image: "<InsertImageHere>",
        color: "Blue"
    },
    {
        firstName: "Anita",
        lastName: "Schmidt",
        occupation: "Caretaker",
        age: 28,
        description: "Even amazinger description",
        image: "<InsertImageHere>",
        color: "Yellow"
    },
    {
        firstName: "Luciana",
        lastName: "Dall'Agnol",
        occupation: "Pet Sitter",
        age: 36,
        description: "Loves cats, pizza and fries",
        image: "<InsertImageHere>",
        color: "Orange"
    },
    {
        firstName: "David",
        lastName: "Gallego Martinez",
        occupation: "None",
        age: 31,
        description: "Travelling through the world, not caring about anything.",
        image: "<InsertImageHere>",
        color: "Red"
    },
    {
        firstName: "Christopher",
        lastName: "Sommer",
        occupation: "Something For Sure",
        age: 31,
        description: "Austrian. Lives healthy now.",
        image: "<InsertImageHere>",
        color: "Green"
    },
];

// Weapons Array

const weaponsArray = [
    {
        name: "Gun",
        weight: 5
    },
    {
        name: "Knife",
        weight: 1
    },
    {
        name: "Machete",
        weight: 3
    },
    {
        name: "Candlestick",
        weight: 2.5
    },
    {
        name: "Fist",
        weight: 0
    },
    {
        name: "Lamp",
        weight: 4
    },
    {
        name: "Magic Wand",
        weight: 1
    },
    {
        name: "Morning Star",
        weight: 10
    },
    {
        name: "Chainsaw",
        weight: 15
    }
];

// Rooms Array

const roomsArray = [
    {
        name: "Living Room"
    },
    {
        name: "Bedroom"
    },
    {
        name: "Kitchen"
    },
    {
        name: "Bathroom"
    },
    {
        name: "Basement"
    },
    {
        name: "Attic"
    },
    {
        name: "Lobby"
    },
    {
        name: "Hobby Room"
    },
    {
        name: "Secret Room"
    },
    {
        name: "Office"
    },
    {
        name: "Gallery"
    },
    {
        name: "Play Room"
    },
    {
        name: "Man Cave"
    },
    {
        name: "Laundry Room"
    },
    {
        name: "Museum"
    },
];



// ITERATION 2

function selectRandom(arr) {
    return arr[Math.floor(Math.random()*arr.length)];
}

function pickMystery() {
    return mystery = {
        suspect: selectRandom(suspectsArray),
        weapon: selectRandom(weaponsArray),
        room: selectRandom(roomsArray)
    };
}


// ITERATION 3

function revealMystery(arr) {
    return `${arr.suspect.firstName} ${arr.suspect.lastName} killed Mr. Boddy using the ${arr.weapon.name} in the ${arr.room.name}!`;
}

