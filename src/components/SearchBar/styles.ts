import styled from 'styled-components'

export const SearchBarContainer = styled.div`
  margin-top: 2rem;

  &:focus-within {
    .invalid_form {
      border-color: ${(props) => props.theme['error-color']};
    }
  }

  &:focus-within {
    .valid_form {
      border-color: ${(props) => props.theme['spot-light-color']};
    }
  }

  .valid_form,
  .invalid_form {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0.875rem 1.5rem;
    background-color: ${(props) => props.theme['search-color']};
    border: 2px solid transparent;
    border-radius: 12px;
  }

  .invalid_form {
    border-color: ${(props) => props.theme['error-color']};
  }

  input {
    width: 85%;
    font-family: ${(props) => props.theme['font-family']};
    font-size: 1rem;
    font-weight: bold;
    background-color: transparent;
    color: ${(props) => props.theme['main-font-color']};
    border: none;
    outline: none;
    box-shadow: none;
  }

  button {
    background-color: transparent;
    border: none;
  }

  .icon {
    color: ${(props) => props.theme['spot-light-color']};
    align-self: flex-end;

    &:hover {
      color: ${(props) => props.theme['spot-dark-color']};
    }
  }

  @media (min-width: 768px) {
    margin-top: 3.125rem;

    .valid_form,
    .invalid_form {
      padding: 1.3rem 1.5rem;
    }

    input {
      font-size: 1.25rem;
    }
  }
`

export const Error = styled.div`
  p {
    margin-top: 0.5rem;
    margin-left: 0.5rem;
    font-size: 1rem;
    color: ${(props) => props.theme['error-color']};
  }

  @media (min-width: 768px) {
    p {
      margin-top: 0.75rem;
      font-size: 1.1rem;
      color: ${(props) => props.theme['error-color']};
    }
  }
`
