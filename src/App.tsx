import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/global'
import { BlackThemeMonospace } from './styles/themes/default'

import { Dictionary } from './pages/Dictionary'
import { DictionaryContextProvider } from './contexts/DictionaryContext'
import { ThemeProps } from './components/Header'

export function App() {
  const [actualTheme, setActualTheme] = useState(BlackThemeMonospace)

  function ChangeActualTheme(theme: ThemeProps) {
    setActualTheme(theme)
  }

  return (
    <>
      <ThemeProvider theme={actualTheme}>
        <DictionaryContextProvider>
          <Dictionary onChangeTheme={ChangeActualTheme} />
        </DictionaryContextProvider>
        <GlobalStyles />
      </ThemeProvider>
    </>
  )
}
