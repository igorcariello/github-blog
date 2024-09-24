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

    color:  ${props => props.theme['blue-300']};
    font-family: 'Nunito';
    
    p {
        margin: 0.5rem 0;
        text-align: justify;
    }

    ul, li {
        margin-left: 1.5rem;
        color: ${(props) => props.theme['gray-700']};
        display: block;
    }
    
    a {
        color: ${props => props.theme['blue-base']};
        
    }
    
    code {
        width: 100%;
        display: block;
        background: ${(props) => props.theme['blue-700']};
        padding: 1rem;
        margin: 1rem 0;
        border-radius: 4px;
        font-family: 'Fire Code', Courier, monospace;
        line-height: 100%;
    }
`
