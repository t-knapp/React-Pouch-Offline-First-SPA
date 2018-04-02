
const initialGuestState = {
    guests: []
}
 
export default function GuestReducer(state = initialGuestState, action) {
    
    switch(action.type) {
        case "FETCH_GUESTLIST": {
            return {
                ...state,
                guests: state.guests.concat(action.payload)
            }
        }
        case "ADD_GUEST": {
            return {
                ...state,
                guests: [...state.guests, action.payload]
            }
        }
    }
    
    return state;
}
