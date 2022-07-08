export const authReducer = (state, action) => {
  console.log("in running")
  const { type, payload: { isAuthenticated, user} } = action
  
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
}

