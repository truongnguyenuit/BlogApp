export const authReducer = (state, action) => {
  
  const { type, payload: { isAuthenticated, user} } = action
  
  // console.log("inside reducer",isAuthenticated)
  switch (type) {
    case 'SET_AUTH': 
    {
      
      return {
        ...state,
        authLoading: false,
        isAuthenticated: true,
        user
      }
    }
    default: 
    {
      return state
    }
  }
  
}

