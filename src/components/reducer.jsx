export function reducer(state, action) {
  switch (action.type) {
    case "isLogged":
      return { ...state, isLogged: false };
    case "FirstName":
        return {...state,FirstName:action.payload} 
    case "LastName":
      return {...state, LastName: action.payload}; 
    case "Email":
      return {...state,Email:action.payload}   
    case "Password":
      return {...state,Password:action.payload} 
  }
}
