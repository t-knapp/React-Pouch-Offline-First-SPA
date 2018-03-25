const initialState = {
    guests: [
        {
            guestId: 123,
            name: "Name",
            lastname: "Lastname",
            section: "Süd",
            state: "Waiting"
        }
    ]
}
 
function Model(state, action) {
    if (typeof state === 'undefined') {
        return initialState
    }
     
    // For now, don't handle any actions
    // and just return the state given to us.
    return state
}

export default Model;