import { Fetch_Post } from "../Action/ActionType"

const initialValues = {
    LoginData : []
}

const reducer = (state = initialValues, action) =>{
    switch(action.type){
        case Fetch_Post: return {...state, LoginData: action.payload}
        default: 
            return state
    }
}

export default reducer