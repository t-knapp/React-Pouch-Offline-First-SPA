import _ from 'lodash';

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
        case "DEL_GUEST": {
            return {
                ...state,
                guests: _.filter(state.guests, function(guestItem) {
                    return guestItem.guestId !== action.payload;
                })
            }
        }
    }
    
    return state;
}
