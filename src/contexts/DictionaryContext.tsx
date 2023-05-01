import { createContext, ReactNode, useState } from 'react'

export const DictionaryContext = createContext({} as any)

interface DictionaryContextProviderProps {
  children: ReactNode
}

export function DictionaryContextProvider({
  children,
}: DictionaryContextProviderProps) {
  const [fontType, setFontType] = useState('Mono')
  const [currentTheme, setCurrentTheme] = useState('dark')

  return (
    <DictionaryContext.Provider
      value={{
        fontType,
        setFontType,
        currentTheme,
        setCurrentTheme,
      }}
    >
      {children}
    </DictionaryContext.Provider>
  )
}
