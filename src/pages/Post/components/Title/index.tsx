import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ContainerTitle, FooterTitle, HeaderTitle } from './syles'
import {
  faArrowUpRightFromSquare,
  faCalendar,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { useContext } from 'react'
import { DataContext } from '../../../../contexts/DataContexts'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useNavigate } from 'react-router-dom'

export function Title() {
  const { issueSelected, user } = useContext(DataContext)
  const createdAt =
  issueSelected?.created_at
    ? new Date(issueSelected.created_at)
    : new Date()
  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }
  return (
    <ContainerTitle>
      <HeaderTitle>
        <button onClick={handleBack}>
          <FontAwesomeIcon icon={faChevronLeft} />
          voltar
        </button>
        <a href={issueSelected?.html_url}>
          ver no GITHUB
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </HeaderTitle>
      <h1>{issueSelected?.title}</h1>
      <FooterTitle>
        <p>
          <FontAwesomeIcon icon={faGithub} />
          {user?.login}
        </p>
        <p>
          <FontAwesomeIcon icon={faCalendar} />
          {formatDistanceToNow(new Date(createdAt), {
            locale: ptBR,
            addSuffix: true,
          })}
        </p>
        <p>
          <FontAwesomeIcon icon={faComment} />
          {issueSelected?.comments} comentários
        </p>
      </FooterTitle>
    </ContainerTitle>
  )
}
