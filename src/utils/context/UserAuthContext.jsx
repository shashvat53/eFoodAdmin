import React, { createContext, useState } from 'react'
export const UserContext = createContext();

const Context = (props) => {
    const [isAuth, setIsAuth] = useState(true)
  return (
    <UserContext.Provider value={[isAuth, setIsAuth]}>
        {props.children}
    </UserContext.Provider>
  )
}

export default Context