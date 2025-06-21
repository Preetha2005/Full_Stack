import { createContext } from 'react'

export const InfoTextContext = createContext()

export const InfoProvider = ({ children }) => {
  const info = { name: 'Preetha', age: 25, city: 'Chennai' }
  return (
    <InfoTextContext.Provider value={info}>
      {children}
    </InfoTextContext.Provider>
  )
}

// Add this default export (example component)
export default function Infotext() {
  return <div>This is Infotext component.</div>
}