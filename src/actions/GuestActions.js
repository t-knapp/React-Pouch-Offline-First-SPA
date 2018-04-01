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