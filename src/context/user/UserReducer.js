const UserReducer = (state, action) => {
    switch(action.type){
        case "GET_USERS":
            return {
                ...state,
                users: action.payload,
                pending: false,
                error: false
            }
        case "GET_USER":
            return{
                ...state,
                user: action.payload,
                pending: false,
                error: false
            }
        case "SET_LOADING":
            return {
                ...state,
                pending: true
            }
        case "CLEAR_USERS":
            return{
                ...state,
                users: null
            }
        case "FAIL_USERS":
            return {
                ...state,
                users: null,
                pending: false,
                error: true
            }
        default: 
            return state
    }
}

export default UserReducer;