import { useContext, useEffect } from 'react'
import { Header } from '../../components/Header'
import { Title } from './components/Title'
import { ContentPost, PostContainer } from './styles'
import { DataContext } from '../../contexts/DataContexts'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export function Post() {
  const { issueSelected, loadIssueSelected } = useContext(DataContext)

  useEffect(() => {
    if (issueSelected) {
      const issueSelectedJSON = JSON.stringify(issueSelected)
      console.log('Salvando issue selecionada no localStorage', issueSelected)
      localStorage
        .setItem('@github-blog:issueSelected-1.0.0', issueSelectedJSON)
    }
  }, [issueSelected])

  useEffect(() => {
    console.log('Valor do issueSelected ao montar', issueSelected)

    const storedIssueSelected = localStorage
      .getItem('@github-blog:issueSelected-1.0.0')

    if (storedIssueSelected) {
      loadIssueSelected(storedIssueSelected)
    } else {
      console.log('Nenhuma issue selecionada encontrada no localStorage')
    }
  }, [])

  return (
    <div>
      <Header />
      <PostContainer>
        <Title />
        <ContentPost>
          <Markdown remarkPlugins={[remarkGfm]}>
            {issueSelected?.body}
          </Markdown>
        </ContentPost>
      </PostContainer>
    </div>
  )
}
