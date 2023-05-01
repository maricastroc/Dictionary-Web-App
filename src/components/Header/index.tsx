import { useContext, useEffect } from 'react'
import { DictionaryContext } from '../../contexts/DictionaryContext'
import { HeaderContainer, HeaderFeaturesContainer } from './styles'
import Logo from '../../assets/images/logo.svg'

import {
  BlackThemeMonospace,
  BlackThemeSansSerif,
  BlackThemeSerif,
} from '../../styles/themes/default'
import {
  LightThemeMonospace,
  LightThemeSansSerif,
  LightThemeSerif,
} from '../../styles/themes/LightTheme'
import { ThemeSwitcher } from './components/ThemeSwitcher'
import { FontSelector } from './components/FontSelector'

export interface ThemeProps {
  'main-font-color': string
  '2-font-color': string
  '3-font-color': string
  '4-font-color': string
  '5-font-color': string
  '6-font-color': string
  'search-color': string
  'spot-light-color': string
  'spot-dark-color': string
  'bg-color': string
  'error-color': string
  'font-family': string
}

interface HeaderProps {
  onChange: (theme: ThemeProps) => void
}

export function Header(props: HeaderProps) {
  const { fontType, currentTheme } = useContext(DictionaryContext)

  const themes: { [key: string]: ThemeProps } = {
    'Mono-dark': BlackThemeMonospace,
    'Sans Serif-dark': BlackThemeSansSerif,
    'Serif-dark': BlackThemeSerif,
    'Mono-light': LightThemeMonospace,
    'Sans Serif-light': LightThemeSansSerif,
    'Serif-light': LightThemeSerif,
  }

  const themeKey = `${fontType}-${currentTheme}`
  const actualTheme = themes[themeKey]

  useEffect(() => {
    props.onChange(actualTheme)
  }, [actualTheme, props])

  return (
    <>
      <HeaderContainer>
        <img src={Logo} alt="Logo" onClick={() => location.reload()} />
        <HeaderFeaturesContainer>
          <FontSelector />
          <span></span>
          <div>
            <ThemeSwitcher />
          </div>
        </HeaderFeaturesContainer>
      </HeaderContainer>
    </>
  )
}
