const initialState = {
    guests: [
        {
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
        }
    ]
}
 
function Reducer(state = initialState, action) {
    if (typeof state === 'undefined') {
        return initialState
    }
     
    // For now, don't handle any actions
    // and just return the state given to us.
    return state
}

export default Reducer;