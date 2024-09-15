import styled from 'styled-components'

export const PostContainer = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
  

    margin: -5.5rem auto 14rem;
    padding: 0 18rem;

`
export const ContentPost = styled.div`
    padding: 2.5rem 2rem;

    > p {
        font-family: Nunito, sans-serif;
        font-weight: 400;
        line-height: 160%;

        color: ${props => props.theme['blue-300']};
    }
`
