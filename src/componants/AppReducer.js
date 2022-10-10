export default (state,action) => {
    switch (action.type){
        case 'REMOVE_USER':
            return {
                users:state.users.filter(
                    user => {return user.id !== action.payload}
                )
            }
        case "ADD_USER":
            return {
                users:[action.payload,...state.users]
            }
        case "EDIT_USER":
            const user_data = action.payload
            const updateUser = state.users.map(
                user => {
                    if (user.id === user_data.id){
                        return user_data
                    }
                    return user
                }
            )
            return {
                users: updateUser
            }
        default :
            return state
    }
}