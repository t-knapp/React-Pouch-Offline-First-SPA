export function fetchGuestList() {
    return {
        type: "FETCH_GUESTLIST",
        payload: [{
            guestId: 123,
            name: "Name",
            lastname: "Lastname",
            section: "Süd",
            state: "Waiting"
        },
        {
            guestId: 443,
            name: "Telang",
            lastname: "Mona",
            section: "Nord",
            state: "Waiting"
        }]
    }
}

export function addGuest() {
    return {
        type: "ADD_GUEST",
        payload: {
            guestId: 332,
            name: "Add",
            lastname: "Add+Mona",
            section: "Nord",
            state: "Waiting"
        }
    }
}