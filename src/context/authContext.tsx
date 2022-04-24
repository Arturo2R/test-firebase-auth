import React,{Children, createContext, ReactNode, useContext} from 'react'

export const authContext = createContext();

interface propos {
  children: ReactNode
}

export const useAuth = () => {
  const context = useContext(authContext)
  return context
}
export function AuthProvider({children}:propos){

  const user = {
    login: true,
  }
  
  return(
    <authContext.Provider value={{user}}>
      {children}
    </authContext.Provider>
  )
}

