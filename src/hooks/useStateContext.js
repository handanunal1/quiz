import React, { createContext } from 'react'

const stateContext = createContext();

export default function useStateContext(props) {
  return (
    <div>ContextProvider</div>
  )
}
