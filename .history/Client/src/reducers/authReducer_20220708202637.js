export const authReducer = (state, action) => {
  
  const { type, payload: { isAuthenticated, user} } = action
  
  
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
    {
    return state
    
  }
  
}

