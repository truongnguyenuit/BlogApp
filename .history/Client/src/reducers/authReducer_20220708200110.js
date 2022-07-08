export const authReducer = (state, action) => {
  
  const { type, payload: { isAuthenticated, user} } = action
  console.log("in running 2")
  
  switch (type) {
    case 'SET_AUTH': 
    {
      console.log("settttt")
      return {
        ...state,
        authLoading: false,
        isAuthenticated,
        user
      }
      
    }
    default: 
    return state
  }
  
}

