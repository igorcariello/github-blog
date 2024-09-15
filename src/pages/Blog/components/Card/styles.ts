import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 100%;
  height: 16.25rem;

  padding: 2rem;

  border-radius: 10px;
  background: ${props => props.theme['blue-700']};

  > p {
    overflow: hidden;
    height: 6.7rem;


    color: ${props => props.theme['blue-300']};

    font-family: Nunito, sans-serif;
    line-height: 160%;
    font-size: 1rem;
  }

`

export const HeaderCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;


  > h2 {
    width: 100%;
    max-width: 17.6875rem;
    font-family: Nunito, sans-serif;
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 160%;

    margin-bottom: 1.25rem;


    color: ${props => props.theme['blue-100']};

  }

  > span {
    font-family: Nunito, sans-serif;
    font-size: 0.875rem;


    color: ${props => props.theme['blue-400']};
  }
`
