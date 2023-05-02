import { useContext, useEffect, useRef, useState } from 'react'
import { Dropdown, FontSelectorContainer } from './styles'
import ArrowDown from '../../../../assets/images/icon-arrow-down.svg'
import { DictionaryContext } from '../../../../contexts/DictionaryContext'

export function FontSelector() {
  const { fontType, setFontType } = useContext(DictionaryContext)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const ref = useRef<any>(null)

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setDropdownOpen(false)
      }
    }
    window.addEventListener('click', handleClickOutside)
    return () => {
      window.removeEventListener('click', handleClickOutside)
    }
  }, [ref])

  return (
    <FontSelectorContainer ref={ref}>
      <div onClick={() => setDropdownOpen(!dropdownOpen)}>
        <button aria-label="change_font_type">{fontType}</button>
        <img
          src={ArrowDown}
          alt=""
          className={dropdownOpen ? 'active_arrow' : 'disabled_arrow'}
        />
      </div>
      {dropdownOpen && (
        <Dropdown>
          <li className="sans" onClick={() => setFontType('Sans Serif')}>
            Sans Serif
          </li>
          <li className="serif" onClick={() => setFontType('Serif')}>
            Serif
          </li>
          <li className="mono" onClick={() => setFontType('Mono')}>
            Mono
          </li>
        </Dropdown>
      )}
    </FontSelectorContainer>
  )
}
