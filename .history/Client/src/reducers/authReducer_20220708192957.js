export const authReducer = (state, action) => {
  console.log("in running 1")
  const { type, payload: { isAuthenticated, user} } = action
  console.log("in running 2")
  switch (type) {
    case 'SET_AUTH': 
      return {
        ...state,
        authLoading: false,
        isAuthenticated,
        user
      }
    default: 
    return state
  }
  console.log("in running 3")
}

