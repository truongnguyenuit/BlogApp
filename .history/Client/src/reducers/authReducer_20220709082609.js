export const authReducer = (state, action) => {
  
  const { type, payload: { isAuthenticated, user} } = action
  
  
  switch (type) {
    case 'SET_AUTH': 
    {
      console.log("inreducer",isAuthenticated)
      return {
        ...state,
        authLoading: false,
        isAuthenticated: true,
        user
      }
      
    }
    default: 
    {
      console.log('default')
      return state
    }
  }
  
}

