import { createContext, useState } from "react";

export const Searchcontex = createContext()


export function SearchcontexProvider({ children }) {
  const [search, setsearch] = useState("")
  
  const updatesearchvalue = (value) => {
    setsearch(value)
  }
  
  return <Searchcontex.Provider value={{ search, updatesearchvalue }}>{children}</Searchcontex.Provider>
}