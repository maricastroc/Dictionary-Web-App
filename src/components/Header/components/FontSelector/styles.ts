import styled from 'styled-components'

export const FontSelectorContainer = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  position: relative;

  .selector_container {
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  button {
    cursor: pointer;
    position: relative;
    font-size: 0.875rem;
    background-color: transparent;
    color: ${(props) => props.theme['main-font-color']};
    font-family: ${(props) => props.theme['font-family']};
    font-weight: bold;
    border: transparent;

    &:focus {
      box-shadow: none;
    }
  }

  img {
    cursor: pointer;
    margin-left: 0.5rem;
  }

  @media (min-width: 768px) {
    button {
      font-size: 1.125rem;
    }

    img {
      margin-left: 1rem;
    }
  }
`

export const Dropdown = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  text-align: left;
  top: 2rem;
  left: -2rem;
  width: 7rem;
  height: auto;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 5px 20px ${(props) => props.theme['spot-light-color']};
  background-color: ${(props) => props.theme['search-color']};

  .sans {
    text-align: left;
    font-family: 'Inter', sans-serif;
  }
  .serif {
    font-family: 'Lora', serif;
  }
  .mono {
    font-family: 'Inconsolata', monospace;
  }

  li {
    cursor: pointer;
    color: ${(props) => props.theme['main-font-color']};
    font-size: 0.85rem;
    list-style: none;
    font-weight: bold;

    &:hover {
      color: ${(props) => props.theme['spot-light-color']};
    }

    &:checked {
      color: ${(props) => props.theme['spot-light-color']};
    }
  }

  @media (min-width: 768px) {
    left: -1rem;
    top: 2.5rem;
    gap: 1rem;
    padding: 1.2rem;
    width: 9rem;

    li {
      font-size: 1rem;
    }
  }
`
