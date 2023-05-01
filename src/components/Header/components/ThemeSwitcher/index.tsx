import { useContext, useState } from 'react'
import { ThemeSwitcherContainer } from './styles'
import { DictionaryContext } from '../../../../contexts/DictionaryContext'
import { Moon } from 'phosphor-react'

export function ThemeSwitcher() {
  const { currentTheme, setCurrentTheme } = useContext(DictionaryContext)
  const [switcherIsChecked, setSwitcherIsChecked] = useState(false)

  function handleThemeSwitcher() {
    setSwitcherIsChecked(!switcherIsChecked)
    currentTheme === 'light'
      ? setCurrentTheme('dark')
      : setCurrentTheme('light')
  }

  return (
    <ThemeSwitcherContainer onClick={handleThemeSwitcher}>
      <div>
        <input></input>
        <span
          className={
            switcherIsChecked ? 'checkedSwitcher' : 'uncheckedSwitcher'
          }
        ></span>
      </div>
      <Moon
        size={26}
        className={currentTheme === 'light' ? 'light_moon' : 'dark_moon'}
        onClick={handleThemeSwitcher}
      />
    </ThemeSwitcherContainer>
  )
}
