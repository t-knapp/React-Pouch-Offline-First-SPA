
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
        default:
    }
    
    return state;
}
