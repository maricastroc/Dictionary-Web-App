import styled from 'styled-components'

export const ThemeSwitcherContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  div {
    position: relative;
    width: 2.5rem;
    height: 1.25rem;
    background-color: transparent;
  }

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${(props) => props.theme['spot-light-color']};
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 34px;

    &:before {
      position: absolute;
      content: '';
      height: 0.9rem;
      width: 0.9rem;
      left: 4px;
      bottom: 3px;
      background-color: ${(props) => props.theme['main-font-color']};
      -webkit-transition: 0.4s;
      transition: 0.4s;
      border-radius: 50%;
      transform: translateX(0);
    }
  }

  .checkedSwitcher:before {
    background-color: #f1f3fa;
    -webkit-transform: translateX(1.2rem);
    -ms-transform: translateX(1.2rem);
    transform: translateX(1.2rem);
  }

  .checkedSwitcher {
    background-color: ${(props) => props.theme['4-font-color']};
  }

  .uncheckedSwitcher:before {
    background-color: #f1f3fa;
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
  }

  .light_moon {
    cursor: pointer;
    color: ${(props) => props.theme['3-font-color']};
    transition: color 300ms;

    &:hover {
      color: ${(props) => props.theme['spot-light-color']};
    }
  }

  .dark_moon {
    cursor: pointer;
    color: ${(props) => props.theme['spot-light-color']};
    transition: color 300ms;

    &:hover {
      color: ${(props) => props.theme['3-font-color']};
    }
  }

  @media (min-width: 768px) {
    gap: 1.25rem;
  }
`
