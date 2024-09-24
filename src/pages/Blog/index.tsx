import { useContext } from 'react'
import { Header } from '../../components/Header'
import { Card } from './components/Card'
import { Profile } from './components/Profile'
import { SearchForm } from './components/SearchForm'
import { ContainerCards, HeaderSearchform, MainContainer } from './styles'
import { DataContext } from '../../contexts/DataContexts'

export function Blog() {
  const { issues, navigateToPost } = useContext(DataContext)

  const amountPost = Number(issues?.length)

  return (
    <div>
      <Header />
      <MainContainer>
        <Profile />
        <HeaderSearchform>
          <h2>Publicações</h2>
          <span> {amountPost} publicações</span>
        </HeaderSearchform>
        <SearchForm />
        <ContainerCards>
          {
            issues && issues.map(issue =>
              <Card
                key={issue.id}
                title={issue.title}
                createdAt={issue.created_at}
                body={issue.body}
                onClick={() => navigateToPost(issue.id)}
              />,
            )
          }
        </ContainerCards>
      </MainContainer>
    </div>
  )
}
