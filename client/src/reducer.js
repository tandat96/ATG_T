import {
    ADD,
    GETS,
    DELETE,
    UPDATE,
    LOADS,
    COMPLETE
} from './constants'


const initialState = {
    loading: false,
    profiles: [],
    
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GETS:
            return {
                ...state,
                loading: false,
                profiles: action.payload
            }
        
        case ADD:
            return {
                ...state,
                profiles: [action.payload, ...state.profiles]
            }
        case DELETE:
            return {
                ...state,
                profiles: state.profiles.filter(profile => profile._id !== action.payload)
            }
        case UPDATE:
            return {
                ...state,
                profiles: state.profiles.map(profile => {
                    if(profile._id !== action.payload._id)  {
                       return profile
                    }
                    console.log(action.payload);
                    return action.payload
                   })
            }
        
        case COMPLETE:
            return {
                ...state,
                profiles: state.profiles.map(profile =>{
                        if(profile._id !== action.payload){
                            return {
                                ...profile,
                                isCompleted:false
                            }
                        }
                        return {
                            ...profile,
                            isCompleted: !profile.isCompleted
                        }
                })
            }
        case LOADS:
            return {
                ...state,
                loading: true
            }
        default:
            return state
    }
}