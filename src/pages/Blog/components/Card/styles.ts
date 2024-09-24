import styled from 'styled-components'

export const CardContainer = styled.a`
  display: flex;
  flex-direction: column;
  
  width: 100%;
  max-width: 26rem;
  height: 16.25rem;

  padding: 2rem 2rem 0 2rem;

  border-radius: 10px;
  background: ${props => props.theme['blue-700']};

  &:hover{
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['blue-500']};
  }  

  > p {
    overflow: hidden;
    max-height: 6.7rem;
    margin-bottom: 2rem;

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
    overflow: hidden;
    max-height: 6.7rem;

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
