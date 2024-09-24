import styled from 'styled-components'

export const ContainerSearchForm = styled.form`

  > input {
    width: 100%;
    padding: 0.75rem 1rem;

    border-radius: 6px;
    border: 1px solid ${props => props.theme['blue-600']};
    background: ${props => props.theme['blue-1000']};
    
    color: ${props => props.theme['blue-100']};
    font-family: Nunito, sans-serif;

    margin-bottom: 3rem;

    &::placeholder{
      color: ${props => props.theme['blue-500']};
      font-family: Nunito, sans-serif;
    }
  }
`
