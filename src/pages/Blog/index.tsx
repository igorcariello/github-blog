import { Header } from '../../components/Header'
import { Card } from './components/Card'
import { Profile } from './components/Profile'
import { SearchForm } from './components/SearchForm'
import { ContainerCards, HeaderSearchform, MainContainer } from './styles'

export function Blog() {
  return (
    <div>
      <Header />
      <MainContainer>
        <Profile />
        <HeaderSearchform>
          <h2>Publicações</h2>
          <span>6 publicações</span>
        </HeaderSearchform>
        <SearchForm />
        <ContainerCards>
          <Card />
          <Card />
          <Card />
          <Card />
        </ContainerCards>
      </MainContainer>
    </div>
  )
}
