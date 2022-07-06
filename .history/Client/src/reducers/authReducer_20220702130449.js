


export const authReducer = (state, action) => {
  const {
    type, 
    payload} = action

  switch (type) {
    case 'SET AUTH': 
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