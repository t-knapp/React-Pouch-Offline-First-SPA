function r() {
    return Math.floor(Math.random() * 1000000);
}

export function fetchGuestList() {
    return {
        type: "FETCH_GUESTLIST",
        payload: [{
            guestId: r(),
            name: "Name",
            lastname: "Lastname",
            section: "Süd",
            state: "Waiting"
        },
        {
            guestId: r(),
            name: "Telang",
            lastname: "Mona",
            section: "Nord",
            state: "Waiting"
        }]
    }
}

export function addGuest(newGuest) {
    return {
        type: "ADD_GUEST",
        payload: newGuest
    }
}

export function deleteGuest(guestId) {
    return {
        type: "DEL_GUEST",
        payload: guestId
    }
}